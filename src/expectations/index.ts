import type { ApiCallExpectation } from '../ApiCall'

export * from './expect404'
export * from './expectSuccessfulResponse'

const expectOkResponse: ApiCallExpectation<any> = {
  title: 'Response is ok',
  fn: ({ apiCall }) => {
    return apiCall.response.ok
  }
}

const expectNonNullResult: ApiCallExpectation<any> = {
  title: 'Result is not null',
  fn: ({ result }) => result != null
}

export { expectOkResponse, expectNonNullResult }
