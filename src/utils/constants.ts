import { join, resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

import oas2joi from 'oas2joi'
import type { Schema as JoiSchema } from '@hapi/joi'

import { Status } from '@ipfs-shipyard/pinning-service-client'
import type { PinningSpecJoiSchema } from '../types.js'

const _filename = fileURLToPath(import.meta.url)
const _dirname = dirname(_filename)

const allPinStatuses = new Set([Status.Failed, Status.Pinned, Status.Pinning, Status.Queued])

const specVersion = 'v1.0.0'
const specFile = 'ipfs-pinning-service.yaml'
const specLocation = `https://raw.githubusercontent.com/ipfs/pinning-services-api-spec/${specVersion}/${specFile}`

const joiSchemaFile = 'joiSchema.json'
const downloadDir = resolve(_dirname, '..', '..', 'downloaded')
const generatedDir = resolve(_dirname, '..', '..', 'generated')
const docsDir = resolve(_dirname, '..', '..', 'docs')

enum Icons {
  SUCCESS = '✓',
  FAILURE = '✘',
  ERROR = '⚠'
}

export {
  allPinStatuses,
  docsDir,
  downloadDir,
  generatedDir,
  specFile,
  specLocation,
  specVersion,
  Icons
}
