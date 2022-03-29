import { Check } from '../Check'
import { getInlineCid } from '../../utils/getInlineCid'
import { PinStatus, Status } from '@ipfs-shipyard/pinning-service-client'

const addPin = async (pair: ServiceAndTokenPair) => {
  const cid = await getInlineCid()
  return await Check<PinStatus>({
    pair,
    title: 'Can pin a self-identifying CID',
    runCheck: async (details) => {
      const result = details.response.json as PinStatus
      return result.info !== null && result.delegates !== null && result.pin.cid === cid && result.requestid !== null && result.status !== Status.Failed
    },
    apiCall: async (client) => await client.pinsPost({ pin: { cid } })
  })
}

export { addPin }
