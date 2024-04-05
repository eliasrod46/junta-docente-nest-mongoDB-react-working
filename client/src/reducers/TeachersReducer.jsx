//initial state, get from local storage or empty array
export const cartInitialState =
  JSON.parse(window.localStorage.getItem("cart")) || [];

//update local starage qith new state
const updateLocalStorage = (state) => {
  window.localStorage.setItem("cart", JSON.stringify(state));
};

//Update actions
const updateStateByAction = {
  ADD_TO_CART: (state, action) => {
    // const { id } = actionData;
    //     //check if product is already in cart
    //     const productInCartIndex = state.findIndex((item) => item.id === id);
    //     if (productInCartIndex >= 0) {
    //       //-- product is in cart
    //       //--->two ways
    //       //structuredClone
    //       const newState = structuredClone(state);
    //       newState[productInCartIndex].quantity += 1;
    //       updateLocalStorage(newState);
    //       return newState;
    //       //array
    //       // return [
    //       //   ...state,
    //       //   {
    //       //     ...actionData,
    //       //     quantity: 1,
    //       //   },
    //       // ];
    //     } else {
    //       //-- product isn't in cart
    //       const newState = [
    //         ...state,
    //         {
    //           ...actionData,
    //           quantity: 1,
    //         },
    //       ];
    //       updateLocalStorage(newState);
    //       return newState;
  },

  REMOVE_ITEM_FROM_CART: (state, action) => {
    const { id } = action;
    const newState = state.filter((item) => item.id !== id);
    updateLocalStorage(newState);
    return newState;
  },

  CLEAR_CART: () => {
    updateLocalStorage([]);
    return [];
  },
};

export const cartReducer = (state, action) => {
  const { type: actionType } = action;
  const updateState = updateStateByAction[actionType];
  return updateState ? updateState(state, action) : state;
};
