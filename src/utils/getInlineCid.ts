import type { ImportCandidate } from 'ipfs-core-types/src/utils'

import { getIpfsClient } from './getIpfsClient'
import { logger } from './logs'

const getInlineCid = async (value: ImportCandidate = Date.now().toString()): Promise<string> => {
  try {
    const { client, done } = await getIpfsClient()
    try {
      const { path } = await client.add(value, { rawLeaves: true, inline: true })
      return path
    } catch (err) {
      logger.error('Problem creating an inline CID', err)
      throw err
    } finally {
      await done()
    }
  } catch (err) {
    logger.error('Could not get an ipfs client', err)
    throw err
  }
}

export { getInlineCid }
