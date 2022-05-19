import type { Response } from 'node-fetch'

import type { ApiCall } from '../ApiCall.js'
import { getText } from './fetchSafe/getText.js'
import { logger } from './logs.js'

const responseHasContent = async <T>(response: Response | ApiCall<T>['response']): Promise<boolean> => {
  logger.debug('Checking to see if response has content')
  const clone = response //.clone()
  // console.log(clone.headers)
  // const body = response.clone().body
  // console.log('body: ', body)

  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (clone.headers.has('content-length')) {
    const contentLength = Number(clone.headers.get('content-length'))
    logger.debug(`response has content-length header. content length = ${contentLength}`)
    return contentLength > 0
  } else {
    logger.debug('Response has no content-length header.')
    // console.log('clone.headers', clone.headers)
  }
  try {
    // debugger
    logger.debug('before clone.text()')
    // debugger
    const text = await getText(response)
    logger.debug('after clone.text()')
    // console.log('text: ', text)
    const length = text.length
    return length > 0
  } catch (err) {
    logger.debug('caught error')
    logger.error(err)
    return false
  }
  // return (await clone.text()).length > 0
}

export { responseHasContent }
