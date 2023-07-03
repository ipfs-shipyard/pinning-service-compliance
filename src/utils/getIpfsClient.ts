import { join } from 'path'

import { createController } from 'ipfsd-ctl'
import * as createKuboClient from 'kubo-rpc-client'
import type { HTTPClientExtraOptions } from 'kubo-rpc-client'
import type { API } from 'ipfs-core-types/src/root'

import { logger } from './logs.js'

type InlineableClient = API<HTTPClientExtraOptions & {inline: boolean}>

interface GetIpfsClientResponse {
  client: InlineableClient
  /**
   * A function that should be called when you're done using the client so cleanup can be performed.
   */
  done: () => Promise<void>
}
const getIpfsClient = async (): Promise<GetIpfsClientResponse> => {
  try {
    logger.debug('Attempting to use ipfsd-ctl to create a client')
    const ipfsd = await createController({
      kuboRpcModule: createKuboClient,
      ipfsBin: join('node_modules', '.bin', 'ipfs'),
      test: true,
      disposable: true
    })
    const client = ipfsd.api as InlineableClient

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
