// import type { ConfigurationParameters } from '@ipfs-shipyard/pinning-service-client'
declare module 'oas2joi';
declare module 'go-ipfs';
type ServiceAndTokenPair = [endpointUrl: string, authToken: string | undefined]
type ServiceAndTokenPairCollection = ServiceAndTokenPair[]

type PinsApiType = import('@ipfs-shipyard/pinning-service-client').PinsApi
type ImplementableMethods = keyof Omit<PinsApiType, 'withMiddleware' | 'withPreMiddleware' | 'withPostMiddleware'>
type PinsApiMethod<T extends ImplementableMethods = ImplementableMethods> = PinsApiType[T] extends never ? never : T
type SchemaNames = 'Delegates' | 'Failure' | 'Origins' | 'Pin' | 'PinMeta' | 'PinResults' | 'PinStatus' | 'StatusInfo' | 'Status' | 'TextMatchingStrategy'
type PinningSpecJoiSchema = Record<SchemaNames, import('@hapi/joi').Schema>

interface CheckResult {
  success: boolean
}

interface ComplianceCheckRequest {
  headers: Headers | string[][] | Record<string, string>
  body: string
}
interface ComplianceCheckResponse extends ComplianceCheckRequest {
  status: number
  statusText: string
}

interface ComplianceCheckDetails {
  time: Date
  url: string
  method: string
  title: string
  successful: boolean
  validationResult?: ValidationResult
  request: ComplianceCheckRequest
  response: ComplianceCheckResponse
  result: any

}
// interface ComplianceCheckFetchData {

// }
type ResponseContext = import('@ipfs-shipyard/pinning-service-client').ResponseContext
// eslint-disable-next-line @typescript-eslint/dot-notation

interface ComplianceCheckDetailsCallback {
  (details: ComplianceCheckDetailsCallbackArg): Promise<void>
}
