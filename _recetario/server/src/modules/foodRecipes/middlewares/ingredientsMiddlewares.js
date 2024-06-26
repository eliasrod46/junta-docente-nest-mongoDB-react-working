import { ingredientsDao } from "../daos/ingredientsDao.js";

export const checkGetIngredient = async (req, res, next) => {
  const { id } = req.params;
  const ingredient = await ingredientsDao.getIngredientByid(id);
  if (ingredient == undefined) {
    throw new Error("Fail on Dao (getIngredientByid)");
  } else {
    next();
  }
};
