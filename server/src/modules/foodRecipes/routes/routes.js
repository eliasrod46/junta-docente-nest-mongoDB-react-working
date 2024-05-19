// base "/api"

import { Router } from "express";
import { router as ingredientsRoutes } from "./ingredients.routes.js";
export const router = Router();

router.use("/ingredientes", ingredientsRoutes);
