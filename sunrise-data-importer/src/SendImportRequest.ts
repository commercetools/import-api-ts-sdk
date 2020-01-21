import { Transform } from 'stream'
import { ApiRequest } from '@shared/generated/import-api-client/base/requests-utils'
import {
  ImportResponse,
  ImportRequest,
} from '@shared/generated/import-api-model/importrequests'
import { ClientResponse } from '@shared/generated/import-api-client/base/common-types'

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
