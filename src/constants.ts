/* eslint-disable no-console */
import { join, resolve } from 'path'

import oas2joi from 'oas2joi'

const specVersion = 'v1.0.0'
const specFile = 'ipfs-pinning-service.yaml'
const specLocation = `https://raw.githubusercontent.com/ipfs/pinning-services-api-spec/${specVersion}/${specFile}`

const joiSchemaFile = 'joiSchema.json'
const downloadDir = resolve(__dirname, '..', 'downloaded')
const generatedDir = resolve(__dirname, '..', 'generated')

const localSpecPath = join(downloadDir, specFile)
const localJoiSchemaPath = join(generatedDir, joiSchemaFile)
// eslint-disable-next-line @typescript-eslint/return-await
const getJoiSchema = async (): Promise<PinningSpecJoiSchema> => await oas2joi(localSpecPath)

export {
  downloadDir,
  generatedDir,
  getJoiSchema,
  localSpecPath,
  localJoiSchemaPath,
  specFile,
  specLocation,
  specVersion
}
