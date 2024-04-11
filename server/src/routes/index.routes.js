import { Router } from "express";
import { router as teachersRoutes } from "../modules/teachers/routes/routes.js";
export const router = Router();

router.use("/teachers", teachersRoutes);
