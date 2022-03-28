const stringifyHeaders = (headers?: Headers | HeadersInit) => {
  const headerObj: Record<string, string> = {}
  if (headers != null) {
    if (headers.forEach != null) {
      const actualHeaders = headers as Headers
      actualHeaders.forEach((val, key) => {
        headerObj[key] = val
      })
    } else {
      const headersInit = headers as Record<string, string>
      Object.keys(headersInit).forEach((key) => {
        let val = headersInit[key]
        if (/authorization/i.test(key)) {
        // Authorization: <auth-scheme> <authorization-parameters>
          val = `${val.split(' ')[0]} REDACTED`
        }
        headerObj[key] = val
        // headerString = `${headerString}${key}:${val};`
      })
    }
  }
  return JSON.stringify(headerObj, null, 2)
}

export { stringifyHeaders }
