import { Router } from "express";
import * as TeacherController from "../controllers/teacherController.js";

export const router = Router();

router.get("/", TeacherController.getAll);
router.get("/:id", TeacherController.getById);
router.post("/", TeacherController.create);
router.put("/:id", TeacherController.update);
router.delete("/:id", TeacherController.destroy);
