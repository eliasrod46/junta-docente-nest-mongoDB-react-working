import { getAllCategoriesApi } from "../apiConections/categoriesApi.js";
import { createContext, useState } from "react";

// create Context
export const CategoriesContext = createContext();

// create Provider
export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  const getAllCategories = async () => {
    const response = await getAllCategoriesApi();
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
    <CategoriesContext.Provider
      value={{
        categories,
        getAllCategories,
        saveCategory,
        updateCategory,
        deleteCategory,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};
