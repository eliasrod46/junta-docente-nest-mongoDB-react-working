//import conection
import { db } from "../../../database/db.js";
import { DataTypes } from "sequelize";
//import models(Relationships)

export const Record = db.define("records", {
  head: { type: DataTypes.STRING, allowNull: false },
  body: { type: DataTypes.STRING, allowNull: false },
  location: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.INTEGER, allowNull: false },
});
//--Sync (create/update table)
export const recordMigration = async () => {
  await Record.sync({ force: true });
};
