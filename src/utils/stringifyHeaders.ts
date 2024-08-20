const sanitizeHeaders = (key: string, val: string) => {
  if (/authorization/i.test(key)) {
    // Authorization: <auth-scheme> <authorization-parameters>
    val = `${val.split(' ')[0]} REDACTED`
  }
  return { key, val }
}
const stringifyHeaders = (headers?: Headers | Record<string, string> | string[][]) => {
  const headerObj: Record<string, string> = {}
  if (headers != null) {
    if (headers.forEach != null) {
      const actualHeaders = headers as Headers
      actualHeaders.forEach((val, key) => {
        const sanitized = sanitizeHeaders(key, val)
        headerObj[sanitized.key] = sanitized.val
      })
    } else {
      const headersInit = headers as Record<string, string>
      Object.keys(headersInit).forEach((key) => {
        const val = headersInit[key]
        const sanitized = sanitizeHeaders(key, val)
        headerObj[sanitized.key] = sanitized.val
      })
    }
  }
  return JSON.stringify(headerObj, null, 2)
}

export { stringifyHeaders }
