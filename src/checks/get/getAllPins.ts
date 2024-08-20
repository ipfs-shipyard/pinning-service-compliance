import { ApiCall } from '../../ApiCall.js'
import { responseCode, responseOk } from '../../expectations/index.js'
import { allPinStatuses } from '../../utils/constants.js'
import { getJoiSchema } from '../../utils/getJoiSchema.js'
import type { ServiceAndTokenPair } from '../../types.js'
import type { Schema } from '@hapi/joi'

const getAllPins = async (pair: ServiceAndTokenPair): Promise<void> => {
  let schema: Schema | undefined

  try {
    schema = await getJoiSchema('PinResults')
  } catch {
    schema = undefined
  }

  await new ApiCall({
    pair,
    title: 'List pin objects (GET /pins) in all states',
    fn: async (client) => client.pinsGet({ status: allPinStatuses }),
    schema
  }).expect(responseOk())
    .expect(responseCode(200))
    .runExpectations()
}

export { getAllPins }
