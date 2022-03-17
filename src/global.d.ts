// import type { ConfigurationParameters } from '@ipfs-shipyard/pinning-service-client'
declare module 'oas2joi';
type ServiceAndTokenPair = [import('@ipfs-shipyard/pinning-service-client').ConfigurationParameters['basePath'], import('@ipfs-shipyard/pinning-service-client').ConfigurationParameters['accessToken']]
type ServiceAndTokenPairCollection = ServiceAndTokenPair[]

type PinsApiType = import('@ipfs-shipyard/pinning-service-client').PinsApi
type ImplementableMethods = keyof Omit<PinsApiType, 'withMiddleware' | 'withPreMiddleware' | 'withPostMiddleware'>
type PinsApiMethod<T extends ImplementableMethods = ImplementableMethods> = PinsApiType[T] extends never ? never : T

interface CheckResult {
  success: boolean
}
