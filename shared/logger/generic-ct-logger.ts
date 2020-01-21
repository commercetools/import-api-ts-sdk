import {
  CtLogFormat,
  ErrorRepresentation,
  LOG_LEVEL,
  ReducedLogFormat,
} from './commercetoolsLoggerModel'
import { simpleFormatter } from './formatters'

export class CtLogger {
  private readonly maxLogLevel =
    this.loggerConfig.logLevel === 0 || this.loggerConfig.logLevel
      ? this.loggerConfig.logLevel
      : LOG_LEVEL.ALL
  private readonly formatter: Formatter = this.loggerConfig.formatter
    ? this.loggerConfig.formatter
    : simpleFormatter

  constructor(private readonly loggerConfig: LoggerConfig) {}

  private transformLogMessage(
    severity: LOG_LEVEL,
    reduceLog: ReducedLogFormat
  ): CtLogFormat {
    const {
      httpCallRepresentation,
      error,
      fields,
      ...everythingElse
    } = reduceLog

    const fullMessage: CtLogFormat = {
      severity,
      source: this.loggerConfig.projectName,
      timestamp: new Date(),
      logger: this.loggerConfig.logger,
      // For the additional fields concatenate all the labels
      fields: { ...this.loggerConfig.labels, ...fields },
      ...httpCallRepresentation,
      ...(error ? new ErrorRepresentation(error) : null),
      ...everythingElse,
    }

    return fullMessage
  }

  log(level: LOG_LEVEL, reducedLog: ReducedLogFormat) {
    if (level > this.maxLogLevel) {
      return
    }
    const logMessage: CtLogFormat = this.transformLogMessage(level, reducedLog)
    const formattedLogMessage = this.formatter(logMessage)
    console.log(formattedLogMessage)
  }

  info(reducedLog: ReducedLogFormat) {
    this.log(LOG_LEVEL.INFO, reducedLog)
  }

  error(reducedLog: ReducedLogFormat) {
    this.log(LOG_LEVEL.ERROR, reducedLog)
  }

  warn(reducedLog: ReducedLogFormat) {
    this.log(LOG_LEVEL.WARN, reducedLog)
  }

  debug(reducedLog: ReducedLogFormat) {
    this.log(LOG_LEVEL.DEBUG, reducedLog)
  }

  fatal(reducedLog: ReducedLogFormat) {
    this.log(LOG_LEVEL.FATAL, reducedLog)
  }

  trace(reducedLog: ReducedLogFormat) {
    this.log(LOG_LEVEL.TRACE, reducedLog)
  }
}

export type Formatter = (message: CtLogFormat) => string

export type LoggerConfig = {
  logger: string
  projectName: string
  logLevel?: LOG_LEVEL
  formatter?: Formatter
  labels?: { [key: string]: string }
}

/**
 * @param logger the module name that will use the logger
 * @param formatter the formatter allows the message transformation before printing to output
 */
export function createLogger(loggerConfig: LoggerConfig): CtLogger {
  return new CtLogger(loggerConfig)
}
