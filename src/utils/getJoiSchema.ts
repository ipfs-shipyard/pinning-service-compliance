import oas2joi from 'oas2joi'
import { specLocation } from './constants.js'
import { logger } from './logs.js'
import type { PinningSpecJoiSchema } from '../types.js'
import type { Schema as JoiSchema } from '@hapi/joi'

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

const getInnerSchema = (schema: Schema | JoiSchema, path: string[]): JoiSchema => {
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
}

const setInnerSchema = (rootSchema: Schema | JoiSchema, path: string[], newSchema: Schema | JoiSchema): void => {
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

      break
    }
    case 'PinResults': {
      const namePath = ['results', 'pin', 'name']
      const nameSchema = getInnerSchema(schema, namePath)
      setInnerSchema(schema, namePath, nameSchema.allow(null))

      break
    }
    default: {
      break
    }
  }
}

/**
 * Cached schema object so we don't have to keep calling to the spec
 */
let schema: PinningSpecJoiSchema
const getJoiSchema = async <T extends keyof PinningSpecJoiSchema>(schemaName: T): Promise<PinningSpecJoiSchema[T]> => {
  try {
    schema = schema ?? await oas2joi(specLocation)
    modifySchema(schemaName, schema[schemaName])
    return schema[schemaName]
  } catch (err) {
    logger.error('Could not get joi schema', err)
    throw err
  }
}

export { getJoiSchema }
