import { TeacherModel } from "../models/TeacherModel.js";

// CRUD

// show all
export const getAll = async (req, res) => {
  try {
    const teachers = await TeacherModel.findAll();
    res.status(201).json(teachers);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// show by id
export const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const teacher = await TeacherModel.findByPk({
      where: { id: req.params.id },
    });
    // const teacher = await TeacherModel.findByPk({ where: { id } });
    // const teacher = await TeacherModel.findByPk(id);
    res.status(201).json(teacher);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// create
export const create = async (req, res) => {
  const { name, dni } = req.body;
  try {
    await TeacherModel.create({ name, dni });
    res.status(201).json({ message: "Teacher added succssesfull" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// update
export const update = async (req, res) => {
  const { name, dni } = req.body;
  const { id } = req.params;
  try {
    const updatedTeacher = await TeacherModel.update(
      { name, dni },
      {
        where: { id },
      }
    );
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// delete
export const destroy = async (req, res) => {
  const { id } = req.params;
  try {
    await TeacherModel.destroy({ where: { id } });
    res.status(201).json({ message: "Teacher deleted succssesfull" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
