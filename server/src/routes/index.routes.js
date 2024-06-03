// base "/api"
import { Router } from "express";
export const router = Router();

import { router as economyRoutes } from "../modules/economy/routes/routes.js";
router.use("/economy", economyRoutes);

// import { router as teachersRoutes } from "../modules/junta/teachers/routes/routes.js";
// import { router as entryTeachers } from "../modules/junta/entryTeachers/routes/routes.js";
// import { router as foodRecipesRoutes } from "../modules/foodRecipes/routes/routes.js";

// router.use("/teachers", teachersRoutes);
// router.use(entryTeachers);
// //food recipes routes
// router.use(foodRecipesRoutes);
