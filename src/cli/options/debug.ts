const debug = {
  alias: 'd',
  boolean: true,
  description: 'Whether you want debug output or not',
  nargs: 0,
  requiresArg: false,
  default: false,
  coerce: (debug: boolean) => {
    if (debug != null) {
      return Boolean(debug)
    }
    return false
  }
}

export { debug }
