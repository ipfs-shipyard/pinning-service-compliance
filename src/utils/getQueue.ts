import PQueue from 'p-queue'

type QueueInstance = InstanceType<typeof PQueue>
const queues: Map<string, QueueInstance> = new Map()

const getQueue = (endpointUrl: string, options: ConstructorParameters<typeof PQueue>[0] = { concurrency: 1, intervalCap: 1, interval: 1000 }): PQueue => {
  if (queues.has(endpointUrl)) {
    return queues.get(endpointUrl) as QueueInstance
  }
  const newQueueLimiter = new PQueue(options)

  queues.set(endpointUrl, newQueueLimiter)

  return newQueueLimiter
}

export { getQueue }
