#!/usr/bin/env node
/* eslint-disable no-console */

import yargs from 'yargs/yargs'
import { hideBin } from 'yargs/helpers'

import { serviceAndToken } from './options'
// import { validatePinningService } from '../index'
// import type { ServiceAndTokenPair } from '../types'

const cli = yargs(hideBin(process.argv))

// eslint-disable-next-line @typescript-eslint/func-call-spacing
void cli.options({ serviceAndToken })



export { cli }

// https://service.example.com secret-token
