import { join } from 'path'

import Ctl from 'ipfsd-ctl'
import * as ipfsHttpClient from 'ipfs-http-client'
import type { HTTPClientExtraOptions } from 'ipfs-http-client/types/src/types'
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
    const ipfsd = await Ctl.createController({
      ipfsHttpModule: ipfsHttpClient,
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
