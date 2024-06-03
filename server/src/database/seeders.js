import { categoriesSeed } from "../modules/economy/seeders/categoriesSeeder.js";
import { recordsSeed } from "../modules/economy/seeders/redordSeeder.js";
// import { teacherSeed } from "../modules/teachers/seeders/teacherSeeder.js";
// import { shiftsSeed } from "../modules/entryTeachers/seeders/shiftsSeeder.js";
// import { ingredientsSeed } from "../modules/foodRecipes/seeders/ingredientsSeeder.js";
// import { specialtiesSeed } from "../modules/junta/entryTeachers/seeders/specialtiesSeeder.js";
// import { titlesSeed } from "../modules/junta/entryTeachers/seeders/titlesSeeder.js";
// import { specialtiesTitlesSeed } from "../modules/junta/entryTeachers/seeders/specialtyTitleSeeder.js";

export const seed = async () => {
  await categoriesSeed();
  await recordsSeed();
  // await teacherSeed();
  // await shiftsSeed();
  // await ingredientsSeed();
  // await specialtiesSeed();
  // await titlesSeed();
  // await specialtiesTitlesSeed();
};
