import { AnySchema } from 'joi'
import { CtLogger, LOG_LEVEL } from '../logger'

export type CtMessage<T> = {
  data: T
  headers: any
}

export interface CtTopic {
  publish(message: CtMessage<Buffer>): Promise<string>
}

/**
 * the message handler return true this means that the message should be acknowledged, otherwise it isn't
 */
export type MessageHandler<T> = (
  message: CtMessage<T>
) => Promise<MessageProcessingResult>

/**
 * Specify if a message should be acknowledged or not, in the future it might be useful
 * to include other parameters such as delay.
 */
export type MessageProcessingResult = {
  acknowledge: boolean
}

export interface CtSubscription<T> {
  isOpen(): boolean
  registerMessageHandler(args: {
    messageHandler: MessageHandler<T>
    subscriptionConfig: SubscriptionConfig
  }): void
  registerErrorHandler(errorHandler: (error: Error) => void): void
}

export interface SubscriptionConfig {
  logger: CtLogger
  /**
   * The message schema
   */
  messageSchema: AnySchema

  /**
   * specifies in case of non compliant messages should it be acknowledged or not
   */
  onInvalidMessage: 'ack' | 'nack'

  /**
   * Specify the log level for invalid message, since sometimes it makes sense to
   * silence it while in others, it's important to log it
   */
  logLevelOnInvalid: LOG_LEVEL
}

export interface CtPubSubFactory {
  getTopic(topicName: string): CtTopic

  /**
   * @param subscriptionName the name of the subscription
   * @param messageValidator the validator used to validate the messages
   */
  getSubscription<T>(subscriptionName: string): CtSubscription<T>
}
