/* eslint-disable no-console */
import type { Middleware } from '@ipfs-shipyard/pinning-service-client'

// const parsePreContext = (context: RequestContext) => {
//   console.log('parsePreContext: ')
//   console.log('url: ', context.url)
//   console.log('method: ', context.init.method)
//   console.log('headers: ', stringifyHeaders(context.init.headers))
//   console.log('body: ', context.init.body)
// }

// const parsePostContext = async (context: ResponseContext) => {
//   console.log('parsePostContext: ')
//   const response = context.response.clone()
//   console.log('url: ', response.url)
//   console.log('type: ', response.type)
//   console.log('ok: ', response.ok)
//   console.log('redirected: ', response.redirected)
//   console.log('status: ', response.status)
//   console.log('statusText: ', response.statusText)
//   console.log('headers: ', stringifyHeaders(response.headers))
//   console.log('text: ', await response.text())
// }

const requestResponseLogger: (callback: ComplianceCheckDetailsCallback) => Middleware = (callback) => ({

  post: async (context) => {
    // const mockResults: BodyInit = JSON.stringify({ count: 0, results: [] })
    // console.log('post context: ', context)
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
