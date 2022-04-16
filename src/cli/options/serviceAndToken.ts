import type { Options } from 'yargs'

const serviceAndToken: Options = {
  type: 'string',
  alias: 's',
  description: 'An ipfs pinning service endpoint and the secret token for that endpoint',
  nargs: 2,
  requiresArg: true,
  coerce: (pinningServicePairs) => {
    const coercedPairs: ServiceAndTokenPairCollection = []
    for (let i = 0; i < pinningServicePairs.length; i += 2) {
      const [service, key] = pinningServicePairs.slice(i, i + 2)
      coercedPairs.push([service, key])
    }
    return coercedPairs
  }
}

export { serviceAndToken }
