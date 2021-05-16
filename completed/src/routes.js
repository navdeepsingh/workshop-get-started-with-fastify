/**
 * It can get tiring writing out JSON schemas by hand.
 * There's a library which can help make it easier.
 *
 * See 'Challenges' in the starter application README.
 */
const recipeSchema = {
  body: {
    type: "object",
    required: ["name", "ingredients"],
    properties: {
      name: {
        type: "string",
        minLength: 1,
        maxLength: 100
      },
      ingredients: {
        type: "array",
        minItems: 1,
        items: {
          type: "string",
          minLength: 1,
          maxLength: 100
        }
      },
      time: {
        type: "integer",
        minimum: 1
      }
    },
    additionalProperties: false
  }
};

export default async function routes(fastify) {
  fastify.post("/", { schema: recipeSchema }, async function createRecipe(request, reply) {
    const newRecipe = request.body;

    /**
     * In a real application we would save the recipe to a database here.
     */
    if (!newRecipe) {
      throw new Error("Error creating recipe");
    }

    request.log.info("New recipe created");

    reply.status(201);

    return newRecipe;
  });
}
