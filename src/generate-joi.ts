#!/usr/bin/env ts-node

/* eslint-disable no-console */
import { writeFile } from 'fs/promises'

import oas2joi from 'oas2joi'
import type { Schema } from '@hapi/joi'

import { getJoiSchemaPath, localSpecPath } from './utils/constants'

const main = async () => {
  const joiSchema: Record<string, Schema> = await oas2joi(localSpecPath)

  for (const schemaName of Object.keys(joiSchema)) {
    const schema = joiSchema[schemaName]
    const serializedSchema = schema.describe()
    let schemaJson: string
    try {
      schemaJson = JSON.stringify(serializedSchema, null, 2)
    } catch (err) {
      console.error(`Could not stringify ${schemaName} schema:`, err)
      process.exit(1)
    }

    try {
      await writeFile(getJoiSchemaPath(schemaName), schemaJson)
    } catch (err) {
      console.error(`problem writing joi schema for ${schemaName}`)
      console.error(err)
    }
  }
}

main().catch((err) => {
  console.error(err)
})
