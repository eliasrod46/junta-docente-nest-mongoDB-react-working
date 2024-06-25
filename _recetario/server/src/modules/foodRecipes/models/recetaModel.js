//import conection
import { db } from "../../../database/db.js";
import { DataTypes } from "sequelize";
//import models(Relationships)
// import { Teacher } from "../../teachers/models/teacherModel.js";

export const Receta = db.define("recetas", {
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  time: { type: DataTypes.TEXT },
  quantity: { type: DataTypes.NUMBER },
});

//--Sync (create/update table)
export const RecetaMigration = async () => {
  await Receta.sync({ force: true });
  console.log("The table for the Receta model was just (re)created!");
};

//---Relationships

// Teacher.hasMany(
//   Shift /*, {
//   foreignKey: 'teacheri_id',
// }*/
// );

// Shift.belongsTo(Teacher);
