import buildApp from "./index.js";
const fastify = await buildApp();
const PORT = process.env.PORT || 3000;

try {
  await fastify.listen(PORT);
} catch (error) {
  fastify.log.error(error);
  process.exist();
}
