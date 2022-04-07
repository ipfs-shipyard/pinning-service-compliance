import { inspect } from 'util'
import { isError, isResponse } from '../guards'

const expect404 = (failure: unknown | Error | Response, errors: Error[]) => {
  if (isResponse(failure)) {
    if (failure.status !== 404 || failure.statusText !== 'Not Found') {
      errors.push(new Error(`Expected service to return a 404 - Not Found, but we received ${failure.status} - ${failure.statusText}`))
    }
  } else if (isError(failure)) {
    errors.push(failure)
  } else {
    errors.push(new Error(`Unknown failure type: ${inspect(failure, { depth: 2 })}`))
  }
}

export { expect404 }
