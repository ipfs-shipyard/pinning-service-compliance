
const packageName = process.env.npm_package_name as string
const linkToNpm = (version = process.env.npm_package_version as string) => `[${version}](https://www.npmjs.com/package/${packageName}/v/${version})`

export { linkToNpm }
