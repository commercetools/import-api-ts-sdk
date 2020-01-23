import { Transform } from 'stream'

/**
 * This transform filter a given stream with the given predicate.
 */
export class FilterStream extends Transform {
  private filter: (value: any) => boolean

  constructor(options = {}, filter: (value: any) => boolean) {
    super({ ...options, objectMode: true })
    this.filter = filter
  }

  /* tslint:disable: function-name */
  _transform(element: any, _, callback) {
    if (this.filter(element)) {
      this.push(element)
    }
    callback()
  }
}
