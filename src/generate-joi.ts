/* eslint-disable no-console */
import { writeFile } from 'fs/promises'
import oas2joi from 'oas2joi'
import { generatedDir, localSpecPath } from './constants'
// import { serialize } from 'joi-serialization'
import type { Schema } from '@hapi/joi'
import { join } from 'path'

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
      await writeFile(join(generatedDir, `${schemaName}JoiSchema.json`), schemaJson)
    } catch (err) {
      console.error(`problem writing joi schema for ${schemaName}`)
      console.error(err)
    }
  }
}

main().catch((err) => {
  console.error(err)
})
