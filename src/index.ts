/* eslint-disable no-console */

import { getAllPins, checkEmptyBearerToken, checkInvalidBearerToken, addPin, deleteAllPins, testPagination, deleteNewPin, replacePin, matchPin } from './checks'
import { cli } from './cli'
import { writeHeaders } from './output/reporting'
import type { ServiceAndTokenPair } from './types'

// setInterval(() => {
//   const memoryUsage = process.memoryUsage()
//   const keys = Object.keys(memoryUsage) as Array<keyof NodeJS.MemoryUsage>
//   keys.forEach((key) => {
//     console.log(`${key} ${Math.round(memoryUsage[key] / 1024 / 1024 * 100) / 100} MB`)
//   })
// }, 1000)

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
// console.log(cli.argv)
// eslint-disable-next-line no-unexpected-multiline
main().catch((err) => {
  console.error(err)
})

export { validatePinningService }
