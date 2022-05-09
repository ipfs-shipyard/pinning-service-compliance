import type { ValidationError, ValidationResult } from '@hapi/joi'

const joiValidationAsMarkdown = (validationResult: ValidationResult | null): string => {
  let joiValidationFailures: string = 'No failures'
  if (validationResult?.errors != null || validationResult?.error != null) {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    const errors = (validationResult.errors ?? validationResult.error) as ValidationError
    joiValidationFailures = ''

    errors.details.forEach((errorItem) => {
      joiValidationFailures = `${joiValidationFailures}
* ${errorItem.message}
`
    })
  }
  return joiValidationFailures
}
export { joiValidationAsMarkdown }
