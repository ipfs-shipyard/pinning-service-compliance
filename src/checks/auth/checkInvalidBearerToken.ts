import { getJoiSchema } from '../../utils/getJoiSchema.js'
import { ApiCall } from '../../ApiCall.js'
import type { ServiceAndTokenPair } from '../../types.js'
import { responseCode } from '../../expectations/index.js'

const checkInvalidBearerToken = async (pair: ServiceAndTokenPair) => {
  const schema = await getJoiSchema('Failure')

  await new ApiCall({
    pair: [pair[0], 'purposefullyInvalid'],
    fn: async (client) => await client.pinsGet({}),
    schema,
    title: 'Request with invalid token'
  })
    .expect(responseCode(401))
    .runExpectations()
}

export { checkInvalidBearerToken }
