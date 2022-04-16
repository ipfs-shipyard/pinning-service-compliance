import { failure } from './failure'
import { success } from './success'

const renderComplianceCheckResults = (details: ComplianceCheckDetails) => {
  if (details.successful) {
    success(details)
  } else {
    failure(details)
  }
}

export { renderComplianceCheckResults }
