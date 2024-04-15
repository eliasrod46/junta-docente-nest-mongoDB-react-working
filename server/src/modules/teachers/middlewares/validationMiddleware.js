import { teacherDao } from "../daos/teachersDaos.js";

export const checkUniqueDni = async (req, res, next) => {
  const response = await teacherDao.getTeacherByDni(dni);

  if (!response) {
    next();
  } else {
    res.status(403).json({ message: "dni already exist" });
  }
};
