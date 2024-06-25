import { userMigration } from "../modules/users/models/userModel.js";
import { recordMigration } from "../modules/admin/models/recordModel.js";
import { IngredientMigration } from "../modules/foodRecipes/models/ingredientModel.js";
import { TypeMigration } from "../modules/foodRecipes/models/TypeModel.js";

export const makeMigration = async () => {
  // await userMigration();
  await recordMigration();
  await TypeMigration();
  await IngredientMigration();
};
