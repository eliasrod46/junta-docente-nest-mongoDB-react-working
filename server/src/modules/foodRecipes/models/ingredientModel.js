//import conection
import { db } from "../../../database/db.js";
import { DataTypes } from "sequelize";
//import models(Relationships)
// import { Teacher } from "../../teachers/models/teacherModel.js";

export const Ingredient = db.define("ingredients", {
  name: { type: DataTypes.STRING, allowNull: false },
  type: { type: DataTypes.STRING, allowNull: false },
});

//--Sync (create/update table)
export const IngredientMigration = async () => {
  await Ingredient.sync({ force: true });
  console.log("The table for the Ingredient model was just (re)created!");
};

//---Relationships

// Teacher.hasMany(
//   Shift /*, {
//   foreignKey: 'teacheri_id',
// }*/
// );

// Shift.belongsTo(Teacher);
