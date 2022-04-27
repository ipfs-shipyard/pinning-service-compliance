import { identity } from 'multiformats/hashes/identity'
import { bytes, CID } from 'multiformats'

import { logger } from './logs'

const { fromString } = bytes
const getInlineCid = async (value: string = Date.now().toString()): Promise<string> => {
  const inlineUint8Array = fromString(value)
  try {
    const inlineDateDigest = await identity.digest(inlineUint8Array)
    try {
      return CID.createV1(identity.code, inlineDateDigest).toString()
    } catch (err) {
      logger.error('Problem creating an inline CID', err)
      throw err
    }
  } catch (err) {
    logger.error('Could not get an ipfs client', err)
    throw err
  }
}

export { getInlineCid }
