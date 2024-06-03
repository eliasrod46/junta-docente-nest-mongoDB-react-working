import { categoriesDao } from "../../daos/categoriesDao.js";

class AdminCategoryController {
  async getAll(req, res) {
    try {
      const categories = await categoriesDao.getAllCategories();
      res.status(200).json({
        message: "success, sending all categories",
        data: categories,
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
      const category = await categoriesDao.getCategoryByid(id);
      if (!category) {
        res.status(404).json({ message: "fail, category not found" });
      } else {
        res
          .status(200)
          .json({ message: "success, sending category", data: category });
      }
    } catch (error) {
      res.status(500).json({
        message: "fail, oops something wrong happen",
      });
      console.log({ error: error.message });
    }
  }

  async create(req, res) {
    const { name, level } = req.body;
    try {
      newCategory = await categoriesDao.addCategory({ name, level });
      newCategory
        ? res
            .status(201)
            .json({ message: "success category created succesfull" })
        : res.status(400).json({ message: "fail, check data" });
    } catch (error) {
      res.status(500).json({
        message: "fail, oops something wrong happen",
      });
      console.log({ error: error.message });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const { name, level } = req.body;
    try {
      //verfy if id send match with ingredientsDB
      const updatedCategory = await categoriesDao.updateCategory(id, {
        name,
        level,
      });

      updatedCategory
        ? res
            .status(201)
            .json({ message: "success category updated succesfull" })
        : res.status(400).json({ message: "fail, check data" });
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
      deletedCategory = await categoriesDao.destroyCategory(id);

      deletedCategory
        ? res
            .status(201)
            .json({ message: "success category deleted succesfull" })
        : res.status(400).json({ message: "fail, check data" });
    } catch (error) {
      res.status(500).json({
        message: "fail, oops something wrong happen",
      });
      console.log({ error: error.message });
    }
  }
}

export const adminCategoryController = new AdminCategoryController();
