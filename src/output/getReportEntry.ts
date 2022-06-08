
import { inspect } from 'util'

import type { ComplianceCheckDetails, PinsApiResponseTypes } from '../types.js'
import { stringifyHeaders } from '../utils/stringifyHeaders.js'
import { complianceCheckHeader } from './complianceCheckHeader.js'
import { getExpectationsMarkdown } from './getExpectationsMarkdown.js'
import { joiValidationAsMarkdown } from './joiValidationAsMarkdown.js'

const getReportEntry = <T extends PinsApiResponseTypes>(details: ComplianceCheckDetails<T>): string => {
  const { request, response, title, url, method, validationResult, result: clientParsedResult, successful } = details
  const joiValidationMarkdown = joiValidationAsMarkdown(validationResult)
  const reportEntry = `## ${complianceCheckHeader({ title, successful })}

${getExpectationsMarkdown(details)}

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

${
  joiValidationMarkdown !== 'No failures'
  ? `#### Response object doesn't match expected schema:
${joiValidationMarkdown}
  `
  : ''
}
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
\`\`\`json
${inspect(response.json, { depth: 4 })}
\`\`\`
#### Response data after being parsed by RemotePinningServiceClient
\`\`\`json
${inspect(clientParsedResult, { depth: 4 })}
\`\`\`
#### Response - ${response.statusText} (${response.status})
##### Headers
\`\`\`json
${stringifyHeaders(response.headers)}
\`\`\`
##### Body
\`\`\`json
${response.body}
\`\`\`
`

  return reportEntry
}

export { getReportEntry }
