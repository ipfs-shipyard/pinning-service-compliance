// /* eslint-disable no-console */
// import type PQueue from 'p-queue/dist'
import type { Schema, ValidationError, ValidationResult } from '@hapi/joi'
import fetchPonyfill from 'fetch-ponyfill'
import type { Logger } from 'winston'

import type { RemotePinningServiceClient, RequestContext, ResponseContext } from '@ipfs-shipyard/pinning-service-client'

import { getQueue } from './utils/getQueue'
import { clientFromServiceAndTokenPair } from './clientFromServiceAndTokenPair'
import type { ComplianceCheckDetailsCallbackArg, ExpectationResult, ServiceAndTokenPair } from './types'
import { addApiCallToReport } from './output/reporting'
import { getLogger } from './output/getLogger'

const { Request } = fetchPonyfill()

interface ApiCallOptions<T> {
  pair: ServiceAndTokenPair
  fn: (client: RemotePinningServiceClient) => Promise<T>
  schema?: Schema

  title: string

}
interface ExpectationError {
  error: Error
  title: string
}
interface ExpectationCallbackArg<T> {
  responseContext: ResponseContext
  details: ComplianceCheckDetailsCallbackArg
  apiCall: ApiCall<T>
  result: T | null
}
interface ExpectationFn<T> {
  (arg: ExpectationCallbackArg<T>): boolean | Promise<boolean>
}
interface Expectation<T> {
  fn: ExpectationFn<T>
  title: string
}
class ApiCall<T> {
  // pair: ServiceAndTokenPair
  // queue: PQueue

  result!: Promise<T | null>
  details!: ComplianceCheckDetailsCallbackArg
  requestContext!: RequestContext
  responseContext!: ResponseContext
  failureReason: Error | unknown
  expectations: Array<Expectation<T>> = []
  response!: Response
  errors: ExpectationError[] = []
  title: string
  expectationResults: ExpectationResult[] = []
  pair: ServiceAndTokenPair
  client: RemotePinningServiceClient
  validationErrors: ValidationError | undefined
  validationResult: ValidationResult | null = null
  successful: boolean = true
  json: T | null = null
  // body: ReadableStream<Uint8Array> | null
  text: string | null = null
  logger: Logger

  constructor ({ pair, fn, schema, title }: ApiCallOptions<T>) {
    this.logger = getLogger(pair[0])
    this.logger.debug(`Creating new ApiCall: ${title}`)

    this.title = title
    this.pair = pair
    this.client = clientFromServiceAndTokenPair(pair, {
      preCb: this.saveRequest.bind(this),
      postCb: this.saveResponse.bind(this),
      finalCb: this.saveDetails.bind(this)
    })
    if (schema != null) {
      this.addSchema(schema)
    }

    this.result = getQueue(pair[0]).add(async () => await fn(this.client)).catch((reason) => {
      this.failureReason = reason
      return null
    })
  }

  get httpResponse () {
    return this.response.clone()
  }

  get httpRequest () {
    const request = new Request(this.requestContext.url, this.requestContext.init)

    return request
  }

  get clientResponse () {
    throw new Error('Method not implemented.')
  }

  expect (expectation: Expectation<T>) {
    this.expectations.push(expectation)
  }

  async runExpectations () {
    const result = await this.result
    for await (const expectation of this.expectations) {
      const { fn, title } = expectation
      try {
        const success = await fn({
          responseContext: this.responseContext,
          details: this.details,
          apiCall: this,
          result
        })
        this.successful = this.successful && success

        this.expectationResults.push({
          success,
          title
        })
      } catch (error) {
        this.successful = false
        this.expectationResults.push({
          success: false,
          error: error as Error,
          title
        })
        this.errors.push({ title, error: error as Error })
      }
    }
    await addApiCallToReport(this)
  }

  addSchema (schema: Schema) {
    // console.log('schema: ', schema)
    // @ts-expect-error
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    this.logger.debug(`Adding schema ${schema._description}`)
    this.expect({
      title: 'Response object matches api spec schema',
      fn: async ({ apiCall }): Promise<boolean> => {
        const result = await this.result
        if (result != null || this.failureReason != null) {
          this.validationResult = schema.validate(this.json ?? this.failureReason, { abortEarly: false, convert: true })
          // console.log('this.validationResult: ', this.validationResult)
          if (this.validationResult.error != null || this.validationResult.errors != null) {
            const validationErrors = this.validationResult.errors ?? this.validationResult.error as ValidationError
            this.validationErrors = validationErrors
            return false
          } else {
            return true
          }
        }
        throw new Error('Could not compare against joi Schema')
      }
    })
  }

  private saveRequest (context: RequestContext) {
    this.logger.debug(`${this.title}: Saving request context for '${context.url}'`)
    this.requestContext = context
  }

  private async saveResponse (context: ResponseContext) {
    this.logger.debug(`${this.title}: Saving response context for '${context.url}'`)
    const response = this.response = context.response.clone()
    this.json = await response.clone().json()
    this.text = await response.clone().text()
    this.responseContext = context
  }

  /**
   * Details is set in {requestReponseLogger} middleware after the call is complete
   */
  private saveDetails (details: ComplianceCheckDetailsCallbackArg) {
    this.details = details
  }
}

export { ApiCall }
