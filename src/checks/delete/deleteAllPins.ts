import type { PinResults } from '@ipfs-shipyard/pinning-service-client'

import { ApiCall } from '../../ApiCall'
import type { ServiceAndTokenPair } from '../../types'
import { allPinStatuses } from '../../utils/constants'
import { getOldestPinCreateDate } from '../../utils/getOldestPinCreateDate'
import { getRequestid } from '../../utils/getRequestid'

const getAllPinsApiCall = async (pair: ServiceAndTokenPair, before?: Date) => {
  let title = 'Can delete all pins'
  if (before != null) {
    title = `${title} created before '${before.toString()}'`
  }
  const apiCall = new ApiCall({
    pair,
    fn: async (client) => await client.pinsGet({ status: allPinStatuses }),
    title
  })
  return apiCall
}

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

      const deleteApiCall = new ApiCall({
        pair: apiCall.pair,
        fn: async (client) => await client.pinsRequestidDelete({ requestid }),
        title: `Can delete pin with requestid '${requestid}'`
      })
      apiCall.expect({
        title: `Can delete pin with requestid '${requestid}'`,
        fn: async () => {
          await deleteApiCall.request
          return deleteApiCall.response.status === 202
        }
      })
    }

    if (pinResults.count > pinResults.results.size) {
      const nextPageApiCall = await getAllPinsApiCall(apiCall.pair, getOldestPinCreateDate(pinResults.results))
      await addPinDeletionExpectations(nextPageApiCall)
      nextPageApiCall.expectations.forEach((expectation) => {
        apiCall.expect(expectation)
      })
    }
  }
}

const deleteAllPins = async (pair: ServiceAndTokenPair) => {
  const allPinsApiCall = await getAllPinsApiCall(pair)
  await addPinDeletionExpectations(allPinsApiCall)

  const confirmEmptyApiCall = await getAllPinsApiCall(pair)
  allPinsApiCall.expect({
    title: 'Final pinsGet call returns a count of zero',
    fn: async () => {
      const result = await confirmEmptyApiCall.request
      return result?.count === 0
    }
  })
  await allPinsApiCall.runExpectations()
}

export { deleteAllPins }
