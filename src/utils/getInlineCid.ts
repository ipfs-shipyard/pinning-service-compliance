import Ctl from 'ipfsd-ctl'
import * as ipfsHttpClient from 'ipfs-http-client'
import type { HTTPClientExtraOptions } from 'ipfs-http-client/types/src/types'
import type { API } from 'ipfs-core-types/src/root'
import { join } from 'path'
import type { ImportCandidate } from 'ipfs-core-types/src/utils'

const getInlineCid = async (value: ImportCandidate = Date.now().toString()): Promise<string> => {
  const ipfsd = await Ctl.createController({
    ipfsHttpModule: ipfsHttpClient,
    ipfsBin: join('node_modules', '.bin', 'ipfs')
  })
  const { path } = await (ipfsd.api as API<HTTPClientExtraOptions & {inline: boolean}>).add(value, { rawLeaves: true, inline: true })

  await ipfsd.stop()

  return path
}

export { getInlineCid }
