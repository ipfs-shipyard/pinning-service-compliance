/* eslint-disable no-console */
import { clientFromServiceAndTokenPair } from './clientFromServiceAndTokenPair'
import { Check, CheckRunner } from './checks'

const validatePinningService = async (pair: ServiceAndTokenPair) => {
  const client = clientFromServiceAndTokenPair(pair)

  const checks: Check[] = [
    new Check(client, 'pinsGet'),
    new Check(client, 'pinsPost', {
      pin: {
        cid: 'bafybeibwzifw52ttrkqlikfzext5akxu7lz4xiwjgwzmqcpdzmp3n5vnbe' // 1x1.png
      }

    })
  ]

  const runner = new CheckRunner(checks)

  await runner.run()
}

export { validatePinningService }
