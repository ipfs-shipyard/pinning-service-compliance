import { join } from 'path'
import winston from 'winston'
import { docsDir } from '../utils/constants'
import { getHostnameFromUrl } from '../utils/getHostnameFromUrl'

// const consoleTransport =

const getLogger = (endpointUrl: string) => {
  const hostname = getHostnameFromUrl(endpointUrl)
  const logFolder = join(docsDir, hostname)
  const logger = winston.createLogger({
    level: 'info',
    // format: winston.format.json(),
    defaultMeta: { hostname },
    transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
      new winston.transports.File({ filename: join(logFolder, 'error.log'), level: 'error' }),
      new winston.transports.File({ filename: join(logFolder, 'combined.log') }),
      // new winston.transports.File({ filename: join(logFolder, 'debug.log'), level: 'debug' }),
      new winston.transports.Console({ level: 'debug' })
    ]
  })

  return logger
}

export { getLogger }
