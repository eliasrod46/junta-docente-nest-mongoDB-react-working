import { check } from "express-validator";
import { validateResult } from "../../../../helpers/validateHelper.js";

export const validateShift = [
  check("year")
    .notEmpty()
    .withMessage("no vacio")
    .isNumeric()
    .withMessage("numero"),

  check("date")
    .notEmpty()
    .withMessage("no vacio")
    .isString()
    .withMessage("debe ser formato texto")
    .custom((value, { req }) => {
      const expReg =
        /([0-3])([0-9])(-)([0-1])([0-9])(-)([1-3])([0-9])([0-9])([0-9])/g;
      const _value = value.split("-").reverse().join("-");
      return _value.search(expReg) === 0;
    })
    .withMessage("debe ser formato fecha dd-mm-aaaa"),

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
