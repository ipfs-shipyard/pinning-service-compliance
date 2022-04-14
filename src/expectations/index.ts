import type { ApiCallExpectation } from '../ApiCall'

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
