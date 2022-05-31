import type { PinResults } from '@ipfs-shipyard/pinning-service-client'

import { ApiCall } from '../../ApiCall.js'
import { responseCode, responseOk } from '../../expectations/index.js'
import type { ServiceAndTokenPair } from '../../types.js'
import { allPinStatuses } from '../../utils/constants.js'
import { getOldestPinCreateDate } from '../../utils/getOldestPinCreateDate.js'
import { getRequestid } from '../../utils/getRequestid.js'

/**
 * This function recursively adds 'pinsRequestidDelete' expectations, for all existing pins,
 * to the root apiCall passed in; paginating if necessary.
 *
 * @param apiCall - The root ApiCall instance that all expectations should be added to
 */
const addPinDeletionExpectations = async (apiCall: ApiCall<PinResults>) => {
  const pinResults: PinResults = await apiCall.request as PinResults

  if (pinResults != null) {
    for await (const pin of pinResults.results) {
      const requestid = getRequestid(pin, apiCall)

      await new ApiCall({
        parent: apiCall,
        pair: apiCall.pair,
        fn: async (client) => await client.pinsRequestidDelete({ requestid }),
        title: `Can delete pin with requestid '${requestid}'`
      })
        .expect(responseOk())
        .expect(responseCode(202))
    }

    if (pinResults.count > pinResults.results.size) {
      const before = getOldestPinCreateDate(pinResults.results)
      await addPinDeletionExpectations(new ApiCall({
        parent: apiCall,
        pair: apiCall.pair,
        fn: async (client) => await client.pinsGet({ status: allPinStatuses, before }),
        title: `Get all Pins created before '${before.toString()}'`
      }))
    }
  }
}

const deleteAllPins = async (pair: ServiceAndTokenPair) => {
  const mainApiCall = new ApiCall({
    pair,
    fn: async (client) => await client.pinsGet({ status: allPinStatuses }),
    title: 'Can delete all pins'
  })
  await addPinDeletionExpectations(mainApiCall)

  new ApiCall({
    parent: mainApiCall,
    pair,
    fn: async (client) => await client.pinsGet({ status: allPinStatuses }),
    title: 'Call pinsGet after deletions'
  })
    .expect({
      title: 'Final pinsGet call returns a count of zero',
      fn: ({ result }) => result?.count === 0
    })

  await mainApiCall.runExpectations()
}

export { deleteAllPins }
