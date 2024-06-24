//import conection
import { db } from "../../../../database/db.js";
import { DataTypes } from "sequelize";
//import models
import { Teacher } from "../../teachers/models/teacherModel.js";
import { Shift } from "./shiftsModel.js";

export const ControlCarga = db.define("control_cargas", {
  control_date: { type: DataTypes.STRING, allowNull: false },
  status: { type: DataTypes.STRING, allowNull: false },
  has_title: { type: DataTypes.INTEGER, allowNull: false },
  details: { type: DataTypes.INTEGER, allowNull: false },
  valorador_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Usuario, // Referencia al modelo "usuarios"
      key: "id", // Clave primaria de la tabla "usuarios"
    },
  },
  controlador_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Usuario, // Referencia al modelo "usuarios"
      key: "id", // Clave primaria de la tabla "usuarios"
    },
  },
});

export const ControlCargaMigration = async () => {
  await ControlCarga.sync({ force: true });
  console.log("The table for the ControlCarga model was just (re)created!");
};

//1 - m
// un docente , puede tener varios controles
Teacher.hasMany(TeacherEvaluationControl, {
  onDelete: "SET NULL", // Opción ON DELETE
  onUpdate: "SET NULL", // Opción ON UPDATE
});
//1 - 1
// un control pertenese a un docente
TeacherEvaluationControl.belongsTo(Teacher);

//1 - 1
// un turno , puede tener un control
// con esto cero el campo teacherId
Shift.hasOne(TeacherEvaluationControl, {
  onDelete: "SET NULL", // Opción ON DELETE
  onUpdate: "SET NULL", // Opción ON UPDATE
});

//1 - 1
// un control , puede tener un turno
TeacherEvaluationControl.belongsTo(Shift);
