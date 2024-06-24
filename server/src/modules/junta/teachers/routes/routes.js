// base "/api/teachers"
import { Router } from "express";
import { teacherController } from "../controllers/teacherController.js";
import { checkUniqueDni } from "../middlewares/validationMiddleware.js";
import { validateTeacherCreate } from "../validator/teacherValidator.js";

export const router = Router();

router.get("/", teacherController.getAll);
router.get("/:id", teacherController.getByid);
router.post(
  "/",
  validateTeacherCreate,
  checkUniqueDni,
  teacherController.create
);
router.put("/:id", teacherController.update);
router.delete("/:id", teacherController.destroy);
