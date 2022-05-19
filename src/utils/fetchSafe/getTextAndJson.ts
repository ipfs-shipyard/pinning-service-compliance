import type { ApiCall } from '../../ApiCall.js'
import { logger } from '../logs.js'
import { getText } from './getText.js'

// const catchHandler = (err: Error) => {
//   logger.error(err)
//   return ''
// }

const getTextAndJson = async <T>(response: ApiCall<T>['response']): Promise<{ text: string, json: T | null }> => {
  const text = await getText(response.clone())
  let json: T | null = null
  try {
    json = text != null ? JSON.parse(text) as T : null
  } catch (err) {
    logger.error(err)
  }

  return {
    text,
    json
  }
}

export { getTextAndJson }
