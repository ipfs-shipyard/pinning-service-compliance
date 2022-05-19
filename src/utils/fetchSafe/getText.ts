import type { ApiCall } from '../../ApiCall.js'
import { logger } from '../logs.js'
import { sleep } from '../sleep.js'

// const catchHandler = (error: Error) => {
//   logger.debug('fn:getText CATCH')
//   logger.error('Could not get text from response', { error })
//   return ''
// }
const TIMEOUT_SECONDS = 15
const handleLargeRequests = () => sleep(TIMEOUT_SECONDS * 1000).then(() => {throw new Error(`Attempted to get text from response but it wasn't available within ${TIMEOUT_SECONDS} seconds.`)})

const getText = async <T>(response: ApiCall<T>['response']): Promise<string> => {
    logger.debug('fn:getText START')
    debugger
  process.on('unhandledRejection', (error) => {
    logger.debug('fn:getText unhandledRejection')
    logger.error('UnhandledRejection', {error})
  })
    process.on('uncaughtException', (error) => {
    logger.debug('fn:getText uncaughtException')
    logger.error('uncaughtException', {error})
  })

  // await sleep(50000)

  const actualTextPromise = new Promise((resolve, reject) => {
    response.text().then((result) => {
      logger.debug('fn:getText:newPromise THEN')
      resolve(result)
    }, (error) => {
      logger.debug('fn:getText:newPromise CATCH')
      reject(error)
    })
  })

  return Promise.race([handleLargeRequests(), actualTextPromise]).then((result) => {
    console.debug(`fn:getText:Promise.race THEN: `, result);

    return result as string
  }, (error) => {
    logger.debug('fn:getText:Promise.race CATCH')
    logger.debug(error)
    return ''
  })

  // let result = ''
  // // try {
  // logger.debug('fn:getText TRY')
  // result = await response.text().then((result) => {
  //   logger.debug('fn:getText THEN')
  //   return result}, catchHandler).finally(() => {
  //   logger.debug('fn:getText FINALLY')

  //   })
  // // } catch (err) {
  //   // logger.debug('fn:getText CATCH')
  //   // result = catchHandler(err as Error)
  // // } finally {
  //   // logger.debug('fn:getText FINALLY')
  // // }
  // logger.debug('fn:getText END')
  // return result
}

export { getText }
