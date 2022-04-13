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
import { getHeader } from './getHeader'
import type { ComplianceCheckDetails } from '../types'

const successFormatter = getFormatter({
  paragraph: chalk.reset,
  heading: chalk.green
})

const failureFormatter = getFormatter({
  paragraph: chalk.reset,
  heading: chalk.redBright
})

const getReportFilePath = (hostname: string) => {
  const filename = `${hostname}.md`
  return join(docsDir, filename)
}
// Need summary at the top for each service: # pass/fail
const addToReport = async <T>(details: ComplianceCheckDetails<T>) => {
  const reportEntryMarkdown = getReportEntry(details)
  const formatter = details.successful ? successFormatter : failureFormatter

  const hostname = getHostnameFromUrl(details.url)
  const reportFilePath = getReportFilePath(hostname)

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
    await appendFile(reportFilePath, reportEntryMarkdown)
    console.log(formatter(reportEntryMarkdown))
  } catch (err) {
    console.error(`Unexpected error when attempting to write report entry markdown to ${reportFilePath}`)
    console.error(err)
  }
}

const reports: Map<string, Array<ComplianceCheckDetails<any>>> = new Map()

const addApiCallToReport = async <T>(apiCall: ApiCall<T>) => {
  const { pair, errors, title, httpRequest, result, httpResponse, expectationResults, successful } = apiCall
  const { url, headers: requestHeaders } = httpRequest
  const method = httpRequest.method ?? 'Unknown'
  const requestBody = await httpRequest.clone().text()
  const hostname = getHostnameFromUrl(url)

  const complianceCheckDetails: ComplianceCheckDetails<T> = {
    pair,
    errors: errors.map((expectationError) => expectationError.error),
    expectationResults,
    title,
    url,
    method,
    successful,
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

  if (reports.has(hostname)) {
    const hostReport = reports.get(hostname) as Array<ComplianceCheckDetails<any>>
    hostReport.push(complianceCheckDetails)
  } else {
    reports.set(hostname, [complianceCheckDetails])
  }
}

const createReport = async <T>(hostname: string, details: Array<ComplianceCheckDetails<T>>) => {
  const reportFilePath = getReportFilePath(hostname)

  const header = getHeader(details)
  await writeFile(reportFilePath, header)
  console.log(header)

  for await (const detailItem of details) {
    await addToReport(detailItem)
  }
}

const writeReports = async () => {
  for await (const [hostname, details] of reports.entries()) {
    await createReport(hostname, details)
  }
}

export { addToReport, addApiCallToReport, writeReports }
