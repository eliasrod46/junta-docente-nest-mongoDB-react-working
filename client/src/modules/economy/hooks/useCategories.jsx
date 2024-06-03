import { useContext } from "react";
import { CategoriesContext } from "../contexts/CategoriesContext";

//this hook recive and returns all functions of context
export const useCategories = () => {
  const categories = useContext(CategoriesContext);

  //verify if use this hook inside of provider
  if (categories === undefined) {
    throw new Error("useCategories must be used within a CategoriesProvider");
  }

  return categories;
};
