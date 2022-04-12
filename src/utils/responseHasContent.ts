const responseHasContent = async (response: Response) => {
  const clone = response.clone()
  // const headers = clone.headers.entries()
  // for (const [headerKey, headerValue] of headers) {
  //   console.log('headerKey, headerValue: ', headerKey, headerValue)
  // }
  // debugger
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (clone.headers.has('content-length')) {
    return Number(clone.headers.get('content-length')) > 0
  }
  return (await clone.text()).length > 0
}

export { responseHasContent }
