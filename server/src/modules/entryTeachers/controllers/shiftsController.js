import { shiftDao } from "../daos/shiftsDaos.js";

class ShiftController {
  async getAll(req, res) {
    try {
      const shifts = await shiftDao.getAllShifts();
      res
        .status(201)
        .json({ message: "success, sending all teachers", data: shifts });
    } catch (error) {
      console.log({ error: error.message });
    }
  }
  //   async getByid(req, res) {
  //     const { id } = req.params;
  //     try {
  //       const teacher = await teacherDao.getTeacherByid(id);
  //       if (!teacher) {
  //         res.status(403).json({ message: "teacher not found" });
  //       } else {
  //         res
  //           .status(201)
  //           .json({ message: "success, sending teacher", data: teacher });
  //       }
  //     } catch (error) {
  //       console.log({ error: error.message });
  //     }
  //   }
  async create(req, res) {
    const { date: _date, time, year, type } = req.body;
    const date = _date.split("-").reverse().join("-");
    console.log({ date, time, year, type });
    try {
      await shiftDao.addShift({ date, time, type, year });
      res.status(201).json({ success: "Shift created succesfull" });
    } catch (error) {
      //send something
      console.log({ error: error.message });
    }
  }
  //   async update(req, res) {
  //     const { id } = req.params;
  //     const { name, lastname, dni } = req.body;
  //     try {
  //       //verfy if id send match with teachersDB
  //       const teacher = await teacherDao.getTeacherByid(id);
  //       if (!teacher) {
  //         res.status(403).json({ message: "teacher not found" });
  //       } else {
  //         await teacherDao.updateTeacher(id, {
  //           name,
  //           lastname,
  //           dni,
  //         });
  //         res
  //           .status(201)
  //           .json({ mesage: "success, Teacher updated", data: teacher });
  //       }
  //     } catch (error) {
  //       res.status(401).json({ message: error.message });
  //     }
  //   }
  //   async destroy(req, res) {
  //     const { id } = req.params;
  //     try {
  //       console.log(id);
  //       await teacherDao.destroyTeacher(id);
  //       res.status(201).json({ message: "success, Teacher deleted" });
  //     } catch (error) {
  //       res.status(400).json({ message: error.message });
  //     }
  //   }
}

export const shiftController = new ShiftController();
