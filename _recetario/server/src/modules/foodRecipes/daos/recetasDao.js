import { Receta } from "../models/recetaModel.js";
import { recordsDao } from "../../admin/daos/recordsDao.js";

class RecetasDao {
  async getAllRecetas() {
    try {
      const recetas = await Receta.findAll();
      //-- record & return
      await recordsDao.addRecord({
        head: "OK",
        body: "sending recetas",
        location: "foodRecipes/daos/RecetasDao/getAllRecetas",
        description: "try",
      });
      return recetas;
    } catch (error) {
      //-- record & return
      await recordsDao.addRecord({
        head: error.message,
        body: error,
        location: "foodRecipes/daos/RecetasDao/getAllRecetas",
        description: "catch",
      });
      return [];
    }
  }

  async getRecetaByid(id) {
    try {
      const receta = await Receta.findOne({ where: { id } });
      if (receta !== 0) {
        await recordsDao.addRecord({
          head: "OK",
          body: "sending receta",
          location: "foodRecipes/daos/RecetasDao/getRecetaByid",
          description: "try",
        });
        return receta;
      } else {
        await recordsDao.addRecord({
          head: "fail",
          body: "receta not found",
          location: "foodRecipes/daos/RecetasDao/getRecetaByid",
          description: "try",
        });
        return undefined;
      }
    } catch (error) {
      await recordsDao.addRecord({
        head: error.message,
        body: error,
        location: "foodRecipes/daos/RecetasDao/getRecetaByid",
        description: "catch",
      });
      return undefined;
    }
  }

  async addReceta({ name, description, time, quantity }) {
    try {
      await Receta.create({ name, description, time, quantity });
      //-- record & return
      await recordsDao.addRecord({
        head: "OK",
        body: "receta created",
        location: "foodRecipes/daos/RecetasDao/addReceta",
        description: "try",
      });
      return true;
    } catch (error) {
      await recordsDao.addRecord({
        head: error.message,
        body: error,
        location: "foodRecipes/daos/RecetasDao/addReceta",
        description: "catch",
      });
      return false;
    }
  }

  async updateReceta(id, { name, description, time, quantity }) {
    try {
      // updading
      await Receta.update(
        { name, description, time, quantity },
        {
          where: {
            id,
          },
        }
      );
      //-- record & return
      await recordsDao.addRecord({
        head: "OK",
        body: "receta updated",
        location: "foodRecipes/daos/RecetasDao/updateReceta",
        description: "try",
      });
      return true;
    } catch (error) {
      await recordsDao.addRecord({
        head: error.message,
        body: error,
        location: "foodRecipes/daos/RecetasDao/updateReceta",
        description: "catch",
      });
      return false;
    }
  }

  async destroyReceta(id) {
    try {
      await Receta.destroy({
        where: {
          id,
        },
      });
      //-- record & return
      await recordsDao.addRecord({
        head: "OK",
        body: "receta deleted",
        location: "foodRecipes/daos/RecetasDao/destroyReceta",
        description: "try",
      });
      return true;
    } catch (error) {
      await recordsDao.addRecord({
        head: error.message,
        body: error,
        location: "foodRecipes/daos/RecetasDao/destroyReceta",
        description: "catch",
      });
      return false;
    }
  }
}
export const recetasDao = new RecetasDao();
