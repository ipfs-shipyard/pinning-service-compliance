import { RemotePinningServiceClient, Configuration } from '@ipfs-shipyard/pinning-service-client'

import { requestResponseLogger, RequestResponseLoggerOptions } from './middleware/requestReponseLogger.js'
import type { ServiceAndTokenPair } from './types.js'
import { logger } from './utils/logs.js'

function clientFromServiceAndTokenPair ([endpointUrl, accessToken]: ServiceAndTokenPair, middleWareOptions?: Omit<RequestResponseLoggerOptions, 'pair'>): RemotePinningServiceClient {
  const requestResponseLoggerOptions: RequestResponseLoggerOptions = { ...middleWareOptions, pair: [endpointUrl, accessToken] }

  const config = new Configuration({
    endpointUrl,
    accessToken,
    fetchApi: async (url: RequestInfo | URL, init?: RequestInit) => {
      const abortController = new AbortController()
      const { signal } = abortController
      setTimeout(() => abortController.abort(), 60000)
      const result = await fetch(url, {
        ...init,
        signal: init?.signal ?? signal
      })
      logger.debug('fetchApi result obtained')
      return result
    },
    middleware: [
      requestResponseLogger(requestResponseLoggerOptions)
    ]
  })

  return new RemotePinningServiceClient(config)
}

export { clientFromServiceAndTokenPair }
