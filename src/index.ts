/* eslint-disable no-console */

import { getAllPins, checkEmptyBearerToken, checkInvalidBearerToken, addPin, deleteAllPins, testPagination, deleteNewPin, replacePin, matchPin } from './checks'
import { writeReports } from './output/reporting'
import type { ServiceAndTokenPair } from './types'

const validatePinningService = async (pair: ServiceAndTokenPair) => {
  try {
    await checkEmptyBearerToken(pair)
    await checkInvalidBearerToken(pair)
    await addPin(pair)
    await deleteNewPin(pair)
    await getAllPins(pair)
    await replacePin(pair)
    await matchPin(pair)
    await testPagination(pair)
    await deleteAllPins(pair)
  } catch (err) {
    console.error('problem running a compliance check')
    console.error(err)
  }
  await writeReports()
}

export { validatePinningService }
