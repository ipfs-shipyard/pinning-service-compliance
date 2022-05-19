import type { NodeFetch } from '@ipfs-shipyard/pinning-service-client'
// import type { Request, RequestInit, Response } from 'node-fetch'

// import { responseHasContent } from '../utils/responseHasContent.js'
import { waitForDate } from '../utils/waitForDate.js'
import type { ComplianceCheckDetailsCallbackArg } from '../types.js'
import { logger } from '../utils/logs.js'
// import { getJson } from '../utils/fetchSafe/getJson.js'
// import { getText } from '../utils/fetchSafe/getText.js'
// import { getTextAndJson } from '../utils/fetchSafe/getTextAndJson.js'

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
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
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
        logger.debug('In middleware.post, postCb exists')
        // console.log(postCb)
        try {
          await postCb(context)
          logger.debug('In middleware.post after successful postCb')
        } catch (err) {
          logger.error('In middleware.post after failed postCb', err)
        }
      } else {
        logger.debug('In middleware.post, postCb is null')
      }
      const { response } = context
      const errors: Error[] = []

      logger.debug('In middleware.post prior to checking response for content')
      // const hasContent = await responseHasContent(response)
      // logger.debug(`In middleware.post, after checking response for content. (${hasContent ? 'Yes' : 'No'})`)

      // let text: string | null = null
      // let json: any = null
      // if (hasContent) {
        // try {
        //   text = await getText(response)
        // } catch (err) {
        //   errors.push(err as Error)
        // }
        // logger.debug('In middleware.post after text')
        // try {
        //   // if (hasContent) {
        //   json = await getJson(response)
        //   // }
        // } catch (err) {
        //   errors.push(err as Error)
        // }
        // try {
        //   const both = await getTextAndJson(response)
        //   text = both.text
        //   json = both.json
        // } catch (err) {
        //   errors.push(err as Error)
        // }
      // }

      // const hostname = getHostnameFromUrl(context.url)
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (response.headers.has('x-ratelimit-reset') && response.headers.has('x-ratelimit-remaining')) {
        const rateLimitKey = getRateLimitKeyFromContext(context)
        const rateLimitReset = Number(response.headers.get('x-ratelimit-reset'))
        const dateOfReset = new Date(rateLimitReset * 1000)
        const rateLimit = Number(response.headers.get('x-ratelimit-limit'))
        const rateRemaining = Number(response.headers.get('x-ratelimit-remaining'))
        logger.debug(`${rateLimitKey}: Rate limit is ${rateLimit} and we have ${rateRemaining} tokens remaining.`)
        if (rateRemaining === 0) {
          logger.debug(`${rateLimitKey}: No rate tokens remaining, we need to wait until ${dateOfReset.toString()}`)
          // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
          const promises = rateLimitHandlers.get(rateLimitKey) as Array<Promise<void>>
          promises.push(waitForDate(dateOfReset))
        }
      }
      if (finalCb != null) {
        // const processedResponse: ProcessedResponse = {
        //   ...response,
        //   json,
        //   // body,
        //   text
        //   // headers: response.headers,
        //   // status: response.status,
        //   // statusText: response.statusText,
        //   // ok: response.ok
        // }
        // const normalizedResult: ComplianceCheckDetailsCallbackArg = {
        //   ...context,
        //   url: context.url,
        //   init: context.init,
        //   fetch: context.fetch,
        //   errors,
        //   response: processedResponse
        // }
        // try {
        //   await finalCb(normalizedResult)
        // } catch (err) {
        //   logger.error('error in callback provided to the middleware')
        //   logger.error(err)
        // }
      } else {
        errors.forEach((error) => logger.error(error));
      }
      return response
    }
  })
}

export type { RequestResponseLoggerOptions }
export { requestResponseLogger }
