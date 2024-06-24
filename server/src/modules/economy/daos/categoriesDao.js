import { Category } from "../models/categoryModel.js";
import { createRecordError, recordsDao } from "../../admin/daos/recordsDao.js";

class CategoriesDao {
  //Get list of all categories
  async getAllCategories() {
    try {
      const categories = await Category.findAll();
      //-- record & return
      await recordsDao.addRecord({
        head: "OK",
        body: "sending categories",
        location: "daos/categoriesDao/getAllCategories",
        description: "try",
      });
      return categories;
    } catch (error) {
      //-- record & return
      await recordsDao.addRecord({
        head: error.message,
        body: error,
        location: "daos/categoriesDao/getAllCategories",
        description: "catch",
      });
      //test
      console.log({ message: error.message });
      return [];
    }
  }

  //Get category by his id
  async getCategoryByid(id) {
    try {
      const category = await Category.findOne({ where: { id } });

      //-- record & return
      await recordsDao.addRecord({
        head: "OK",
        body: "sending category",
        location: "daos/categoriesDao/getCategoryByid",
        description: "try",
      });
      if (category !== 0) {
        return category;
      } else {
        return undefined;
      }
    } catch (error) {
      //-- record & return
      await recordsDao.addRecord({
        head: error.message,
        body: error,
        location: "daos/categoriesDao/getCategoryByid",
        description: "catch",
      });
      //test
      console.log({ message: error.message });
      return undefined;
    }
  }

  //Create category
  async addCategory({ name, level }) {
    try {
      await Category.create({ name, level });

      //-- record & return
      await recordsDao.addRecord({
        head: "OK",
        body: "category created",
        location: "daos/categoriesDao/addCategory",
        description: "try",
      });
      return true;
    } catch (error) {
      //-- record & return
      await recordsDao.addRecord({
        head: error.message,
        body: error,
        location: "daos/categoriesDao/addCategory",
        description: "catch",
      });
      //test
      console.log({ message: error.message });
      return false;
    }
  }

  //Update category
  async updateCategory(id, { name, level }) {
    try {
      // updading
      await Ingredient.update(
        { name, level },
        {
          where: {
            id,
          },
        }
      );

      //-- record & return
      await recordsDao.addRecord({
        head: "OK",
        body: "category updated",
        location: "daos/categoriesDao/updateCategory",
        description: "try",
      });
      return true;
    } catch (error) {
      //-- record & return
      await recordsDao.addRecord({
        head: error.message,
        body: error,
        location: "daos/categoriesDao/updateCategory",
        description: "catch",
      });
      //test
      console.log({ message: error.message });
      return false;
    }
  }

  //Destroy category
  async destroyCategory(id) {
    try {
      await Category.destroy({
        where: {
          id,
        },
      });
      //-- record & return
      await recordsDao.addRecord({
        head: "OK",
        body: "category deleted",
        location: "daos/categoriesDao/destroyCategory",
        description: "try",
      });
      return true;
    } catch (error) {
      //-- record & return
      await recordsDao.addRecord({
        head: error.message,
        body: error,
        location: "categoriesDao/destroyCategory",
        description: "catch",
      });
      //test
      console.log({ message: error.message });
      return false;
    }
  }
}
export const categoriesDao = new CategoriesDao();
