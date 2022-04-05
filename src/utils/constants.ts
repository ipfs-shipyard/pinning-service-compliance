import { Status } from '@ipfs-shipyard/pinning-service-client'

const allPinStatuses = new Set([Status.Failed, Status.Pinned, Status.Pinning, Status.Queued])

export { allPinStatuses }
