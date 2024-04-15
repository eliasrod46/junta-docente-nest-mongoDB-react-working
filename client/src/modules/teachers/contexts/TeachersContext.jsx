// import { useTeacherReducer } from "../reducers/TeachersReducer";
import {
  getAllTeachersApi,
  saveTeachersApi,
} from "../apiConections/teachersApi.js";
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

  const saveTeacher = async (data) => {
    const response = await saveTeachersApi(data);
    console.log(response);
  };

  return (
    <TeachersContext.Provider value={{ teachers, getAllTeachers, saveTeacher }}>
      {children}
    </TeachersContext.Provider>
  );
};
