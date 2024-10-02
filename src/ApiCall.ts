import pDefer, { type DeferredPromise } from 'p-defer'
import { clientFromServiceAndTokenPair } from './clientFromServiceAndTokenPair.js'
import { isError } from './guards/isError.js'
import { isResponse } from './guards/isResponse.js'
import { getSuccessIcon } from './output/getSuccessIcon.js'
import { addApiCallToReport } from './output/reporting.js'
import { Icons } from './utils/constants.js'
import { getTextAndJson } from './utils/fetchSafe/getTextAndJson.js'
import { getQueue } from './utils/getQueue.js'
import { getServiceLogger, logger as consoleLogger } from './utils/logs.js'
import { globalReport } from './utils/report.js'
import type { ComplianceCheckDetailsCallbackArg, ExpectationResult, PinsApiResponseTypes, ServiceAndTokenPair } from './types.js'
import type { Schema, ValidationError, ValidationResult } from '@hapi/joi'
import type { RemotePinningServiceClient, RequestContext, ResponseContext } from '@ipfs-shipyard/pinning-service-client'
import type { Logger } from 'winston'

interface ApiCallOptions<T extends PinsApiResponseTypes, P extends PinsApiResponseTypes> {
  pair: ServiceAndTokenPair
  fn(client: RemotePinningServiceClient): Promise<T>
  schema?: Schema
  title: string
  parent?: ApiCall<P> | undefined
}

interface ExpectationError {
  error: Error
  title: string
}

interface ExpectationCallbackArg<T extends PinsApiResponseTypes> {
  responseContext: ResponseContext
  details: ComplianceCheckDetailsCallbackArg
  apiCall: ApiCall<T>
  result: T | null
}

interface ExpectationFn<T extends PinsApiResponseTypes> {
  (arg: ExpectationCallbackArg<T>): boolean | Promise<boolean>
}

interface ApiCallExpectation<T extends PinsApiResponseTypes> {
  context?: ApiCall<T>
  fn: ExpectationFn<T>
  title: string
}

export interface ReportData {
  pair: ServiceAndTokenPair
  errors: ExpectationError[]
  title: string
  httpRequest: Request
  result: PinsApiResponseTypes | null
  response: Response
  expectationResults: ExpectationResult[]
  successful: boolean
  text: string | null
  validationErrors: ValidationError | undefined
  validationResult: ValidationResult | null
}

class ApiCall<T extends PinsApiResponseTypes, P extends PinsApiResponseTypes = never> {
  request: Promise<T | null>
  expectations: Array<ApiCallExpectation<T>> = []
  errors: ExpectationError[] = []
  title: string
  pair: ServiceAndTokenPair
  client: RemotePinningServiceClient
  successful: boolean = true
  json: T | null = null
  text: string | null = null
  logger: Logger

  /**
   * A deferred promise that is only resolved after expectations have ran via `runExpectations`.
   *
   * Used to handle parent/child expectation ordering
   */
  readonly afterExpectations = pDefer()
  parent: ApiCall<P> | null
  children: Array<ApiCall<PinsApiResponseTypes, T>> = []

  /**
   * These properties are only available after the request completes, and are private to prevent access prior to setting them.
   */

  private details!: ComplianceCheckDetailsCallbackArg
  private result!: T | null
  private readonly responseContext: DeferredPromise<ResponseContext> = pDefer()
  private failureReason: Error | unknown
  private requestContext!: RequestContext
  private response!: Response
  private readonly expectationResults: ExpectationResult[] = []
  private validationErrors: ValidationError | undefined
  private validationResult!: ValidationResult | null

  constructor ({ pair, fn, schema, title, parent }: ApiCallOptions<T, P>) {
    globalReport.incrementApiCallsCount()
    this.logger = getServiceLogger(pair[0])
    consoleLogger.debug(`Creating new ApiCall: ${title}`)
    this.saveRequest = this.saveRequest.bind(this)
    this.saveResponse = this.saveResponse.bind(this)
    this.saveDetails = this.saveDetails.bind(this)
    this.title = title
    this.pair = pair
    this.parent = parent ?? null

    this.client = clientFromServiceAndTokenPair(pair, {
      preCb: this.saveRequest,
      postCb: this.saveResponse
    })
    if (schema != null) {
      this.addSchema(schema)
    }
    if (parent != null) {
      parent.addChild(this)
    }

    this.request = getQueue(pair[0]).add(async () => {
      try {
        if (parent != null) {
          consoleLogger.debug(`ApiCall '${title}' has parent, waiting for it to finish`)
          // parent API call must finish before we send subsequent requests
          await parent.request
          consoleLogger.debug(`ApiCall '${title}' parent has finished`)
        }
        // eslint-disable-next-line @typescript-eslint/return-await
        return await fn(this.client)
      } catch (err) {
        let error: Error
        if (isResponse(err)) {
          error = new Error('Invalid response caused unexpected error in pinning-service-client')
        } else if (isError(err)) {
          error = err
        } else {
          error = new Error(err as string)
        }
        this.errors.push({
          title: 'Error running primary ApiCall fn',
          error
        })
        throw error
      }
    }, {
      // https://github.com/sindresorhus/p-queue/issues/175
      throwOnTimeout: true
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

  get httpResponse (): Response {
    return this.response
  }

  get httpRequest (): Request {
    const { init, url } = this.requestContext
    const request = new Request(url, init)

    return request
  }

  expect (expectation: ApiCallExpectation<T>): this {
    this.expectations.push(expectation)
    return this
  }

  async runExpectations (fromParent = false): Promise<this> {
    const hasParent = this.parent != null
    let padding = ''
    if (hasParent) {
      if (!fromParent) {
        consoleLogger.debug(`Ignoring runExpectations call for '${this.title}'. It will be called by the parent.`)
        return this
      }
      padding = '\t'
    } else {
      globalReport.incrementRunExpectationsCallCount()
    }
    consoleLogger.info(`${padding}${this.title}`, { messageOnly: true })

    try {
      await this.request
    } catch (err) {
      consoleLogger.error('Error occurred while waiting for request to conclude', err)
    }

    const result = this.result
    for await (const expectation of this.expectations) {
      globalReport.incrementTotalExpectationsCount()
      const { fn, title } = expectation
      try {
        const success = await fn({
          responseContext: await this.responseContext.promise,
          details: this.details,
          apiCall: this,
          result
        })
        consoleLogger.info(`${padding}${getSuccessIcon(success)} ${title}`, { nested: true })
        this.successful = this.successful && success

        this.expectationResults.push({
          success,
          title
        })
      } catch (error) {
        consoleLogger.info(`${padding}${Icons.ERROR} ${title}`, { nested: true })
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

    this.afterExpectations.resolve()
    for await (const child of this.children) {
      await child.runExpectations(true)
      this.successful = this.successful && child.successful
      const { expectationResults, errors } = await child.reportData()
      this.addExpectationResults(expectationResults)
      this.addExpectationErrors(errors)
    }

    try {
      await addApiCallToReport(this)
    } catch (err) {
      consoleLogger.error(`Could not add details of ApiCall '${this.title}' to report`, err)
    }

    if (!hasParent) {
      if (this.successful) {
        globalReport.incrementPassedExpectationsCount()
      } else {
        globalReport.incrementFailedExpectationsCount()
      }
    }

    return this
  }

  addExpectationResults (results: ExpectationResult[]): void {
    if (results.length > 0) {
      this.expectationResults.push(...results)
    }
  }

  addExpectationErrors (errors: ExpectationError[]): void {
    if (errors.length > 0) {
      this.errors.push(...errors)
    }
  }

  addSchema (schema: Schema): void {
    this.expect({
      title: 'Response object matches api spec schema',
      fn: async (): Promise<boolean> => {
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
          consoleLogger.debug('Result and failureReason are null')
          this.errors.push({ error: new Error('Could not compare against joi Schema'), title: 'Result and failureReason are both, unexpectedly, null' })
          return false
        }
      }
    })
  }

  async reportData (): Promise<ReportData> {
    await this.request
    let { pair, errors, title, httpRequest, result, response, expectationResults, successful, text, validationErrors, validationResult } = this

    if (response == null) {
      response = new Response(null, { status: 0, statusText: 'No response received' })
    }

    return { pair, errors, title, httpRequest, result, response, expectationResults, successful, text, validationErrors, validationResult }
  }

  addChild (child: ApiCall<any, any>): void {
    this.children.push(child)
  }

  private saveRequest (context: RequestContext): void {
    consoleLogger.debug(`${this.title}: Saving request context for '${context.url}'`)
    this.requestContext = context
  }

  private async saveResponse (context: ResponseContext): Promise<void> {
    consoleLogger.debug(`${this.title}: Saving response context for '${context.url}'`)
    this.response = context.response as unknown as ApiCall<T>['response']
    this.responseContext.resolve(context)
    try {
      const { text, json, errors } = await getTextAndJson(this.response)
      this.text = text
      this.json = json as T
      this.addExpectationErrors(errors.map((err) => ({ error: err, title: 'Problem when attempting to get response text and json' })))
    } catch (err) {
      this.errors.push(err as ExpectationError)
    }
    this.saveDetails({
      ...context,
      url: context.url,
      init: context.init,
      fetch: context.fetch,
      errors: [],
      response: this.response
    })
  }

  /**
   * Details is set in {requestResponseLogger} middleware after the call is complete
   */
  private saveDetails (details: ComplianceCheckDetailsCallbackArg): void {
    this.details = details
  }
}

export { ApiCall }
export type { ApiCallExpectation }
