// en sequelize un modelo representa una tabla,

// en sequelize se definen de 2 forma uno con define que es que el vamos ausar

//import conection
import { db } from "../database/db.js";

import { DataTypes } from "sequelize";

export const TeacherModel = db.define("teachers", {
  name: { type: DataTypes.STRING },
  dni: { type: DataTypes.BIGINT.UNSIGNED },
});
