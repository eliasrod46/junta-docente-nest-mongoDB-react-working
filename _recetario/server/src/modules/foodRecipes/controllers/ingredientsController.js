import { ingredientsDao } from "../daos/ingredientsDao.js";
import { recordsDao, createRecordError } from "../../admin/daos/recordsDao.js";

class IngredientsController {
  // check Ok
  async getAll(req, res) {
    const location = " (controller) - " + import.meta.url + " - (getAll)";
    try {
      const ingredients = await ingredientsDao.getAllIngredients();
      if (ingredients) {
        res.status(200).json({
          message: "success, sending all ingredients",
          data: ingredients,
        });
      } else {
        throw new Error("Fail on Dao (getAll)");
      }
    } catch (error) {
      createRecordError({ error, location, description: "catch" });
      res.status(500).json({
        message: "fail, oops something wrong happen",
      });
    }
  }

  // check Ok
  async getByid(req, res) {
    const location = " (controller) - " + import.meta.url + " - (getByid)";
    const { id } = req.params;
    try {
      const ingredient = await ingredientsDao.getIngredientByid(id);
      if (ingredient == undefined) {
        throw new Error("Fail on Dao (getByid)");
      } else if (ingredient == false) {
        res.status(404).json({ message: "fail, ingredient not found" });
      } else {
        res.status(200).json({
          message: "success, sending ingredient",
          data: ingredient,
        });
      }
    } catch (error) {
      createRecordError({ error, location, description: "catch" });
      res.status(500).json({
        message: "fail, oops something wrong happen",
      });
    }
  }

  // check Ok
  async create(req, res) {
    const location = " (controller) - " + import.meta.url + " - (create)";
    const { name, types } = req.body;
    try {
      const createdIngredient = await ingredientsDao.addIngredient({
        name,
        types,
      });

      if (createdIngredient) {
        res.status(201).json({ message: "success ingredient created" });
      } else {
        throw new Error("Fail on Dao (addIngredient)");
      }
    } catch (error) {
      createRecordError({ error, location, description: "catch" });
      res.status(500).json({
        message: "fail, oops something wrong happen",
      });
    }
  }

  // working
  async update(req, res) {
    const location = " (controller) - " + import.meta.url + " - (update)";
    const { id } = req.params;
    const { name, type } = req.body;
    try {
      //verfy if id send match with ingredientsDB
      const ingredient = await ingredientsDao.getIngredientByid(id);
      if (!ingredient) {
        res.status(404).json({ message: "fail, ingredient not found" });
      } else {
        await ingredientsDao.updateIngredient(id, {
          name,
          type,
        });
        res
          .status(201)
          .json({ mesage: "success, Teacher updated", data: teacher });
      }
    } catch (error) {
      createRecordError({ error, location, description: "catch" });
      res.status(500).json({
        message: "fail, oops something wrong happen",
      });
    }
  }

  // check Ok
  async destroy(req, res) {
    const location = " (controller) - " + import.meta.url + " - (destroy)";
    const { id } = req.params;
    try {
      const ingredient = await ingredientsDao.getIngredientByid(id);
      if (!ingredient) {
        res.status(404).json({ message: "fail, ingredient not found" });
      } else {
        const deletedIngredient = await ingredientsDao.destroyIngredient(id);
        if (deletedIngredient) {
          res.status(201).json({
            mesage: "success, ingredient deleted",
          });
        } else {
          throw new Error("Fail on Dao (destroyIngredient)");
        }
      }
    } catch (error) {
      createRecordError({ error, location, description: "catch" });
      res.status(500).json({
        message: "fail, oops something wrong happen",
      });
    }
  }
}

export const ingredientsController = new IngredientsController();
