import { getInlineCid } from '../../utils/getInlineCid.js'
import { ApiCall } from '../../ApiCall.js'
import { getRequestid } from '../../utils/getRequestid.js'
import type { ServiceAndTokenPair } from '../../types.js'

const deleteNewPin = async (pair: ServiceAndTokenPair) => {
  const cid = await getInlineCid()
  const createNewPinApiCall = new ApiCall({
    pair,
    title: 'Can create and then delete a new pin',
    fn: async (client) => {
      return await client.pinsPost({ pin: { cid } })
    }
  })

  const pin = await createNewPinApiCall.request
  createNewPinApiCall.expect({
    title: 'Pin was created',
    fn: async ({ result }) => result != null
  })
  createNewPinApiCall.expect({
    title: 'Creation response code is 200',
    fn: ({ apiCall }) => apiCall.response.status === 200
  })

  if (pin != null) {
    const requestid = getRequestid(pin, createNewPinApiCall)
    const deleteApiCall = new ApiCall({
      pair,
      fn: async (client) => await client.pinsRequestidDelete({ requestid }),
      title: 'Can delete pin'
    })
    await deleteApiCall.request

    createNewPinApiCall.expect({
      title: 'Pin was deleted',
      fn: () => deleteApiCall.response.ok
    })
    createNewPinApiCall.expect({
      title: 'Pin deletion response code is 202',
      fn: () => deleteApiCall.response.status === 202
    })
  } else {
    throw new Error('No Pin in ApiCall to delete')
  }
  await createNewPinApiCall.runExpectations()
}

export { deleteNewPin }
