import { Transform } from 'stream'
import {
  ImportResource,
  ImportResourceType,
} from '@shared/generated/import-api-model/common'

/**
 * This transform aggregates import resources into a corresponding import request.
 */
export class AggregateImportRequest<
  T extends ImportResource
> extends Transform {
  private maxResources: number
  private type: ImportResourceType
  private resources: T[]

  constructor(
    options: { maxResources?: number } = {},
    type: ImportResourceType
  ) {
    super({ ...options, objectMode: true })
    this.maxResources = options.maxResources || 20
    this.type = type
    this.resources = []
  }

  /* tslint:disable: function-name */
  _transform(resource: T, _, callback) {
    if (this.resources.length === this.maxResources) {
      this.pushResources()
    }
    this.resources.push(resource)
    callback()
  }

  /* tslint:disable: function-name */
  _flush(callback) {
    this.pushResources()
    callback()
  }

  private pushResources() {
    if (this.resources.length > 0) {
      this.push({
        type: this.type,
        resources: this.resources,
      })
      this.resources = []
    }
  }
}
