import Fastify from "fastify";
import routes from "./routes.js";
export default async function buildApp() {
  const options = {
    logger: {
      level: "debug",
      prettyPrint: true,
    },
  };
  const fastify = Fastify(options);
  fastify.register(routes, { prefix: "/recipes" });
  return fastify;
}
