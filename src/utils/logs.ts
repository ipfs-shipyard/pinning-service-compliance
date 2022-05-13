import { join } from 'path'

import { format, createLogger, transports } from 'winston'
import type { Logform, transport } from 'winston'

import { docsDir } from './constants.js'
import { getHostnameFromUrl } from './getHostnameFromUrl.js'
import { argv } from '../cli/index.js'

const { combine, splat, timestamp, printf } = format

interface LoggerInfo extends Logform.TransformableInfo {
  timestamp: string
  /**
   * error: 0,
   * warn: 1,
   * info: 2,
   * http: 3,
   * verbose: 4,
   * debug: 5,
   * silly: 6
   */
  level: 'error' | 'warn' | 'info' | 'http' | 'verbose' | 'debug' | 'silly'
  message: string
  metadata: Record<string | number | symbol, any>
  nested?: boolean
  messageOnly?: boolean
}
// const consoleTransport =
const myFormat = printf(({ level, message, timestamp, nested, messageOnly, ...metadata }: Logform.TransformableInfo) => {
  if (nested === true) {
    return `\t${message}`
  }
  if (messageOnly === true) {
    return `${message}`
  }

  return `${timestamp as LoggerInfo['timestamp']} [${level}] : ${message}`
})

/**
 * supplying the cli with the '-v' or '--verbose' flag will output the full report details as they're generated.
 */
const verboseFilter = format((info: Logform.TransformableInfo) => {
  const { level } = info
  if (level === 'verbose') {
    return argv.verbose ? info : false
  } else if (argv.verbose && level === 'info') {
    // do not log info logs as they duplicate verbose logs w.r.t. the report output
    return false
  }
  return info
})

/**
 * supplying the cli with the '-d' or '--debug' flag will output additional information about the state of the compliance checks in order to assist with debugging/troubleshooting
 */
const debugFilter = format((info: Logform.TransformableInfo, options) => {
  const { level } = info
  if (level === 'debug') {
    return argv.debug ? info : false
  }
  return info
})

const getServiceLogger = (endpointUrl: string) => {
  const hostname = getHostnameFromUrl(endpointUrl)
  const logFolder = join(docsDir, hostname)
  const loggerTransports: transport[] = [
  ]
  if (argv.debug) {
    loggerTransports.push(new transports.File({ filename: join(logFolder, 'debug.log'), level: 'debug' }))
  }

  loggerTransports.push(
    // - Write all logs with importance level of `error` or less to `error.log`
    new transports.File({ filename: join(logFolder, 'error.log'), level: 'error' }),
    // - Write all logs with importance level of `info` or less to `combined.log`
    new transports.File({ filename: join(logFolder, 'combined.log') })
  )

  const logger = createLogger({
    level: 'info',
    format: combine(
      format.colorize(),
      splat(),
      timestamp(),
      myFormat
    ),
    defaultMeta: { hostname },
    transports: loggerTransports
  })

  return logger
}

const getLogger = () => {
  return createLogger({
    level: 'info',
    format: combine(
      verboseFilter(),
      debugFilter(),
      format.colorize(),
      splat(),
      timestamp(),
      myFormat
    ),
    defaultMeta: { },
    transports: [
      new transports.Console({ level: 'silly' })
    ]
  })
}

const logger = getLogger()

export { getServiceLogger, getLogger, logger }
