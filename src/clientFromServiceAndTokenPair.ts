/* eslint-disable no-console */
import { RemotePinningServiceClient, Configuration } from '@ipfs-shipyard/pinning-service-client'
import { requestResponseLogger } from './middleware/requestReponseLogger'
import fetchPonyfill from 'fetch-ponyfill'

const { fetch } = fetchPonyfill()

const fetchWrapper = async (input: RequestInfo, init?: RequestInit | undefined): Promise<Response> => {
  try {
    console.log('init: ', init)
    console.log('input: ', input)
    const result = await fetch(input, init)
    console.log('result: ', result)
    return result
  } catch (err) {
    console.log('err: ', err)
    console.error('error in fetch wrapper')
    console.error(err)
    return err as Response
  }
}
function clientFromServiceAndTokenPair ([endpointUrl, accessToken]: ServiceAndTokenPair, callback: ComplianceCheckDetailsCallback): RemotePinningServiceClient {
  const config = new Configuration({
    endpointUrl,
    accessToken,
    middleware: [
      requestResponseLogger(callback)
    ]
  })

  return new RemotePinningServiceClient(config)
}

export { clientFromServiceAndTokenPair, fetchWrapper }
