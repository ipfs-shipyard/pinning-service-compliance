import type { ApiCall } from '../../ApiCall.js'
import { getText } from './getText.js'

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
        errors.push(err as Error)
      }
    }
  } catch (err) {
    errors.push(err as Error)
  }

  return {
    text,
    json,
    errors
  }
}

export { getTextAndJson }
