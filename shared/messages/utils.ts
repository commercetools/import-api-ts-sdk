export function messageErrorHandler(error, message, logger) {
  const changeMessage = JSON.parse(message.data)
  // 404 errors frequently happen and dont have be to be logged as error, but only in debugging mode
  if (error.code !== 404) {
    logger.error({
      billing_prjkey: changeMessage.projectKey,
      message: 'error while processing message',
      fields: { changeMessage },
      error,
    })
  } else {
    logger.debug({
      billing_prjkey: changeMessage.projectKey,
      message: 'error while processing message',
      fields: { changeMessage },
      error,
    })
  }
  if (error.code) {
    switch (error.code) {
      case 400:
      case 404:
        return message.ack()
      case 409:
      case 500:
        return message.nack() // TODO: implement retry count
      default:
        return message.ack()
    }
  }
  return message.ack()
}
