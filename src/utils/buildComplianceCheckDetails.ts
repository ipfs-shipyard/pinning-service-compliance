import type { ValidationResult } from '@hapi/joi'
// import type { ResponseContext } from '@ipfs-shipyard/pinning-service-client'
import type { CheckDetails } from '../checks'

interface BuildComplianceCheckDetailsOptions {
  successful: boolean
  title: string
  details: CheckDetails
  validationResult: ValidationResult
  result: any
}
const buildComplianceCheckDetails = ({ details, title, successful, validationResult, result }: BuildComplianceCheckDetailsOptions): ComplianceCheckDetails[] => {
  const allDetails: ComplianceCheckDetails[] = []

  details.forEach((value, key) => {
    const { response, url, init } = value as ResponseContext

    allDetails.push({
      time: new Date(key),
      title,
      url,
      method: init.method ?? 'Unknown',
      successful,
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
    })
  })

  return allDetails
}

export { buildComplianceCheckDetails }
