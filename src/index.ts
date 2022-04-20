#!/usr/bin/env node
/* eslint-disable no-console */

import { getAllPins, checkEmptyBearerToken, checkInvalidBearerToken, addPin, deleteAllPins, testPagination, deleteNewPin, replacePin, matchPin } from './checks'
import { cli } from './cli'
import { writeHeaders } from './output/reporting'
import type { ServiceAndTokenPair } from './types'

const validatePinningService = async (pair: ServiceAndTokenPair) => {
  const complianceCheckFunctions = [checkEmptyBearerToken, checkInvalidBearerToken, addPin, deleteNewPin, getAllPins, replacePin, matchPin, testPagination, deleteAllPins]
  for await (const complianceCheckFn of complianceCheckFunctions) {
    await complianceCheckFn(pair).catch((err) => {
      console.error(`Problem running compliance check: '${complianceCheckFn.name}'`)
      console.error(err)
    })
  }
}

const main = async () => {
  const argv = await cli.argv

  for await (const [service, key] of argv.serviceAndToken as ServiceAndTokenPair[]) {
    try {
      await validatePinningService([service, key])
    } catch (err) {
      console.error('could not validate pinning service')
      console.error(err)
    }
  }
  await writeHeaders()
}
main().catch((err) => {
  console.error(err)
  process.exit(1)
})

export { validatePinningService }
