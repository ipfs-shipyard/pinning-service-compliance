import type { ValidationResult } from '@hapi/joi'
import type { ResponseContext } from '@ipfs-shipyard/pinning-service-client'

interface BuildComplianceCheckDetailsOptions {
  successful: boolean
  title: string
  details: ComplianceCheckDetailsCallbackArg | ResponseContext
  validationResult: ValidationResult
  result: any
}
const buildComplianceCheckDetails = ({ details, title, successful, validationResult, result }: BuildComplianceCheckDetailsOptions): ComplianceCheckDetails => {
  const { response, url, init } = details
  // let failureDetails = ''

  // if (validationResult.errors != null) {
  //   failureDetails += '###'
  //   validationResult.errors.details.forEach((errorItem) => {
  //     failureDetails
  //   })
  // }
  return {
    title,
    url,
    method: details.init.method ?? 'Unknown',
    successful,
    // failureDetails,
    validationResult,
    result,
    request: {
      body: JSON.stringify(init.body, null, 2),
      headers: init.headers ?? {}
    },
    response: {
      body: JSON.stringify(response.json, null, 2),
      headers: response.headers,
      status: response.status,
      statusText: response.statusText
    }
  }
}

export { buildComplianceCheckDetails }
