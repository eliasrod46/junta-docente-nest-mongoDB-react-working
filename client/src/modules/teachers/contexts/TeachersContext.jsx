import {
  getAllTeachersApi,
  saveTeachersApi,
  deleteTeachersApi,
} from "../apiConections/teachersApi.js";
import { createContext, useState } from "react";

// create Context
export const TeachersContext = createContext();

// create Provider
export const TeachersProvider = ({ children }) => {
  const [teachers, setTeachers] = useState([]);

  const getAllTeachers = async () => {
    const teachers = await getAllTeachersApi();
    setTeachers(teachers.data);
  };

  const saveTeacher = async (data) => {
    const response = await saveTeachersApi(data);
    return response;
  };

  const deleteTeacher = async (id) => {
    const response = await deleteTeachersApi(id);
    console.log(response);
    // return response;
  };

  return (
    <TeachersContext.Provider
      value={{ teachers, getAllTeachers, saveTeacher, deleteTeacher }}
    >
      {children}
    </TeachersContext.Provider>
  );
};
