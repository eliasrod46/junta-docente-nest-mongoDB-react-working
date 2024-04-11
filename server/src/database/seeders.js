import { teacherSeed } from "../modules/teachers/seeders/teacherSeeder.js";

export const seed = async () => {
  await teacherSeed();
};
