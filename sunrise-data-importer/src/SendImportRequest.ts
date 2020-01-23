import { Transform } from 'stream'
import { ApiRequest } from '@commercetools/import-api-ts-sdk'
import {
  ImportResponse,
  ImportRequest,
} from '@commercetools/import-api-ts-sdk'
import { ClientResponse } from '@commercetools/import-api-ts-sdk'

/**
 * This sends a given import request while limiting the number of max requests and returns the result of the request.
 */
export class SendImportRequest<T extends ImportRequest> extends Transform {
  private maxRequests: number
  private postRequestCreator: (importRequest: T) => ApiRequest<ImportResponse>
  private requests: Promise<ClientResponse<ImportResponse>>[]

  constructor(
    options: { maxRequests?: number } = {},
    postRequestCreator: (importRequest: T) => ApiRequest<ImportResponse>
  ) {
    super({ ...options, objectMode: true })
    this.maxRequests = options.maxRequests || 5
    this.postRequestCreator = postRequestCreator
    this.requests = []
  }

  /* tslint:disable: function-name */
  async _transform(importRequest: T, _, callback) {
    const request = this.postRequestCreator(importRequest).execute()
    if (this.requests.length === this.maxRequests) {
      await this.waitForAllRequests()
    }
    this.requests.push(request)
    callback()
  }

  /* tslint:disable: function-name */
  async _flush(callback) {
    if (this.requests.length > 0) {
      await this.waitForAllRequests()
    }
    callback()
  }

  private async waitForAllRequests() {
    const results = await Promise.all(this.requests)
    results.forEach(result => this.push(result))
    this.requests = []
  }
}
