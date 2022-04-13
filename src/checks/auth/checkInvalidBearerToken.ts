import { getJoiSchema } from '../../utils/constants'
import { ApiCall } from '../../ApiCall'

const checkInvalidBearerToken = async (pair: ServiceAndTokenPair) => {
  const schema = await getJoiSchema('Failure')

  const apiCall = new ApiCall({
    pair: [pair[0], 'purposefullyInvalid'],
    fn: async (client) => await client.pinsGet({}),
    schema,
    title: 'Request with invalid token'
  })

  apiCall.expect({
    title: 'Returns a 403',
    fn: async ({ details }) => details.response.status === 403
  })

  await apiCall.runExpectations()
}

export { checkInvalidBearerToken }
