import type { ComplianceCheckDetails, PinsApiResponseTypes } from '../types.js'
import { Icons } from '../utils/constants.js'
import { getHostnameFromUrl } from '../utils/getHostnameFromUrl.js'
import { gitHash } from '../utils/gitHash.js'
import { logger } from '../utils/logs.js'
import { markdownLinkToTextLabel } from '../utils/markdownLinkToTextLabel.js'
import { complianceCheckHeader } from './complianceCheckHeader.js'
import { linkToCommit } from './linkToCommit.js'
import { linkToGithubRepo } from './linkToGithubRepo.js'
import { linkToHeading } from './linkToHeading.js'
import { linkToNpm } from './linkToNpm.js'

type RequiredHeaderProps<T extends PinsApiResponseTypes> = Pick<ComplianceCheckDetails<T>, 'title' | 'successful' | 'pair'>

interface HeaderOptions {
  markdownLinks: boolean
}
const getHeader = async <T extends PinsApiResponseTypes>(details: Array<RequiredHeaderProps<T>>, options: HeaderOptions = { markdownLinks: true }) => {
  const endpointUrl = details[0].pair[0]
  const useMarkdownLinks = options.markdownLinks
  const hostname = getHostnameFromUrl(endpointUrl)
  let checks = 0
  let successes = 0

  const dateString = (new Date()).toISOString()
  let revisionString: string | null = null

  try {
    const currentRevision = await gitHash()

    revisionString = useMarkdownLinks ? linkToCommit(currentRevision) : currentRevision
  } catch (err) {
    logger.error('Could not obtain latest git hash', err)
    logger.info('No git repository, using npm version')
    revisionString = useMarkdownLinks ? linkToNpm() : process.env.npm_package_version as string
  }

  const titles = details.map(({ title, successful }) => {
    checks++
    const titleLink = useMarkdownLinks ? linkToHeading(title, complianceCheckHeader({ title, successful })) : title
    if (successful) {
      successes++
      return `${Icons.SUCCESS} ${titleLink}`
    }
    return `${Icons.FAILURE} ${titleLink}`
  })

  const reportHistory = linkToGithubRepo('Report History', `commits/gh-pages/${hostname}.md`)

  return `
<script src="./telemetry.js"></script>
# ${endpointUrl} compliance:

Execution Date: ${dateString ?? '(Error getting date)'}

Revision: ${revisionString ?? '(Error getting revision)'}

${useMarkdownLinks ? reportHistory : markdownLinkToTextLabel(reportHistory)}

## Summary (${successes}/${checks} successful)

  ${titles.join('\n\n  ')}

`
}

export { getHeader }
export type { RequiredHeaderProps }
