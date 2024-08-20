import { ApiCall } from '../../ApiCall.js'
import { responseCode, responseOk } from '../../expectations/index.js'
import { getInlineCid } from '../../utils/getInlineCid.js'
import { getRequestid } from '../../utils/getRequestid.js'
import type { ServiceAndTokenPair } from '../../types.js'

/**
 * https://github.com/ipfs-shipyard/pinning-service-compliance/issues/8
 *
 * - create a pin and then replace it via POST /pins/{requestid}
 * - expect different requestid in response
 * - confirm old requestid and CID are no longer to be found
 */
const replacePin = async (pair: ServiceAndTokenPair) => {
  const cid = await getInlineCid()
  const createPinApiCall = new ApiCall({
    pair,
    fn: async (client) => client.pinsPost({ pin: { cid } }),
    title: 'Can create and replace a pin\'s CID'
  })
  const originalPin = await createPinApiCall.request
  createPinApiCall.expect({
    title: 'Pin exists',
    fn: async ({ result }) => result != null
  })

  const requestid = getRequestid(originalPin, createPinApiCall)
  createPinApiCall.expect({
    title: `Could obtain requestid from new pin (${requestid})`,
    fn: () => requestid != null && requestid !== 'null'
  })

  const newCid = await getInlineCid()

  const replaceCidApiCall = new ApiCall({
    parent: createPinApiCall,
    pair,
    title: `Pin's with requestid '${requestid}' can have cid '${cid}' replaced with '${newCid}'`,
    fn: async (client) => client.pinsRequestidPost({ requestid, pin: { cid: newCid } })
  })

  const newPin = await replaceCidApiCall.request
  const newRequestid = getRequestid(newPin, replaceCidApiCall)

  createPinApiCall
    .expect(responseOk())
    .expect({
      title: 'Replaced pin has the new & expected CID',
      fn: async () => newPin?.pin.cid === newCid
    })
    .expect({
      title: 'Replaced pin has a different requestid',
      fn: async () => newRequestid !== requestid
    })

  await new ApiCall({
    parent: replaceCidApiCall,
    pair,
    fn: async (client) => client.pinsRequestidGet({ requestid }),
    title: 'Get original pin via requestid'
  })
    .expect(responseCode(404, 'Original Pin\'s requestid cannot be found'))

  await new ApiCall({
    parent: replaceCidApiCall,
    pair,
    fn: async (client) => client.pinsRequestidGet({ requestid: newRequestid }),
    title: 'Get new pin via requestid'
  })
    .expect(responseCode(200, 'New Pin\'s requestid can be found'))

  await createPinApiCall.runExpectations()
}

export { replacePin }
