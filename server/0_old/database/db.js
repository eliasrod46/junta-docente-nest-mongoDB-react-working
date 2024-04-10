import { Sequelize } from "sequelize";
import { DATABASE_CONSTANTS } from "../config/constants.js";
export const db = new Sequelize(
  DATABASE_CONSTANTS.NAME,
  DATABASE_CONSTANTS.USER,
  DATABASE_CONSTANTS.PASSWORD,
  {
    host: DATABASE_CONSTANTS.HOST,
    dialect: DATABASE_CONSTANTS.DIALECT,
  }
);
