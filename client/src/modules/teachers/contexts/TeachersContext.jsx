import { useTeacherReducer } from "../reducers/TeachersReducer";
import { createContext } from "react";

// create Context
export const TeachersContext = createContext();

// create Provider
export const TeachersProvider = ({ children }) => {
  const { state, getAllTeachers } = useTeacherReducer();
  return (
    <TeachersContext.Provider value={{ state, getAllTeachers }}>
      {children}
    </TeachersContext.Provider>
  );
};
