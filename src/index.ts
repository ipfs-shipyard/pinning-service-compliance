/* eslint-disable no-console */

import chalk from 'chalk'

import { getAllPins, checkEmptyBearerToken, checkInvalidBearerToken } from './checks'
import { getFormatter } from './output/formatter'

const formatter = getFormatter({
  paragraph: chalk.green,
  heading: chalk.green
})
const validatePinningService = async (pair: ServiceAndTokenPair) => {
  console.log(formatter(`# ${pair[0]} compliance:`))
  try {
    await checkEmptyBearerToken(pair)
    await checkInvalidBearerToken(pair)
    await getAllPins(pair)
  } catch (err) {
    console.error('problem running a compliance check')
    console.error(err)
  }
}

export { validatePinningService }
