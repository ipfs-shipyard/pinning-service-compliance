import { Configuration, PinResults, PinsApi } from '@ipfs-shipyard/pinning-service-client'
import type { ListrRenderer, ListrTask } from 'listr2'
import { requestLog, responseLog } from '../../middleware/requestReponseLogger'

const checkInvalidBearerToken = (pair: ServiceAndTokenPair): ListrTask<any, typeof ListrRenderer> => ({
  title: 'Returns 403 for invalid bearer token',
  task: async (ctx, task) => {
    const config = new Configuration({
      basePath: pair[0],
      accessToken: 'foobarabc123' // invalid bearer token
    })

    const client = new PinsApi(config)
    await client.pinsGet({}).then((response: PinResults) => {
      throw new Error('')
    }).catch((response: any | Record<string, any>) => {
      if (response.status === 403) {
        task.output = `${task.title} -> Received 403`
        return
      }
      throw new Error(`${task.title} -> Received ${response.status as string}
      checkInvalidBearerToken
        Request:
        ${JSON.stringify(requestLog.pop())}

        Response:
        ${JSON.stringify(responseLog.pop())}
      `)
    })
  },
  exitOnError: false
})

export { checkInvalidBearerToken }
