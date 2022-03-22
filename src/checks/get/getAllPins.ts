/* eslint-disable @typescript-eslint/no-throw-literal */
/* eslint-disable no-console */
import { ListrErrorTypes, ListrRenderer, ListrTask } from 'listr2'
import { PinResults, Status } from '@ipfs-shipyard/pinning-service-client'

import { clientFromServiceAndTokenPair } from '../../clientFromServiceAndTokenPair'
import { getJoiSchema } from '../../constants'
import type { ApiResponse } from '@ipfs-shipyard/pinning-service-client'
import { requestLog, responseLog } from '../../middleware/requestReponseLogger'

const getAllPins = (pair: ServiceAndTokenPair): ListrTask<any, typeof ListrRenderer> => ({
  title: 'List pin objects (GET /pins) in all states',
  task: async (ctx, task) => {
    const joiSchema = await getJoiSchema()
    const client = clientFromServiceAndTokenPair(pair)

    await client.pinsGetRaw({ status: new Set([Status.Failed, Status.Pinned, Status.Pinning, Status.Queued]) }).then((pinResults: ApiResponse<PinResults>) => {
    // client.pinsGet({ }).then((pinResults) => {
      // const result = joiSchema.PinResults.validate(pinResults)
      throw new Error(JSON.stringify(pinResults) + Object.keys(pinResults).toString())
      // if (result.errors != null) {
      //   result.errors.details.forEach((error) => {
      //     task.report(new Error(`${error.type} - ${error.message}`), ListrErrorTypes.HAS_FAILED)
      //   })
      //   throw result.errors
      // }
      // if ((result.error != null)) {
      //   task.report(result.error, ListrErrorTypes.HAS_FAILED)
      //   throw result.error
      // }
    }).catch((response) => {
      console.error(response)
    })
    console.log(requestLog.pop(), 'getAllPins')
    console.log(responseLog.pop(), 'getAllPins')
  }
})

export { getAllPins }
