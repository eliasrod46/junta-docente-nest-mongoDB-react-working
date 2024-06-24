// base "/api"
import { Router } from "express";
export const router = Router();

// user module
import { router as userRoutes } from "../modules/users/routes/routes.js";
router.use(userRoutes);

// auth module
import { router as authRoutes } from "../modules/auth/routes/routes.js";
router.use("/auth", authRoutes);

// economy module
import { router as economyRoutes } from "../modules/economy/routes/routes.js";
router.use("/economy", economyRoutes);

// junta module
import { router as teachersRoutes } from "../modules/junta/teachers/routes/routes.js";
import { router as entryTeachers } from "../modules/junta/entryTeachers/routes/routes.js";
router.use("/teachers", teachersRoutes);
router.use(entryTeachers);

// food recipes module
// import { router as foodRecipesRoutes } from "../modules/foodRecipes/routes/routes.js";
// router.use(foodRecipesRoutes);
