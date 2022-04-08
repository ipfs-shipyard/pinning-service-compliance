
/* eslint-disable no-console */
import { inspect } from 'util'
import chalk from 'chalk'
import { stringifyHeaders } from '../utils/stringifyHeaders'
import { getFormatter } from './formatter'
import { joiValidationAsMarkdown } from './joiValidationAsMarkdown'

const formatter = getFormatter({
  paragraph: chalk.reset,
  heading: chalk.redBright
})
const failure = (details: ComplianceCheckDetails): string => {
  const { request, response, title, url, method, validationResult, result: clientParsedResult } = details
  // console.log('validationResult: ', validationResult)

  // const stringifiedResult =
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const reportEntry = `## ${title} - ✘ FAILED
### Expectations

${details.errors.map((error) => {
  let errorOutput = ''
  if (error.name != null && error.message != null) {
    errorOutput = `* ${error.name} - ${error.message}`
    if (error.stack != null) {
      errorOutput += `
  * ${error.stack}`
    }
  } else {
    errorOutput = `* ${inspect(error)}`
  }
  return errorOutput
}).join('\n')}

### Details

#### Request - ${method}: ${url}
##### Headers
\`\`\`json
${stringifyHeaders(request.headers)}
\`\`\`
##### Body
\`\`\`json
${request.body}
\`\`\`

#### Response data from ${url}
*via util.inspect*
\`\`\`
${inspect(response.json, { depth: 4 })}
\`\`\`

#### Response data after being parsed by RemotePinningServiceClient
*via util.inspect*
\`\`\`
${inspect(clientParsedResult, { depth: 4 })}
\`\`\`

#### Joi validation failures
${joiValidationAsMarkdown(validationResult)}

#### Response - ${response.statusText} (${response.status})
##### Headers
\`\`\`json
${stringifyHeaders(response.headers)}
\`\`\`
##### Body
\`\`\`json
${response.body}
\`\`\``
  console.log(formatter(reportEntry))

  return reportEntry
}

export { failure }
