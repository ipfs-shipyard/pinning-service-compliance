import { ApiCall } from '../../ApiCall.js'
import { responseCode, responseOk, resultNotNull } from '../../expectations/index.js'
import { getInlineCid } from '../../utils/getInlineCid.js'
import { getRequestid } from '../../utils/getRequestid.js'
import type { ServiceAndTokenPair } from '../../types.js'

const deleteNewPin = async (pair: ServiceAndTokenPair): Promise<void> => {
  const cid = await getInlineCid()
  const createNewPinApiCall = new ApiCall({
    pair,
    title: 'Can create and then delete a new pin',
    fn: async (client) => client.pinsPost({ pin: { cid } })
  })
    .expect(resultNotNull())
    .expect(responseCode(202))

  new ApiCall({
    parent: createNewPinApiCall,
    pair,
    fn: async (client) => {
      const pin = await createNewPinApiCall.request
      const requestid = getRequestid(pin, createNewPinApiCall)
      await client.pinsRequestidDelete({ requestid })
    },
    title: 'The newly created pin can be immediately deleted'
  })
    .expect(responseOk())
    .expect(responseCode(202, 'The Pin was deleted successfully'))

  await createNewPinApiCall.runExpectations()
}

export { deleteNewPin }
