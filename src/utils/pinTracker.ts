import { clientFromServiceAndTokenPair } from '../clientFromServiceAndTokenPair.js'
import { allPinStatuses } from './constants.js'
import type { ServiceAndTokenPair } from '../types.js'

/**
 * Keep track of pins created by the compliance checker so we do not change/manipulate existing account pins.
 *
 * @see https://github.com/ipfs-shipyard/pinning-service-compliance/issues/118#issuecomment-1159050013
 */
class PinTracker extends Set<string> {
  originalPinCount: number
  constructor (count: number) {
    super()
    this.originalPinCount = count
  }
}

const pinTrackerMap = new Map<string, PinTracker>()

const getPinTracker = async (pair: ServiceAndTokenPair): Promise<PinTracker> => {
  const pairAsKey = pair.join('')
  let pinTracker: PinTracker | undefined = pinTrackerMap.get(pairAsKey)
  let count: number
  if (pinTracker == null) {
    const client = clientFromServiceAndTokenPair(pair)
    try {
      const pinResults = await client.pinsGet({ status: allPinStatuses })
      count = pinResults.count
    } catch {
      count = 0
    }
    pinTracker = new PinTracker(count)
    pinTrackerMap.set(pairAsKey, pinTracker)
  }

  return pinTracker
}

export { PinTracker, getPinTracker }
