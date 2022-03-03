#!/usr/bin/env node

import yargs from 'yargs/yargs'
import { hideBin } from 'yargs/helpers'

import { serviceAndToken } from './options'

const cli = yargs(hideBin(process.argv))

// eslint-disable-next-line @typescript-eslint/func-call-spacing
void cli.options({ serviceAndToken })

const main = async () => {
  const argv = await cli.argv
  // const pinningServicePairs = argv.serviceAndToken as string[] ?? []

  // // console.log('pinningServicePairs.length: ', pinningServicePairs.length)
  // for (let i = 0; i < pinningServicePairs.length; i += 2) {
  //   const [service, key] = pinningServicePairs.slice(i, i + 2)
  for (const [service, key] of argv.serviceAndToken as ServiceAndTokenPairCollection) {
    console.log(service, key)
  }
  // console.log(argv)
}
// console.log(cli.argv)
// eslint-disable-next-line no-unexpected-multiline
main().catch((err) => {
  console.error(err)
})

// https://service.example.com secret-token
