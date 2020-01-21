const NS_PER_SEC = 1e9
const NS_PER_MS = 1e6

import { Prometheus } from '@promster/hapi'

/**
 * This method decorator measures the execution time/duration of the decorated async method
 * and reports it as a prometheus summary metric.
 *
 * WARNING:
 * This decorator always returns a promise, even when the original method doesn't return a promise!
 *
 * @param name the name of the metric
 * @param help the help text describing the metric
 * @constructor
 */
export function durationSummaryMetricAsync(name: string, help: string) {
  const metric = new Prometheus.Summary({ name, help })

  return function Measure(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value
    descriptor.value = async function(...args: any[]) {
      const start = process.hrtime()
      const result = await originalMethod.apply(this, args)
      const [seconds, nanoseconds] = process.hrtime(start)
      const durationMs = Math.round(
        (seconds * NS_PER_SEC + nanoseconds) / NS_PER_MS
      )
      metric.observe(durationMs)
      return result
    }
  }
}
