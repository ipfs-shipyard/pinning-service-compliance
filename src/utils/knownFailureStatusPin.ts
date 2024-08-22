import { Status } from '@ipfs-shipyard/pinning-service-client'
import type { PinStatus } from '@ipfs-shipyard/pinning-service-client'

const knownFailureStatusPin: PinStatus = {
  requestid: 'N/A',
  created: new Date(),
  status: Status.Failed,
  pin: {
    cid: 'fake'
  },
  delegates: new Set()
}

export { knownFailureStatusPin }
