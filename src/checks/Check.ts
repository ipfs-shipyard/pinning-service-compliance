/* eslint-disable no-console */
import type { Schema, ValidationResult } from '@hapi/joi'
import type { RemotePinningServiceClient, ResponseContext } from '@ipfs-shipyard/pinning-service-client'
import { clientFromServiceAndTokenPair } from '../clientFromServiceAndTokenPair'
import { renderComplianceCheckResults } from '../output/renderComplianceCheckResults'
import { buildComplianceCheckDetails } from '../utils/buildComplianceCheckDetails'

// type ImplementableMethods = keyof Omit<PinsApi, 'withMiddleware' | 'withPreMiddleware' | 'withPostMiddleware'>
interface ProcessedResponse {
  text: string
  json: Record<string, any>
  body: string | null
  headers: any
  ok: boolean
  redirected: unknown
  status: unknown
  statusText: unknown
  type: unknown
  url: unknown
  bodyUsed: unknown
}
interface ComplianceCheckDetailsCallbackArg { // } extends ResponseContext {
  response: ProcessedResponse | Response
}
interface ComplianceCheckOptions<T> {
  /**
   * The title of the compliance check
   */
  title: string
  pair: ServiceAndTokenPair
  runCheck: (details: {result: T|null, details: CheckDetails}) => Promise<boolean>
  apiCall: (client: RemotePinningServiceClient) => Promise<T>
  schema?: Schema
}
type CheckDetails = Map<number, ComplianceCheckDetailsCallbackArg | ResponseContext | undefined>

const Check = async <T>({ pair, runCheck, apiCall, title, schema }: ComplianceCheckOptions<T>) => {
  const details: CheckDetails = new Map()
  const getDetails: ComplianceCheckDetailsCallback = async (d) => {
    details.set(Date.now(), d)
  }
  const client = clientFromServiceAndTokenPair(pair, getDetails)

  let result: T | null = null
  let validationResult: ValidationResult | null = null
  try {
    result = await apiCall(client)
    if (schema != null) {
      validationResult = schema.validate(result)
    }
  } catch (err) {
    console.error('You must catch any errors within your Check implementation')
    console.error(err)

    // They should be handled by the provided `runCheck` function
    throw err
  }

  if (details == null) {
    throw new Error('The details object was not set in the middleware')
  } else {
    let successful = await runCheck({
      result,
      details
    })
    if (validationResult != null) {
      if (validationResult.error != null || validationResult.errors != null) {
        successful = false
      }
    }
    buildComplianceCheckDetails({
      title,
      details,
      successful,
      result,
      validationResult: validationResult as ValidationResult
    }).forEach(renderComplianceCheckResults)
  }
}

export { Check }
export type { CheckDetails, ComplianceCheckOptions }
