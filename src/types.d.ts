import type {
  NodeFetch,
  ConfigurationParameters as ConfigurationParameters_og,
  Configuration as Configuration_og,
  RemotePinningServiceClient
} from '@ipfs-shipyard/pinning-service-client'

/**
 * This should move to the pinning-service-client package.
 *
 * @see https://github.com/ipfs-shipyard/js-pinning-service-http-client/issues/17
 */
declare module '@ipfs-shipyard/pinning-service-client' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeFetch {
    interface RequestContext {

      fetch: typeof fetch
      url: string
      init: RequestInit
    }

    interface ResponseContext {
      fetch: typeof fetch
      url: string
      init: RequestInit
      response: Response | any
    }

    interface FetchParams {
      url: string
      init: RequestInit
    }

    interface Middleware {
      // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
      pre?(context: NodeFetch.RequestContext): Promise<NodeFetch.FetchParams | void>
      // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
      post?(context: NodeFetch.ResponseContext): Promise<Response | void>
    }

    interface ConfigurationParameters extends ConfigurationParameters_og {
      middleware: NodeFetch.Middleware[]
    }
    class Configuration extends Configuration_og {
      constructor (options: NodeFetch.ConfigurationParameters): Configuration
    }
  }
}

interface ComplianceCheckDetailsCallbackArg extends NodeFetch.ResponseContext {
  response: Response
  errors: Error[]
  url: string
}
interface ProcessedResponse extends Response {
  text: string | null
  json: Record<string, any>
}

interface ComplianceCheckDetailsCallback {
  (details: ComplianceCheckDetailsCallbackArg): Promise<void>
}

interface ExpectationResult {
  error?: Error
  success: boolean
  title: string
}

type ServiceAndTokenPair = [endpointUrl: string, authToken: string | undefined]

type ImplementableMethods = keyof Omit<RemotePinningServiceClient, 'withMiddleware' | 'withPreMiddleware' | 'withPostMiddleware'>
type PinsApiMethod<T extends ImplementableMethods = ImplementableMethods> = RemotePinningServiceClient[T] extends never ? never : T
type PinsApiResponseTypes<T extends ImplementableMethods = ImplementableMethods> = Awaited<ReturnType<RemotePinningServiceClient[T]>>
type SchemaNames = 'Delegates' | 'Failure' | 'Origins' | 'Pin' | 'PinMeta' | 'PinResults' | 'PinStatus' | 'StatusInfo' | 'Status' | 'TextMatchingStrategy'
type PinningSpecJoiSchema = Record<SchemaNames, import('@hapi/joi').Schema>

interface CheckResult {
  success: boolean
}

interface ComplianceCheckRequest {
  headers: Headers | string[][] | Record<string, string>
  body: string
}
interface ComplianceCheckResponse<T extends PinsApiResponseTypes> {
  headers: Headers | string[][] | Record<string, string>
  status: number
  statusText: string
  json: T | Record<string, any> | null
  body: string
}

type Revision = string

interface ComplianceCheckDetails<T extends PinsApiResponseTypes> {
  pair: ServiceAndTokenPair
  errors: Error[]
  url: string
  method: string
  title: string
  successful: boolean
  validationResult: import('@hapi/joi').ValidationResult | null
  request: ComplianceCheckRequest
  response: ComplianceCheckResponse<T>
  result: T | null
  expectationResults: ExpectationResult[]

}
// eslint-disable-next-line @typescript-eslint/dot-notation
interface ProcessedResponse extends Response {
  text: string | null
  json: Record<string, any>
}

interface ComplianceCheckDetailsCallback {
  (details: ComplianceCheckDetailsCallbackArg): void
}

export type {
  ComplianceCheckDetails,
  ExpectationResult,
  ProcessedResponse,
  ComplianceCheckDetailsCallback,
  ComplianceCheckDetailsCallbackArg,
  PinningSpecJoiSchema,
  ServiceAndTokenPair,
  ImplementableMethods,
  PinsApiResponseTypes,
  Revision
}
