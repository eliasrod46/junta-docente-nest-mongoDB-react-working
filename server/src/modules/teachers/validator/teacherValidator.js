import { check } from "express-validator";
import { validateResult } from "../../../helpers/validateHelper.js";

export const validateTeacherCreate = [
  //TODO:dni, name, lastname

  check("dni")
    .notEmpty()
    .withMessage("no vacio")
    .isNumeric()
    .withMessage("numero"),

  check("name")
    .notEmpty()
    .withMessage("no vacio")
    .isString()
    .withMessage("string")
    .isLength({ min: 3 })
    .withMessage("cadena minimo 3"),

  check("lastname")
    .notEmpty()
    .withMessage("no vacio")
    .isString()
    .withMessage("string")
    .isLength({ min: 3 })
    .withMessage("cadena minimo 3"),

  // check("lastname").isString().isLength({ min: 3 }),
  // check("age")
  //   .exists()
  //   .isNumeric()
  //   .custom((value, { req }) => {
  //     //TODO: 18
  //     if (value < 18 || value > 40) {
  //       throw new Error("Rango de edad debe ser entre 18 y 40");
  //     }
  //     return true;
  //   }),
  // check("email").exists().isEmail(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
