// /* eslint-disable no-console */
// import type { Schema, ValidationResult } from '@hapi/joi'
// import type { RemotePinningServiceClient, ResponseContext } from '@ipfs-shipyard/pinning-service-client'
// import { clientFromServiceAndTokenPair } from '../clientFromServiceAndTokenPair'
// import { addToReport } from '../output/addToReport'
// // import { renderComplianceCheckResults } from '../output/renderComplianceCheckResults'
// import { failure } from '../output/getReportEntry'
// import { success } from '../output/success'
// import type { ComplianceCheckDetailsCallbackArg } from '../types'

// // type ImplementableMethods = keyof Omit<PinsApi, 'withMiddleware' | 'withPreMiddleware' | 'withPostMiddleware'>

// interface ComplianceCheckOptions<T> {
//   /**
//    * The title of the compliance check
//    */
//   title: string
//   pair: ServiceAndTokenPair
//   runCheck?: (details: ComplianceCheckDetailsCallbackArg & {result: T|null}, errors: Error[]) => Promise<boolean>
//   apiCall: (client: RemotePinningServiceClient, errors: Error[]) => Promise<T | null>
//   schema?: Schema
// }

// /**
//  * Note that if you make multiple API calls, only the details for the last API call made is going to be saved automatically
//  */
// const Check = async <T>({ pair, runCheck, apiCall, title, schema }: ComplianceCheckOptions<T>) => {
//   const errors: Error[] = []
//   let details: ComplianceCheckDetailsCallbackArg | ResponseContext | undefined
//   const getDetails: ComplianceCheckDetailsCallback = async (d) => {
//     details = d
//     errors.push(...d.errors)
//   }
//   const client = clientFromServiceAndTokenPair(pair, getDetails)

//   let result: T | null = null
//   let validationResult: ValidationResult | null = null
//   try {
//     result = await apiCall(client, errors)
//     if (schema != null) {
//       validationResult = schema.validate(details?.response.json, { convert: true, abortEarly: false })
//     }
//   } catch (err) {
//     console.error('You must catch any errors within your Check implementation')
//     console.error(err)

//     // They should be handled by the provided `runCheck` function
//     throw err
//   }

//   if (details == null) {
//     throw new Error('The details object was not set in the middleware')
//   } else {
//     let successful = true
//     if (runCheck != null) {
//       successful = await runCheck({
//         result,
//         ...details as ComplianceCheckDetailsCallbackArg
//       }, errors)
//     }
//     if (validationResult != null) {
//       if (validationResult.error != null || validationResult.errors != null) {
//         successful = false
//       }
//     }

//     if (errors.length > 0) {
//       successful = false
//     }

//     const { response, url, init } = details as ResponseContext

//     // return
//     const complianceCheckDetails: ComplianceCheckDetails<T> = {
//       pair,
//       errors,
//       title,
//       url,
//       method: init.method ?? 'Unknown',
//       successful,
//       validationResult,
//       result,
//       request: {
//         body: JSON.stringify(init.body, null, 2),
//         headers: init.headers ?? {}
//       },
//       response: {
//         ...response,
//         body: JSON.stringify(response.json, null, 2),
//         headers: response.headers,
//         status: response.status,
//         statusText: response.statusText
//       }
//     }

//     await addToReport(complianceCheckDetails)
//   }
// }

// export { Check }
