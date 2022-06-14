import { inspect } from 'util'

import { Icons } from '../utils/constants.js'

const errorToMarkdown = (error: Error) => {
  let errorOutput = ''
  if (error.stack != null) {
    errorOutput = `
  ${Icons.ERROR} ${error.stack}`
  } else if (error.name != null && error.message != null) {
    errorOutput = `${Icons.ERROR} ${error.name} - ${error.message}`
  } else {
    errorOutput = `${Icons.ERROR} ${inspect(error)}`
  }
  return errorOutput
}
const getErrorsMarkdown = (errors: Error[]) => errors.map(errorToMarkdown).join('\n')

export { getErrorsMarkdown }
