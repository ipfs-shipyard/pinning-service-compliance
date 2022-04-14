import type PQueue from 'p-queue'

import type { RemotePinningServiceClient } from '@ipfs-shipyard/pinning-service-client'

import { clientFromServiceAndTokenPair } from '../clientFromServiceAndTokenPair'
import { getQueue } from '../utils/getQueue'
import type { ComplianceCheckDetailsCallbackArg } from '../types'

// arrange, act, assert
//

interface ExpectationArrange<T> { (arg: Expectation<T>): Promise<unknown> }
interface ExpectationAct<T> { (client: RemotePinningServiceClient): Promise<T> }
interface ExpectationAssert<T> { (args: ExpectationAssertArgs<T>): Promise<boolean> }
interface ExpectationOptions<T> {
  pair: ServiceAndTokenPair
  arrange?: ExpectationArrange<T>
  act: ExpectationAct<T>
  assert: ExpectationAssert<T>
}

interface ExpectationAssertArgs<T> {
  // errors: Error[]
  details: ComplianceCheckDetailsCallbackArg
  result: T | null
}
class Expectation<T> {
  details!: ComplianceCheckDetailsCallbackArg
  result!: T | null
  isSuccessful: boolean = false
  // private readonly client: RemotePinningServiceClient
  private readonly arrange?: ExpectationArrange<T>
  private readonly act: ExpectationAct<T>
  private readonly assert: ExpectationAssert<T>
  private readonly queue: PQueue
  private readonly pair: ServiceAndTokenPair
  private readonly errors: Error[] = []

  constructor ({ pair, arrange, act, assert }: ExpectationOptions<T>) {
    this.pair = pair
    this.arrange = arrange
    this.act = act
    this.assert = assert
    // this.client = clientFromServiceAndTokenPair(pair, this.saveDetails)
    this.queue = getQueue(this.pair[0])

    this.runExpectation().catch((err) => {
      this.errors.push(err)
    })
  }

  private async runExpectation () {
    if (this.arrange != null) {
      await this.arrange(this)
    }

    // let result: T| null = null
    try {
      this.result = await this.queue.add(async () => await this.act(this.client))
    } catch (err) {
      this.errors.push(err as Error)
    }

    try {
      if (this.errors.length > 0) {
        this.details.errors.push(...this.errors)
      }
      this.isSuccessful = await this.assert({
        // errors,
        details: this.details,
        result: this.result
      })
    } catch (err) {
      this.errors.push(err as Error)
    }

    // this.arrange().then(this.act).then(this.assert).catch((err) => {
    //   this.errors.push(err)
    // })
  }

  /**
   * Details is set in {requestReponseLogger} middleware after the call is complete
   */
  private async saveDetails (details: ComplianceCheckDetailsCallbackArg) {
    this.details = details
  }
}

export { Expectation }
