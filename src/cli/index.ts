#!/usr/bin/env node
/* eslint-disable no-console */

import yargs from 'yargs/yargs'
import { hideBin } from 'yargs/helpers'

import { serviceAndToken } from './options'
import { validatePinningService } from '../index'

const cli = yargs(hideBin(process.argv))

// eslint-disable-next-line @typescript-eslint/func-call-spacing
void cli.options({ serviceAndToken })

const main = async () => {
  const argv = await cli.argv

  for await (const [service, key] of argv.serviceAndToken as ServiceAndTokenPairCollection) {
    try {
      await validatePinningService([service, key])
    } catch (err) {
      console.error('could not validate pinning service')
    }
  }
}
// console.log(cli.argv)
// eslint-disable-next-line no-unexpected-multiline
main().catch((err) => {
  console.error(err)
})

// https://service.example.com secret-token
