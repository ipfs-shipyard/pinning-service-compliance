import type { ApiCall } from '../../ApiCall.js'
// import { logger } from '../logs.js'
import { getText } from './getText.js'

// const catchHandler = (err: Error) => {
//   logger.error(err)
//   return ''
// }

const getTextAndJson = async <T>(response: ApiCall<T>['response']): Promise<{ text: string | null, json: T | null, errors: Error[] }> => {
  const errors: Error[] = []
  let text: string | null = null
  let json: T | null = null
  try {
    text = await getText(response)
    if (text != null) {
      try {
        json = JSON.parse(text) as T
      } catch (err) {
        // logger.error(err)
        errors.push(err)
      }
    }
  } catch (err) {
    errors.push(err as Error)
  }

  // console.log(`errors: `, errors);

  return {
    text,
    json,
    errors
  }
}

export { getTextAndJson }
