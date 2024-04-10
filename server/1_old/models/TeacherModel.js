// en sequelize un modelo representa una tabla,

// en sequelize se definen de 2 forma uno con define que es que el vamos ausar

//import conection
import { db } from "../database/db.js";

import { DataTypes } from "sequelize";

export const TeacherModel = db.define("teachers", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  lastname: { type: DataTypes.STRING, allowNull: false },
  name: { type: DataTypes.STRING, allowNull: false },
  dni: { type: DataTypes.STRING, allowNull: false, unique: true },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  modified_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});
