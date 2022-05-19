import fetch from 'node-fetch'

import { RemotePinningServiceClient, Configuration, NodeFetch } from '@ipfs-shipyard/pinning-service-client'

import { requestResponseLogger, RequestResponseLoggerOptions } from './middleware/requestReponseLogger.js'
import type { ServiceAndTokenPair } from './types.js'

function clientFromServiceAndTokenPair ([endpointUrl, accessToken]: ServiceAndTokenPair, middleWareOptions: RequestResponseLoggerOptions): RemotePinningServiceClient {
  const config = new (Configuration as typeof NodeFetch.Configuration)({
    endpointUrl,
    accessToken,
    fetchApi: fetch,
    middleware: [
      requestResponseLogger(middleWareOptions)
    ]
  })

  return new RemotePinningServiceClient(config)
}

export { clientFromServiceAndTokenPair }
