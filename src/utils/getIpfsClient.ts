import { join } from 'path'

import Ctl from 'ipfsd-ctl'
import * as ipfsHttpClient from 'ipfs-http-client'
import { create, IPFSHTTPClient } from 'ipfs-http-client'
import type { HTTPClientExtraOptions } from 'ipfs-http-client/types/src/types'
import type { API } from 'ipfs-core-types/src/root'

import { logger } from './logs'

type InlineableClient = API<HTTPClientExtraOptions & {inline: boolean}>

const isDaemonAlreadyRunning = async (client: IPFSHTTPClient): Promise<boolean> => {
  let isOnline = false

  try {
    // @see https://github.com/ipfs/js-ipfs/issues/3953
    isOnline = await (client.isOnline() as unknown as Promise<boolean>)
  } catch (err) {
    logger.debug('Error starting the IPFSHTTPClient', err)
    isOnline = false
  }
  isOnline ? logger.debug('An IPFS daemon is currently running') : logger.debug('An IPFS daemon is not running')

  return isOnline
}

interface GetIpfsClientResponse {
  client: InlineableClient
  /**
   * A function that should be called when you're done using the client.
   *
   * This should not be called if IPFSHTTPClient is returned, but is required
   * if ipfsd-ctl is used so that ipfsd.stop() can be called.
   *
   * If you call client.stop() when using the IPFSHTTPClient, it will stop your
   * currently running daemon; which you most likely do not want.
   *
   */
  done: () => Promise<void>
}
const getIpfsClient = async (): Promise<GetIpfsClientResponse> => {
  const client = create({ url: 'http://127.0.0.1:5001' })
  try {
    const daemonIsRunningAlready = await isDaemonAlreadyRunning(client)
    const done = async () => await Promise.resolve()

    if (daemonIsRunningAlready) {
      return {
        client: client as InlineableClient,
        done
      }
    }
  } catch (err) {
    logger.debug('Could not use IPFSHTTPClient', err)
  }

  try {
    logger.debug('Attempting to use ipfsd-ctl to create a client')
    // no daemon currently running, start one
    const ipfsd = await Ctl.createController({
      ipfsHttpModule: ipfsHttpClient,
      ipfsBin: join('node_modules', '.bin', 'ipfs')
    })
    const client = ipfsd.api as InlineableClient

    if (await client.isOnline()) {
      return {
        client,
        done: async () => { await ipfsd.stop() }
      }
    }
    throw new Error('Client is not online')
  } catch (err) {
    logger.error('Could not get ipfs client', err)
    throw err
  }
}

export { getIpfsClient }
