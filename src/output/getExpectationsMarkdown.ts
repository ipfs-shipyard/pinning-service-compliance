import type { ComplianceCheckDetails } from '../types.js'

const getExpectationsMarkdown = <T>(details: ComplianceCheckDetails<T>): string => {
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

  ${lineItems.join('\n  ')}
`
}

export { getExpectationsMarkdown }
