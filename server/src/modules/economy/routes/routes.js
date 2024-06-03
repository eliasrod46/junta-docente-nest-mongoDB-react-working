// base "/api/economy"

import { Router } from "express";
import { router as adminRoutes } from "./admin.routes.js";
export const router = Router();

router.use("/admin/", adminRoutes);
