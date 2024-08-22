import { type PinStatus, TextMatchingStrategy } from '@ipfs-shipyard/pinning-service-client'
import { v4 as uuidv4 } from 'uuid'
import { ApiCall } from '../../ApiCall.js'
import { resultNotNull, responseOk } from '../../expectations/index.js'
import { getInlineCid } from '../../utils/getInlineCid.js'
import type { ServiceAndTokenPair } from '../../types.js'

const matchApiCallExpectation = (parent: ApiCall<PinStatus>, match: TextMatchingStrategy, name: string, actualName: string): void => {
  new ApiCall({
    parent,
    pair: parent.pair,
    title: `Can retrieve pin with name '${name}' via the '${match}' TextMatchingStrategy`,
    fn: async (client) => client.pinsGet({ match, name })
  })
    .expect(responseOk())
    .expect(resultNotNull())
    .expect({
      title: 'Count is equal to 1',
      fn: ({ result }) => result?.count === 1
    })
    .expect({
      title: 'Name matches name provided during creation',
      fn: ({ result }) => {
        const pinResultsIter = result?.results.values()
        const pinStatus: PinStatus | undefined = pinResultsIter?.next().value

        return pinStatus?.pin?.name === actualName
      }
    })
}
/**
 * https://github.com/ipfs-shipyard/pinning-service-compliance/issues/9
 */
const matchPin = async (pair: ServiceAndTokenPair): Promise<void> => {
  const name = uuidv4().toLowerCase()
  const nameLength = name.length
  const size = nameLength / 4
  const partialName = name.slice(size, nameLength - (size))
  const cid = await getInlineCid()
  const mainApiCall = new ApiCall({
    pair,
    title: `Can create a pin with name='${name}'`,
    fn: async (client) => client.pinsPost({ pin: { name, cid } })
  })
    .expect(responseOk())
    .expect(resultNotNull())
    .expect({
      title: 'Name matches name provided during creation',
      fn: ({ result }) => result?.pin.name === name
    })

  matchApiCallExpectation(mainApiCall, TextMatchingStrategy.Exact, name, name)
  matchApiCallExpectation(mainApiCall, TextMatchingStrategy.Iexact, name.toUpperCase(), name)
  matchApiCallExpectation(mainApiCall, TextMatchingStrategy.Partial, partialName, name)
  matchApiCallExpectation(mainApiCall, TextMatchingStrategy.Ipartial, partialName.toUpperCase(), name)
  await mainApiCall.runExpectations()
}

export { matchPin }
