import Fastify from "fastify";
import * as FastifyCors from "fastify-cors";
import routes from "./app/routes.js";
export default async function buildApp() {
  const options = {
    logger: {
      level: "debug",
      prettyPrint: true,
    },
  };
  const fastify = Fastify(options);

  // Register Plugins
  fastify.register(routes);
  fastify.register(FastifyCors);

  return fastify;
}
