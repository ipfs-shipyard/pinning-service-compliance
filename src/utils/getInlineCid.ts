import { identity } from 'multiformats/hashes/identity'
import { bytes, CID } from 'multiformats'

import { logger } from './logs.js'

const { fromString } = bytes
const getInlineCid = async (value: string = Date.now().toString()): Promise<string> => {
  const inlineUint8Array = fromString(value)
  try {
    const inlineDateDigest = await identity.digest(inlineUint8Array)

    return CID.createV1(identity.code, inlineDateDigest).toString()
  } catch (err) {
    logger.error('Problem creating an inline CID', err)
    throw err
  }
}

export { getInlineCid }
