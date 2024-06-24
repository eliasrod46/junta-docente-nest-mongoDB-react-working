import { Income } from "../models/incomeModel.js";
import { createRecordError, recordsDao } from "../../admin/daos/recordsDao.js";

class IncomesDao {
  //Get list of all incomes OK
  async getAllIncomes() {
    try {
      const incomes = await Income.findAll();
      //-- record & return
      await recordsDao.addRecord({
        head: "OK",
        body: "sending incomes",
        location: "daos/IncomesDao/getAllIncomes",
        description: "try",
      });
      return incomes;
    } catch (error) {
      //-- record & return
      await createRecordError({
        error,
        location: "daos/IncomesDao/getAllIncomes",
        description: "catch",
      });
      return [];
    }

    return true;
  }

  //Get list of incomes of a year/month OK
  async getAllIncomesBydate({
    year = new Date().getFullYear(),
    month = new Date().getMonth() + 1,
  }) {
    try {
      const incomes = await Income.findAll({ where: { year, month } });
      //-- record & return
      await recordsDao.addRecord({
        head: "OK",
        body: "sending incomes",
        location: "daos/IncomesDao/getAllIncomes",
        description: "try",
      });
      return incomes;
    } catch (error) {
      //-- record & return
      await createRecordError({
        error,
        location: "daos/IncomesDao/getAllIncomes",
        description: "catch",
      });
      return [];
    }

    return true;
  }

  //Get income by his id OK
  async getIncomeByid(id) {
    try {
      const income = await Income.findOne({ where: { id } });

      if (income !== 0) {
        //-- record & return
        await recordsDao.addRecord({
          head: "OK",
          body: "sending income",
          location: "daos/IncomesDao/getIncomeByid",
          description: "try",
        });
        return expence;
      } else {
        //-- record & return
        await recordsDao.addRecord({
          head: "OK",
          body: "income not found",
          location: "daos/IncomesDao/getIncomeByid",
          description: "try",
        });
        return undefined;
      }
    } catch (error) {
      //-- record & return
      await createRecordError({
        error,
        location: "daos/ExpencesDao/getExpenceByid",
        description: "catch",
      });
      return undefined;
    }
  }

  //Create income
  async addIncome({ date, mount, category, decription }) {
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;

    console.log({ date, mount, category, decription, year, month });
    return true;
    try {
      await Income.create({ date, mount, category, decription, year, month });

      //-- record & return
      await recordsDao.addRecord({
        head: "OK",
        body: "income created",
        location: "daos/IncomesDao/addIncome",
        description: "try",
      });
      return true;
    } catch (error) {
      //-- record & return
      await createRecordError({
        error,
        location: "daos/IncomesDao/addIncome",
        description: "catch",
      });
      return false;
    }
  }

  //Update income
  async updateIncome(id, { date, mount, category, decription }) {
    try {
      // updading
      await Income.update(
        { date, mount, category, decription },
        {
          where: {
            id,
          },
        }
      );

      //-- record & return
      await recordsDao.addRecord({
        head: "OK",
        body: "income updated",
        location: "daos/IncomesDao/updateIncome",
        description: "try",
      });
      return true;
    } catch (error) {
      //-- record & return
      await createRecordError({
        error,
        location: "daos/IncomesDao/updateIncome",
        description: "catch",
      });
      return false;
    }
  }

  //Destroy income OK
  async destroyIncome(id) {
    try {
      await Income.destroy({
        where: {
          id,
        },
      });
      //-- record & return
      await recordsDao.addRecord({
        head: "OK",
        body: "income deleted",
        location: "daos/IncomesDao/destroyIncome",
        description: "try",
      });
      return true;
    } catch (error) {
      //-- record & return
      await createRecordError({
        error,
        location: "daos/IncomesDao/destroyIncome",
        description: "catch",
      });
      return false;
    }
  }
}
export const incomesDao = new IncomesDao();
