import { log } from "console";
import { teacherDao } from "../daos/teachersDaos.js";

const checkUniqueDni = async (dni) => {
  try {
    return await teacherDao.getTeacherByDni(dni);
  } catch (error) {
    console.log({ message: error.message });
  }
};

export const createTeacherValidation = async (req, res, next) => {
  const response = await checkUniqueDni(req.body.dni);
  if (!response) {
    next();
  } else {
    res.status(403).json({ message: "dni already exist" });
  }
};
