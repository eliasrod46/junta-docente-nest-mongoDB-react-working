import { Router } from "express";
import { router as teachersRoutes } from "../modules/teachers/routes/routes.js";
import { router as entryTeachers } from "../modules/entryTeachers/routes/routes.js";
export const router = Router();

router.use("/teachers", teachersRoutes);
router.use(entryTeachers);
