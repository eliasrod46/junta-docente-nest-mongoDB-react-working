//import conection
import { db } from "../../../../database/db.js";
import { DataTypes } from "sequelize";

export const Teacher = db.define("teachers", {
  lastname: { type: DataTypes.STRING, allowNull: false },
  name: { type: DataTypes.STRING, allowNull: false },
  dni: { type: DataTypes.STRING, allowNull: false, unique: true },
});

export const TeacherMigration = async () => {
  await Teacher.sync({ force: true });
  console.log("The table for the Teacher model was just (re)created!");
};
