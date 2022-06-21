import { CID, bytes } from 'multiformats'
import { code, encode } from 'multiformats/codecs/raw'
import { sha256 } from 'multiformats/hashes/sha2'
import { logger } from './logs.js'

const { fromString } = bytes
const getInlineCid = async (value: string = process.hrtime().toString()): Promise<string> => {
  const inlineUint8Array = fromString(value)
  try {
    const bytes = encode(inlineUint8Array)
    const hash = await sha256.digest(bytes)
    const cid = CID.create(1, code, hash)
    return cid.toString()
  } catch (err) {
    logger.error('Problem creating an inline CID', err)
    throw err
  }
}

export { getInlineCid }
