import { Check } from '../Check'

const checkInvalidBearerToken = async (pair: ServiceAndTokenPair) => await Check({
  pair: [pair[0], 'purposefullyInvalid'],
  title: 'Return 403 for requests with an invalid authentication token',
  runCheck: async (details) => details.response.status === 403,
  apiCall: async (client) => await client.pinsGet({})
})

export { checkInvalidBearerToken }
