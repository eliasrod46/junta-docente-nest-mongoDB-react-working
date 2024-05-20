import { Ingredient } from "../models/ingredientModel.js";

const ingredients = [
  { name: "huevo", type: "proteico" },
  { name: "tomate", type: "fibras" },
  { name: "harina", type: "carbohidratos" },
  { name: "Aceite", type: "grasas" },
  { name: "Manteca", type: "grasas" },
  { name: "Azucar", type: "carbohidratos" },
  { name: "Leche Liquida", type: "proteico" },
  { name: "Escencia de vainilla", type: "condimento" },
];

export async function ingredientsSeed() {
  ingredients.forEach(async function (ingredient) {
    await Ingredient.create({
      name: ingredient.name,
      type: ingredient.name,
    });
  });
}
