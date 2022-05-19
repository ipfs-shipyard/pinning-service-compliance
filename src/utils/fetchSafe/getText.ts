import type { ApiCall } from '../../ApiCall.js'
import { logger } from '../logs.js'

const getText = async <T>(response: ApiCall<T>['response']): Promise<string> => {
  const clone = response.clone()

  return await clone.text().catch((err) => {
    logger.error(err)
    return ''
  })
}

export { getText }
