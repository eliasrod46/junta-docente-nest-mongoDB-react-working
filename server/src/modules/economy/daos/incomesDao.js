import { Income } from "../models/incomeModel.js";
import { recordsDao } from "../../admin/daos/recordsDao.js";

class IncomesDao {
  //Get list of all incomes
  async getAllIncomes() {
    try {
      const incomes = await Income.findAll();

      //-- record & return
      await recordsDao.addRecord({
        head: "OK",
        body: "sending incomes",
        location: "admin/daos/incomesDao/getAllIncomes",
        description: "try",
      });
      return incomes;
    } catch (error) {
      //-- record & return
      await recordsDao.addRecord({
        head: error.message,
        body: error,
        location: "admin/daos/incomesDao/getAllIncomes",
        description: "catch",
      });
      //test
      console.log({ message: error.message });
      return [];
    }
  }

  //Get income by his id
  async getIncomeByid(id) {
    try {
      const income = await Income.findOne({ where: { id } });

      //-- record & return
      await recordsDao.addRecord({
        head: "OK",
        body: "sending income",
        location: "admin/daos/incomesDao/getIncomeByid",
        description: "try",
      });
      if (income !== 0) {
        return income;
      } else {
        return undefined;
      }
    } catch (error) {
      //-- record & return
      await recordsDao.addRecord({
        head: error.message,
        body: error,
        location: "admin/daos/incomesDao/getIncomeByid",
        description: "catch",
      });
      //test
      console.log({ message: error.message });
      return undefined;
    }
  }

  //Create income
  async addIncome({ year, month, date, mount, category, decription }) {
    try {
      await Ingredient.create({ name, type });

      //-- record & return
      await recordsDao.addRecord({
        head: "OK",
        body: "income created",
        location: "admin/daos/incomesDao/addIncome",
        description: "catch",
      });
      //test
      return true;
    } catch (error) {
      //-- record & return
      await recordsDao.addRecord({
        head: error.message,
        body: error,
        location: "admin/daos/incomesDao/addIncome",
        description: "catch",
      });
      //test
      console.log({ message: error.message });
      return false;
    }
  }

  async updateIngredient(id, { name, type }) {
    try {
      // updading
      await Ingredient.update(
        { name, type },
        {
          where: {
            id,
          },
        }
      );
    } catch (error) {
      console.log({ message: error.message });
    }
  }

  async destroyIngredient(id) {
    try {
      await Ingredient.destroy({
        where: {
          id,
        },
      });
    } catch (error) {
      console.log({ message: error.message });
    }
  }
}
export const incomesDao = new IncomesDao();
