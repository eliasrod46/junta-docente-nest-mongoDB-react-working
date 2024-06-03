// base "/api/economy/admin"
import { Router } from "express";

export const router = Router();

// categories //
import { validateCategory } from "../validator/categoriesValidator.js";
import { adminCategoryController } from "../controllers/admin/adminCategoryController.js";
// categories routes
router.get("/categories", adminCategoryController.getAll);
router.get("/categories/:id", adminCategoryController.getByid);
router.post("/categories", validateCategory, adminCategoryController.create);
router.put("/categories/:id", validateCategory, adminCategoryController.update);
router.delete("/categories/:id", adminCategoryController.destroy);
