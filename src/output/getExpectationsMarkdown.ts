import type { ComplianceCheckDetails, PinsApiResponseTypes } from '../types.js'

const getExpectationsMarkdown = <T extends PinsApiResponseTypes>(details: ComplianceCheckDetails<T>): string => {
  let checks = 0
  let successes = 0
  const lineItems = details.expectationResults.map(({ title, success, error }) => {
    checks++
    if (success) {
      successes++
      return `✓ ${title} (success)`
    }
    return `✘ ${title} (failure)`
  })

  return `### Expectations (${successes}/${checks} successful)

  ${lineItems.join('\n\n  ')}
`
}

export { getExpectationsMarkdown }
