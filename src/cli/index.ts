import yargs from 'yargs/yargs'
import { hideBin } from 'yargs/helpers'

import { serviceAndToken } from './options'

const cli = yargs(hideBin(process.argv)).options({ serviceAndToken })

export { cli }
