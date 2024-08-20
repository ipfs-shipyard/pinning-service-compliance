import { sourceRepoUrl } from '../utils/constants.js'

const linkToGithubRepo = (displayText: string, pathSuffix?: string): string => `[${displayText}](${sourceRepoUrl}${pathSuffix != null ? `/${pathSuffix}` : ''})`

export { linkToGithubRepo }
