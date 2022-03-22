/* eslint-disable no-console */
import { Configuration, PinResults, PinsApi } from '@ipfs-shipyard/pinning-service-client'
import type { ListrRenderer, ListrTask } from 'listr2'
import { requestLog, responseLog } from '../../middleware/requestReponseLogger'

const checkEmptyBearerToken = (pair: ServiceAndTokenPair): ListrTask<any, typeof ListrRenderer> => ({
  title: 'Returns 403 without bearer token',
  task: async (ctx, task) => {
    const config = new Configuration({
      basePath: pair[0],
      accessToken: undefined // no bearer token
    })

    const client = new PinsApi(config)
    await client.pinsGet({}).then((response: PinResults) => {
      console.log(requestLog.pop(), 'checkEmptyBearerToken')
      console.log(responseLog.pop(), 'checkEmptyBearerToken')
      throw new Error('')
    }).catch((response: any | Record<string, any>) => {
      if (response.status === 403) {
        task.output = `${task.title} -> Received 403`
        return
      }
      throw new Error(`${task.title} -> Received ${response.status as string}`)
    })
  },
  exitOnError: false
})

export { checkEmptyBearerToken }
