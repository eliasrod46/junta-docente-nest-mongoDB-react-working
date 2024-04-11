//Set initial state of reducer
const teacherInitialState =
  JSON.parse(window.localStorage.getItem("cart")) || [];

// actions to use
const actionsObjects = {
  GET_ALL_TEACHERS: (state, action) => {
    console.log(action);
    // const { id } = action;
    // const newState = state.filter((item) => item.id !== id);
    // updateLocalStorage(newState);
    return state;
    // return newState;
  },
};

//Logic to select actions
const teacherReducer = (state, action) => {
  const { type } = action;
  // get function according to the action type received
  const actionSelected = actionsObjects[type];
  // if funciton exist apply or state
  return actionSelected ? actionSelected(state, action) : state;
};

export const useTeacherReducer = () => {
  const [state, dispatch] = useReducer(teacherReducer, teacherInitialState);

  const getAllTeachers = () => {
    return dispatch(
      //action object
      {
        type: "GET_ALL_TEACHERS",
        // data: teacher,
      }
    );
  };

  return { state, getAllTeachers };
};

// //update local starage qith new state
// const updateLocalStorage = (state) => {
//   window.localStorage.setItem("cart", JSON.stringify(state));
// };
