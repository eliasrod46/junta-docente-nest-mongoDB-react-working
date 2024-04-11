// import { useTeacherReducer } from "../reducers/TeachersReducer";
import { getAllTeachersApi } from "../apiConections/teachersApi.js";
import { createContext, useState } from "react";

// create Context
export const TeachersContext = createContext();

// create Provider
export const TeachersProvider = ({ children }) => {
  // const { state, getAllTeachers } = useTeacherReducer();
  const [teachers, setTeachers] = useState([]);

  const getAllTeachers = async () => {
    const teachers = await getAllTeachersApi();
    setTeachers(teachers.data);
  };

  return (
    <TeachersContext.Provider value={{ teachers, getAllTeachers }}>
      {children}
    </TeachersContext.Provider>
  );
};
