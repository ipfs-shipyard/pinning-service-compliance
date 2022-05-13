import { join, resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

import oas2joi from 'oas2joi'

import { Status } from '@ipfs-shipyard/pinning-service-client'
import type { Schema as JoiSchema } from '@hapi/joi'
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

const localSpecPath = join(downloadDir, specFile)
const localJoiSchemaPath = join(generatedDir, joiSchemaFile)

// eslint-disable-next-line @typescript-eslint/no-namespace
// declare namespace Joi {
enum Icons {
  SUCCESS = '✓',
  FAILURE = '✘',
  ERROR = '⚠'
}
type Schema = JoiSchema & InnerSchema
interface InnerSchemaChild {
  key: string
  schema: JoiSchema
}

interface InnerSchema {
  _inner: {
    children: InnerSchemaChild[]
    dependencies: any[]
    patterns: any[]
    renames: any[]
  }
}
// }
const getInnerSchema = (schema: Schema | JoiSchema, path: string[]) => {
  let finalSchema = schema as Schema
  for (const key of path) {
    const child = finalSchema._inner.children.find(({ key: childKey }) => childKey === key)
    if (child != null) {
      finalSchema = child.schema as Schema
    } else {
      throw new Error(`Could not find inner child with key ${key}`)
    }
  }

  return finalSchema as JoiSchema
  // path.reduce((finalSchema, keyName) => {
  //   return (finalSchema)._inner.children.find(({ key }) => key === keyName).schema
  // }, schema)
}
const setInnerSchema = (rootSchema: Schema | JoiSchema, path: string[], newSchema: Schema | JoiSchema) => {
  let childSchema = rootSchema as Schema
  let child: InnerSchemaChild | undefined
  for (const key of path) {
    child = childSchema._inner.children.find(({ key: childKey }) => childKey === key)
    if (child != null) {
      childSchema = child.schema as Schema
    } else {
      throw new Error(`Could not find inner child with key ${key}`)
    }
  }
  if (child != null) {
    child.schema = newSchema
  } else {
    throw new Error(`No child was found using paths: ${path.join(', ')}`)
  }
}

const modifySchema = (schemaName: keyof PinningSpecJoiSchema, schema: JoiSchema): void => {
  switch (schemaName) {
    case 'PinStatus': {
      const namePath = ['pin', 'name']
      const nameSchema = getInnerSchema(schema, namePath)
      setInnerSchema(schema, namePath, nameSchema.allow(null))

      // const originsPath = ['pin', 'origins']
      // const originsSchema = getInnerSchema(schema, originsPath)
      // setInnerSchema(schema, originsPath, originsSchema.allow(null))

      // const metaPath = ['pin', 'meta']
      // const metaSchema = getInnerSchema(schema, metaPath)
      // setInnerSchema(schema, metaPath, metaSchema.allow(null))
      break
    }
    default: {
      // return schema
    }
  }
}
// eslint-disable-next-line @typescript-eslint/return-await
const getJoiSchema = async <T extends keyof PinningSpecJoiSchema>(schemaName: T): Promise<PinningSpecJoiSchema[T]> => {
  const schema: PinningSpecJoiSchema = (await oas2joi(localSpecPath))

  modifySchema(schemaName, schema[schemaName])

  return schema[schemaName]
}

const getJoiSchemaPath = (schemaName: string) => join(generatedDir, `${schemaName}JoiSchema.json`)

export {
  allPinStatuses,
  docsDir,
  downloadDir,
  generatedDir,
  getJoiSchema,
  getJoiSchemaPath,
  localSpecPath,
  localJoiSchemaPath,
  specFile,
  specLocation,
  specVersion,
  Icons
}
