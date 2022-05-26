import type { ApiCallExpectation } from '../ApiCall.js'
import type { PinsApiResponseTypes } from '../types.js'

const addMsg = (msg?: string) => `${msg != null ? `: ${msg}` : ''}`

const responseOk = <T extends PinsApiResponseTypes>(msg?: string): ApiCallExpectation<T> => ({
  title: `Response is ok${addMsg(msg)}`,
  fn: ({ responseContext }) => responseContext.response.ok
})

const resultNotNull = <T extends PinsApiResponseTypes>(msg?: string): ApiCallExpectation<T> => ({
  title: `Result is not null${addMsg(msg)}`,
  fn: ({ result }) => result != null
})

const responseCode = <T extends PinsApiResponseTypes>(code: number, msg?: string): ApiCallExpectation<T> => ({
  title: `Response code is ${code}${addMsg(msg)}`,
  fn: ({ responseContext }) => responseContext.response.status === code
})

export {
  responseOk,
  resultNotNull,
  responseCode
}
