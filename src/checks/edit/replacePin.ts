/* eslint-disable no-console */
import type { PinStatus } from '@ipfs-shipyard/pinning-service-client'
import { expect404 } from '../../expectations'
import { getInlineCid } from '../../utils/getInlineCid'

import { getQueue } from '../../utils/getQueue'
import { knownFailureStatusPin } from '../../utils/knownFailureStatusPin'
import { Check } from '../Check'

/**
 * https://github.com/ipfs-shipyard/pinning-service-compliance/issues/8
 *
 * - create a pin and then replace it via POST /pins/{requestid}
 * - expect different requestid in response
 * - confirm old requestid and CID are no longer to be found
 */
const replacePin = async ([endpointUrl, accessToken]: ServiceAndTokenPair) => {
  const queue = getQueue(endpointUrl)

  return await Check<PinStatus>({
    pair: [endpointUrl, accessToken],
    title: 'Can delete a newly created Pin',
    // runCheck: async (details, errors) => {
    //   // const result = details.result as PinStatus
    //   // if (result === knownFailureStatusPin) {
    //   //   return false
    //   // }
    //   // if (result == null) {
    //   //   return false
    //   // }
    //   if (errors.length > 0) {
    //     return false
    //   }

    //   return true
    // },
    apiCall: async (client, errors) => {
      const cid = await getInlineCid()
      const newCid = await getInlineCid()
      let pinPostResult: PinStatus | null = null
      try {
        pinPostResult = await queue.add(async () => await client.pinsPost({ pin: { cid } }))
      } catch (err) {
        errors.push(err as Error)
      }

      if (pinPostResult == null) {
        errors.push(new Error('Did not create a pin successfully, so we cannot attempt to replace it.'))

        return knownFailureStatusPin
      }

      const { requestid } = pinPostResult

      if (requestid == null) {
        errors.push(new Error('PinStatus does not contain expected `requestid` property'))
        return knownFailureStatusPin
      }

      let replacementResult: PinStatus | null = null
      try {
        replacementResult = await queue.add(async () => await client.pinsRequestidPost({ requestid, pin: { cid: newCid } }))
        if (replacementResult.requestid === requestid) {
          errors.push(new Error('Replacement Pin requestid matches old requestid'))
        }
        if (replacementResult.pin.cid === cid) {
          errors.push(new Error('Replacement Pin CID matches old CID'))
        }
      } catch (err) {
        errors.push(err as Error)
        return pinPostResult
      }
      try {
        const result = await queue.add(async () => await client.pinsRequestidGet({ requestid }))
        errors.push(new Error('Found old requestid but expected it to be replaced'))
        return result
      } catch (err) {
        // we're expecting an error because the pin shouldn't exist
        expect404(err, errors)
      }
      const replacementRequestid = replacementResult.requestid

      try {
        const replacementGet = await queue.add(async () => await client.pinsRequestidGet({ requestid: replacementRequestid }))
        return replacementGet
      } catch (err) {
        errors.push(err as Error)
        return null
      }
    }
  })
}

export { replacePin }
