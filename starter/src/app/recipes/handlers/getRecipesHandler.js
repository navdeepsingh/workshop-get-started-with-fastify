import { readFileSync } from "fs";
import { resolve } from "path";
const __dirname = resolve();

function getRecipesHandler() {
  return async (request, _reply) => {
    try {
      const jsonString = readFileSync(resolve(__dirname, "./src/recipes.json"));
      const recipes = JSON.parse(jsonString);
      return recipes;
    } catch (err) {
      request.log.info(err);
      return;
    }
  };
}

export default getRecipesHandler;
