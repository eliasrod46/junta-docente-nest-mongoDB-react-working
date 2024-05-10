// base "/api"

import { Router } from "express";
import { router as shiftsRoutes } from "./shifts.routes.js";
export const router = Router();

router.use("/turnos", shiftsRoutes);
