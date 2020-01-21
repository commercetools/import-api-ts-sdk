import chalk, { Chalk } from 'chalk'
import { LOG_LEVEL } from './commercetoolsLoggerModel'
import { Formatter } from './generic-ct-logger'
// TODO we should use flatted stringify to fix error formats
// import { stringify } from 'flatted'

const cache: Map<LOG_LEVEL, Chalk> = new Map()

function cachedChalkFunctions(): (logLevel: LOG_LEVEL) => Chalk {
  return function getChalkColorFunction(logLevel: LOG_LEVEL): Chalk {
    const loc = cache.get(logLevel)
    if (loc) {
      return loc
    }
    const proportionCoef = 1 - (600 - logLevel) / 500
    const h = 220 * Math.pow(proportionCoef, 1.5)
    const func: Chalk = chalk.hsv(h, 100, 100)
    cache.set(logLevel, func)
    return func
  }
}

const cachedFunctions = cachedChalkFunctions()

export const coloredFormatter: Formatter = logObject => {
  const messageStringified = JSON.stringify(
    { ...logObject, severity: '${SEVERITY}' },
    null,
    2
  )

  const func: Chalk = cachedFunctions(logObject.severity)
  // Highlighting fields message and severity
  const coloredMessage = func(messageStringified).replace(
    '${SEVERITY}',
    chalk.bgBlackBright(LOG_LEVEL[logObject.severity])
  )
  return coloredMessage
}

export const simpleFormatter: Formatter = message => {
  const messageStringified = JSON.stringify({
    ...message,
    severity: LOG_LEVEL[message.severity],
  })
  return messageStringified
}
