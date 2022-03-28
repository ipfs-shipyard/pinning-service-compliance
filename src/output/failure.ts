
/* eslint-disable no-console */
import { inspect } from 'util'
import type { ValidationError } from '@hapi/joi'
import chalk from 'chalk'
import { stringifyHeaders } from '../utils/stringifyHeaders'
import { getFormatter } from './formatter'

const formatter = getFormatter({
  paragraph: chalk.reset,
  heading: chalk.redBright
})
const failure = (details: ComplianceCheckDetails) => {
  const { request, response, title, url, method, validationResult, result: apiResult } = details
  // console.log('validationResult: ', validationResult)
  let joiValidationFailures: string = 'No failures'
  if (validationResult?.errors != null || validationResult?.error != null) {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    const errors = (validationResult.errors || validationResult.error) as ValidationError
    joiValidationFailures = ''

    errors.details.forEach((errorItem) => {
      // let context = ''
      // if (errorItem.context != null) {
      //   context = `\`\`\`${JSON.stringify(errorItem.context)}\`\`\``
      // }
      // const path = errorItem.path.join('.')
      joiValidationFailures = `${joiValidationFailures}
* ${errorItem.message}
`
    })
  }

  const stringifiedResult = inspect(apiResult, { depth: 4 })
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  console.log(formatter(`## ${title} - ✘ FAILED
### Details
#### Response data from RemotePinningServiceClient
*via util.inspect*
\`\`\`
${stringifiedResult}
\`\`\`
#### Joi validation failures
${joiValidationFailures}
#### Request - ${method}: ${url}
##### Headers
\`\`\`json
${stringifyHeaders(request.headers)}
\`\`\`
##### Body
\`\`\`json
${request.body}
\`\`\`
#### Response - ${response.statusText} (${response.status})
##### Headers
\`\`\`json
${stringifyHeaders(response.headers)}
\`\`\`
##### Body
\`\`\`json
${response.body}
\`\`\``))
}

export { failure }
