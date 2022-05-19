import fetch from 'node-fetch'
import type {RequestInfo, RequestInit} from 'node-fetch'

import { RemotePinningServiceClient, Configuration, NodeFetch } from '@ipfs-shipyard/pinning-service-client'

import { requestResponseLogger, RequestResponseLoggerOptions } from './middleware/requestReponseLogger.js'
import type { ServiceAndTokenPair } from './types.js'
import { logger } from './utils/logs.js'

function clientFromServiceAndTokenPair ([endpointUrl, accessToken]: ServiceAndTokenPair, middleWareOptions: RequestResponseLoggerOptions): RemotePinningServiceClient {
  const config = new (Configuration as typeof NodeFetch.Configuration)({
    endpointUrl,
    accessToken,
    fetchApi: async (url: RequestInfo, init?: RequestInit) => {
      // try {
        return await fetch(url, {
          ...init,
          highWaterMark: 1024 * 1024 * 2,
        }).then((result) => {
          logger.debug('fn:clientFromServiceAndTokenPair:fetch:then')
          return result
        }, (reason) => {
          logger.debug('fn:clientFromServiceAndTokenPair:fetch:catch')
          throw reason
        }).finally(() => {
          logger.debug('fn:clientFromServiceAndTokenPair:fetch:finally')
        })
      // }
    },
    middleware: [
      requestResponseLogger(middleWareOptions)
    ]
  })

  return new RemotePinningServiceClient(config)
}

export { clientFromServiceAndTokenPair }
