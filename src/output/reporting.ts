// create separate markdown file per service
import { constants as fsConstants } from 'fs'
import { access, mkdir, writeFile, appendFile, readFile } from 'fs/promises'
import { join } from 'path'

import chalk from 'chalk'

import type { ApiCall } from '../ApiCall.js'
import { docsDir } from '../utils/constants.js'
import { getHostnameFromUrl } from '../utils/getHostnameFromUrl.js'
import { getFormatter } from './formatter.js'
import { getReportEntry } from './getReportEntry.js'
import { getHeader, RequiredHeaderProps } from './getHeader.js'
import type { ComplianceCheckDetails, PinsApiResponseTypes } from '../types.js'
import { logger } from '../utils/logs.js'

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
const addToReport = async <T extends PinsApiResponseTypes>(details: ComplianceCheckDetails<T>) => {
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
      logger.error(`Unexpected error when attempting to create docs directory ${docsDir}`)
      logger.error(err)

      return
    }
  }

  try {
    await appendFile(reportFilePath, reportEntryMarkdown)
    logger.debug(`Wrote markdown to ${reportFilePath}`)

    logger.verbose(formatter(reportEntryMarkdown), { messageOnly: true })
  } catch (err) {
    logger.error(`Unexpected error when attempting to write report entry markdown to ${reportFilePath}`)
    logger.error(err)
  }
}

const reportSummaryInfo: Map<string, Array<RequiredHeaderProps<any>>> = new Map()

const addApiCallToReport = async <T extends PinsApiResponseTypes>(apiCall: ApiCall<T>) => {
  try {
    const { pair, errors, title, httpRequest, result, response, expectationResults, successful, text, validationResult } = await apiCall.reportData()
    const { url, headers: requestHeaders } = httpRequest
    const method = httpRequest.method ?? 'Unknown'
    const requestBody = await httpRequest.text()
    const responseBody = text ?? ''
    const hostname = getHostnameFromUrl(url)

    const headerProps: RequiredHeaderProps<T> = { pair, title, successful }
    const complianceCheckDetails: ComplianceCheckDetails<T> = {
      ...headerProps,
      errors: errors.map((expectationError) => expectationError.error),
      expectationResults,
      url,
      method,
      validationResult,
      result: await result,
      request: {
        body: requestBody,
        headers: requestHeaders ?? {}
      },
      response: {
        json: apiCall.json,
        body: responseBody,
        headers: response.headers,
        status: response.status,
        statusText: response.statusText
      }
    }
    if (apiCall.parent == null) {
      if (reportSummaryInfo.has(hostname)) {
        const hostReport = reportSummaryInfo.get(hostname) as Array<RequiredHeaderProps<any>>
        hostReport.push(headerProps)
      } else {
        reportSummaryInfo.set(hostname, [headerProps])
        // clear out the file
        await writeFile(getReportFilePath(hostname), '')
      }
    }
    await addToReport(complianceCheckDetails)
  } catch (err) {
    logger.error(`Unexpected error while adding details of ApiCall '${apiCall.title}' to report`, err)
  }
}

const createReport = async <T extends PinsApiResponseTypes>(hostname: string, details: Array<RequiredHeaderProps<T>>) => {
  const reportFilePath = getReportFilePath(hostname)

  const header = getHeader(details)
  const fileContents = await readFile(reportFilePath, 'utf8')
  await writeFile(reportFilePath, header + fileContents)
  const consoleHeader = `${header.replace(/#+ /gm, '')}\nSee the full report at ${reportFilePath}`
  logger.info(consoleHeader, { messageOnly: true })
}

const writeHeaders = async () => {
  for await (const [hostname, details] of reportSummaryInfo.entries()) {
    await createReport(hostname, details)
  }
}

export { addToReport, addApiCallToReport, writeHeaders }
