import fetch from 'node-fetch'
import type { RequestInfo, RequestInit } from 'node-fetch'

import { RemotePinningServiceClient, Configuration, NodeFetch } from '@ipfs-shipyard/pinning-service-client'

import { requestResponseLogger, RequestResponseLoggerOptions } from './middleware/requestReponseLogger.js'
import type { ServiceAndTokenPair } from './types.js'

function clientFromServiceAndTokenPair ([endpointUrl, accessToken]: ServiceAndTokenPair, middleWareOptions: RequestResponseLoggerOptions): RemotePinningServiceClient {
  const config = new (Configuration as typeof NodeFetch.Configuration)({
    endpointUrl,
    accessToken,
    fetchApi: async (url: RequestInfo, init?: RequestInit) => {
      return await fetch(url, {
        ...init,
        highWaterMark: 1024 * 1024 * 2
      })
    },
    middleware: [
      requestResponseLogger(middleWareOptions)
    ]
  })

  return new RemotePinningServiceClient(config)
}

export { clientFromServiceAndTokenPair }
