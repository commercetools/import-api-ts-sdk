import { Message, PubSub, Subscription, Topic } from '@google-cloud/pubsub'
import 'reflect-metadata'
import {
  CtMessage,
  CtPubSubFactory,
  CtSubscription,
  CtTopic,
  MessageHandler,
  SubscriptionConfig,
} from './pub-sub-types'
import { injectable } from 'inversify'
import { durationSummaryMetricAsync } from '../metrics'

const maxMessagesInProgress = parseInt(
  process.env.MAX_MESSAGES_IN_PROGRESS || '100',
  10
)
const maxExtension = Number(process.env.MAX_MESSAGE_DEADLINE_EXTENSION || '10')

@injectable()
export class GcpPubSubFactory implements CtPubSubFactory {
  constructor(readonly pubSub = new PubSub()) {}

  getTopic<T>(topicName: string): CtTopic {
    const gcpTopic = this.pubSub.topic(topicName)
    return new GcpTopic(gcpTopic)
  }

  getSubscription<T>(subscriptionName: string): CtSubscription<T> {
    const options = {
      flowControl: {
        allowExcessMessages: false,
        maxMessages: maxMessagesInProgress,
        maxExtension,
      },
    }
    const gcpSubscription = this.pubSub.subscription(subscriptionName, options)
    return new GcpSubscription(gcpSubscription)
  }
}

export class GcpTopic<T> implements CtTopic {
  constructor(readonly gcpTopic: Topic) {}
  publish(message: CtMessage<Buffer>): Promise<string> {
    return this.gcpTopic.publish(message.data, message.headers)
  }
}

export class GcpSubscription<T> implements CtSubscription<T> {
  constructor(readonly gcpSubscription: Subscription) {}

  registerMessageHandler(args: {
    messageHandler: MessageHandler<T>
    subscriptionConfig: SubscriptionConfig
  }): void {
    this.gcpSubscription.on('message', async (message: Message) => {
      this.handleMessage(message, args)
    })
  }

  @durationSummaryMetricAsync(
    'message_processing_duration',
    'Message processing duration [ms]'
  )
  async handleMessage(
    message: Message,
    args: {
      messageHandler: MessageHandler<T>
      subscriptionConfig: SubscriptionConfig
    }
  ) {
    const data = JSON.parse(message.data.toString())
    const ctMessage: CtMessage<T> = {
      data,
      headers: message.attributes,
    }
    const { messageHandler, subscriptionConfig } = args
    const {
      logLevelOnInvalid,
      logger,
      messageSchema,
      onInvalidMessage,
    } = subscriptionConfig
    if (messageSchema) {
      const validationResult = messageSchema.validate(ctMessage)
      if (validationResult.error !== null) {
        logger.log(logLevelOnInvalid, {
          billing_prjkey: 'ANY',
          message: 'Invalid message ignored',
          fields: { validationResult: JSON.stringify(validationResult) },
        })

        if (onInvalidMessage === 'ack') {
          message.ack()
          return
        }
        message.nack()
        return
      }
    }

    try {
      const result = await messageHandler(ctMessage)
      if (result.acknowledge) {
        message.ack()
      } else {
        message.nack()
      }
    } catch (error) {
      message.nack()
    }
  }

  registerErrorHandler(errorHandler: (error: Error) => void): void {
    this.gcpSubscription.on('error', errorHandler)
  }

  isOpen(): boolean {
    return this.gcpSubscription.isOpen
  }
}
