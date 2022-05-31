/**
 * Eventually, this will house all the logic that is currently scattered throughout src/output/*.ts
 */
class Report {
  apiCallCount = 0
  totalExpectationsCount = 0
  runExpectationsCallCount = 0

  incrementApiCallsCount () {
    this.apiCallCount++
  }

  incrementTotalExpectationsCount () {
    this.totalExpectationsCount++
  }

  incrementRunExpectationsCallCount () {
    this.runExpectationsCallCount++
  }

  toString () {
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
