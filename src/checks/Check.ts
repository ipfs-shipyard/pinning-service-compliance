/* eslint-disable no-console */
import type { Schema, ValidationResult } from '@hapi/joi'
import type { RemotePinningServiceClient, ResponseContext } from '@ipfs-shipyard/pinning-service-client'
import { clientFromServiceAndTokenPair } from '../clientFromServiceAndTokenPair'
// import { renderComplianceCheckResults } from '../output/renderComplianceCheckResults'
import { failure } from '../output/failure'
import { success } from '../output/success'

// type ImplementableMethods = keyof Omit<PinsApi, 'withMiddleware' | 'withPreMiddleware' | 'withPostMiddleware'>

interface ComplianceCheckOptions<T> {
  /**
   * The title of the compliance check
   */
  title: string
  pair: ServiceAndTokenPair
  runCheck: (details: ComplianceCheckDetailsCallbackArg & {result: T|null}, errors: Error[]) => Promise<boolean>
  apiCall: (client: RemotePinningServiceClient, errors: Error[]) => Promise<T>
  schema?: Schema
}

/**
 * Note that if you make multiple API calls, only the details for the last API call made is going to be saved automatically
 */
const Check = async <T>({ pair, runCheck, apiCall, title, schema }: ComplianceCheckOptions<T>) => {
  const errors: Error[] = []
  let details: ComplianceCheckDetailsCallbackArg | ResponseContext | undefined
  const getDetails: ComplianceCheckDetailsCallback = async (d) => {
    details = d
  }
  const client = clientFromServiceAndTokenPair(pair, getDetails)

  let result: T | null = null
  let validationResult: ValidationResult | null = null
  try {
    result = await apiCall(client, errors)
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
    }, errors)
    if (validationResult != null) {
      if (validationResult.error != null || validationResult.errors != null) {
        successful = false
      }
    }
    const { response, url, init } = details

    // return
    const complianceCheckDetails: ComplianceCheckDetails = {
      errors,
      title,
      url,
      method: details.init.method ?? 'Unknown',
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
    }

    if (successful) {
      success(complianceCheckDetails)
    } else {
      failure(complianceCheckDetails)
    }
  }
}

export { Check }
