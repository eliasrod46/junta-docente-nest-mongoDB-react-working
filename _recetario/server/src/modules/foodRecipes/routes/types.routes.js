// base "/api/ingredientes"

import { Router } from "express";
import { typesController } from "../controllers/typesController.js";
import { validateType } from "../validator/typeValidator.js";

export const router = Router();

router.get("/", typesController.getAll);
router.get("/:id", typesController.getByid);
router.post("/", validateType, typesController.create);
router.put("/:id", validateType, typesController.update);
router.delete("/:id", typesController.destroy);
