import { Server } from '@hapi/hapi'
import { createPlugin } from '@promster/hapi'
import { createHealthRoute, createMetricsRoute, startServer } from './utils'
import { CtLogger } from '../logger'

export function startHealthServer(
  port: number,
  logger: CtLogger,
  subHealth: { (): boolean }
) {
  const server = new Server({
    port,
  })

  createHealthRoute(server, subHealth)
  createMetricsRoute(server)

  return startServer(server, logger, createPlugin)
}
