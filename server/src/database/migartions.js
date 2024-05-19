import { TeacherMigration } from "../modules/teachers/models/teacherModel.js";
import { ShiftMigration } from "../modules/entryTeachers/models/shiftsModel.js";
import { IngredientMigration } from "../modules/foodRecipes/models/ingredientModel.js";

export const makeMigration = async () => {
  // await TeacherMigration();
  // await ShiftMigration();
  await IngredientMigration();
};
