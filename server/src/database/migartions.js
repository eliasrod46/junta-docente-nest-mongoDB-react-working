import { expenseMigration } from "../modules/economy/models/expenseModel.js";
import { incomeMigration } from "../modules/economy/models/incomeModel.js";
import { categoryMigration } from "../modules/economy/models/categoryModel.js";
import { recordMigration } from "../modules/economy/models/admin/recordModel.js";
// import { TeacherMigration } from "../modules/junta/teachers/models/teacherModel.js";
// import { ShiftMigration } from "../modules/junta/entryTeachers/models/shiftsModel.js";
// import { IngredientMigration } from "../modules/foodRecipes/models/ingredientModel.js";
// import { SpecialtyMigration } from "../modules/junta/entryTeachers/models/specialtiesModel.js";
// import { TitleMigration } from "../modules/junta/entryTeachers/models/titleModel.js";
// import { SpecialtyTitleMigration } from "../modules/junta/entryTeachers/models/SpecialtyTitleModel.js";

export const makeMigration = async () => {
  await expenseMigration();
  await incomeMigration();
  await categoryMigration();
  await recordMigration();
  // await TeacherMigration();
  // await ShiftMigration();
  // await IngredientMigration();
  // await SpecialtyMigration();
  // await TitleMigration();
  // await SpecialtyTitleMigration();
};
