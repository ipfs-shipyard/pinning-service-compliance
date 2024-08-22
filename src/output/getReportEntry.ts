import { stringifyHeaders } from '../utils/stringifyHeaders.js'
import { complianceCheckHeader } from './complianceCheckHeader.js'
import { getErrorsMarkdown } from './getErrorsMarkdown.js'
import { getExpectationsMarkdown } from './getExpectationsMarkdown.js'
import { joiValidationAsMarkdown } from './joiValidationAsMarkdown.js'
import type { ComplianceCheckDetails, PinsApiResponseTypes } from '../types.js'

const getReportEntry = <T extends PinsApiResponseTypes>(details: ComplianceCheckDetails<T>): string => {
  const { request, response, title, url, method, validationResult, result: clientParsedResult, successful, errors } = details
  const joiValidationMarkdown = joiValidationAsMarkdown(validationResult)
  const reportEntry = `## ${complianceCheckHeader({ title, successful })}

${getExpectationsMarkdown(details)}

${
  errors.length > 0
  ? `### Errors during run
${getErrorsMarkdown(errors)}`
  : ''
}

${
  joiValidationMarkdown !== 'No failures'
  ? `#### Response object doesn't match expected schema:
${joiValidationMarkdown}
  `
  : ''
}
### Details

#### Request
\`\`\`
${method} ${url}
\`\`\`
##### Headers
\`\`\`json
${stringifyHeaders(request.headers)}
\`\`\`
##### Body
\`\`\`json
${request.body}
\`\`\`

#### Response
\`\`\`
${response.status} ${response.statusText}
\`\`\`
##### Headers
\`\`\`json
${stringifyHeaders(response.headers)}
\`\`\`
##### Body
\`\`\`json
${response.body}
\`\`\`

##### Body (as JSON)
\`\`\`json
${JSON.stringify(response.json, null, 2)}
\`\`\`
##### Body (parsed by [pinning-service-client](https://www.npmjs.com/package/@ipfs-shipyard/pinning-service-client))
\`\`\`json
${JSON.stringify(clientParsedResult, null, 2)}
\`\`\`
`

  return reportEntry
}

export { getReportEntry }
