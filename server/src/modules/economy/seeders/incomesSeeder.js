import { Income } from "../models/incomeModel.js";

const incomes = [
  {
    year: 2024,
    month: 6,
    date: "31/05/2024",
    mount: 0.43,
    decription: "Previo",
    category: "Otros ingresos",
  },
  {
    year: 2024,
    month: 6,
    date: "31/05/2024",
    mount: 407422.81,
    decription: "Sueldo ME",
    category: "Sueldo",
  },
  {
    year: 2024,
    month: 6,
    date: "31/05/2024",
    mount: 1.52,
    decription: "capi Intere",
    category: "Otros ingresos",
  },
  {
    year: 2024,
    month: 6,
    date: "03/06/2024",
    mount: 163400,
    decription: "sueldo TLA",
    category: "Sueldo",
  },
  {
    year: 2024,
    month: 6,
    date: "04/06/2024",
    mount: 163400,
    decription: "de mary por stream services",
    category: "Otros ingresos",
  },
  {
    year: 2024,
    month: 6,
    date: "05/06/2024",
    mount: 20059.32,
    decription: "PROMOCION BH CHANGO MAS",
    category: "Otros ingresos",
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
