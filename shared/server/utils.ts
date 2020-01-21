import { getContentType, getSummary } from '@promster/hapi'

export function startServer(server, logger, createPlugin?: Function) {
  // TODO: this one should not be needed. We should monitor
  // the logs and see if it does not show up then remove it
  process.on('unhandledRejection', error => {
    logger.error({
      billing_prjkey: 'ANY',
      message: 'Unhandled rejection',
      error,
    })
    process.exitCode = 1
    server.stop()
  })
  return server
    .start()
    .then(() =>
      logger.info({
        billing_prjkey: 'ANY',
        message: `Server running at: ${server.info.uri}`,
      })
    )
    .then(() => {
      if (createPlugin) server.register(createPlugin({}))
    })
    .catch(error =>
      logger.error({
        billing_prjkey: 'ANY',
        message: 'Error while running server',
        error,
      })
    )
}

export function createHealthRoute(server, subscriptionIsOpenFn?: Function) {
  server.route({
    method: 'GET',
    path: '/health',
    handler: (req, h) => {
      if (!subscriptionIsOpenFn || subscriptionIsOpenFn()) {
        return h.response("I'm Healthy").code(200)
      }
      return h.response("I'm Unhealthy").code(500)
    },
  })
}

export function createMetricsRoute(server) {
  server.route({
    method: 'GET',
    path: '/metrics',
    handler: (req, h) => {
      const response = getSummary()
      return h
        .response(response)
        .type(getContentType())
        .code(200)
    },
  })
}
