/* eslint-disable no-console */
// create separate markdown file per service
import { constants as fsConstants } from 'fs'
import { access, mkdir, writeFile, appendFile } from 'fs/promises'
import { join } from 'path'

import chalk from 'chalk'

import type { ApiCall } from '../ApiCall'
import { docsDir } from '../utils/constants'
import { getHostnameFromUrl } from '../utils/getHostnameFromUrl'
import { getFormatter } from './formatter'
import { getReportEntry } from './getReportEntry'
// import { success } from './success'

const reportsStarted: Set<string> = new Set()

const successFormatter = getFormatter({
  paragraph: chalk.reset,
  heading: chalk.green
})

const failureFormatter = getFormatter({
  paragraph: chalk.reset,
  heading: chalk.redBright
})
// Need summary at the top for each service: # pass/fail
const addToReport = async <T>(details: ComplianceCheckDetails<T>) => {
  // const { successful } = details
  const reportEntryMarkdown = getReportEntry(details)
  const formatter = details.successful ? successFormatter : failureFormatter
  // if (successful) {
  //   reportEntryMarkdown = success(details)
  // } else {
  //   reportEntryMarkdown = failure(details)
  // }
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
    // console.log('reportsStarted: ', reportsStarted)
    // console.log('reportsStarted.has(hostname): ', reportsStarted.has(hostname))
    if (!reportsStarted.has(hostname)) {
      const header = `# ${details.pair[0]} compliance:\n\n`
      await writeFile(reportFilePath, header)
      console.log(formatter(header))
      reportsStarted.add(hostname)
    }
    await appendFile(reportFilePath, reportEntryMarkdown)
    console.log(formatter(reportEntryMarkdown))
  } catch (err) {
    console.error(`Unexpected error when attempting to write report entry markdown to ${reportFilePath}`)
    console.error(err)
  }
}

const addApiCallToReport = async <T>(apiCall: ApiCall<T>) => {
  const { pair, errors, title, httpRequest, result, httpResponse, failures, successes } = apiCall
  const { url, headers: requestHeaders } = httpRequest
  const method = httpRequest.method ?? 'Unknown'
  const requestBody = await httpRequest.clone().text()

  const complianceCheckDetails: ComplianceCheckDetails<T> = {
    pair,
    errors: errors.map((expectationError) => expectationError.error),
    failures,
    successes,
    title,
    url,
    method,
    successful: errors.length + failures.length === 0,
    validationResult: apiCall.validationResult,
    result: await result,
    request: {
      body: requestBody,
      headers: requestHeaders ?? {}
    },
    response: {
      json: apiCall.json,
      body: apiCall.text ?? '',
      headers: httpResponse.headers,
      status: httpResponse.status,
      statusText: httpResponse.statusText
    }
  }

  await addToReport(complianceCheckDetails)
}
export { addToReport, addApiCallToReport }
