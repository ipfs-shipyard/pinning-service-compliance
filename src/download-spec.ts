/* eslint-disable no-console */
import fetchPonyfill from 'fetch-ponyfill'
import { writeFile } from 'fs/promises'
import { specLocation, localSpecPath } from './constants'

const { fetch } = fetchPonyfill()

fetch(specLocation).then(async (r) => await r.text()).then(async (spec) => {
  try {
    await writeFile(localSpecPath, spec)
  } catch (err) {
    console.error('Could not write spec to file', (err as Error).stack)
    console.trace(err)
  }
}).catch((err) => {
  console.error('Could not download pinning service spec', err)
})
