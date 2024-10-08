import { RemotePinningServiceClient, Configuration } from '@ipfs-shipyard/pinning-service-client'
import { requestResponseLogger, type RequestResponseLoggerOptions } from './middleware/requestReponseLogger.js'
import type { ServiceAndTokenPair } from './types.js'

function clientFromServiceAndTokenPair ([endpointUrl, accessToken]: ServiceAndTokenPair, middleWareOptions?: Omit<RequestResponseLoggerOptions, 'pair'>): RemotePinningServiceClient {
  const requestResponseLoggerOptions: RequestResponseLoggerOptions = { ...middleWareOptions, pair: [endpointUrl, accessToken] }

  const config = new Configuration({
    endpointUrl,
    accessToken,
    fetchApi: async (url: RequestInfo | URL, init?: RequestInit) => {
      return fetch(url, {
        ...init,
        signal: init?.signal ?? AbortSignal.timeout(60000)
      })
    },
    middleware: [
      requestResponseLogger(requestResponseLoggerOptions)
    ]
  })

  return new RemotePinningServiceClient(config)
}

export { clientFromServiceAndTokenPair }
