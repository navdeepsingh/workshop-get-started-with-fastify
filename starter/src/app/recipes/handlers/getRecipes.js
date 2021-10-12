import { readFileSync } from "fs";
import { resolve } from "path";
const __dirname = resolve();
const recipesDataPath = "./src/app/recipes/data/recipes.json";

function getRecipesHandler() {
  return async (request, _reply) => {
    try {
      const jsonString = readFileSync(resolve(__dirname, recipesDataPath));
      const recipes = JSON.parse(jsonString);
      console.log(recipes);
      return recipes;
    } catch (err) {
      request.log.info(err);
      return;
    }
  };
}

export default getRecipesHandler;
