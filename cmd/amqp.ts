import * as amqp from 'npm:amqplib'

const RABBITMQ_DSN = 'amqp://guest:guest@localhost:5672/'
const RABBITMQ_QUEUE = '001'

async function connectToRabbitMQ(dsn: string) {
  try {
    const connection = await amqp.connect(dsn)
    console.info('Connected to RabbitMQ')
    return connection
  } catch (error) {
    console.error('Failed to connect to RabbitMQ', error)
    throw error
  }
}

;(async () => {
  const conn = await connectToRabbitMQ(RABBITMQ_DSN)
  const ch1 = await conn.createChannel()
  ch1.assertQueue(RABBITMQ_QUEUE, { durable: true })
})()
