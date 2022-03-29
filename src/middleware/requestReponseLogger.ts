/* eslint-disable no-console */
import type { Middleware } from '@ipfs-shipyard/pinning-service-client'

const requestResponseLogger: (callback: ComplianceCheckDetailsCallback) => Middleware = (callback) => ({

  post: async (context) => {
    const { response } = context
    try {
      // eslint-disable-next-line node/no-callback-literal
      await callback({
        ...context,
        response: {
          ...response,
          json: await response.clone().json(),
          body: await response.clone().body?.toString() ?? null,
          text: await response.clone().text(),
          headers: response.headers,
          status: response.status,
          statusText: response.statusText,
          ok: response.ok
        }
      })
    } catch (err) {
      console.error('error in callback provided to the middleware')
      console.error(err)
    }
    return response
  }
})

export { requestResponseLogger }
