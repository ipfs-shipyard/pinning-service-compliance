import type { ApiCall } from '../../ApiCall.js'
import type { PinsApiResponseTypes } from '../../types.js'
import { logger } from '../logs.js'
import { sleep } from '../sleep.js'

const TIMEOUT_SECONDS = 5
const handleLargeRequests = async () => await sleep(TIMEOUT_SECONDS * 1000).then(() => { throw new Error(`Attempted to get text from response but it wasn't available within ${TIMEOUT_SECONDS} seconds.`) })

const getText = async <T extends PinsApiResponseTypes>(response: ApiCall<T>['response']): Promise<string> => {
  const actualTextPromise = new Promise((resolve, reject) => {
    response.clone().text().then((result) => {
      resolve(result)
    }, (error) => {
      reject(error)
    })
  })

  return await Promise.race([handleLargeRequests(), actualTextPromise]).then(
    (result) => result as string,
    (error) => {
      logger.debug('Unexpected error when extracting text() from request')
      logger.debug(error)
      throw error
    })
}

export { getText }
