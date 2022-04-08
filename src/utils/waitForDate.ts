/* eslint-disable no-console */

import { sleep } from './sleep'

/* eslint-disable no-loop-func */
const waitForDate = async (date: Date): Promise<void> => {
  let delay = 1000

  return await new Promise((resolve, reject) => {
    let now = new Date()
    while (now < date) {
      const afterDelay = () => {
        delay += delay * 0.5
        now = new Date()
      }
      sleep(delay).then(afterDelay).catch((err) => {
        console.error('problem in sleep')
        console.error(err)
      })
    }
    resolve()
  })
}
export { waitForDate }
