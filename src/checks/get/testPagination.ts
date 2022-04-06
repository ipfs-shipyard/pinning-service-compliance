/* eslint-disable no-debugger */
/* eslint-disable no-console */
import type { PinResults, PinStatus } from '@ipfs-shipyard/pinning-service-client'
import { waitForDebugger } from 'inspector'

import { allPinStatuses } from '../../utils/constants'
import { getInlineCid } from '../../utils/getInlineCid'
import { getOldestPinCreateDate } from '../../utils/getOldestPinCreateDate'
import { getQueue } from '../../utils/getQueue'
import { Check } from '../Check'

// https://github.com/ipfs-shipyard/pinning-service-compliance/issues/6

// const sleep = async (delay: number) => await new Promise((resolve) => setTimeout(resolve, delay))
const testPagination = async ([endpointUrl, accessToken]: ServiceAndTokenPair) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  waitForDebugger
  const queue = getQueue(endpointUrl)

  const getPinsResults: PinResults[] = []
  const putPinsResults: PinStatus[] = []

  return await Check<PinResults>({
    pair: [endpointUrl, accessToken],
    title: 'Test pagination functionality',
    // runCheck: async (details) => {
    //   await queue.onIdle()
    //   console.log('allResults: ', allResults)
    //   console.log('details.response.json: ', details.response.json)
    //   // const result1 = details.result[0]
    //   // const result2 = details.result[1]
    //   // const [result1, result2] = allResults
    //   // console.log('result1: ', result1)
    //   // console.log('result2: ', result2)

    //   return false
    // },
    runCheck: async (details, errors) => {
      // Ensure all the calls that are supposed to be made were made.
      if (getPinsResults.length !== 3 && putPinsResults.length !== 15) {
        errors.push(new Error(`Error in the compliance checker: Expected to make 18 api calls but only made ${getPinsResults.length + putPinsResults.length}`))
      }
      // Check that we had the expected state at the beginning of the test
      if (getPinsResults[0]?.count !== 0) {
        errors.push(new Error(`First PinsGet call: Expected to have zero Pins, but had ${getPinsResults[0].count}`))
      }
      // Check that we received 10 pins in our pinsGet request after adding 15.
      if (getPinsResults[1].results.size !== 10) {
        errors.push(new Error(`Second PinsGet call: Expected 10 pins, but received ${getPinsResults[1].results.size}`))
      }
      // Check that we received the second page of 5 pins in our second pinsGet request
      if (getPinsResults[2].results.size !== 5) {
        errors.push(new Error(`Second PinsGet call: Expected 5 pins, but received ${getPinsResults[2].results.size}`))
      }
      const handleDuplicates = (pinStatus: PinStatus) => {
        const { requestid } = pinStatus
        if (pinRequestIds.has(requestid)) {
          errors.push(new Error(`Expected no duplicates between pages of pinsGet requests, but found a duplicate: requestid = ${requestid}`))
        } else {
          pinRequestIds.add(requestid)
        }
      }

      // Check that no duplicates exist between the latter two pinsGet requests
      const pinRequestIds: Set<string> = new Set()
      getPinsResults[1].results.forEach(handleDuplicates)
      getPinsResults[2].results.forEach(handleDuplicates)
      // const pinResults = details.result
      // if (pinResults == null) {
      //   return false
      // }

      // console.log('pinResults: ', pinResults)
      // if (pinResults.results.size !== 10) {
      //   throw new Error('Did not return default of 10 results')
      // }
      // allResults.push(pinResults)

      // // get the oldest pin in order to get the next page of results
      // const before = getOldestPinCreateDate(pinResults.results)

      // const pinResults2 = await queue.add(async () => await client.pinsGet({ status: allPinStatuses, before }))
      // console.log('pinResults2: ', pinResults2)
      // allResults.push(pinResults2)

      if (errors.length > 0) {
        return false
      }
      return true
    },
    apiCall: async (client, errors) => {
      // Check that there are no existing Pins:
      const existingPins = await queue.add(async () => await client.pinsGet({ status: allPinStatuses }))
      getPinsResults.push(existingPins)

      // create 15 pins
      let i = 0
      try {
        const fifteenPins: Array<() => Promise<PinStatus>> = []
        while (i < 1) {
          const cid = await getInlineCid()
          console.log('cid: ', cid)
          // await sleep(1000)
          fifteenPins.push(async () => await client.pinsPost({ pin: { cid } }))
          await client.pinsPost({ pin: { cid } })
          i += 1
        }
        const addStatuses = await queue.addAll(fifteenPins)
        // await queue.onIdle()
        console.log('addStatuses: ', addStatuses)
        putPinsResults.push(...addStatuses)

        debugger
        // get all pins (should return a count of 10)
        const pinResults = await queue.add(async () => await client.pinsGet({ status: allPinStatuses }))
        console.log('pinResults: ', pinResults)
        if (pinResults.results.size !== 10) {
          errors.push(new Error('Did not return default of 10 results'))
        }
        getPinsResults.push(pinResults)

        // get the oldest pin in order to get the next page of results
        const before = getOldestPinCreateDate(pinResults.results)

        const pinResults2 = await queue.add(async () => await client.pinsGet({ status: allPinStatuses, before }))
        console.log('pinResults2: ', pinResults2)
        getPinsResults.push(pinResults2)

        // console.log('allResults: ', allResults)
        // await queue.onIdle()
        return pinResults2
      } catch (err) {
        console.error(err)
        throw err
      }
    }
  })
}

export { testPagination }
