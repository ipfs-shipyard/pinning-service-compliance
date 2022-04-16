import type { PinResults } from '@ipfs-shipyard/pinning-service-client'
import { Check } from '../Check'

const getAllPins = async (pair: ServiceAndTokenPair) => await Check<PinResults>({
  pair,
  title: 'List pin objects (GET /pins) in all states',
  runCheck: async (details) => {
    const result = details.result
    if (result != null) {
      if (result.count !== result.count + 0) {
        return false
      }
      if (result.results.size == null || result.results.add == null || result.results.entries == null) {
        return false
      }
      return true
    }
    return false
  },
  apiCall: async (client) => await client.pinsGet({})
})

export { getAllPins }
