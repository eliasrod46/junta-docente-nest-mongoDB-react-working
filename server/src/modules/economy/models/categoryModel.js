//import conection
import { db } from "../../../database/db.js";
import { DataTypes } from "sequelize";
//import models(Relationships)
// import { Teacher } from "../../teachers/models/teacherModel.js";

export const Category = db.define("categories", {
  name: { type: DataTypes.STRING, allowNull: false },
  level: { type: DataTypes.STRING, allowNull: false },
});

//--Sync (create/update table)
export const categoryMigration = async () => {
  await Category.sync({ force: true });
};

//---Relationships
