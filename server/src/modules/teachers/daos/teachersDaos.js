import { Teacher } from "../models/teacherModel.js";

class TeacherDao {
  async getAllTeachers() {
    try {
      const teachers = await Teacher.findAll();
      return teachers;
    } catch (error) {
      console.log({ message: error.message });
    }
  }

  async getTeacherByid(id) {
    try {
      const teacher = await Teacher.findOne({ where: { id } });
      if (teacher !== 0) {
        return teacher;
      } else {
        return undefined;
      }
    } catch (error) {
      console.log({ message: error.message });
    }
  }

  async addTeacher({ name, lastname, dni }) {
    try {
      await Teacher.create({ name, lastname, dni });
    } catch (error) {
      console.log({ message: error.message });
    }
  }

  async updateTeacher(id, { name, lastname, dni }) {
    try {
      // get teacher from id send
      const teacher = await this.getTeacherByid(id);

      // verify if dni send to update match with the dni ofteacher id send
      const data =
        teacher === dni ? { name, lastname } : { name, lastname, dni };

      // updading
      await Teacher.update(data, {
        where: {
          id,
        },
      });
    } catch (error) {
      console.log({ message: error.message });
    }
  }

  async destroyTeacher(id) {
    try {
      await Teacher.destroy({
        where: {
          id,
        },
      });
    } catch (error) {
      console.log({ message: error.message });
    }
  }

  async getTeacherByDni(dni) {
    try {
      const teacher = await Teacher.findOne({ where: { dni } });
      if (teacher !== 0) {
        return teacher;
      } else {
        return undefined;
      }
    } catch (error) {
      console.log({ message: error.message });
    }
  }
}
export const teacherDao = new TeacherDao();
