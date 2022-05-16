import oas2joi from 'oas2joi'
// import Joi from '@hapi/joi'
import type { Schema as JoiSchema } from '@hapi/joi'

import type { PinningSpecJoiSchema } from '../types.js'
// import { getPinningSpec } from '../getPinningSpec.js'
import { logger } from './logs.js'
import { specLocation } from './constants.js'

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
const getJoiSchema = async <T extends keyof PinningSpecJoiSchema>(schemaName: T): Promise<PinningSpecJoiSchema[T] | undefined> => {
  try {
    // const pinningSpec = await getPinningSpec()
    const schema: PinningSpecJoiSchema = (await oas2joi(specLocation))

    modifySchema(schemaName, schema[schemaName])

    return schema[schemaName]
  } catch (err) {
    logger.error('Could not get joi schema, returning undefined', err)
    return undefined
  }
}

export { getJoiSchema }
