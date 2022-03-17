/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable no-console */
import type { PinsApi } from '@ipfs-shipyard/pinning-service-client'
import type { ListrTaskObject } from 'listr'

type ImplementableMethods = keyof Omit<PinsApi, 'withMiddleware' | 'withPreMiddleware' | 'withPostMiddleware'>
type PinsApiMethod<T extends ImplementableMethods = ImplementableMethods> = PinsApi[T] extends never ? never : T

// const method: PinsApiMethod = 'pinsGet'

// console.log(method)
/**
 * An abstract representation of a single compliance check
 *
 * Every compliance check should extend from this class
 */
class Check<T extends ImplementableMethods & string = ImplementableMethods & string> {
  // protected readonly client: PinsApi

  // abstract method: T

  // args: Parameters<PinsApi[T]>[0]
  constructor (protected readonly client: PinsApi, protected readonly method: T, protected readonly args?: Parameters<PinsApi[T]>[0]) {
    this.task = this.task.bind(this)
  }

  get apiMethod () {
    return this.client[this.method]
  }

  get title () {
    return this.method
  }

  // public get task

  /**
   * The primary method called when testing compliance of an IPFS Pinning Service implementation
   */
  public async task (ctx: any, task: ListrTaskObject<any>): Promise<ReturnType<PinsApi[T]>> {
    // console.log('this.apiMethod: ', this.apiMethod)
    // console.log('this.client[this.method]: ', this.client[this.method])

    try {
      const response = await this.client[this.method](this.args)
      task.title = `${task.title} - SUCCESS`
      return response
    } catch (err: any) {
      task.title = `${task.title} - ERROR: ${err?.message ?? ''}`
      console.log('err: ', err)
      // task.hasFailed()
      console.log('task', task)
      // process.stdout.write('task:')
      // process.stdout.write(JSON.stringify(Object.keys(task)))
      await task.skip('FAILED')
    }

    // if (!response.ok) { return response }
    // .catch(() => {
    //   // no-op
    // }).finally(() => {
    //   // done
    // })
  }
}

export { Check }
