import { packageName } from '../utils/constants.js'

const linkToNpm = (version = packageName): string => `[${version}](https://www.npmjs.com/package/${packageName}/v/${version})`

export { linkToNpm }
