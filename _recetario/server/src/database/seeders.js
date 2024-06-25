import { recordsSeed } from "../modules/admin/seeders/redordSeeder.js";
// others
import { ingredientsSeed } from "../modules/foodRecipes/seeders/ingredientsSeeder.js";
import { typesSeed } from "../modules/foodRecipes/seeders/typesSeeder.js";

export const seed = async () => {
  // await recordsSeed();
  // recetario
  // await typesSeed(); //--primero este
  await ingredientsSeed(); //--segundo este
};
