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
            model: Type, // will create a left join
            // required: true, // inner join
            // right: true // has no effect, will create an inner join
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
            model: Type, // will create a left join
            // required: true, // inner join
            // right: true // has no effect, will create an inner join
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

  // check Ok
  async addIngredient({ name, types = [] }) {
    const location = " (dao) - " + import.meta.url + " - (addIngredient)";
    try {
      const ingredeintCreated = await Ingredient.create({ name });
      let typesToSync = [];
      // adding types
      if (types.length > 0) {
        types.forEach(async (type, i) => {
          const typeToAdd = await typeDao.getTypeByName(type);

          if (!typeToAdd) {
            // record
            await recordsDao.addRecord({
              head: "fail",
              body: "Fail on Dao (getByid)",
              location,
              description: "try",
            });
          } else if (type == false) {
            // record
            await recordsDao.addRecord({
              head: "fail",
              body: "fail, type not found",
              location,
              description: "try",
            });
          } else {
            // type findtypesToAdd
            typesToSync.push(typeToAdd.id);
          }
          if (i + 1 == types.length) {
            const uniqueArray = [...new Set(typesToSync)];

            ingredeintCreated.setTypes(uniqueArray);
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

  // working
  async updateIngredient(id, { name, types = [] }) {
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

  // check Ok
  async destroyIngredient(id) {
    const location = " (dao) - " + import.meta.url + " - (destroyIngredient)";
    try {
      await Ingredient.destroy({
        where: {
          id,
        },
      });
      //-- record & return
      await recordsDao.addRecord({
        head: "success",
        body: "ingredient deleted",
        location,
        description: "try",
      });
      return true;
    } catch (error) {
      createRecordError({ error, location, description: "catch" });
      return false;
    }
  }
}
export const ingredientsDao = new IngredientsDao();
