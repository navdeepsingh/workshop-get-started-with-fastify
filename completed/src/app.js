import Fastify from "fastify";

import routes from "./routes.js";

export default async function buildApp() {
  const options = {
    /**
     * These settings are NOT suitable for production.
     *
     * They should be configurable so that different
     * settings can be used in development and production.
     *
     * See 'Challenges' in the starter application README.
     */
    logger: {
      level: "debug",
      prettyPrint: true
    }
  };

  const fastify = Fastify(options);

  fastify.register(routes, { prefix: "/recipes" });

  return fastify;
}
