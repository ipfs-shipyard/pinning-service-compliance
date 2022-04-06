/* eslint-disable no-console */
import { PinStatus, Status } from '@ipfs-shipyard/pinning-service-client'
import { getInlineCid } from '../../utils/getInlineCid'

import { getQueue } from '../../utils/getQueue'
import { Check } from '../Check'

const knownFailureStatusPin: PinStatus = {
  requestid: 'N/A',
  created: new Date(),
  status: Status.Failed,
  pin: {
    cid: 'fake'
  },
  delegates: new Set()
}

const deleteNewPin = async ([endpointUrl, accessToken]: ServiceAndTokenPair) => {
  const queue = getQueue(endpointUrl)

  return await Check<PinStatus>({
    pair: [endpointUrl, accessToken],
    title: 'Can delete a newly created Pin',
    runCheck: async (details, errors) => {
      const result = details.result as PinStatus
      if (result === knownFailureStatusPin) {
        return false
      }
      if (result == null) {
        return true
      }

      return false
    },
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
        return null
      }
    }
  })
}

export { deleteNewPin }
