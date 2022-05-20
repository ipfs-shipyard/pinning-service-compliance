import { getJoiSchema } from '../../utils/getJoiSchema.js'
import { ApiCall } from '../../ApiCall.js'
import type { ServiceAndTokenPair } from '../../types.js'

const checkEmptyBearerToken = async (pair: ServiceAndTokenPair) => {
  const schema = await getJoiSchema('Failure')

  const apiCall = new ApiCall({
    pair: [pair[0], undefined],
    fn: async (client) => await client.pinsGet({}),
    schema,
    title: 'Request with no authentication token'
  })

  apiCall.expect({
    title: 'Returns a 403',
    fn: async ({ details }) => details.response.status === 403
  })

  await apiCall.runExpectations()
}

export { checkEmptyBearerToken }
