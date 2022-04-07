/* eslint-disable no-console */
import type { PinStatus } from '@ipfs-shipyard/pinning-service-client'
import { expect404 } from '../../expectations'
import { getInlineCid } from '../../utils/getInlineCid'

import { getQueue } from '../../utils/getQueue'
import { knownFailureStatusPin } from '../../utils/knownFailureStatusPin'
import { Check } from '../Check'

const deleteNewPin = async ([endpointUrl, accessToken]: ServiceAndTokenPair) => {
  const queue = getQueue(endpointUrl)

  return await Check<PinStatus>({
    pair: [endpointUrl, accessToken],
    title: 'Can delete a newly created Pin',
    // runCheck: async (details, errors) => {
    //   const result = details.result as PinStatus
    //   if (result === knownFailureStatusPin) {
    //     return false
    //   }
    //   if (result == null) {
    //     return true
    //   }

    //   return false
    // },
    apiCall: async (client, errors) => {
      const cid = await getInlineCid()
      let pinPostResult: PinStatus | null = null
      try {
        pinPostResult = await queue.add(async () => await client.pinsPost({ pin: { cid } }))
      } catch (err) {
        errors.push(err as Error)
      }

      if (pinPostResult == null) {
        errors.push(new Error('Did not create a pin successfully, so we cannot attempt to delete it.'))

        return knownFailureStatusPin
      }

      const { requestid } = pinPostResult

      if (requestid == null) {
        errors.push(new Error('PinStatus does not contain expected `requestid` property'))
        return knownFailureStatusPin
      }

      try {
        await queue.add(async () => await client.pinsRequestidDelete({ requestid }))
      } catch (err) {
        errors.push(err as Error)
        return pinPostResult
      }
      try {
        const pinGetRequest = await queue.add(async () => await client.pinsRequestidGet({ requestid }))
        return pinGetRequest
      } catch (err) {
        // we're expecting an error because the pin shouldn't exist
        expect404(err, errors)
        return null
      }
    }
  })
}

export { deleteNewPin }
