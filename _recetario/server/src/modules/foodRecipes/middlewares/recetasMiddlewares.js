import { recetasDao } from "../daos/recetasDao.js";

export const checkGetReceta = async (req, res, next) => {
  const { id } = req.params;
  const receta = await recetasDao.getRecetaByid(id);
  if (receta == undefined) {
    throw new Error("Fail on Dao (getRecetaByid)");
  } else {
    next();
  }
};
