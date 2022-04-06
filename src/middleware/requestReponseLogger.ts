/* eslint-disable no-console */
import type { Middleware, RequestContext } from '@ipfs-shipyard/pinning-service-client'
import { URL } from 'url'
import { waitForDate } from '../utils/waitForDate'

const getHostnameFromContext = (context: RequestContext | ResponseContext) => {
  const { hostname } = new URL(context.url)
  return hostname
}
const requestResponseLogger: (callback: ComplianceCheckDetailsCallback) => Middleware = (callback) => {
  const rateLimitHandlers: Map<string, Array<Promise<void>>> = new Map()
  return ({
    pre: async (context) => {
      const hostname = getHostnameFromContext(context)
      if (rateLimitHandlers.has(hostname)) {
        const promises = rateLimitHandlers.get(hostname) as Array<Promise<void>>
        if (promises.length > 0) {
          await Promise.all(promises)
          rateLimitHandlers.set(hostname, [])
        }
      } else {
        rateLimitHandlers.set(hostname, [])
      }

      return context
    },

    post: async (context) => {
      const { response } = context
      const errors: Error[] = []
      let json: any = {}
      try {
        json = await response.clone().json()
      } catch (err) {
        errors.push(err as Error)
      }
      let text: string = ''
      try {
        text = await response.clone().text()
      } catch (err) {
        errors.push(err as Error)
      }
      let body: string | null = ''
      try {
        body = response.clone().body?.toString() ?? null
      } catch (err) {
        errors.push(err as Error)
      }
      const hostname = getHostnameFromContext(context)
      if (response.headers.has('x-ratelimit-reset') && response.headers.has('x-ratelimit-remaining')) {
        const rateLimitReset = Number(response.headers.get('x-ratelimit-reset') as string)
        const dateOfReset = new Date(rateLimitReset * 1000)
        const rateLimit = Number(response.headers.get('x-ratelimit-limit') as string)
        const rateRemaining = Number(response.headers.get('x-ratelimit-remaining') as string)
        console.log(`${hostname}: Rate limit is ${rateLimit} and we have ${rateRemaining} tokens remaining.`)
        if (rateRemaining === 0) {
          console.log(`No rate tokens remaining.. we need to wait until ${dateOfReset.toString()}`)
          const promises = rateLimitHandlers.get(hostname) as Array<Promise<void>>
          promises.push(waitForDate(dateOfReset))
          // await
        }
      }
      try {
        const normalizedResult: ComplianceCheckDetailsCallbackArg = {
          ...context,
          url: context.url,
          init: context.init,
          fetch: context.fetch,
          errors,
          response: {
            ...response,
            json,
            body,
            text,
            headers: response.headers,
            status: response.status,
            statusText: response.statusText,
            ok: response.ok
          }
        }
        await callback(normalizedResult)
      } catch (err) {
        console.error('error in callback provided to the middleware')
        console.error(err)
      }
      return response
    }
  })
}

export { requestResponseLogger }
