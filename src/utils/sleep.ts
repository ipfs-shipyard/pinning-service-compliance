import { logger } from './logs.js'

const sleep = async (delay: number): Promise<void> => {
  logger.debug(`starting sleep for ${delay / 1000} seconds...`)
  await new Promise<void>((resolve) => setTimeout(() => {
    logger.debug('done waiting')
    resolve()
  }, delay))
}

export { sleep }
