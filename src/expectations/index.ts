import type { ApiCallExpectation } from '../ApiCall.js'

const responseOk = <T>(): ApiCallExpectation<T> => ({
  title: 'Response is ok',
  fn: ({ apiCall }) => apiCall.response.ok
})

const resultNotNull = <T>(): ApiCallExpectation<T> => ({
  title: 'Result is not null',
  fn: ({ result }) => result != null
})

const responseCode = <T>(code: number): ApiCallExpectation<T> => ({
  title: `Response code is ${code}`,
  fn: ({ apiCall }) => apiCall.response.status === code
})

export {
  responseOk,
  resultNotNull,
  responseCode
}
