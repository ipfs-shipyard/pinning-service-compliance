/**
 * Eventually, this will house all the logic that is currently scattered throughout src/output/*.ts
 */
class Report {
  apiCallCount = 0
  totalExpectationsCount = 0
  runExpectationsCallCount = 0
  failed = 0
  passed = 0

  incrementApiCallsCount (): void {
    this.apiCallCount++
  }

  incrementTotalExpectationsCount (): void {
    this.totalExpectationsCount++
  }

  incrementRunExpectationsCallCount (): void {
    this.runExpectationsCallCount++
  }

  incrementFailedExpectationsCount (): void {
    this.failed++
  }

  incrementPassedExpectationsCount (): void {
    this.passed++
  }

  toString (): string {
    return `The total counts for this run are:
    Total Expectations          ${this.totalExpectationsCount}
    Total ApiCall instances     ${this.apiCallCount}
    Total FirstClass ApiCalls   ${this.runExpectationsCallCount}
`
  }
}

/**
 * Singleton report per run.
 */
const globalReport = new Report()

export { Report, globalReport }
