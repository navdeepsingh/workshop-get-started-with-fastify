import recipeRoutes from "./recipes/routes.js";
import globalRoutes from "./global/routes.js";

async function routes(fastify) {
  fastify.register(recipeRoutes, { prefix: "/recipes" });
  fastify.register(globalRoutes);
}

export default routes;
