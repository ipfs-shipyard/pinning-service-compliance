#!/usr/bin/env node
import { writeSync } from 'fs'
import process from 'node:process'

import { getAllPins, checkEmptyBearerToken, checkInvalidBearerToken, addPin, deleteAllPins, testPagination, deleteNewPin, replacePin, matchPin } from './checks/index.js'
import { cli } from './cli/index.js'
import { serviceAndToken } from './cli/options/index.js'
import { isError } from './guards/isError.js'
import { writeHeaders } from './output/reporting.js'
import type { ServiceAndTokenPair } from './types.js'
import { logger } from './utils/logs.js'
import { globalReport } from './utils/report.js'

const validatePinningService = async (pair: ServiceAndTokenPair) => {
  const complianceCheckFunctions = [checkEmptyBearerToken, checkInvalidBearerToken, addPin, deleteNewPin, getAllPins, replacePin, matchPin, testPagination, deleteAllPins]

  for await (const complianceCheckFn of complianceCheckFunctions) {
    logger.debug(`Starting compliance check '${complianceCheckFn.name}'`)
    try {
      await complianceCheckFn(pair)
    } catch (error) {
      const msg = `Problem running compliance check: '${complianceCheckFn.name}'`
      if (isError(error)) {
        // nothing
        logger.debug(msg, { error })
      } else {
        logger.error(msg)
      }
      // throw error
      // if (typeof error === 'string') {
      //   logger.error(`${msg}: ${error}`)
      // } else {
      //   logger.error(msg, error)
      // }
    } finally {
      // console.log('wut')
      logger.debug(`Completed compliance check '${complianceCheckFn.name}'`)
    }
  }
}

const main = async () => {
  const argv = await cli.option('serviceAndToken', { require: true, ...serviceAndToken }).argv

  for await (const serviceAndToken of argv.serviceAndToken) {
    const [service, key] = serviceAndToken

    try {
      await validatePinningService([service, key])
    } catch (err) {
      logger.error('could not validate pinning service')
      logger.error(err)
    }
  }
  try {
    await writeHeaders()
  } catch (err) {
    logger.error(err)
  }
}

const getUncaughtListener = (type: 'unhandledRejection' | 'uncaughtException' | 'uncaughtExceptionMonitor'): NodeJS.UncaughtExceptionListener => (err, origin) => {
  console.log('getUncaughtListener: ', getUncaughtListener)
  logger.info(type, err)
  writeSync(
    process.stderr.fd,
    `Caught exception: ${JSON.stringify(err, null, 2)}\n`
  )
  writeSync(
    process.stdout.fd,
    `Caught exception: ${JSON.stringify(err, null, 2)}\n`
  )
}
process.on('uncaughtExceptionMonitor', getUncaughtListener('uncaughtExceptionMonitor'))
process.on('unhandledRejection', getUncaughtListener('unhandledRejection'))
process.on('uncaughtException', getUncaughtListener('uncaughtException'))

main().catch((err) => {
  console.error('Main process error caught', err)
  logger.error(err)
  logger.debug('Exiting process due to unexpected error')
  // process.exit(1)
}).finally(() => {
  logger.info(globalReport)
})
