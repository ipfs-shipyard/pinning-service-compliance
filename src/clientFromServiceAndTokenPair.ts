import { RemotePinningServiceClient, Configuration } from '@ipfs-shipyard/pinning-service-client'

import { requestResponseLogger, RequestResponseLoggerOptions } from './middleware/requestReponseLogger.js'
import type { ServiceAndTokenPair } from './types.js'

function clientFromServiceAndTokenPair ([endpointUrl, accessToken]: ServiceAndTokenPair, middleWareOptions?: Omit<RequestResponseLoggerOptions, 'pair'>): RemotePinningServiceClient {
  const requestResponseLoggerOptions: RequestResponseLoggerOptions = { ...middleWareOptions, pair: [endpointUrl, accessToken] }
  const config = new Configuration({
    endpointUrl,
    accessToken,
    fetchApi: fetch,
    middleware: [
      requestResponseLogger(requestResponseLoggerOptions)
    ]
  })

  return new RemotePinningServiceClient(config)
}

export { clientFromServiceAndTokenPair }
