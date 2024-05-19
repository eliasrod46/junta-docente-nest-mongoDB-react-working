import { ingredientsDao } from "../daos/ingredientsDao.js";

class IngredientsController {
  async getAll(req, res) {
    try {
      const ingredients = await ingredientsDao.getAllIngredients();
      res.status(200).json({
        message: "success, sending all ingredients",
        data: ingredients,
      });
    } catch (error) {
      res.status(400).json({
        message: "fail, oops something wrong happen",
      });
      console.log({ error: error.message });
    }
  }

  async getByid(req, res) {
    const { id } = req.params;
    try {
      const ingredient = await ingredientsDao.getIngredientByid(id);
      if (!ingredient) {
        res.status(404).json({ message: "fail, ingredient not found" });
      } else {
        res
          .status(200)
          .json({ message: "success, sending ingredient", data: ingredient });
      }
    } catch (error) {
      res.status(400).json({
        message: "fail, oops something wrong happen",
      });
      console.log({ error: error.message });
    }
  }

  async create(req, res) {
    const { name, type } = req.body;
    try {
      await ingredientsDao.addIngredient({ name, type });
      res
        .status(201)
        .json({ message: "success ingredient created succesfull" });
    } catch (error) {
      res.status(400).json({
        message: "fail, oops something wrong happen",
      });
      console.log({ error: error.message });
    }
  }

  async update(req, res) {
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
      res.status(400).json({
        message: "fail, oops something wrong happen",
      });
      console.log({ error: error.message });
    }
  }

  async destroy(req, res) {
    const { id } = req.params;
    try {
      await ingredientsDao.destroyIngredient(id);
      res.status(201).json({ message: "success, ingredient deleted" });
    } catch (error) {
      res.status(400).json({
        message: "fail, oops something wrong happen",
      });
      console.log({ error: error.message });
    }
  }
}

export const ingredientsController = new IngredientsController();
