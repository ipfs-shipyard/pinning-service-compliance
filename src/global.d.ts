// import type { ConfigurationParameters } from '@ipfs-shipyard/pinning-service-client'
declare module 'oas2joi';
type ServiceAndTokenPair = [import('@ipfs-shipyard/pinning-service-client').ConfigurationParameters['basePath'], import('@ipfs-shipyard/pinning-service-client').ConfigurationParameters['accessToken']]
type ServiceAndTokenPairCollection = ServiceAndTokenPair[]

interface CheckResult {
  success: boolean
}
interface Check {
  run: () => Promise<CheckResult>
}
