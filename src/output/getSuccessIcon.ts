import { Icons } from '../utils/constants.js'

const getSuccessIcon = (success: boolean) => success ? Icons.SUCCESS : Icons.FAILURE

export { getSuccessIcon }
