/**
 * This represents the information logging system expected to be received by ct
 * as documented in https://wiki.commercetools.com/display/S/Structured+logging
 */
export class CtLogFormat {
  constructor(
    /**
     * The severity of the log entry. Ex: DEBUG / INFO / WARN / ERROR
     */
    readonly severity: LOG_LEVEL,
    /**
     * The important message. Main piece of information
     */
    readonly message: string,
    /**
     * For the platform, always equal to "sphere"
     */
    readonly timestamp: Date = new Date(),
    /**
     * For the platform, always equal to "sphere"
     */
    readonly source: string = 'commercetools-importer',
    /**
     * In java, the class using the log.
     */
    readonly logger: string,
    /**
     * project key
     */
    readonly billing_prjkey: string,
    /**
     * The correlation ID that correlates events occurring on different
     * systems.
     */
    readonly correlation_id?: string,
    /**
     * HTTP method: GET / POST / DELETE / ...
     */
    readonly http_method?: string,
    /**
     * HTTP uri. Ex "/search"
     */
    readonly http_uri?: string,
    /**
     * HTTP response status. Ex: 200, 404, 500
     */
    readonly http_status?: number,
    /**
     * In case of error, the stack trace.
     */
    readonly stack_trace?: string,
    /**
     *In case of error, a hash of the stack trace. It allows to quickly find
     *or ignore similar errors.
     */
    readonly stack_hash?: string,
    /**
     * custom key/values
     * Keys need to be namespaced with application name to prevent clashes.
     */
    readonly fields?: { [key: string]: string }
  ) {}
}

/**
 * This is a reduced representation of CtLogFormat that is easy to get
 * constructed by the log user
 */
export class ReducedLogFormat {
  constructor(
    /**
     * The important message. Main piece of information
     */
    readonly message: string,
    /**
     * project key
     */
    readonly billing_prjkey: string,
    /**
     * The correlation ID that correlates events occurring on different
     * systems.
     */
    readonly correlation_id?: string,
    /**
     * in case of http call this represents the call trace
     */
    readonly httpCallRepresentation?: HttpCallRepresentation,
    /**
     * used when you want to log a client error
     */
    readonly error?: Error,
    /**
     * additionalFields
     */
    readonly fields?: { [key: string]: string }
  ) {}
}

export class ErrorRepresentation {
  /**
   * In case of error, the stack trace.
   */
  stack_trace?: string
  /**
   *In case of error, a hash of the stack trace. It allows to quickly find
   *or ignore similar errors.
   */
  stack_hash?: string

  constructor(error: Error) {
    this.stack_trace = error.stack
    this.stack_hash = error.message
  }
}

export class HttpCallRepresentation {
  constructor(
    /**
     * HTTP method: GET / POST / DELETE / ...
     */
    readonly http_method: string,
    /**
     * HTTP uri. Ex "/search"
     */
    readonly http_uri: string,
    /**
     * HTTP response status. Ex: 200, 404, 500
     */
    readonly http_status: number
  ) {}
}

export enum LOG_LEVEL {
  OFF = 0,
  FATAL = 100,
  ERROR = 200,
  WARN = 300,
  INFO = 400,
  DEBUG = 500,
  TRACE = 600,
  ALL = 700,
}
