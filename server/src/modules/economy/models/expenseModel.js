//import conection
import { db } from "../../../database/db.js";
import { DataTypes } from "sequelize";
//import models(Relationships)
// import { Teacher } from "../../teachers/models/teacherModel.js";

export const Expense = db.define("expenses", {
  year: { type: DataTypes.INTEGER, allowNull: false },
  month: { type: DataTypes.STRING, allowNull: false },
  date: { type: DataTypes.STRING, allowNull: false },
  mount: { type: DataTypes.FLOAT, allowNull: false },
  category: { type: DataTypes.STRING, allowNull: false },
  decription: { type: DataTypes.STRING, allowNull: false },
});

//--Sync (create/update table)
export const expenseMigration = async () => {
  await Expense.sync({ force: true });
  console.log("The table for the Expense model was just (re)created!");
};

//---Relationships
