import { writeFile } from 'fs/promises'

import fetchPonyfill from 'fetch-ponyfill'

import { specLocation, localSpecPath } from './utils/constants'
import { logger } from './utils/logs'

const { fetch } = fetchPonyfill()

fetch(specLocation).then(async (r) => await r.text()).then(async (spec) => {
  try {
    await writeFile(localSpecPath, spec)
  } catch (err) {
    logger.error('Could not write spec to file', (err as Error).stack)
    logger.error(err)
  }
}).catch((err) => {
  logger.error('Could not download pinning service spec', err)
})
