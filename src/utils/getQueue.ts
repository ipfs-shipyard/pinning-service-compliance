// import { TokenBucketLimiter } from '@dutu/rate-limiter'
import PQueue from 'p-queue'

type QueueInstance = InstanceType<typeof PQueue>
const queues: Map<string, QueueInstance> = new Map()

const getQueue = (endpointUrl: string, options: ConstructorParameters<typeof PQueue>[0] = { concurrency: 1, intervalCap: 1, interval: 1000 }): QueueInstance => {
  if (queues.has(endpointUrl)) {
    return queues.get(endpointUrl) as QueueInstance
  }
  let newQueueLimiter = new PQueue(options)
  if (endpointUrl.includes('pinata')) {
    newQueueLimiter = new PQueue({ ...options, interval: 5000 })
  }

  queues.set(endpointUrl, newQueueLimiter)

  return newQueueLimiter
}

export { getQueue }
