const sleep = async (delay: number): Promise<void> => {
  console.log(Date.now(), `starting sleep for ${delay / 1000} seconds...`)
  await new Promise<void>((resolve) => setTimeout(() => {
    console.log(Date.now(), 'done waiting')
    resolve()
  }, delay))
}

export { sleep }
