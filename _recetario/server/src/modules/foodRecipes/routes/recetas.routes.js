// base "/api/recetas"

import { Router } from "express";
import { recetasController } from "../controllers/recetasController.js";
import { validateReceta } from "../validator/recetaValidator.js";

export const router = Router();

router.get("/", recetasController.getAll);
router.get("/:id", recetasController.getByid);
router.post("/", validateReceta, recetasController.create);
router.put("/:id", validateReceta, recetasController.update);
router.delete("/:id", recetasController.destroy);
