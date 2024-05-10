import { teacherSeed } from "../modules/teachers/seeders/teacherSeeder.js";
import { shiftsSeed } from "../modules/entryTeachers/seeders/shiftsSeeder.js";

export const seed = async () => {
  // await teacherSeed();
  await shiftsSeed();
};
