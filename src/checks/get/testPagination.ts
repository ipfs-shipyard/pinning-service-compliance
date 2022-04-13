import type { PinResults } from '@ipfs-shipyard/pinning-service-client'

import { ApiCall } from '../../ApiCall'
import { expectNonNullResult, expectOkResponse } from '../../expectations'
import type { ServiceAndTokenPair } from '../../types'
import { allPinStatuses } from '../../utils/constants'
import { getInlineCid } from '../../utils/getInlineCid'
import { getOldestPinCreateDate } from '../../utils/getOldestPinCreateDate'

/**
 * https://github.com/ipfs-shipyard/pinning-service-compliance/issues/6
 *
 */
const testPagination = async (pair: ServiceAndTokenPair) => {
  const pinsNeededToTestPagination = 15

  const getPinsApiCall = new ApiCall({
    pair,
    title: 'Get all pins',
    fn: async (client) => await client.pinsGet({ status: allPinStatuses })
  })
    .expect(expectOkResponse)
    .expect(expectNonNullResult)

  await getPinsApiCall
    .runExpectations()

  const pins = await getPinsApiCall.result as PinResults
  let pinsNeededToBeCreated = pinsNeededToTestPagination - pins.count
  while (pinsNeededToBeCreated > 0) {
    const cid = await getInlineCid()
    // add more pins
    const creation = new ApiCall({
      pair,
      title: `Can create new pin for testing pagination cid='${cid}'`,
      fn: async (client) => {
        return await client.pinsPost({ pin: { cid } })
      }
    })
      .expect(expectOkResponse)
      .expect(expectNonNullResult)
    await creation
      .runExpectations()
    pinsNeededToBeCreated--
  }

  const firstPageOfPins = new ApiCall({
    pair,
    title: 'First page of pins',
    fn: async (client) => await client.pinsGet({ status: allPinStatuses })
  })
    .expect(expectOkResponse)
    .expect(expectNonNullResult)
    .expect({
      title: `Count is greater than or equal to ${pinsNeededToTestPagination}`,
      fn: ({ result }) => (result?.count ?? 0) >= pinsNeededToTestPagination
    })
    .expect({
      title: 'Count is greater than the number of pins returned',
      fn: ({ result }) => (result?.results.size ?? 0) < (result?.count ?? 0)
    })
    .expect({
      title: 'Number of pins returned defaults to 10',
      fn: ({ result }) => result?.results.size === 10
    })
  await firstPageOfPins
    .runExpectations()

  const firstPageResult = await firstPageOfPins.result as PinResults
  const before = getOldestPinCreateDate(firstPageResult.results)

  const cids: Set<string> = new Set()
  firstPageResult.results.forEach((pin) => {
    cids.add(pin.pin.cid)
  })
  const secondPage = new ApiCall({
    pair,
    title: 'Retrieve the next page of pins',
    fn: async (client) => await client.pinsGet({ status: allPinStatuses, before })
  })
    .expect(expectOkResponse)
    .expect(expectNonNullResult)
    .expect({
      title: 'The next page of pins doesn\'t contain any of previous pages pins',
      fn: ({ result }) => {
        const secondPageResult = (result as PinResults)
        const firstPageSize = firstPageResult.results.size
        const secondPageSize = secondPageResult.results.size

        secondPageResult.results.forEach((pin) => {
          cids.add(pin.pin.cid)
        })
        return firstPageSize + secondPageSize === cids.size
      }
    })

  await secondPage
    .runExpectations()
}

export { testPagination }
