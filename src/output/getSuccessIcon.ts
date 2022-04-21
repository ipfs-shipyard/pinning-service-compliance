import { Icons } from '../utils/constants'

const getSuccessIcon = (success: boolean) => success ? Icons.SUCCESS : Icons.FAILURE

export { getSuccessIcon }
