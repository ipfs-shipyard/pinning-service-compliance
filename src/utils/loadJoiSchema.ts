import { readFile } from 'fs/promises'

import Joi from '@hapi/joi'
import type { Schema } from '@hapi/joi'

import { getJoiSchemaPath } from './constants.js'
import { logger } from './logs.js'

type SchemaNames = 'Delegates' | 'Failure' | 'Origins' | 'Pin' | 'PinMeta' | 'PinResults' | 'PinStatus' | 'StatusInfo' | 'Status' | 'TextMatchingStrategy'

const loadJoiSchema = async (schemaName: SchemaNames): Promise<Schema> => {
  const schemaPath = getJoiSchemaPath(schemaName)

  try {
    const schemaJson = await readFile(schemaPath, { encoding: 'utf8' })
    return Joi.compile(schemaJson)
  } catch (err) {
    logger.error('Could not load Joi Schema')
    throw err
  }
}

export { loadJoiSchema }
