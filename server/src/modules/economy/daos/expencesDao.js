import { Expense } from "../models/expenseModel.js";
import { recordsDao } from "./recordDao.js";

class ExpencesDao {
  //Get list of expences of a year/month
  async getAllExpences({
    year = new Date().getFullYear(),
    month = new Date().getMonth() + 1,
  }) {
    try {
      const expences = await Expense.findAll({ where: { year, month } });
      //-- record & return
      await recordsDao.addRecord({
        head: "OK",
        body: "sending expences",
        location: "daos/ExpencesDao/getAllExpences",
        description: "try",
      });
      return expences;
    } catch (error) {
      //-- record & return
      await recordsDao.addRecord({
        head: error.message,
        body: error,
        location: "daos/ExpencesDao/getAllExpences",
        description: "catch",
      });
      //test
      console.log({ message: error.message });
      return [];
    }
  }

  //Get expence by his id
  async getExpenceByid(id) {
    try {
      const expence = await Category.findOne({ where: { id } });

      if (expence !== 0) {
        //-- record & return
        await recordsDao.addRecord({
          head: "OK",
          body: "sending expence",
          location: "daos/ExpencesDao/getExpenceByid",
          description: "try",
        });
        return expence;
      } else {
        //-- record & return
        await recordsDao.addRecord({
          head: "OK",
          body: "expence not found",
          location: "daos/ExpencesDao/getExpenceByid",
          description: "try",
        });
        return undefined;
      }
    } catch (error) {
      //-- record & return
      await recordsDao.addRecord({
        head: error.message,
        body: error,
        location: "daos/ExpencesDao/getExpenceByid",
        description: "catch",
      });
      //test
      console.log({ message: error.message });
      return undefined;
    }
  }

  //Create expence
  async addExpence({ date, mount, category, decription }) {
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;

    console.log({ date, mount, category, decription, year, month });
    return true;
    // try {
    //   await Expense.create({ date, mount, category, decription, year, month });

    //   //-- record & return
    //   await recordsDao.addRecord({
    //     head: "OK",
    //     body: "expences created",
    //     location: "daos/ExpencesDao/addExpence",
    //     description: "try",
    //   });
    //   return true;
    // } catch (error) {
    //   //-- record & return
    //   await recordsDao.addRecord({
    //     head: error.message,
    //     body: error,
    //     location: "daos/ExpencesDao/addExpence",
    //     description: "catch",
    //   });
    //   //test
    //   console.log({ message: error.message });
    //   return false;
    // }
  }

  //Update expence
  async updateExpence(id, { date, mount, category, decription }) {
    try {
      // updading
      await Expense.update(
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
        body: "expence updated",
        location: "daos/ExpencesDao/updateExpence",
        description: "try",
      });
      return true;
    } catch (error) {
      //-- record & return
      await recordsDao.addRecord({
        head: error.message,
        body: error,
        location: "daos/ExpencesDao/updateExpence",
        description: "catch",
      });
      //test
      console.log({ message: error.message });
      return false;
    }
  }

  //Destroy expence
  async destroyExpence(id) {
    try {
      await Expense.destroy({
        where: {
          id,
        },
      });
      //-- record & return
      await recordsDao.addRecord({
        head: "OK",
        body: "expence deleted",
        location: "daos/ExpencesDao/destroyExpence",
        description: "try",
      });
      return true;
    } catch (error) {
      //-- record & return
      await recordsDao.addRecord({
        head: error.message,
        body: error,
        location: "daos/ExpencesDao/destroyExpence",
        description: "catch",
      });
      //test
      console.log({ message: error.message });
      return false;
    }
  }
}
export const expencesDao = new ExpencesDao();
