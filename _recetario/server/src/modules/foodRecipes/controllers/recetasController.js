import { recetasDao } from "../daos/recetasDao.js";

class RecetasController {
  async getAll(req, res) {
    try {
      const recetas = await recetasDao.getAllRecetas();
      res.status(200).json({
        message: "success, sending all recetas",
        data: recetas,
      });
    } catch (error) {
      res.status(500).json({
        message: "fail, oops something wrong happen",
      });
      console.log({ error: error.message });
    }
  }

  async getByid(req, res) {
    const { id } = req.params;
    try {
      const receta = await recetasDao.getRecetaByid(id);
      if (!receta) {
        res.status(404).json({ message: "fail, receta not found" });
      } else {
        res
          .status(200)
          .json({ message: "success, sending receta", data: receta });
      }
    } catch (error) {
      res.status(500).json({
        message: "fail, oops something wrong happen",
      });
      console.log({ error: error.message });
    }
  }

  async create(req, res) {
    const { name, description, time, quantity } = req.body;
    try {
      await recetasDao.addReceta({ name, description, time, quantity });
      res
        .status(201)
        .json({ message: "success ingredient created succesfull" });
    } catch (error) {
      res.status(500).json({
        message: "fail, oops something wrong happen",
      });
      console.log({ error: error.message });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const { name, description, time, quantity } = req.body;
    try {
      //verfy if id send match with ingredientsDB
      const receta = await recetasDao.getRecetaByid(id);
      if (!receta) {
        res.status(404).json({ message: "fail, receta not found" });
      } else {
        await recetasDao.updateReceta(id, {
          name,
          description,
          time,
          quantity,
        });
        res
          .status(201)
          .json({ mesage: "success, receta updated", data: receta });
      }
    } catch (error) {
      res.status(500).json({
        message: "fail, oops something wrong happen",
      });
      console.log({ error: error.message });
    }
  }

  async destroy(req, res) {
    const { id } = req.params;
    try {
      await recetasDao.destroyReceta(id);
      res.status(201).json({ message: "success, receta deleted" });
    } catch (error) {
      res.status(500).json({
        message: "fail, oops something wrong happen",
      });
      console.log({ error: error.message });
    }
  }
}

export const recetasController = new RecetasController();
