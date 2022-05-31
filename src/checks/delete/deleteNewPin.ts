import { getInlineCid } from '../../utils/getInlineCid.js'
import { ApiCall } from '../../ApiCall.js'
import { getRequestid } from '../../utils/getRequestid.js'
import type { ServiceAndTokenPair } from '../../types.js'
import { responseCode, responseOk, resultNotNull } from '../../expectations/index.js'

const deleteNewPin = async (pair: ServiceAndTokenPair) => {
  const cid = await getInlineCid()
  const createNewPinApiCall = new ApiCall({
    pair,
    title: 'Can create and then delete a new pin',
    fn: async (client) => await client.pinsPost({ pin: { cid } })
  })
    .expect(resultNotNull())
    .expect(responseCode(200))

  new ApiCall({
    parent: createNewPinApiCall,
    pair,
    fn: async (client) => {
      const pin = await createNewPinApiCall.request
      const requestid = getRequestid(pin, createNewPinApiCall)
      return await client.pinsRequestidDelete({ requestid })
    },
    title: 'The newly created pin can be immediately deleted'
  })
    .expect(responseOk())
    .expect(responseCode(202, 'The Pin was deleted successfully'))

  await createNewPinApiCall.runExpectations()
}

export { deleteNewPin }
