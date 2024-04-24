//import conection
import { db } from "../../../database/db.js";
import { DataTypes } from "sequelize";
//import models
import { Teacher } from "../../teachers/models/teacherModel.js";

export const Shift = db.define("shifts", {
  date: { type: DataTypes.DATE, allowNull: false },
  time: { type: DataTypes.TIME, allowNull: false },
  type: { type: DataTypes.STRING, allowNull: false },
  year: { type: DataTypes.INTEGER, allowNull: false },
});

export const ShiftMigration = async () => {
  await Shift.sync({ force: true });
  console.log("The table for the Teacher model was just (re)created!");
};

Teacher.hasMany(
  Shift /*, {
  foreignKey: 'teacheri_id',
}*/
);

Shift.belongsTo(Teacher);
