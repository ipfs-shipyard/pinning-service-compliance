import type { PinResults, PinStatus } from '@ipfs-shipyard/pinning-service-client'
import type { ApiCall } from '../ApiCall.js'

const getRequestid = (pin: PinStatus, apiCall: ApiCall<PinResults> | ApiCall<PinStatus>) => {
  let { requestid, pin: { cid } } = pin
  const pinResultsJson = apiCall.json as PinResults | null
  const pinStatusJson = apiCall.json as PinStatus | null
  if (requestid == null) {
    apiCall.logger.debug('Implementing workaround to get "requestid" from raw response')
    if (pinResultsJson?.results != null) {
      /**
       * This workaround is needed because web3.storage is returning requestid as 'requestId' as of 2022-04-12
       */
      const rawPinStatus = Array.from(pinResultsJson.results).find((pinStatus) => pinStatus.pin.cid === cid) as PinStatus
      requestid = (rawPinStatus as PinStatus & {requestId: string}).requestId
    } else if (pinStatusJson?.pin != null) {
      if (pinStatusJson.pin.cid === cid) {
        requestid = (pinStatusJson as PinStatus & {requestId: string}).requestId
      } else {
        throw new Error(`CID for provided pin and raw apiCall results do not match! '${cid}' vs. '${pinStatusJson.pin.cid}'`)
      }
    }
  }
  return requestid
}
export { getRequestid }
