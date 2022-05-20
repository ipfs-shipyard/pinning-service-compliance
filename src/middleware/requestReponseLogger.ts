import type { NodeFetch } from '@ipfs-shipyard/pinning-service-client'
import type { Response } from 'node-fetch'

import { waitForDate } from '../utils/waitForDate.js'
import type { ComplianceCheckDetailsCallbackArg } from '../types.js'
import { logger } from '../utils/logs.js'

interface RequestResponseLoggerOptions {
  finalCb?: (details: ComplianceCheckDetailsCallbackArg) => void | Promise<void>
  preCb?: (context: NodeFetch.RequestContext) => void | Promise<void>
  postCb?: (context: NodeFetch.ResponseContext) => void | Promise<void>
}

type RateLimitKey = string
const getRateLimitKeyFromContext = (context: NodeFetch.ResponseContext | NodeFetch.RequestContext): RateLimitKey => {
  const { init, url } = context
  const { method } = init
  const urlWithoutQuery = url.split('?')[0]
  let key = method ?? 'Unknown'
  if (method === 'DELETE') {
    // The last path on a delete url is the requestid.
    key = `${key}:${urlWithoutQuery.split('/').slice(0, -1).join('/')}`
  } else {
    key = `${key}:${urlWithoutQuery}`
  }
  return key
}

const rateLimitHandlers: Map<RateLimitKey, Array<Promise<void>>> = new Map()
const requestResponseLogger: (opts: RequestResponseLoggerOptions) => NodeFetch.Middleware = ({ preCb, postCb, finalCb }) => {
  return ({
    pre: async (context) => {
      logger.debug('In middleware.pre')
      try {
        if (preCb != null) await preCb(context)
      } catch (err) {
        logger.error(err)
      }

      const rateLimitKey = getRateLimitKeyFromContext(context)

      if (rateLimitHandlers.has(rateLimitKey)) {
        const promises = rateLimitHandlers.get(rateLimitKey) as Array<Promise<void>>
        if (promises.length > 0) {
          try {
            await Promise.all(promises)
          } catch (err) {
            logger.error(err)
          }
          rateLimitHandlers.set(rateLimitKey, [])
        }
      } else {
        rateLimitHandlers.set(rateLimitKey, [])
      }

      return context
    },

    post: async (context) => {
      logger.debug('In middleware.post')
      if (postCb != null) {
        try {
          await postCb(context)
        } catch (err) {
          logger.error('In middleware.post after failed postCb', err)
        }
      }
      const response = context.response as Response

      if (response.headers.has('x-ratelimit-reset') && response.headers.has('x-ratelimit-remaining')) {
        const rateLimitKey = getRateLimitKeyFromContext(context)
        const rateLimitReset = Number(response.headers.get('x-ratelimit-reset'))
        const dateOfReset = new Date(rateLimitReset * 1000)
        const rateLimit = Number(response.headers.get('x-ratelimit-limit'))
        const rateRemaining = Number(response.headers.get('x-ratelimit-remaining'))
        logger.debug(`${rateLimitKey}: Rate limit is ${rateLimit} and we have ${rateRemaining} tokens remaining.`)
        if (rateRemaining === 0) {
          logger.debug(`${rateLimitKey}: No rate tokens remaining, we need to wait until ${dateOfReset.toString()}`)
          const promises = rateLimitHandlers.get(rateLimitKey) as Array<Promise<void>>
          promises.push(waitForDate(dateOfReset))
        }
      }
      return response
    }
  })
}

export type { RequestResponseLoggerOptions }
export { requestResponseLogger }
