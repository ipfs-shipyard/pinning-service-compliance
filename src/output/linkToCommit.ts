import { sourceRepoUrl } from '../utils/constants.js'

const linkToCommit = (revision: string) => `[${revision}](${sourceRepoUrl}/commit/${revision})`

export { linkToCommit }
