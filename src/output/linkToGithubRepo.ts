import { sourceRepoUrl } from '../utils/constants.js'

const linkToGithubRepo = (displayText: string, pathSuffix?: string) => `[${displayText}](${sourceRepoUrl}${pathSuffix != null ? `/${pathSuffix}` : ''})`

export { linkToGithubRepo }
