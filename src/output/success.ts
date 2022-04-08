/* eslint-disable no-console */
import chalk from 'chalk'
import { getFormatter } from './formatter'

const formatter = getFormatter({
  paragraph: chalk.green,
  heading: chalk.green
})
const success = (details: ComplianceCheckDetails) => {
  const reportEntry = `## ${details.title} - ✓ SUCCESS`
  console.log(formatter(reportEntry))

  return reportEntry
}

export { success }
