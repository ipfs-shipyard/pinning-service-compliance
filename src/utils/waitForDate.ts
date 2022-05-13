import { sleep } from './sleep.js'

const waitForDate = async (date: Date): Promise<void> => {
  const now = new Date()
  const delta = date.getTime() - now.getTime()

  // add 2 seconds as a buffer
  await sleep(delta + 2000)
}
export { waitForDate }
