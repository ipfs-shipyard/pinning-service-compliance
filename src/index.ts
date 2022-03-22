/* eslint-disable no-console */
import { clientFromServiceAndTokenPair } from './clientFromServiceAndTokenPair'
// import { Listr } from 'listr2'

// import { getAllPins } from './checks/get/getAllPins'
// import { checkEmptyBearerToken } from './checks/auth/checkEmptyBearerToken'
// import { checkInvalidBearerToken } from './checks/auth/checkInvalidBearerToken'

const validatePinningService = async (pair: ServiceAndTokenPair) => {
  const client = clientFromServiceAndTokenPair(pair)

  client.pinsGet({}, {
    // headers: {
    //   Authorization: 'Bearer foobar'
    // }
  }).then((results) => {
    // console.log('results: ', results)
    console.log('got result')
    return results
  }).catch((reason) => {
    console.log('caught error')
    console.log('reason: ', reason)
  })
  // const checks = new Listr([
  //   {
  //     title: `Pinning service '${pair[0]}'`,
  //     task: (ctx, task): Listr => task.newListr([
  //       checkEmptyBearerToken(pair),
  //       checkInvalidBearerToken(pair),
  //       getAllPins(pair)
  //     ])
  //   }
  // ], {
  //   exitOnError: false
  // })
  // await checks.run()
  // const checks: Check[] = [

  //   new Check(client, 'pinsGet', {
  //     status: new Set([Status.Failed, Status.Pinned, Status.Pinning, Status.Queued])
  //   }),
  //   new Check(client, 'pinsPost', {
  //     pin: {
  //       cid: 'bafybeibwzifw52ttrkqlikfzext5akxu7lz4xiwjgwzmqcpdzmp3n5vnbe' // 1x1.png
  //     }
  //   }),
  //   new Check(client, 'pinsRequestidDelete', {
  //     requestid: 'bafybeibwzifw52ttrkqlikfzext5akxu7lz4xiwjgwzmqcpdzmp3n5vnbe'
  //   })
  // ]

  // const runner = new CheckRunner(checks)

  // await runner.run()
}

export { validatePinningService }
