/* eslint-disable no-console */
import { PinsApi, Configuration } from '@ipfs-shipyard/pinning-service-client'
import { requestResponseLogger } from './middleware/requestReponseLogger'

function clientFromServiceAndTokenPair ([basePath, accessToken]: ServiceAndTokenPair) {
  const config = new Configuration({
    basePath,
    accessToken,
    middleware: [
      requestResponseLogger
    ]
  })

  return new PinsApi(config)
}

export { clientFromServiceAndTokenPair }
