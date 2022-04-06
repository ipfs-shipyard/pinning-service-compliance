/* eslint-disable no-console */
import type { Schema, ValidationResult } from '@hapi/joi'

import type { RemotePinningServiceClient } from '@ipfs-shipyard/pinning-service-client'

import { clientFromServiceAndTokenPair } from '../clientFromServiceAndTokenPair'
import { renderComplianceCheckResults } from '../output/renderComplianceCheckResults'
import { buildComplianceCheckDetails } from '../utils/buildComplianceCheckDetails'

interface ComplianceCheckOptions<T> {
  /**
   * The title of the compliance check
   */
  title: string
  pair: ServiceAndTokenPair
  runCheck: (details: ComplianceCheckDetailsCallbackArg & {result: T|null}) => Promise<boolean>
  apiCall: (client: RemotePinningServiceClient) => Promise<T>
  schema?: Schema
}
class CheckClass<T> {
  private details: ComplianceCheckDetailsCallbackArg | ResponseContext | undefined
  private result: T | null = null
  private readonly client: RemotePinningServiceClient
  private readonly schema: Schema | undefined
  private readonly apiCall: (client: RemotePinningServiceClient) => Promise<T>
  private readonly title: string
  private readonly pair: ServiceAndTokenPair
  private validationResult: ValidationResult | null = null
  runCheck: (details: ComplianceCheckDetailsCallbackArg & { result: T | null }) => Promise<boolean>

  constructor ({ pair, runCheck, apiCall, title, schema }: ComplianceCheckOptions<T>) {
    this.schema = schema
    this.apiCall = apiCall
    this.title = title
    this.pair = pair
    this.runCheck = runCheck
    this.client = clientFromServiceAndTokenPair(this.pair, this.getDetails)
  }

  async run () {
    try {
      await this.makeApiCall()
      await this.validateSchema()
      await this.finalizeCheck()
    } catch (err) {
      console.error('Unexpected error running compliance Check')
      console.error(err)
    }
  }

  async getDetails (d: ComplianceCheckDetailsCallbackArg | ResponseContext) {
    this.details = d
  }

  async makeApiCall () {
    try {
      this.result = await this.apiCall(this.client)
    } catch (err) {
      console.error('You must catch any errors within your Check implementation')
      console.error(err)
      // They should be handled by the provided `apiCall` function
      throw err
    }
  }

  async validateSchema () {
    if (this.schema != null) {
      this.validationResult = this.schema.validate(this.result)
    }
  }

  async finalizeCheck () {
    let successful = await this.runCheck({
      result: this.result,
      ...this.details as ComplianceCheckDetailsCallbackArg
    })
    if (this.validationResult != null) {
      if (this.validationResult.error != null || this.validationResult.errors != null) {
        successful = false
      }
    }
    if (this.details == null) {
      throw new Error('The details object was not set in the middleware')
    }

    renderComplianceCheckResults(buildComplianceCheckDetails({
      title: this.title,
      details: this.details,
      successful,
      result: this.result,
      validationResult: this.validationResult as ValidationResult
    }))
  }
}
export { CheckClass }
