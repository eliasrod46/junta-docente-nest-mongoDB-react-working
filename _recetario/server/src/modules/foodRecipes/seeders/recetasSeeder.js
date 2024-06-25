import { Receta } from "../models/recetaModel.js";

const recetas = [
  {
    name: "receta 1",
    description: "descrpcion de la receta 1",
    time: "1 h",
    quantity: 2,
  },
];

export async function ingredientsSeed() {
  recetas.forEach(async function (ingredient) {
    await Receta.create({
      name: ingredient.name,
      description: ingredient.description,
      time: ingredient.time,
      quantity: ingredient.quantity,
    });
  });
}
