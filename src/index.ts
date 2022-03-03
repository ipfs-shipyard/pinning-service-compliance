import { PinResults, Status, PinsGetRequest } from '@ipfs-shipyard/pinning-service-client'
import {clientFromServiceAndTokenPair} from './clientFromServiceAndTokenPair'
const validatePinningService = async (pair: ServiceAndTokenPair) => {

  const pinsGetOptions: PinsGetRequest = {
    limit: 10,
    status: new Set([Status.Failed])
  }
  const client = clientFromServiceAndTokenPair(pair)
  const { count, results }: PinResults = await client.pinsGet(pinsGetOptions)
}

export { validatePinningService }
