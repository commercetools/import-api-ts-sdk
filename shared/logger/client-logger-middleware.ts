import { ReducedLogFormat } from './commercetoolsLoggerModel'
import { CtLogger } from './generic-ct-logger'

// The http status codes that should be logged to debug instead of error
const DEBUG_STATUS_CODES: number[] = [404, 409]

export function createStructuredLogMiddleware(
  projectKey: string,
  logger: CtLogger
) {
  return next => {
    return (request, response) => {
      const error = response.error
      const statusCode = response.statusCode

      const logEntryPresentation: ReducedLogFormat = {
        message: 'logging sphere request',
        billing_prjkey: projectKey,
        httpCallRepresentation: {
          http_status: statusCode,
          http_uri: request.uri,
          http_method: request.method,
        },
        error,
      }

      if (error && !DEBUG_STATUS_CODES.includes(statusCode)) {
        logger.error(logEntryPresentation)
      } else {
        logger.debug(logEntryPresentation)
      }
      next(request, response)
    }
  }
}
