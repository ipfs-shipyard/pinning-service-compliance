import { Check } from '../Check'

const checkEmptyBearerToken = async (pair: ServiceAndTokenPair) => await Check({
  pair: [pair[0], undefined],
  title: 'Return 403 for requests with no authentication token',
  runCheck: async (details) => details.response.status === 403,
  apiCall: async (client) => await client.pinsGet({})
})

export { checkEmptyBearerToken }
