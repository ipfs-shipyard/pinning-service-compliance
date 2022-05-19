import type { ApiCall } from '../../ApiCall.js'
import { logger } from '../logs.js'

const catchHandler = (err: Error) => {
  logger.error(err)
  return ''
}
const getText = async <T>(response: ApiCall<T>['response']): Promise<string> => {
  logger.debug('before response.clone')
  const clone = response //.clone()
  logger.debug('after response.clone')

  try {
    return await clone.text().catch(catchHandler)
  } catch (err) {
    return catchHandler(err as Error)
  }
}

export { getText }
