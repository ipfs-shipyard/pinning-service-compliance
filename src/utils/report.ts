class Report {
  apiCallCount = 0
  totalExpectationsCount = 0
  runExpectationsCallCount = 0

  // constructor () {

  // }

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

const globalReport = new Report()

export { Report, globalReport }
