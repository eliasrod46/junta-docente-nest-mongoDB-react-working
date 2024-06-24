import {
  getAllExpensesApi,
  getAllIncomesApi,
  getDashboardDataApi,
} from "../apiConections/accountMovementsApi.js";
import { createContext, useState } from "react";

// create Context
export const AccountMovementsContext = createContext();

// create Provider
export const AccountMovementsProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expences, setExpences] = useState([]);
  const [dashboardData, setDashboardData] = useState([]);

  const getAllIncomes = async ({ year, month }) => {
    const response = await getAllIncomesApi({ year, month });
    setIncomes(response.data);
  };

  const getAllExpenses = async ({ year, month }) => {
    const response = await getAllExpensesApi({ year, month });
    setExpences(response.data);
  };

  const saveExpense = async (data) => {
    // const response = await saveShiftsApi(data);
    // return response;
    return true;
  };

  const saveIncome = async (data) => {
    // const response = await saveShiftsApi(data);
    // return response;
    return true;
  };

  const updateExpense = async (data) => {
    // const response = await saveShiftsApi(data);
    // return response;
    return true;
  };

  const updateIncome = async (data) => {
    // const response = await saveShiftsApi(data);
    // return response;
    return true;
  };

  const deleteExpense = async (data) => {
    // const response = await saveShiftsApi(data);
    // return response;
    return true;
  };

  const deleteIncome = async (data) => {
    // const response = await saveShiftsApi(data);
    // return response;
    return true;
  };

  // dashboard!!!
  const getDashboardData = async () => {
    const response = await getDashboardDataApi();
    setDashboardData(response.data);
    return true;
  };

  return (
    <AccountMovementsContext.Provider
      value={{
        //incomes
        incomes,
        getAllIncomes,
        saveIncome,
        updateIncome,
        deleteIncome,
        //expenses
        expences,
        getAllExpenses,
        saveExpense,
        updateExpense,
        deleteExpense,
        //dashboard
        dashboardData,
        getDashboardData,
      }}
    >
      {children}
    </AccountMovementsContext.Provider>
  );
};
