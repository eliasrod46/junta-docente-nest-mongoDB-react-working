import { useContext } from "react";
import { AccountMovementsContext } from "../contexts/AccountMovementsContext";

//this hook recive and returns all functions of context
export const useAccountMovements = () => {
  const accountMovements = useContext(AccountMovementsContext);

  //verify if use this hook inside of provider
  if (accountMovements === undefined) {
    throw new Error(
      "useAccountMovements must be used within a AccountMovementsProvider"
    );
  }

  return accountMovements;
};
