import { createContext, useState, useReducer } from "react";
import { cartReducer, cartInitialState } from "../reducers/CartReducer";
export const TeachersContext = createContext();

const useCartReducer = () => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const addToCart = (product) => {
    return dispatch({
      type: "ADD_TO_CART",
      data: product,
    });
  };

  const removeItemFromCart = (product) => {
    return dispatch({
      type: "REMOVE_ITEM_FROM_CART",
      data: product,
    });
  };

  const clearCart = () => {
    return dispatch({
      type: "CLEAR_CART",
    });
  };

  return { state, addToCart, removeItemFromCart, clearCart };
};

export const TeachersProvider = ({ children }) => {
  const { state, addToCart, clearCart, removeItemFromCart } = useCartReducer();
  return (
    <TeachersContext.Provider
      value={{ cart: state, addToCart, clearCart, removeItemFromCart }}
    >
      {children}
    </TeachersContext.Provider>
  );
};
