import type { ComplianceCheckDetails } from '../types'

const getHeader = <T>(details: Array<ComplianceCheckDetails<T>>) => {
  const endpointUrl = details[0].pair[0]
  let checks = 0
  let successes = 0

  const titles = details.map(({ title, successful }) => {
    checks++
    if (successful) {
      successes++
      return `✓ ${title}`
    }
    return `✘ ${title}`
  })

  return `
# ${endpointUrl} compliance:

## Summary (${successes}/${checks} successful)

  ${titles.join('\n  ')}

`
}

export { getHeader }
