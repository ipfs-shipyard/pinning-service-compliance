const verbose = {
  alias: 'v',
  boolean: true,
  description: 'Whether you want verbose output or not',
  nargs: 0,
  requiresArg: false,
  default: false,
  coerce: (verbosity) => {
    if (verbosity != null) {
      return Boolean(verbosity)
    }
    return false
  }
}

export { verbose }
