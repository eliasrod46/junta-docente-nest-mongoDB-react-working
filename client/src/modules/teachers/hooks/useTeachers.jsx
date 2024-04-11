import { useContext } from "react";
import { TeachersContext } from "../contexts/TeachersContext";

//this hook bings and returns all functions of context
export const useTeachers = () => {
  const teachers = useContext(TeachersContext);

  //verify if use this hook inside of provider
  if (teachers === undefined) {
    throw new Error("useTeachers must be used within a TeacherProvider");
  }

  return teachers;
};
