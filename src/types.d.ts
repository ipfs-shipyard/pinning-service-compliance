
import type { ResponseContext } from '@ipfs-shipyard/pinning-service-client'

interface ComplianceCheckDetailsCallbackArg extends ResponseContext {
  response: ProcessedResponse
  errors: Error[]
  url: string
}
interface ProcessedResponse extends Response {
  text: string | null
  json: Record<string, any>
  // body: string | null
}

interface ComplianceCheckDetailsCallback {
  (details: ComplianceCheckDetailsCallbackArg): Promise<void>
}
