import { check } from "express-validator";
import { validateResult } from "../../../helpers/validateHelper.js";

export const validateShiftCreate = [
  check("year")
    .notEmpty()
    .withMessage("no vacio")
    .isNumeric()
    .withMessage("numero"),

  check("date")
    .notEmpty()
    .withMessage("no vacio")
    .isDate()
    .withMessage("debe ser formato fecha"),

  check("time")
    .notEmpty()
    .withMessage("no vacio")
    .isTime()
    .withMessage("debe ser formato hora"),

  check("type")
    .notEmpty()
    .withMessage("no vacio")
    .isString()
    .withMessage("string")
    .isLength({ min: 3, max: 30 })
    .withMessage("cadena minimo 3, maximo 30"),

  (req, res, next) => {
    validateResult(req, res, next);
  },
];
