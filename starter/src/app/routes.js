import recipeRoutes from "./recipes/routes.js";

async function routes(fastify) {
  fastify.register(recipeRoutes, { prefix: "/recipes" });
}

export default routes;
