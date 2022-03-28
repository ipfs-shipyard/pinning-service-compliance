// /* eslint-disable etc/prefer-interface */
// /* eslint-disable @typescript-eslint/consistent-type-definitions */
// /* eslint-disable @typescript-eslint/no-throw-literal */
// /* eslint-disable no-console */
// import type { ListrRenderer, ListrTask, ListrTaskWrapper } from 'listr2'
// import { PinResults, Status } from '@ipfs-shipyard/pinning-service-client'

import type { PinResults } from '@ipfs-shipyard/pinning-service-client'
import { Check } from '../Check'

// import { clientFromServiceAndTokenPair } from '../../clientFromServiceAndTokenPair'
// import { getJoiSchema } from '../../constants'
// import type { ApiResponse } from '@ipfs-shipyard/pinning-service-client'
// // import { requestLog, responseLog } from '../../middleware/requestReponseLogger'

// const getAllPinsTask = (pair: ServiceAndTokenPair) => async (ctx?: any, task?: ListrTaskWrapper<any, typeof ListrRenderer>) => {
//   const joiSchema = await getJoiSchema()
//   const client = clientFromServiceAndTokenPair(pair)

//   try {
//     const pinResults: ApiResponse<PinResults> = await client.pinsGetRaw({ status: new Set([Status.Failed, Status.Pinned, Status.Pinning, Status.Queued]) }) // .then((pinResults: ApiResponse<PinResults>) => {
//     const schemaResult = joiSchema.PinResults.validate(pinResults)
//     // client.pinsGet({ }).then((pinResults) => {
//     // throw new Error(JSON.stringify(pinResults) + Object.keys(pinResults).toString())
//     if (schemaResult.errors != null) {
//       schemaResult.errors.details.forEach((error) => {
//         // task.report(new Error(`${error.type} - ${error.message}`), ListrErrorTypes.HAS_FAILED)
//         console.log(`${error.type} - ${error.message}`)
//       })
//       throw schemaResult.errors
//     }
//     // if ((result.error != null)) {
//     //   task.report(result.error, ListrErrorTypes.HAS_FAILED)
//     //   throw result.error
//     // }
//   } catch (reason) {
//     console.error(reason)
//   }
//   // console.log(requestLog.pop(), 'getAllPins')
//   // console.log(responseLog.pop(), 'getAllPins')
// }
// const getAllPins = (pair: ServiceAndTokenPair): ListrTask<any, typeof ListrRenderer> => ({
//   title: 'List pin objects (GET /pins) in all states',
//   task: getAllPinsTask(pair)
// })

// export { getAllPins, getAllPinsTask }

const getAllPins = async (pair: ServiceAndTokenPair) => await Check<PinResults>({
  pair,
  title: 'List pin objects (GET /pins) in all states',
  // schema: joiSchema.PinResults.custom((val, helpers) => {
  //   console.log('in custom validation function')
  //   console.log(val)
  //   return val
  // }),
  runCheck: async (details) => {
    const result = details.result
    if (result != null) {
      if (result.count !== result.count + 0) {
        return false
      }
      if (result.results.size == null || result.results.add == null || result.results.entries == null) {
        return false
      }
      return true
    }
    return false
  },
  apiCall: async (client) => await client.pinsGet({})
})

export { getAllPins }
