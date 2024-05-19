import { useContext } from "react";
import { ShiftsContext } from "../contexts/IngredientsContext";

//this hook recive and returns all functions of context
export const useShifts = () => {
  const shifts = useContext(ShiftsContext);

  //verify if use this hook inside of provider
  if (shifts === undefined) {
    throw new Error("useShifts must be used within a ShiftsProvider");
  }

  return shifts;
};
