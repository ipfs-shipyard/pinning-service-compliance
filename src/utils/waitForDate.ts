/* eslint-disable no-console */
/* eslint-disable no-loop-func */
const sleep = async (delay: number) => await new Promise((resolve) => setTimeout(resolve, delay))
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
