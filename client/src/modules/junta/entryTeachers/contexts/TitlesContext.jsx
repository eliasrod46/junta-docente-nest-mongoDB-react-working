import { getAllTitlesApi, saveTitleApi } from "../apiConections/TitlesApi.js";
import { createContext, useState } from "react";

// create Context
export const TitlesContext = createContext();

// create Provider
export const TitlesProvider = ({ children }) => {
  const [titles, setTitles] = useState([]);

  const getAllTitles = async () => {
    const response = await getAllTitlesApi();
    setTitles(response.data);
  };

  const saveTitle = async (data) => {
    const response = await saveTitleApi(data);
    return response;
  };

  return (
    <TitlesContext.Provider
      value={{
        titles,
        getAllTitles,
        saveTitle,
      }}
    >
      {children}
    </TitlesContext.Provider>
  );
};
