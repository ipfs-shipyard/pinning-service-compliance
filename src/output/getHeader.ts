import type { ComplianceCheckDetails, PinsApiResponseTypes, Revision } from '../types.js'

type RequiredHeaderProps<T extends PinsApiResponseTypes> = Pick<ComplianceCheckDetails<T>, 'title' | 'successful' | 'pair' | 'date' | 'revision'>

const getHeader = <T extends PinsApiResponseTypes>(details: Array<RequiredHeaderProps<T>>) => {
  const endpointUrl = details[0].pair[0]
  let checks = 0
  let successes = 0

  let dateString: string | null = null
  let revisionString: Revision | null = null
  const titles = details.map(({ title, successful, date, revision }) => {
    checks++
    dateString = dateString ?? date.toISOString()
    if (revisionString == null) {
      revisionString = `Revision: [${revision}](https://github.com/ipfs-shipyard/pinning-service-compliance/commit/${revision})`
    }
    if (successful) {
      successes++
      return `✓ ${title}`
    }
    return `✘ ${title}`
  })

  return `
# ${endpointUrl} compliance:

Date: ${dateString ?? '(Error getting date)'}

Revision: ${revisionString ?? '(Error getting revision)'}

## Summary (${successes}/${checks} successful)

  ${titles.join('\n\n  ')}

`
}

export { getHeader }
export type { RequiredHeaderProps }
