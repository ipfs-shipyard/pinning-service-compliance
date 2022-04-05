/* eslint-disable no-console */
import type { Middleware } from '@ipfs-shipyard/pinning-service-client'

const requestResponseLogger: (callback: ComplianceCheckDetailsCallback) => Middleware = (callback) => ({

  post: async (context) => {
    const { response } = context
    let normalizedResult: any = {
      url: context.url,
      init: context.init,
      fetch: context.fetch
    }
    try {
      // eslint-disable-next-line node/no-callback-literal
      const json = await response.clone().json()
      const text = await response.clone().text()
      const body = await response.clone().body?.toString() ?? null

      // Attempt to address https://github.com/web3-storage/web3.storage/issues/1221
      // if (context.url.includes('/pins?')) {
      //   json.results = json.results.map((pin) => ({
      //     ...pin,
      //     requestid: pin.requestid ?? pin.requestId
      //   }))
      //   body = text = JSON.stringify(json)
      // }

      normalizedResult = {
        ...context,
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

export { requestResponseLogger }
