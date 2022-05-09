const isResponse = (potentialResponse: Response | unknown): potentialResponse is Response => {
  const { ok, body, url, redirected, status, statusText, headers } = potentialResponse as Response

  return ok != null &&
    body != null &&
    url != null &&
    redirected != null &&
    status != null &&
    statusText != null &&
    headers != null
}

export { isResponse }
