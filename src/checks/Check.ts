/* eslint-disable no-console */
import type { Schema, ValidationResult } from '@hapi/joi'
import type { RemotePinningServiceClient, ResponseContext } from '@ipfs-shipyard/pinning-service-client'
import { clientFromServiceAndTokenPair } from '../clientFromServiceAndTokenPair'
import { renderComplianceCheckResults } from '../output/renderComplianceCheckResults'
import { buildComplianceCheckDetails } from '../utils/buildComplianceCheckDetails'

// type ImplementableMethods = keyof Omit<PinsApi, 'withMiddleware' | 'withPreMiddleware' | 'withPostMiddleware'>

interface ComplianceCheckOptions<T> {
  /**
   * The title of the compliance check
   */
  title: string
  pair: ServiceAndTokenPair
  runCheck: (details: ComplianceCheckDetailsCallbackArg & {result: T|null}) => Promise<boolean>
  apiCall: (client: RemotePinningServiceClient) => Promise<T>
  schema?: Schema
}

const Check = async <T>({ pair, runCheck, apiCall, title, schema }: ComplianceCheckOptions<T>) => {
  let details: ComplianceCheckDetailsCallbackArg | ResponseContext | undefined
  const getDetails: ComplianceCheckDetailsCallback = async (d) => {
    details = d
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
      ...details as ComplianceCheckDetailsCallbackArg
    })
    if (validationResult != null) {
      if (validationResult.error != null || validationResult.errors != null) {
        successful = false
      }
    }

    renderComplianceCheckResults(buildComplianceCheckDetails({
      title,
      details,
      successful,
      result,
      validationResult: validationResult as ValidationResult
    }))
  }
}

export { Check }
