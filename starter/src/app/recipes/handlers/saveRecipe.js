function saveRecipesHandler(fastify) {
  return async (request, reply) => {
    const newRecipe = request.body;
    request.log.info("New recipe created");
    reply.status(201);
    return newRecipe;
  };
}

export default saveRecipesHandler;
