const recipeSchema = {
  body: {
    type: "object",
    required: ["name", "ingredients"],
    properties: {
      name: {
        type: "string",
        minLength: 1,
        maxLength: 100,
      },
      ingredients: {
        type: "array",
        minItems: 1,
        items: {
          type: "string",
          minLength: 1,
          maxLength: 100,
        },
      },
      time: {
        type: "integer",
        minimum: 1,
      },
    },
    additionalProperties: false,
  },
};

export default async function routes(fastify) {
  fastify.post("/", { schema: recipeSchema }, async (request, reply) => {
    const newRecipe = request.body;
    request.log.info("New recipe created");
    reply.status(201);
    return newRecipe;
  });
}
