/* eslint-disable no-console */
import { readFile } from 'fs/promises'

import Joi, { Schema } from '@hapi/joi'

import { getJoiSchemaPath } from './constants'

type SchemaNames = 'Delegates' | 'Failure' | 'Origins' | 'Pin' | 'PinMeta' | 'PinResults' | 'PinStatus' | 'StatusInfo' | 'Status' | 'TextMatchingStrategy'

const loadJoiSchema = async (schemaName: SchemaNames): Promise<Schema> => {
  const schemaPath = getJoiSchemaPath(schemaName)

  try {
    const schemaJson = await readFile(schemaPath, { encoding: 'utf8' })
    return Joi.compile(schemaJson)
  } catch (err) {
    console.error('Could not load Joi Schema')
    throw err
  }
}

export { loadJoiSchema }
