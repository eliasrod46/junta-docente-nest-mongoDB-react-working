// base "/api/ingredientes"

import { Router } from "express";
import { ingredientsController } from "../controllers/ingredientsController.js";
import { validateShift } from "../validator/shiftsValidator.js";

export const router = Router();

router.get("/", ingredientsController.getAll);
router.get("/:id", ingredientsController.getByid);
router.post("/", validateShift, ingredientsController.create);
router.put("/:id", validateShift, ingredientsController.update);
router.delete("/:id", ingredientsController.destroy);
