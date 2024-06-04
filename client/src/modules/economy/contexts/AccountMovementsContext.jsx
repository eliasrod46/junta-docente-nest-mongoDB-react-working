import { getAllCategoriesApi } from "../apiConections/categoriesApi.js";
import { createContext, useState } from "react";

// create Context
export const AccountMovementsContext = createContext();

// create Provider
export const AccountMovementsProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expences, setExpences] = useState([]);

  const getAllIncomes = async () => {
    const response = await getAllIncomesApi();

    setCategories(response.data);
  };

  const saveCategory = async (data) => {
    // const response = await saveShiftsApi(data);
    // return response;
    return true;
  };

  const updateCategory = async (data) => {
    // const response = await saveShiftsApi(data);
    // return response;
    return true;
  };

  const deleteCategory = async (data) => {
    // const response = await saveShiftsApi(data);
    // return response;
    return true;
  };

  return (
    <AccountMovementsContext.Provider
      value={{
        incomes,
        expences,

        getAllCategories,

        saveCategory,
        updateCategory,
        deleteCategory,
      }}
    >
      {children}
    </AccountMovementsContext.Provider>
  );
};
