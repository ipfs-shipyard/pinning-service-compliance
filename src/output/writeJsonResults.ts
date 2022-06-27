import { writeFile } from 'fs/promises'
import { join } from 'path'

import type { ServiceAndTokenPair } from '../types.js'
import { docsDir } from '../utils/constants.js'
import { getHostnameFromUrl } from '../utils/getHostnameFromUrl.js'
import { logger } from '../utils/logs.js'
import { globalReport } from '../utils/report.js'

const writeJsonResults = async (pair: ServiceAndTokenPair) => {
  const { passed, failed } = globalReport
  const total = passed + failed
  const success = passed === total

  const hostname = getHostnameFromUrl(pair[0])

  const jsonResultsFile = join(docsDir, `${hostname}.json`)

  const stringifiedJSON = JSON.stringify({ total, passed, failed, success }, null, 2)

  try {
    await writeFile(jsonResultsFile, stringifiedJSON)
  } catch (err) {
    logger.error(`Could not write JSON results to ${jsonResultsFile}. JSON is:\n ${stringifiedJSON}`)
    logger.error(err)
  }
}

export { writeJsonResults }
