import { Transform } from 'stream'

/**
 * This transform a given stream with the given function.
 */
export class TransformStream<T> extends Transform {
  private transform: (T) => any

  constructor(options = {}, transform: (value: T) => any) {
    super({ ...options, objectMode: true })
    this.transform = transform
  }

  /* tslint:disable: function-name */
  _transform(element: T, _, callback) {
    this.push(this.transform(element))
    callback()
  }
}
