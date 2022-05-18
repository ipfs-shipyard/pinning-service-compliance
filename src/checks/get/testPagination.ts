import { ApiCall } from '../../ApiCall.js'
import { resultNotNull, responseOk } from '../../expectations/index.js'
import type { ServiceAndTokenPair } from '../../types.js'
import { allPinStatuses } from '../../utils/constants.js'
import { getInlineCid } from '../../utils/getInlineCid.js'
import { getOldestPinCreateDate } from '../../utils/getOldestPinCreateDate.js'
// import { logger } from '../../utils/logs.js'

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
    .expect(responseOk())
    .expect(resultNotNull())

  await getPinsApiCall.runExpectations()

  let pinsNeededToBeCreated = pinsNeededToTestPagination

  try {
    const pins = await getPinsApiCall.request
    try {
      // @ts-expect-error
      pinsNeededToBeCreated = pinsNeededToTestPagination - pins.count
    } catch (error) {
      getPinsApiCall.errors.push({
        title: `Could not determine efficient number of pins to create. Creating required minimum of ${pinsNeededToTestPagination} new pins`,
        error: error as Error
      })
    }
  } catch (error) {
    getPinsApiCall.errors.push({
      title: 'Unexpected error when waiting for pinsGet request to complete',
      error: error as Error
    })
  }

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
      .expect(responseOk())
      .expect(resultNotNull())

    await creation.runExpectations()
    pinsNeededToBeCreated--
  }

  const firstPageOfPins = new ApiCall({
    pair,
    title: 'First page of pins',
    fn: async (client) => await client.pinsGet({ status: allPinStatuses })
  })
    .expect(responseOk())
    .expect(resultNotNull())
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

  try {
    await firstPageOfPins.runExpectations()
  } catch (err) {
    console.error('THIS SHOULD NOT HAPPEN')
    console.error('err', err)
  }

  const cids: Set<string> = new Set()
  const firstPageResult = await firstPageOfPins.request
  let before = new Date()
  let firstPageSize = 0
  if (firstPageResult == null) {
    firstPageOfPins.errors.push({
      title: 'Result is null, cannot get oldest pin create date in order to paginate',
      error: new Error('First page result is null')
    })
  } else {
    before = getOldestPinCreateDate(firstPageResult.results)
    firstPageResult.results.forEach((pin) => {
      cids.add(pin.pin.cid)
    })
    firstPageSize = firstPageResult.results.size
  }

  const secondPage = new ApiCall({
    pair,
    title: 'Retrieve the next page of pins',
    fn: async (client) => await client.pinsGet({ status: allPinStatuses, before })
  })
    .expect(responseOk())
    .expect(resultNotNull())
    .expect({
      title: 'The next page of pins doesn\'t contain any of previous pages pins',
      fn: ({ result }) => {
        if (result != null) {
          const secondPageResult = (result)
          // const firstPageSize = firstPageResult.results.size
          const secondPageSize = secondPageResult.results.size

          secondPageResult.results.forEach((pin) => {
            cids.add(pin.pin.cid)
          })
          return firstPageSize + secondPageSize === cids.size
        } else {
          throw new Error('Second page result is null')
        }
      }
    })

  await secondPage.runExpectations()
}

export { testPagination }
