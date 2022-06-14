import git from 'git-rev'

import type { Revision } from '../types.js'

/**
 * Provides the git hash of HEAD by default, in short format.
 *
 * This function will not work when called from npx, because the npm package doesn't come with the git repo. Please
 * catch any errors and display npm package version instead.
 *
 * @param {number} [fromHead=0] - How many commits from the head you want the hash of
 *
 * @returns {Revision} The hash of the requested commit
 */
const gitHash = async (fromHead = 0): Promise<Revision> => {
  return await new Promise((resolve, reject) => {
    try {
      if (fromHead === 0) {
        git.short((commitHash) => resolve(commitHash))
      } else {
      // @see https://www.npmjs.com/package/git-rev#logfunction-array---
        git.log((log) => {
          try {
            resolve(log[fromHead][0].slice(0, 7))
          } catch (err) {
            reject(err)
          }
        })
      }
    } catch (err) {
      reject(err)
    }
  })
}

export { gitHash }
