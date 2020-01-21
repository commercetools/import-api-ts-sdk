//Generated file, please do not change

import { ImportResourceType } from './common'

/**
*	The required headers received by each message
*/
export interface ImportMessageHeaders {
  /**
  *	the import sink where the message is handled
  */
  readonly importSinkKey: string;
  /**
  *	this is the operation id, used to identifiy the operation, currently in the form of a uuid
  */
  readonly operationId: string;
  /**
  *	the import resource type
  */
  readonly type: ImportResourceType;
  /**
  *	the project key to which this import belongs.
  */
  readonly projectKey: string
}
/**
*	this types represents the import messages that circulates between internal queues
*/
export interface ImportMessage {
  /**
  *	the message headers
  */
  readonly headers: ImportMessageHeaders;
  /**
  *	The type of the import resource sent to this import sink.
  */
  readonly data: object
}