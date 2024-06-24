//import conection
import { db } from "../../../../database/db.js";
import { DataTypes } from "sequelize";
//import models
import { Teacher } from "../../teachers/models/teacherModel.js";

export const Shift = db.define("shifts", {
  date: { type: DataTypes.STRING, allowNull: false },
  time: { type: DataTypes.TIME, allowNull: false },
  type: { type: DataTypes.STRING, allowNull: false },
  year: { type: DataTypes.INTEGER, allowNull: false },
});

export const ShiftMigration = async () => {
  await Shift.sync({ force: true });
  console.log("The table for the Teacher model was just (re)created!");
};

//1 - m
// un docente , puede tener varios turnos
// con esto cero el campo teacherId
Teacher.hasMany(Shift, {
  onDelete: "SET NULL", // Opción ON DELETE
  onUpdate: "SET NULL", // Opción ON UPDATE
});

//1 - 1
// un turno pertenese a un docente
Shift.belongsTo(Teacher);
