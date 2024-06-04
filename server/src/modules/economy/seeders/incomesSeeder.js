import { Income } from "../models/incomeModel.js";

const incomes = [
  {
    year: 2024,
    month: 1,
    date: "05/10/2024",
    mount: 126.74,
    category: "Categoria 1",
    decription: "negocio1",
  },
  {
    year: 2024,
    month: 2,
    date: "02/02/2024",
    mount: 10500,
    category: "Categoria 2",
    decription: "gasto de x cosa",
  },
  {
    year: 2024,
    month: 3,
    date: "03/11/2024",
    mount: 800,
    category: "Categoria 1",
    decription: "negoicio2",
  },
  {
    year: 2024,
    month: 6,
    date: "03/06/2024",
    mount: 800,
    category: "Categoria 1",
    decription: "negoicio2",
  },
  {
    year: 2024,
    month: 6,
    date: "03/06/2024",
    mount: 16800,
    category: "Categoria 2",
    decription: "negoicio2",
  },
];

export async function incomesSeed() {
  incomes.forEach(async function (income) {
    await Income.create({
      year: income.year,
      month: income.month,
      date: income.date,
      mount: income.mount,
      category: income.category,
      decription: income.decription,
    });
  });
}
