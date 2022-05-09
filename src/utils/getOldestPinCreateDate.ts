import type { PinStatus } from '@ipfs-shipyard/pinning-service-client'

const getOldestPinCreateDate = (pins: Set<PinStatus>) => {
  let oldestCreateDate = new Date()
  pins.forEach((pin) => {
    if (pin.created < oldestCreateDate) {
      oldestCreateDate = pin.created
    }
  })
  return oldestCreateDate
}

export { getOldestPinCreateDate }
