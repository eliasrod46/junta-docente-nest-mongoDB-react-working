import { TeacherMigration } from "../../modules/teachers/models/teacherModel.js";

export const makeMigration = async () => {
  await TeacherMigration();
};
