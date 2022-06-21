import { CID, bytes } from 'multiformats'
import * as raw from 'multiformats/codecs/raw'
import { sha256 } from 'multiformats/hashes/sha2'
import { logger } from './logs.js'

const { fromString } = bytes
const getInlineCid = async (value: string = process.hrtime().toString()): Promise<string> => {
  const inlineUint8Array = fromString(value)
  try {
    const bytes = raw.encode(inlineUint8Array) 
    const hash = await sha256.digest(bytes)
    const cid = CID.create(1, raw.code, hash)
    return cid.toString()

  } catch (err) {
    logger.error('Problem creating an inline CID', err)
    throw err
  }
}

export { getInlineCid }
