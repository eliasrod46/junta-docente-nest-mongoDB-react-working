import { API_PORT } from "../../../config/constants.js";
const ROUTE = "/economy/acountMovements";
const ROUTEDASHBOARD = "/economy/dashboard";
const URI = `http://localhost:${API_PORT}/api${ROUTE}`;
const URIDASHBOARD = `http://localhost:${API_PORT}/api${ROUTEDASHBOARD}`;

/* =============================== dashboard =============================== */
export const getDashboardDataApi = async () =>
  //   {
  //   year = new Date().getFullYear(),
  //   month = new Date().getMonth() + 1,
  // }
  {
    const url = new URL(`${URIDASHBOARD}`);
    // url.searchParams.append("year", year);
    // url.searchParams.append("month", month);

    // Realiza la solicitud Fetch
    const dashboardData = await fetch(url);
    const dashboardDataJson = await dashboardData.json();
    return dashboardDataJson;
  };
/* ================================ incomes ================================ */
export const getAllIncomesApi = async ({
  year = new Date().getFullYear(),
  month = new Date().getMonth() + 1,
}) => {
  const url = new URL(`${URI}/incomes`);
  url.searchParams.append("year", year);
  url.searchParams.append("month", month);

  // Realiza la solicitud Fetch
  const incomes = await fetch(url);
  const incomesJson = await incomes.json();
  return incomesJson;
};

/* =============================== expences ================================ */

export const getAllExpensesApi = async ({
  year = new Date().getFullYear(),
  month = new Date().getMonth() + 1,
}) => {
  const url = new URL(`${URI}/expenses`);
  url.searchParams.append("year", year);
  url.searchParams.append("month", month);

  // Realiza la solicitud Fetch
  const expenses = await fetch(url);
  const expensesJson = await expenses.json();
  return expensesJson;
};
