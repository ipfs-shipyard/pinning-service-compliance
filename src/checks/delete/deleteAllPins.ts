import type { PinResults, PinStatus } from '@ipfs-shipyard/pinning-service-client'
import { allPinStatuses } from '../../utils/constants'

import { getQueue } from '../../utils/getQueue'
import { Check } from '../Check'

const deleteAllPins = async ([endpointUrl, accessToken]: ServiceAndTokenPair) => {
  const queue = getQueue(endpointUrl)

  return await Check<PinResults>({
    pair: [endpointUrl, accessToken],
    title: 'Can delete all existing Pins',
    runCheck: async (details, errors) => {
      const result = details.result as PinResults

      return result?.count === 0 && result?.results.size === 0
    },
    apiCall: async (client) => {
      let pinResults: PinResults = await queue.add(async () => await client.pinsGet({ status: allPinStatuses }))
      while (pinResults.count > 0) {
        for await (const pin of pinResults.results) {
          await queue.add(async () => await client.pinsRequestidDelete({ requestid: pin.requestid ?? (pin as PinStatus & {requestId: string}).requestId }))
        }

        pinResults = await queue.add(async () => await client.pinsGet({ status: allPinStatuses }))
      }
      return pinResults
    }
  })
}

export { deleteAllPins }
