import { Icons } from '../utils/constants.js'

const getSuccessIcon = (success: boolean): string => success ? Icons.SUCCESS : Icons.FAILURE

export { getSuccessIcon }
