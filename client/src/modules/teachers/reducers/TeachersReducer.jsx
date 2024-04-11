import { getAllTeachers } from "../apiConections/teachersApi.js";
import { useReducer } from "react";

//Set initial state of reducer
const teacherInitialState = [];

// actions to use
const actionsObjects = {
  GET_ALL_TEACHERS: async (state, action) => {
    const teachers = await getAllTeachers();
    return teachers;
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
  const [state, dispatch] = (teacherReducer, teacherInitialState);

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
