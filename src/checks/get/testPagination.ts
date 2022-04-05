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

  const allResults: PinResults[] = []

  return await Check<PinResults>({
    pair: [endpointUrl, accessToken],
    title: 'Test pagination functionality',
    runCheck: async (details) => {
      const pinResults = details.result
      if (pinResults == null) {
        return false
      }

      console.log('pinResults: ', pinResults)
      if (pinResults.results.size !== 10) {
        throw new Error('Did not return default of 10 results')
      }
      allResults.push(pinResults)

      // get the oldest pin in order to get the next page of results
      const before = getOldestPinCreateDate(pinResults.results)

      const pinResults2 = await queue.add(async () => await client.pinsGet({ status: allPinStatuses, before }))
      console.log('pinResults2: ', pinResults2)
      allResults.push(pinResults2)

      // console.log('allResults: ', allResults)
      // await queue.onIdle()
      // return pinResults

      return false
    },
    apiCall: async (client) => {
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

        // debugger
        // get all pins (should return a count of 10)
        return await queue.add(async () => await client.pinsGet({ status: allPinStatuses, limit: 10 }))
      } catch (err) {
        console.error(err)
        throw err
      }
    }
  })
}

export { testPagination }
