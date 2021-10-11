import getRecipesHandler from "./handlers/getRecipesHandler.js";
import saveRecipesHandler from "./handlers/saveRecipeHandler.js";
import recipeSchema from "./schema/createRecipe.js";

async function routes(fastify) {
  fastify.post("/", { schema: recipeSchema }, saveRecipesHandler);
  fastify.get("/", getRecipesHandler);
}
export default routes;
