/* eslint-disable no-console */
import type { Middleware, RequestContext, ResponseContext } from '@ipfs-shipyard/pinning-service-client'
const requestLog: RequestContext[] = []
const responseLog: ResponseContext[] = []

const parsePreContext = (context: RequestContext) => {
  console.log('parsePreContext: ')
  console.log('url: ', context.url)
  console.log('method: ', context.init.method)
  console.log('headers raw: ', context.init.headers)
  console.log('headers: ', stringifyHeaders(context.init.headers))
  console.log('body: ', context.init.body)
}

const stringifyHeaders = (headers?: Headers | HeadersInit) => {
  let headerString = ''
  if (headers == null) {
    return headerString
  }
  if (headers.forEach != null) {
    const actualHeaders = headers as Headers
    actualHeaders.forEach((val, key) => {
      headerString = `${headerString}${key}:${val};`
    })
  } else {
    const headersInit = headers as Record<string, string>
    console.log('headersInit: ', headersInit)
    Object.keys(headersInit).forEach((key) => {
      let val = headersInit[key]
      if (/authorization/i.test(key)) {
        // Authorization: <auth-scheme> <authorization-parameters>
        val = `${val.split(' ')[0]} REDACTED`
      }
      headerString = `${headerString}${key}:${val};`
    })
  }
  return headerString
}
const parsePostContext = async (context: ResponseContext) => {
  console.log('parsePostContext: ')
  const response = context.response.clone()
  console.log('url: ', response.url)
  console.log('type: ', response.type)
  console.log('ok: ', response.ok)
  console.log('redirected: ', response.redirected)
  console.log('status: ', response.status)
  console.log('statusText: ', response.statusText)

  console.log('headers raw: ', response.headers)
  console.log('headers: ', stringifyHeaders(response.headers))
  console.log('text: ', await response.text())
}

const requestResponseLogger: Middleware = {
  pre: async (context) => {
    // if (context.init.headers != null) {
    //   (context.init.headers as Headers).forEach((header) => {
    //     console.log(header)
    //   })
    // }
    requestLog.push(context)
    parsePreContext(context)
    // console.log('pre context: ', context)

    return context
  },
  post: async (context) => {
    // console.log('post context: ', context)
    await parsePostContext(context)
    // console.log(context)
    responseLog.push(context)
    return context as unknown as Response
  }
}

export { requestLog, responseLog, requestResponseLogger }
