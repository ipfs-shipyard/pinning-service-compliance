/* eslint-disable no-console */
import chalk from 'chalk'
import { getFormatter } from './formatter'

const formatter = getFormatter({
  paragraph: chalk.green,
  heading: chalk.green
})
const success = (details: ComplianceCheckDetails) => {
  console.log(formatter(`## ${details.title} - ✓ SUCCESS`))
}

export { success }
