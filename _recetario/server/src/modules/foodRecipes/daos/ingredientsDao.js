import { Ingredient } from "../models/ingredientModel.js";
import { Type } from "../models/TypeModel.js";
import { typeDao } from "../daos/typeDao.js";
import { recordsDao, createRecordError } from "../../admin/daos/recordsDao.js";

class IngredientsDao {
  // check Ok
  async getAllIngredients() {
    const location = " (dao) - " + import.meta.url + " - (getAllIngredients)";
    try {
      const ingredients = await Ingredient.findAll({
        include: [
          {
            model: Type,
            required: true,
          },
        ],
      });

      //-- record & return
      await recordsDao.addRecord({
        head: "success",
        body: "sending ingredients",
        location,
        description: "try",
      });
      return ingredients;
    } catch (error) {
      //-- record & return
      createRecordError({ error, location, description: "catch" });
      return false;
    }
  }

  // check Ok
  async getIngredientByid(id) {
    const location = " (dao) - " + import.meta.url + " - (getIngredientByid)";
    try {
      const ingredient = await Ingredient.findOne({
        where: { id },
        include: [
          {
            model: Type,
            required: true,
          },
        ],
      });
      if (ingredient == null) {
        await recordsDao.addRecord({
          head: "fail",
          body: "ingredient not found",
          location,
          description: "try",
        });
        return false;
      } else {
        await recordsDao.addRecord({
          head: "successOK",
          body: "sending ingredient",
          location,
          description: "try",
        });
        return ingredient;
      }
    } catch (error) {
      createRecordError({ error, location, description: "catch" });
      return undefined;
    }
  }

  // checking
  async addIngredient({ name, types = [] }) {
    const location = " (dao) - " + import.meta.url + " - (addIngredient)";
    try {
      const ingredeintCreated = await Ingredient.create({ name });

      // adding types
      if (types.length > 0) {
        types.forEach(async (type) => {
          const typeToAdd = typeDao.getTypeByName(type);

          if (!typeToAdd) {
            // record
            await recordsDao.addRecord({
              head: "fail",
              body: "Fail on Dao (getByid)",
              location,
              description: "try",
            });
          } else if ((type = {})) {
            // record
            await recordsDao.addRecord({
              head: "fail",
              body: "fail, type not found",
              location,
              description: "try",
            });
          } else {
            // type find
            ingredeintCreated.setTypes([typeToAdd]);
          }
        });
      }

      //-- record & return
      await recordsDao.addRecord({
        head: "success",
        body: "ingredient created",
        location,
        description: "try",
      });
      return true;
    } catch (error) {
      createRecordError({ error, location, description: "catch" });

      return false;
    }
  }

  async updateIngredient(id, { name }) {
    try {
      // updading
      await Ingredient.update(
        { name },
        {
          where: {
            id,
          },
        }
      );
      //-- record & return
      await recordsDao.addRecord({
        head: "OK",
        body: "ingredient updated",
        location: "foodRecipes/daos/IngredientsDao/updateIngredient",
        description: "try",
      });
      return true;
    } catch (error) {
      await recordsDao.addRecord({
        head: error.message,
        body: error,
        location: "foodRecipes/daos/IngredientsDao/updateIngredient",
        description: "catch",
      });
      return false;
    }
  }

  async destroyIngredient(id) {
    try {
      await Ingredient.destroy({
        where: {
          id,
        },
      });
      //-- record & return
      await recordsDao.addRecord({
        head: "OK",
        body: "user deleted",
        location: "foodRecipes/daos/IngredientsDao/destroyIngredient",
        description: "try",
      });
      return true;
    } catch (error) {
      await recordsDao.addRecord({
        head: error.message,
        body: error,
        location: "foodRecipes/daos/IngredientsDao/destroyIngredient",
        description: "catch",
      });
      return false;
    }
  }
}
export const ingredientsDao = new IngredientsDao();
