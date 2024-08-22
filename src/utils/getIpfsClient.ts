import { createNode } from 'ipfsd-ctl'
import { path } from 'kubo'
import { create, type KuboRPCClient } from 'kubo-rpc-client'
import { logger } from './logs.js'

interface GetIpfsClientResponse {
  client: KuboRPCClient
  /**
   * A function that should be called when you're done using the client so cleanup can be performed.
   */
  done(): Promise<void>
}
const getIpfsClient = async (): Promise<GetIpfsClientResponse> => {
  try {
    logger.debug('Attempting to use ipfsd-ctl to create a client')
    const ipfsd = await createNode({
      type: 'kubo',
      rpc: create,
      bin: path(),
      test: true,
      disposable: true
    })
    const client = ipfsd.api

    if (await client.isOnline()) {
      return {
        client,
        done: async () => { await ipfsd.stop() }
      }
    }
    throw new Error('Client is not online')
  } catch (err) {
    logger.error('Could not get ipfs client', err)
    throw err
  }
}

export { getIpfsClient }
