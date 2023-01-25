/* eslint-disable no-var */
import { BrowserMetricsProvider } from '@ipfs-shipyard/ignite-metrics/BrowserMetricsProvider'

declare global {
  var telemetry: InstanceType<typeof BrowserMetricsProvider>
  var addMetricsConsent: () => void
  var removeMetricsConsent: () => void
}

const telemetry = new BrowserMetricsProvider({ appKey: '53f683cabe5a08fdecdb0ea3ed8547cc47e9219a' })

window.telemetry = telemetry
window.removeMetricsConsent = () => telemetry.removeConsent(['minimal'])
window.addMetricsConsent = () => telemetry.addConsent(['minimal'])
