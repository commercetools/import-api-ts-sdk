import { middlewareFromCtpClient } from './ctp-middleware'
import { ApiRoot } from './../generated/import-api/client/client/api-root'

export function createApiBuilderFromCtpClient(ctpClient: any): ApiRoot {
  return new ApiRoot({
    middlewares: [middlewareFromCtpClient(ctpClient)],
  })
}
