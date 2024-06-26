import { typeDao } from "../daos/typeDao.js";

export const checkGetType = async (req, res, next) => {
  const { id } = req.params;
  const type = await typeDao.getTypeByid(id);
  if (type == undefined) {
    throw new Error("Fail on Dao (getTypeByid)");
  } else {
    next();
  }
};
