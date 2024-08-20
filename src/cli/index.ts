import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { serviceAndToken, verbose, debug } from './options/index.js'
import type { ServiceAndTokenPair } from '../types.js'

const cli = yargs(hideBin(process.argv)).options({
  serviceAndToken,
  verbose,
  debug
})

/**
 * yargs typings can be extremely naive and incorrect
 */
const argv = cli.argv as {
  [x: string]: unknown
  serviceAndToken: ServiceAndTokenPair[]
  verbose: boolean
  debug: boolean
  _: Array<string | number>
  $0: string
}

export { cli, argv }
