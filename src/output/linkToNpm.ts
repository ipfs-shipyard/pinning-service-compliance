const packageName = process.env.npm_package_name!
const linkToNpm = (version = process.env.npm_package_version!) => `[${version}](https://www.npmjs.com/package/${packageName}/v/${version})`

export { linkToNpm }
