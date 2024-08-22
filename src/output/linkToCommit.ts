import { sourceRepoUrl } from '../utils/constants.js'

const linkToCommit = (revision: string): string => `[${revision}](${sourceRepoUrl}/commit/${revision})`

export { linkToCommit }
