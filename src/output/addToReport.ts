/* eslint-disable no-console */
// create separate markdown file per service

import { constants as fsConstants } from 'fs'
import { access, mkdir, writeFile } from 'fs/promises'
import { join } from 'path'

import { docsDir } from '../utils/constants'
import { getHostnameFromUrl } from '../utils/getHostnameFromUrl'
import { failure } from './failure'
import { success } from './success'

const reportsStarted: Set<string> = new Set()

// Need summary at the top for each service: # pass/fail
const addToReport = async (details: ComplianceCheckDetails) => {
  const { successful } = details
  let reportEntryMarkdown = ''
  if (successful) {
    reportEntryMarkdown = success(details)
  } else {
    reportEntryMarkdown = failure(details)
  }
  const hostname = getHostnameFromUrl(details.url)
  const filename = `${hostname}.md`
  const reportFilePath = join(docsDir, filename)

  try {
    await access(docsDir, fsConstants.R_OK | fsConstants.W_OK)
  } catch (err) {
    try {
      await mkdir(docsDir, { recursive: true })
    } catch (err) {
      console.error(`Unexpected error when attempting to create docs directory ${docsDir}`)
      console.error(err)

      return
    }
  }

  try {
    if (!reportsStarted.has(hostname)) {
      await writeFile(reportFilePath, `# ${details.pair[0]} compliance:`)
      reportsStarted.add(hostname)
    }
    await writeFile(reportFilePath, reportEntryMarkdown, { mode: fsConstants.O_APPEND })
  } catch (err) {
    console.error(`Unexpected error when attempting to write report entry markdown to ${reportFilePath}`)
    console.error(err)
  }
}
export { addToReport }
