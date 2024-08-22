import { ApiCall } from '../../ApiCall.js'
import { responseCode } from '../../expectations/index.js'
import { getJoiSchema } from '../../utils/getJoiSchema.js'
import type { ServiceAndTokenPair } from '../../types.js'

const checkInvalidBearerToken = async (pair: ServiceAndTokenPair): Promise<void> => {
  const schema = await getJoiSchema('Failure')

  await new ApiCall({
    pair: [pair[0], 'purposefullyInvalid'],
    fn: async (client) => client.pinsGet({}),
    schema,
    title: 'Request with invalid token'
  })
    .expect(responseCode(401))
    .runExpectations()
}

export { checkInvalidBearerToken }
