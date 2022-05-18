import { logger } from './logs.js'

const responseHasContent = async (response: Response) => {
  logger.debug('Checking to see if response has content')
  const clone = response.clone()
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
  }
  try {
    const text = await clone.text()
    // console.log('text: ', text)
    const length = text.length
    return length > 0
  } catch (err) {
    logger.error(err)
    return false
  }
  // return (await clone.text()).length > 0
}

export { responseHasContent }
