import { HttpCallRepresentation } from '../commercetoolsLoggerModel'
import { Request, ResponseObject } from '@hapi/hapi'

export function toHttpRepresentation(
  request: Request,
  response: ResponseObject
): HttpCallRepresentation {
  return {
    http_method: request.method.toUpperCase(),
    http_status: response.statusCode,
    http_uri: request.url.pathname,
  }
}
