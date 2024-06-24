import { Shift } from "../models/shiftsModel.js";
import { Teacher } from "../../teachers/models/teacherModel.js";

class ShiftDao {
  async addShift({ date, time, type, year }) {
    try {
      await Shift.create({ date, time, type, year });
    } catch (error) {
      return undefined;
      //send something
      console.log({ message: error.message });
    }
  }

  async getAllShifts() {
    try {
      const shifts = await Shift.findAll({ include: Teacher });
      return shifts;
    } catch (error) {
      console.log({ message: error.message });
    }
  }

  async getShiftsByDate(date) {
    try {
      const shift = await Shift.findAll({ where: { date } });
      if (shift !== 0) {
        return shift;
      } else {
        return undefined;
      }
    } catch (error) {
      console.log({ message: error.message });
    }
  }

  //   async updateTeacher(id, { name, lastname, dni }) {
  //     try {
  //       // get teacher from id send
  //       const teacher = await this.getTeacherByid(id);
  //       // verify if dni send to update match with the dni ofteacher id send
  //       const data =
  //         teacher === dni ? { name, lastname } : { name, lastname, dni };
  //       // updading
  //       await Teacher.update(data, {
  //         where: {
  //           id,
  //         },
  //       });
  //     } catch (error) {
  //       console.log({ message: error.message });
  //     }
  //   }
  //   async destroyTeacher(id) {
  //     try {
  //       await Teacher.destroy({
  //         where: {
  //           id,
  //         },
  //       });
  //     } catch (error) {
  //       console.log({ message: error.message });
  //     }
  //   }
  //   async getTeacherByDni(dni) {
  //     try {
  //       const teacher = await Teacher.findOne({ where: { dni } });
  //       if (teacher !== 0) {
  //         return teacher;
  //       } else {
  //         return undefined;
  //       }
  //     } catch (error) {
  //       console.log({ message: error.message });
  //     }
  //   }
}
export const shiftDao = new ShiftDao();
