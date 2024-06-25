// base "/api/ingredientes"

import { Router } from "express";
import { ingredientsController } from "../controllers/ingredientsController.js";
import { validateIngredient } from "../validator/ingredientValidator.js";

export const router = Router();

router.get("/", ingredientsController.getAll);
router.get("/:id", ingredientsController.getByid);
router.post("/", validateIngredient, ingredientsController.create);
router.put("/:id", validateIngredient, ingredientsController.update);
router.delete("/:id", ingredientsController.destroy);
