import { ApiCall } from '../../ApiCall.js'
import { responseOk } from '../../expectations/index.js'
import { allPinStatuses } from '../../utils/constants.js'
import { getOldestPinCreateDate } from '../../utils/getOldestPinCreateDate.js'
import { getRequestid } from '../../utils/getRequestid.js'
import { getPinTracker, type PinTracker } from '../../utils/pinTracker.js'
import type { ServiceAndTokenPair } from '../../types.js'
import type { PinResults } from '@ipfs-shipyard/pinning-service-client'

const MAX_LOOP_TIMES = 10
let loopCount = 0
/**
 * This function recursively adds 'pinsRequestidDelete' expectations, for all existing pins,
 * to the root apiCall passed in; paginating if necessary.
 *
 * @param apiCall - The root ApiCall instance that all expectations should be added to
 */
const addPinDeletionExpectations = async (apiCall: ApiCall<PinResults>, pinTracker: PinTracker): Promise<void> => {
  const pinResults: PinResults | null = await apiCall.request

  if (pinResults != null) {
    for await (const pin of pinResults.results) {
      if (pinTracker.has(pin.pin.cid)) {
        const requestid = getRequestid(pin, apiCall)

        new ApiCall({
          parent: apiCall,
          pair: apiCall.pair,
          fn: async (client) => client.pinsRequestidDelete({ requestid }),
          title: `Can delete pin with requestid '${requestid}'`
        }).expect(responseOk())
      }
    }

    if (pinResults.count > pinTracker.originalPinCount) {
      /**
       * Prevent infinite loops for broken services.
       */
      if (loopCount >= MAX_LOOP_TIMES) {
        return
      } else {
        loopCount++
      }

      /**
       * Pagination doesn't need to work for this compliance check to succeed.
       *
       * If pagination is disabled, this should never run because the service
       * will return all pins in the first GET call.
       *
       * @see https://github.com/ipfs-shipyard/pinning-service-compliance/issues/118
       */
      const before = getOldestPinCreateDate(pinResults.results)
      await addPinDeletionExpectations(new ApiCall({
        parent: apiCall,
        pair: apiCall.pair,
        fn: async (client) => client.pinsGet({ status: allPinStatuses, before }),
        title: `Get all Pins created before '${before.toString()}'`
      }), pinTracker)
    }
  }
}

const deleteAllPins = async (pair: ServiceAndTokenPair): Promise<void> => {
  loopCount = 0
  const pinTracker = await getPinTracker(pair)
  const mainApiCall = new ApiCall({
    pair,
    fn: async (client) => client.pinsGet({ status: allPinStatuses }),
    title: 'Can delete all pins created during compliance checks'
  })

  await addPinDeletionExpectations(mainApiCall, pinTracker)

  new ApiCall({
    parent: mainApiCall,
    pair,
    fn: async (client) => client.pinsGet({ status: allPinStatuses }),
    title: 'Call pinsGet after deletions'
  })
    .expect({
      title: `Final pinsGet call returns the same count as before all compliance checks: '${pinTracker.originalPinCount}'`,
      fn: async ({ result }) => result?.count === pinTracker.originalPinCount
    })

  await mainApiCall.runExpectations()
}

export { deleteAllPins }
