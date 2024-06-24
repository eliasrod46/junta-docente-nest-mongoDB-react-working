import { Expense } from "../models/expenseModel.js";
import { createRecordError, recordsDao } from "../../admin/daos/recordsDao.js";

class ExpensesDao {
  //Get list of expences of a year/month OK
  async getAllExpenses() {
    try {
      const expenses = await Expense.findAll();
      //-- record & return
      await recordsDao.addRecord({
        head: "OK",
        body: "sending expences",
        location: "daos/ExpensesDao/getAllExpenses",
        description: "try",
      });
      return expenses;
    } catch (error) {
      //-- record & return
      await createRecordError({
        error,
        location: "daos/ExpensesDao/getAllExpenses",
        description: "catch",
      });
      return [];
    }
  }

  //Get list of expences of a year/month OK
  async getAllExpensesByDate({
    year = new Date().getFullYear(),
    month = new Date().getMonth() + 1,
  }) {
    try {
      const expenses = await Expense.findAll({ where: { year, month } });
      //-- record & return
      await recordsDao.addRecord({
        head: "OK",
        body: "sending expences",
        location: "daos/ExpensesDao/getAllExpenses",
        description: "try",
      });
      return expenses;
    } catch (error) {
      //-- record & return
      await createRecordError({
        error,
        location: "daos/ExpensesDao/getAllExpenses",
        description: "catch",
      });
      return [];
    }
  }

  //Get expence by his id OK
  async getExpenseByid(id) {
    try {
      const expence = await Expense.findOne({ where: { id } });

      if (expence !== 0) {
        //-- record & return
        await recordsDao.addRecord({
          head: "OK",
          body: "sending expense",
          location: "daos/IncomesDao/getExpenceByid",
          description: "try",
        });
        return expence;
      } else {
        //-- record & return
        await recordsDao.addRecord({
          head: "OK",
          body: "expense not found",
          location: "daos/IncomesDao/getExpenceByid",
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

  //Create expence
  async addExpence({ date, mount, category, generalCategory, decription }) {
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;

    console.log({
      date,
      mount,
      category,
      generalCategory,
      decription,
      year,
      month,
    });
    return true;
    try {
      await Expense.create({
        date,
        mount,
        category,
        generalCategory,
        decription,
        year,
        month,
      });

      //-- record & return
      await recordsDao.addRecord({
        head: "OK",
        body: "expense created",
        location: "daos/ExpensesDao/addExpence",
        description: "try",
      });
      return true;
    } catch (error) {
      //-- record & return
      await createRecordError({
        error,
        location: "daos/ExpensesDao/addExpence",
        description: "catch",
      });
      return false;
    }
  }

  //Update expence
  async updateExpence(
    id,
    { date, mount, category, generalCategory, decription }
  ) {
    try {
      // updading
      await Expense.update(
        { date, mount, category, generalCategory, decription },
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
        location: "daos/ExpensesDao/updateExpence",
        description: "try",
      });
      return true;
    } catch (error) {
      //-- record & return
      await createRecordError({
        error,
        location: "daos/ExpensesDao/updateExpence",
        description: "catch",
      });
      return false;
    }
  }

  //Destroy expense OK
  async destroyExpense(id) {
    try {
      await Expense.destroy({
        where: {
          id,
        },
      });
      //-- record & return
      await recordsDao.addRecord({
        head: "OK",
        body: "expense deleted",
        location: "daos/ExpensesDao/destroyExpense",
        description: "try",
      });
      return true;
    } catch (error) {
      //-- record & return
      await createRecordError({
        error,
        location: "daos/ExpensesDao/destroyExpense",
        description: "catch",
      });
      return false;
    }
  }
}
export const expensesDao = new ExpensesDao();
