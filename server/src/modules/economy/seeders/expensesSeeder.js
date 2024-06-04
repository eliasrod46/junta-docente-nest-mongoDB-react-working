import { Expense } from "../models/expenseModel.js";

const expenses = [
  {
    year: 2024,
    month: 1,
    date: "05/10/2024",
    mount: 126.74,
    category: "Categoria 1",
    generalCategory: "50%",
    decription: "negocio1",
  },
  {
    year: 2024,
    month: 2,
    date: "02/02/2024",
    mount: 10500,
    category: "Categoria 2",
    generalCategory: "20%",
    decription: "gasto de x cosa",
  },
  {
    year: 2024,
    month: 3,
    date: "03/11/2024",
    mount: 800,
    category: "Categoria 1",
    generalCategory: "30%",
    decription: "negoicio2",
  },
  {
    year: 2023,
    month: 1,
    date: "01/06/2024",
    mount: 1250,
    category: "Categoria 3",
    generalCategory: "20%",
    decription: "gaste en x cosa",
  },
  {
    year: 2022,
    month: 2,
    date: "12/08/2024",
    mount: 275000,
    category: "Categoria 3",
    generalCategory: "50%",
    decription: "general",
  },
  {
    year: 2024,
    month: 1,
    date: "11/07/2024",
    mount: 35000,
    category: "Categoria 4",
    generalCategory: "30%",
    decription: "negoicio3",
  },
  {
    year: 2024,
    month: 6,
    date: "12/08/2024",
    mount: 275000,
    category: "Categoria 3",
    generalCategory: "50%",
    decription: "general",
  },
  {
    year: 2024,
    month: 6,
    date: "11/07/2024",
    mount: 35000,
    category: "Categoria 4",
    generalCategory: "30%",
    decription: "negoicio3",
  },
];

export async function expensesSeed() {
  expenses.forEach(async function (expense) {
    await Expense.create({
      year: expense.year,
      month: expense.month,
      date: expense.date,
      mount: expense.mount,
      category: expense.category,
      generalCategory: expense.generalCategory,
      decription: expense.decription,
    });
  });
}
