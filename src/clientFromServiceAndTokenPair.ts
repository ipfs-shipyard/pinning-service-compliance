import { RemotePinningServiceClient, Configuration, NodeFetch } from '@ipfs-shipyard/pinning-service-client'

import { requestResponseLogger, RequestResponseLoggerOptions } from './middleware/requestReponseLogger.js'
import type { ServiceAndTokenPair } from './types.js'

function clientFromServiceAndTokenPair ([endpointUrl, accessToken]: ServiceAndTokenPair, middleWareOptions?: Omit<RequestResponseLoggerOptions, 'pair'>): RemotePinningServiceClient {
  const requestResponseLoggerOptions: RequestResponseLoggerOptions = { ...middleWareOptions, pair: [endpointUrl, accessToken] }
  const config = new (Configuration as typeof NodeFetch.Configuration)({
    endpointUrl,
    accessToken,
    fetchApi: async (url: RequestInfo, init?: RequestInit) => {
      return await fetch(url, {
        ...init
        // highWaterMark: 1024 * 1024 * 2
      })
    },
    middleware: [
      requestResponseLogger(requestResponseLoggerOptions)
    ]
  })

  return new RemotePinningServiceClient(config)
}

export { clientFromServiceAndTokenPair }
