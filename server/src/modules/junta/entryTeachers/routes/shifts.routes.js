// base "/api/turnos"

import { Router } from "express";
import { shiftController } from "../controllers/shiftsController.js";
import { validateShift } from "../validator/shiftsValidator.js";

export const router = Router();

router.get("/", shiftController.getAll);
router.post("/", validateShift, shiftController.create);
// router.get("/:id", teacherController.getByid);
// router.put("/:id", teacherController.update);
// router.delete("/:id", teacherController.destroy);
