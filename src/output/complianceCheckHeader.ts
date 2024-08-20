import { Icons } from '../utils/constants.js'

interface ComplianceCheckHeaderProps {
  title: string
  successful: boolean
}
const complianceCheckHeader = ({ title, successful }: ComplianceCheckHeaderProps): string => `${title} - ${successful ? `${Icons.SUCCESS} SUCCESS` : `${Icons.FAILURE} FAILED`}`

export { complianceCheckHeader }
