import { Icons } from '../utils/constants.js'
import type { ComplianceCheckDetails, PinsApiResponseTypes } from '../types.js'

const getExpectationsMarkdown = <T extends PinsApiResponseTypes>(details: ComplianceCheckDetails<T>): string => {
  let checks = 0
  let successes = 0
  const lineItems = details.expectationResults.map(({ title, success, error }) => {
    checks++
    if (success) {
      successes++
      return `${Icons.SUCCESS} ${title} (success)`
    }
    return `${Icons.FAILURE} ${title} (failure)`
  })

  return `### Expectations (${successes}/${checks} successful)

  ${lineItems.join('\n\n  ')}
`
}

export { getExpectationsMarkdown }
