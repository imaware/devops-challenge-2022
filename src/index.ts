import fastify from 'fastify';

const server = fastify();

server.get('/ping', async () => ({ message: 'pong' }));

server.post('/foo', async () => ({ message: 'bar' }));

server.get('/v1/search', async () => ([{ message: 'result1' }, { message: 'result2' }]));

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
