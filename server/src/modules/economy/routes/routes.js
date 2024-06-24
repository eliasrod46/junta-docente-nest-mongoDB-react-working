// base "/api/economy"

import { Router } from "express";

// routes groups
import { router as adminRoutes } from "./admin.routes.js";
import { router as acountMovementsRoutes } from "./acountMovements.routes.js";

// controllers
import { dashboardController } from "../controllers/dashboardController.js";

export const router = Router();

router.use("/admin/", adminRoutes);
router.use("/acountMovements", acountMovementsRoutes);
router.use("/dashboard", dashboardController.index);
