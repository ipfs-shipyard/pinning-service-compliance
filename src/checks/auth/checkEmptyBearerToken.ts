import { ApiCall } from '../../ApiCall.js'
import { responseCode } from '../../expectations/index.js'
import { getJoiSchema } from '../../utils/getJoiSchema.js'
import type { ServiceAndTokenPair } from '../../types.js'

const checkEmptyBearerToken = async (pair: ServiceAndTokenPair) => {
  const schema = await getJoiSchema('Failure')

  const apiCall = new ApiCall({
    pair: [pair[0], undefined],
    fn: async (client) => client.pinsGet({}),
    schema,
    title: 'Request with no authentication token'
  })

  apiCall.expect(responseCode(401))

  await apiCall.runExpectations()
}

export { checkEmptyBearerToken }
