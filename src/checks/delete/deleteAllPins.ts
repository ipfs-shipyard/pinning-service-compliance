import { PinResults, PinStatus } from '@ipfs-shipyard/pinning-service-client'
import { allPinStatuses } from '../../utils/constants'

import { getOldestPinCreateDate } from '../../utils/getOldestPinCreateDate'
import { getQueue } from '../../utils/getQueue'
import { Check } from '../Check'

const deleteAllPins = async ([endpointUrl, accessToken]: ServiceAndTokenPair) => {
  const queue = getQueue(endpointUrl)

  return await Check<PinResults>({
    pair: [endpointUrl, accessToken],
    title: 'Can delete all existing Pins',
    runCheck: async (details) => {
      const pinResults = details.response.json as PinResults

      return pinResults.count === 0 && pinResults.results == null
    },
    apiCall: async (client) => {
      let pinResults: PinResults = await queue.add(async () => await client.pinsGet({ status: allPinStatuses }))
      while (pinResults.count > 0) {
        const before = getOldestPinCreateDate(pinResults.results)

        for await (const pin of pinResults.results) {
          await queue.add(async () => await client.pinsRequestidDelete({ requestid: pin.requestid ?? (pin as PinStatus & {requestId: string}).requestId }))
        }
        pinResults = await queue.add(async () => await client.pinsGet({ status: allPinStatuses, before }))
      }
      return pinResults
    }
  })
}

export { deleteAllPins }
