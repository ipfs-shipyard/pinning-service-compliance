import type { PinStatus } from '@ipfs-shipyard/pinning-service-client'

import { ApiCall } from '../../ApiCall'
import type { ServiceAndTokenPair } from '../../types'
import { getInlineCid } from '../../utils/getInlineCid'
import { getRequestid } from '../../utils/getRequestid'

/**
 * https://github.com/ipfs-shipyard/pinning-service-compliance/issues/8
 *
 * - create a pin and then replace it via POST /pins/{requestid}
 * - expect different requestid in response
 * - confirm old requestid and CID are no longer to be found
 */
const replacePin = async (pair: ServiceAndTokenPair) => {
  const cid = await getInlineCid()
  const newCid = await getInlineCid()
  // const queue = getQueue(endpointUrl)
  const createPinApiCall = new ApiCall({
    pair,
    fn: async (client) => await client.pinsPost({ pin: { cid } }),
    title: 'Can create and replace a pin\'s CID'
  })
  const originalPin = await createPinApiCall.request
  createPinApiCall.expect({
    title: 'Pin exists',
    fn: async ({ result }) => result != null
  })
  const requestid = getRequestid(originalPin as PinStatus, createPinApiCall)
  createPinApiCall.expect({
    title: `Could obtain requestid from new pin (${requestid})`,
    fn: () => requestid != null
  })

  const replaceCidApiCall = new ApiCall({
    pair,
    title: `Pin's with requestid '${requestid}' can have cid '${cid}' replaced with '${newCid}'`,
    fn: async (client) => await client.pinsRequestidPost({ requestid, pin: { cid: newCid } })
  })
  const newPin = await replaceCidApiCall.request
  createPinApiCall.expect({
    title: replaceCidApiCall.title,
    fn: async () => replaceCidApiCall.response.ok
  })
  createPinApiCall.expect({
    title: 'Replaced pin has the new & expected CID',
    fn: async () => newPin?.pin.cid === newCid
  })
  const newRequestid = getRequestid(newPin as PinStatus, replaceCidApiCall)
  createPinApiCall.expect({
    title: 'Replaced pin has a different requestid',
    fn: async () => newRequestid !== requestid
  })
  const getOriginalPinByRequestidApiCall = new ApiCall({
    pair,
    fn: async (client) => await client.pinsRequestidGet({ requestid: requestid }),
    title: ''
  })
  await getOriginalPinByRequestidApiCall.request
  createPinApiCall.expect({
    title: 'Original Pin\'s requestid cannot be found',
    fn: async () => getOriginalPinByRequestidApiCall.response.status === 404
  })

  const getNewPinByRequestidApiCall = new ApiCall({
    pair,
    fn: async (client) => await client.pinsRequestidGet({ requestid: newRequestid }),
    title: ''
  })
  await getNewPinByRequestidApiCall.request

  createPinApiCall.expect({
    title: 'New Pin\'s requestid can be found',
    fn: async () => getNewPinByRequestidApiCall.response.status === 200
  })

  await createPinApiCall.runExpectations()
}

export { replacePin }
