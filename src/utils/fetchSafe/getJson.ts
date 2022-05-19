import type { ApiCall } from '../../ApiCall.js'
import { logger } from '../logs.js'

const getJson = async <T>(response: ApiCall<T>['response']): Promise<T|null> => {
  const clone = response //.clone()

  return await clone.json().catch((err) => {
    logger.error(err)
    return null
  }) as T | null
}

export { getJson }
