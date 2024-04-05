// usefilter - customHook
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const useTeachers = () => {
  const teachers = useContext(CartContext);

  if (teachers === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return Teachers;
};
