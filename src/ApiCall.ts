import type { Schema, ValidationError, ValidationResult } from '@hapi/joi'
import { Request } from 'node-fetch'
import type { RequestInit, Response } from 'node-fetch'
import type { Logger } from 'winston'

import type { RemotePinningServiceClient, RequestContext, ResponseContext } from '@ipfs-shipyard/pinning-service-client'

import { getQueue } from './utils/getQueue.js'
import { clientFromServiceAndTokenPair } from './clientFromServiceAndTokenPair.js'
import type { ComplianceCheckDetailsCallbackArg, ExpectationResult, ServiceAndTokenPair } from './types.js'
import { addApiCallToReport } from './output/reporting.js'
import { getServiceLogger, logger as consoleLogger } from './utils/logs.js'
import { getSuccessIcon } from './output/getSuccessIcon.js'
import { Icons } from './utils/constants.js'
import { globalReport } from './utils/report.js'
import { isError } from './guards/isError.js'
// import { responseHasContent } from './utils/responseHasContent.js'
// import { getJson } from './utils/fetchSafe/getJson.js'
// import { getText } from './utils/fetchSafe/getText.js'
import { getTextAndJson } from './utils/fetchSafe/getTextAndJson.js'

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
interface ApiCallExpectation<T> {
  fn: ExpectationFn<T>
  title: string
}

class ApiCall<T> {
  result: T | null = null
  request: Promise<T|null>
  details!: ComplianceCheckDetailsCallbackArg
  requestContext!: RequestContext
  responseContext!: ResponseContext
  failureReason: Error | unknown
  expectations: Array<ApiCallExpectation<T>> = []
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
    globalReport.incrementApiCallsCount()
    this.logger = getServiceLogger(pair[0])
    this.logger.debug(`Creating new ApiCall: ${title}`)
    // consoleLogger.info(`ApiCall Count is '${globalReport.apiCallCount}'`)
    this.saveRequest = this.saveRequest.bind(this)
    this.saveResponse = this.saveResponse.bind(this)
    this.saveDetails = this.saveDetails.bind(this)
    this.title = title
    this.pair = pair

    this.client = clientFromServiceAndTokenPair(pair, {
      preCb: this.saveRequest,
      postCb: this.saveResponse,
      // finalCb: this.saveDetails
    })
    if (schema != null) {
      this.addSchema(schema)
    }

    this.request = getQueue(pair[0]).add(async () => {
      consoleLogger.debug('Running primary fn')
      try {
        return await fn(this.client)
      } catch (err) {
        const error = isError(err) ? err : new Error(err as string)
        this.errors.push({
          title: 'Error running primary ApiCall fn',
          error
        })
        throw err
      }
    }).then((result) => {
      this.result = result
      return result
    }).catch((reason) => {
      consoleLogger.debug('Caught error during primary fn', { error: reason })
      this.failureReason = reason
      this.result = null
      return null
    })
  }

  get httpResponse () {
    return this.response //.clone()
  }

  get httpRequest () {
    const request = new Request(this.requestContext.url, this.requestContext.init as RequestInit)

    return request
  }

  expect (expectation: ApiCallExpectation<T>) {
    this.expectations.push(expectation)
    return this
  }

  async runExpectations <T>(parent?: ApiCall<T>) {
    consoleLogger.info(`${this.title}`, { messageOnly: true })
    if (parent == null) {
      globalReport.incrementRunExpectationsCallCount()
    }
    // consoleLogger.info(`runExpectations call Count is '${++runExpectationsCount}'`)
    try {
      await this.request
    } catch (err) {
      consoleLogger.error('Error occurred while waiting for request to conclude', err)
    }

    const result = this.result
    for await (const expectation of this.expectations) {
      globalReport.incrementTotalExpectationsCount()
      // consoleLogger.info(`Total Expectation Count is '${++totalExpectationsCount}'`)
      const { fn, title } = expectation
      try {
        const success = await fn({
          responseContext: this.responseContext,
          details: this.details,
          apiCall: this,
          result
        })
        consoleLogger.info(`${getSuccessIcon(success)} ${title}`, { nested: true })
        this.successful = this.successful && success
        // consoleLogger.info(`${title} - `)

        this.expectationResults.push({
          success,
          title
        })
      } catch (error) {
        consoleLogger.info(`${Icons.ERROR} ${title}`, { nested: true })
        consoleLogger.error('Unexpected error occurred while running expectation function', error)
        this.successful = false
        this.expectationResults.push({
          success: false,
          error: error as Error,
          title
        })
        this.errors.push({ title, error: error as Error })
      }
    }

    if (parent == null) {
      try {
        await addApiCallToReport(this)
      } catch (err) {
        consoleLogger.error(`Could not add details of ApiCall '${this.title}' to report`, err)
      }
    } else {
      this.addExpectationResults(this.expectationResults)
      this.addExpectationErrors(this.errors)
    }

    return this
  }

  addExpectationResults (results: ExpectationResult[]) {
    if (results.length > 0) {
      this.expectationResults.push(...results)
    }
  }

  addExpectationErrors (errors: ExpectationError[]) {
    if (errors.length > 0) {
      this.errors.push(...errors)
    }
  }

  addSchema (schema: Schema) {
    this.expect({
      title: 'Response object matches api spec schema',
      fn: async ({ apiCall }): Promise<boolean> => {
        const result = await this.request
        if (result != null || this.failureReason != null) {
          this.validationResult = schema.validate(this.json ?? this.failureReason, { abortEarly: false, convert: true })
          if (this.validationResult.error != null || this.validationResult.errors != null) {
            const validationErrors = this.validationResult.errors ?? this.validationResult.error as ValidationError
            this.validationErrors = validationErrors
            return false
          } else {
            return true
          }
        } else {
          consoleLogger.info('Result or failureReason is null')
          // console.log(result, this.failureReason, this.response)
          this.errors.push({ error: new Error('Could not compare against joi Schema'), title: 'Result and failureReason are both, unexpectedly, null' })
          return false
        }
      }
    })
  }

  private saveRequest (context: RequestContext) {
    this.logger.debug(`${this.title}: Saving request context for '${context.url}'`)
    this.requestContext = context
  }

  private async saveResponse (context: ResponseContext) {
    // this.logger.debug()
    consoleLogger.debug(`${this.title}: Saving response context for '${context.url}'`)
    // this.response = context.response.clone() as unknown as Response
    this.response = context.response as unknown as ApiCall<T>['response']
    consoleLogger.debug('ApiCall.saveResponse: after setting this.response')
    this.responseContext = context
    consoleLogger.debug('ApiCall.saveResponse: after setting this.responseContext')
    // const hasContent = await responseHasContent(this.response)
    // consoleLogger.debug(`ApiCall.saveResponse: checked if content exists. (${hasContent ? 'Yes' : 'No'})`)
    // if (hasContent) {
    try {
      const {text, json, errors} = await getTextAndJson(this.response)
      this.text = text
      this.json = json as T
      this.addExpectationErrors(errors.map((err) => ({error: err, title: 'Problem when attempting to get response text and json'})))
    } catch (err) {
      this.errors.push(err as ExpectationError)
    }
    // const processedResponse: ProcessedResponse = {
    //   ...this.response,
    //   json: this.json,
    //   // body,
    //   text: this.text
    //   // headers: response.headers,
    //   // status: response.status,
    //   // statusText: response.statusText,
    //   // ok: response.ok
    // }
    const normalizedResult: ComplianceCheckDetailsCallbackArg = {
      ...context,
      url: context.url,
      init: context.init,
      fetch: context.fetch,
      errors: [],
      response: this.response
    }

    this.details = normalizedResult
      // try {
      //   this.text = await getText(this.response)
      // // consoleLogger.debug('ApiCall.saveResponse: after setting this.text')
      // } catch (error) {
      //   consoleLogger.debug('Error getting response text', { error })
      // }
      // try {
      //   // this.json = (await this.response.clone().json()) as T
      //   this.json = this.text == null ? null : JSON.parse(this.text)
      // } catch (error) {
      //   consoleLogger.debug('Error getting response json', { error })
      // }
    // }
  }

  /**
   * Details is set in {requestResponseLogger} middleware after the call is complete
   */
  private saveDetails (details: ComplianceCheckDetailsCallbackArg) {
    this.details = details
  }
}

export { ApiCall }
export type { ApiCallExpectation }
