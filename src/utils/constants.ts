import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

// import oas2joi from 'oas2joi'
// import type { Schema as JoiSchema } from '@hapi/joi'

import { Status } from '@ipfs-shipyard/pinning-service-client'
// import type { PinningSpecJoiSchema } from '../types.js'
// import { getPinningSpec } from '../getPinningSpec.js'
// import { logger } from './logs'
// import Joi from '@hapi/joi'

const _filename = fileURLToPath(import.meta.url)
const _dirname = dirname(_filename)

const allPinStatuses = new Set([Status.Failed, Status.Pinned, Status.Pinning, Status.Queued])

const specVersion = 'v1.0.0'
const specFile = 'ipfs-pinning-service.yaml'
const specLocation = `https://raw.githubusercontent.com/ipfs/pinning-services-api-spec/${specVersion}/${specFile}`

// const joiSchemaFile = 'joiSchema.json'
const downloadDir = resolve(_dirname, '..', '..', 'downloaded')
const generatedDir = resolve(_dirname, '..', '..', 'generated')
const docsDir = resolve(_dirname, '..', '..', 'docs')

// const localSpecPath = join(downloadDir, specFile)
// const localJoiSchemaPath = join(generatedDir, joiSchemaFile)

// eslint-disable-next-line @typescript-eslint/no-namespace
// declare namespace Joi {
enum Icons {
  SUCCESS = '✓',
  FAILURE = '✘',
  ERROR = '⚠'
}
// type Schema = JoiSchema & InnerSchema
// interface InnerSchemaChild {
//   key: string
//   schema: JoiSchema
// }

// interface InnerSchema {
//   _inner: {
//     children: InnerSchemaChild[]
//     dependencies: any[]
//     patterns: any[]
//     renames: any[]
//   }
// }
// }

// const getJoiSchemaPath = (schemaName: string) => join(generatedDir, `${schemaName}JoiSchema.json`)

export {
  allPinStatuses,
  docsDir,
  downloadDir,
  generatedDir,
  //   getJoiSchemaPath,
  //   localSpecPath,
  //   localJoiSchemaPath,
  specFile,
  specLocation,
  specVersion,
  Icons
}
