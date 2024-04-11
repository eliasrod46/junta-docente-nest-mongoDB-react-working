import { Router } from "express";
import { teacherController } from "../controllers/teacherController.js";
import { checkSchema } from "express-validator";
import { createTeacherValidation } from "../middlewares/validationMiddleware.js";
import { createTeacheSchema } from "../schemas/teacherSchema.js";

export const router = Router();

router.get("/", teacherController.getAll);
router.get("/:id", teacherController.getByid);
router.post(
  "/",
  [
    checkSchema({
      name: {
        isLength: {
          options: { min: 3 },
          errorMessage: "name should be at least 3 chars",
        },
        trim: true,
        isEmail: true,
      },
      lastname: {
        trim: true,
        isLength: {
          options: { min: 3 },
          errorMessage: "lastname should be at least 3 chars",
        },
      },
      // dni: {
      //   isInt: {
      //     errorMessage: "dni should be a number",
      //   },
      // },
    }),
    createTeacherValidation,
  ],
  teacherController.create
);
router.put("/:id", teacherController.update);
router.delete("/:id", teacherController.destroy);
