import { Ingredient } from "../models/ingredientModel.js";

class IngredientsDao {
  async getAllIngredients() {
    try {
      const ingredients = await Ingredient.findAll();
      return ingredients;
    } catch (error) {
      return [];
      console.log({ message: error.message });
    }
  }

  async getIngredientByid(id) {
    try {
      const ingredient = await Ingredient.findOne({ where: { id } });
      if (ingredient !== 0) {
        return ingredient;
      } else {
        return undefined;
      }
    } catch (error) {
      return undefined;
      console.log({ message: error.message });
    }
  }

  async addIngredient({ name, type }) {
    try {
      await Ingredient.create({ name, type });
    } catch (error) {
      return undefined;
      console.log({ message: error.message });
    }
  }

  async updateIngredient(id, { name, type }) {
    try {
      // updading
      await Ingredient.update(
        { name, type },
        {
          where: {
            id,
          },
        }
      );
    } catch (error) {
      console.log({ message: error.message });
    }
  }

  async destroyIngredient(id) {
    try {
      await Ingredient.destroy({
        where: {
          id,
        },
      });
    } catch (error) {
      console.log({ message: error.message });
    }
  }
}
export const ingredientsDao = new IngredientsDao();
