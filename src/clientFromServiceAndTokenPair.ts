import { PinsApi, Configuration } from '@ipfs-shipyard/pinning-service-client'

function clientFromServiceAndTokenPair ([basePath, accessToken]: ServiceAndTokenPair) {
  const config = new Configuration({
    basePath,
    accessToken
  })

  return new PinsApi(config)
}

export { clientFromServiceAndTokenPair }
