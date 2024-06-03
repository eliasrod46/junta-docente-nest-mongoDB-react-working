import { check } from "express-validator";
import { validateResult } from "../../../helpers/validateHelper.js";

export const validateCategory = [
  check("name")
    .notEmpty()
    .withMessage("El campo nombre no debe esta vacio")
    .isLength({ min: 3, max: 30 })
    .withMessage(
      "El campo nombre debe tener un minimo 3 y maximo 30 caracteres"
    ),

  check("level")
    .notEmpty()
    .withMessage("El campo nivel no debe esta vacio")
    .isLength({ min: 3, max: 30 })
    .withMessage("El campo tipo debe tener un minimo 3 y maximo 30 caracteres"),

  (req, res, next) => {
    validateResult(req, res, next);
  },
];
