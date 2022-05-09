const isError = (potentialError: Error | unknown): potentialError is Error => potentialError instanceof Error

export { isError }
