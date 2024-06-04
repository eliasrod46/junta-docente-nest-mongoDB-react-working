// base "/api/economy/acountMovements"
import { Router } from "express";
export const router = Router();

// accountMovements //
// import { validateCategory } from "../validator/categoriesValidator.js";
import { accountMovementsController } from "../controllers/accountMovementsController.js";
// incomes routes
router.get("/incomes", accountMovementsController.getAllIncomes);
// expenses routes
router.get("/expenses", accountMovementsController.getAllExpenses);
