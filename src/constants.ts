import { join, resolve } from 'path'

const specVersion = 'v1.0.0'
const specFile = 'ipfs-pinning-service.yaml'
const specLocation = `https://raw.githubusercontent.com/ipfs/pinning-services-api-spec/${specVersion}/${specFile}`

const joiSchemaFile = 'joiSchema.json'
const downloadDir = resolve(__dirname, '..', 'downloaded')
const generatedDir = resolve(__dirname, '..', 'generated')

const localSpecPath = join(downloadDir, specFile)
const localJoiSchemaPath = join(generatedDir, joiSchemaFile)

export {
  downloadDir,
  generatedDir,
  localSpecPath,
  localJoiSchemaPath,
  specFile,
  specLocation,
  specVersion
}
