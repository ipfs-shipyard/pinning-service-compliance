import git from 'git-rev'

import type { Revision } from '../types.js'

const gitHash = async (): Promise<Revision> => {
  return await new Promise((resolve) => {
    git.short((commitHash) => resolve(commitHash))
  })
}

export { gitHash }
