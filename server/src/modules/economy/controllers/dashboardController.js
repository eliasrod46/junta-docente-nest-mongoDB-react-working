import { incomesDao } from "../daos/incomesDao.js";
import { expensesDao } from "../daos/expencesDao.js";
import { categoriesDao } from "../daos/categoriesDao.js";

class DashboardController {
  //get expenses of year & month
  async index(req, res) {
    const { year, month } = req.query;
    const generalResume = [];
    const incomesResume = [];
    const expensesResume = [];
    try {
      const expenses = await expensesDao.getAllExpensesByDate({ year, month });
      const incomes = await incomesDao.getAllIncomesBydate({ year, month });

      // if (month == 1) {
      //   const prevExpenses = await expensesDao.getAllExpensesByDate({
      //     year: year - 1,
      //     month: 12,
      //   });
      //   const prevIncomes = await incomesDao.getAllExpensesByDate({
      //     year: year - 1,
      //     month: 12,
      //   });
      // } else {
      //   const prevExpenses = await expensesDao.getAllExpensesByDate({
      //     year,
      //     month: month - 1,
      //   });
      //   const prevIncomes = await incomesDao.getAllExpensesByDate({
      //     year,
      //     month: month - 1,
      //   });
      // }

      const categories = await categoriesDao.getAllCategories();

      //---- recorro el arreglo de categorias
      categories.forEach((category) => {
        let totalMountCategory = 0;
        //---- if para discriminar por nivel
        if (category.level == "comun") {
          // recorro los gastos
          expenses.forEach((expense) => {
            if (expense.category == category.name) {
              totalMountCategory = totalMountCategory + expense.mount;
            }
          });

          const toAdd = {
            category: category.name,
            real: totalMountCategory,
          };

          expensesResume.push(toAdd);
        } else if (category.level == "general") {
          // recorro los gastos
          expenses.forEach((expense) => {
            if (expense.generalCategory == category.name) {
              totalMountCategory = totalMountCategory + expense.mount;
            }
          });

          const toAdd = {
            category: category.name,
            real: totalMountCategory,
          };

          generalResume.push(toAdd);
        } else if (category.level == "incomes") {
          // recorro los gastos
          incomes.forEach((income) => {
            if (income.category == category.name) {
              totalMountCategory = totalMountCategory + income.mount;
            }
          });

          const toAdd = {
            category: category.name,
            real: totalMountCategory,
          };

          incomesResume.push(toAdd);
        }
      });

      res.status(200).json({
        message: `success, sending data`,
        data: { generalResume, incomesResume, expensesResume },
      });
    } catch (error) {
      res.status(500).json({
        message: "fail, oops something wrong happen",
      });
      console.log({ error: error.message });
    }
  }
}

export const dashboardController = new DashboardController();
