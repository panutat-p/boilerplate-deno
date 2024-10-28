import * as amqp from 'npm:amqplib'

(async () => {
  const conn = await amqp.connect('amqp://guest:guest@127.0.0.1:5672/')
  console.info('Connected to RabbitMQ')
})()
