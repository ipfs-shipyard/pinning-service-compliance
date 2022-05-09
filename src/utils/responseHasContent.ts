const responseHasContent = async (response: Response) => {
  const clone = response.clone()

  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (clone.headers.has('content-length')) {
    return Number(clone.headers.get('content-length')) > 0
  }
  return (await clone.text()).length > 0
}

export { responseHasContent }
