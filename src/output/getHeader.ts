import type { ComplianceCheckDetails, PinsApiResponseTypes } from '../types.js'
import { gitHash } from '../utils/gitHash.js'
import { complianceCheckHeader } from './complianceCheckHeader.js'
import { linkToCommit } from './linkToCommit.js'
import { linkToHeading } from './linkToHeading.js'
import { linkToNpm } from './linkToNpm.js'

type RequiredHeaderProps<T extends PinsApiResponseTypes> = Pick<ComplianceCheckDetails<T>, 'title' | 'successful' | 'pair'>

interface HeaderOptions {
  markdownLinks: boolean
}
const getHeader = async <T extends PinsApiResponseTypes>(details: Array<RequiredHeaderProps<T>>, options: HeaderOptions = { markdownLinks: true }) => {
  const endpointUrl = details[0].pair[0]
  let checks = 0
  let successes = 0
  const useMarkdownLinks = options.markdownLinks

  const dateString = (new Date()).toISOString()
  let revisionString: string | null = null
  let previousRevisionString: string | null = null

  try {
    const currentRevision = await gitHash()
    const prevRevision = await gitHash(1)

    revisionString = useMarkdownLinks ? linkToCommit(currentRevision) : currentRevision
    previousRevisionString = useMarkdownLinks ? linkToCommit(prevRevision) : prevRevision
  } catch {
    revisionString = useMarkdownLinks ? linkToNpm() : process.env.npm_package_version as string
  }

  const titles = details.map(({ title, successful }) => {
    checks++
    const titleLink = useMarkdownLinks ? linkToHeading(title, complianceCheckHeader({ title, successful })) : title
    if (successful) {
      successes++
      return `✓ ${titleLink}`
    }
    return `✘ ${titleLink}`
  })

  return `
# ${endpointUrl} compliance:

Execution Date: ${dateString ?? '(Error getting date)'}

Revision: ${revisionString ?? '(Error getting revision)'}

Previous Revision: ${previousRevisionString ?? '(Error getting previous revision)'}

## Summary (${successes}/${checks} successful)

  ${titles.join('\n\n  ')}

`
}

export { getHeader }
export type { RequiredHeaderProps }
