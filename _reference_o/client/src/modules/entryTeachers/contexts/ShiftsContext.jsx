import { getAllShiftsApi, saveShiftsApi } from "../apiConections/shiftApi.js";
import { createContext, useState } from "react";

// create Context
export const ShiftsContext = createContext();

// create Provider
export const ShiftsProvider = ({ children }) => {
  const [shifts, setShifts] = useState([]);

  const getAllShifts = async () => {
    const response = await getAllShiftsApi();
    setShifts(response.data);
  };

  const saveShift = async (data) => {
    const response = await saveShiftsApi(data);
    return response;
  };

  return (
    <ShiftsContext.Provider
      value={{
        shifts,
        getAllShifts,
        saveShift,
      }}
    >
      {children}
    </ShiftsContext.Provider>
  );
};
