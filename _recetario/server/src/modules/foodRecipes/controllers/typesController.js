import { typeDao } from "../daos/typeDao.js";
import { recordsDao, createRecordError } from "../../admin/daos/recordsDao.js";

class TypesController {
  // check Ok
  async getAll(req, res) {
    const location = " (controller) - " + import.meta.url + " - (getAll)";
    try {
      const types = await typeDao.getAllTypes();
      if (types) {
        res.status(200).json({
          message: "success, sending all types",
          data: types,
        });
      } else {
        throw new Error("Fail on Dao (getAll)");
      }
    } catch (error) {
      createRecordError({ error, location, description: "catch" });
      res.status(500).json({
        message: "fail, oops something wrong happen",
      });
    }
  }

  // check Ok
  async getByid(req, res) {
    const location = " (controller) - " + import.meta.url + " - (getByid)";
    const { id } = req.params;
    try {
      const type = await typeDao.getTypeByid(id);
      if (type == undefined) {
        throw new Error("Fail on Dao (getByid)");
      } else if (type == false) {
        res.status(404).json({ message: "fail, type not found" });
      } else {
        res.status(200).json({
          message: "success, sending type",
          data: type,
        });
      }
    } catch (error) {
      createRecordError({ error, location, description: "catch" });
      res.status(500).json({
        message: "fail, oops something wrong happen",
      });
    }
  }

  // check Ok
  async create(req, res) {
    const location = " (controller) - " + import.meta.url + " - (create)";
    const { name } = req.body;
    try {
      const createdType = await typeDao.addType({ name });

      if (createdType) {
        res.status(201).json({ message: "success type created" });
      } else {
        throw new Error("Fail on Dao (addType)");
      }
    } catch (error) {
      createRecordError({ error, location, description: "catch" });
      res.status(500).json({
        message: "fail, oops something wrong happen",
      });
    }
  }

  // check Ok
  async update(req, res) {
    const location = " (controller) - " + import.meta.url + " - (update)";
    const { id } = req.params;
    const { name } = req.body;
    try {
      //verfy if id send match with ingredientsDB
      const type = await typeDao.getTypeByid(id);
      if (!type) {
        res.status(404).json({ message: "fail, type not found" });
      } else {
        const updatedType = await typeDao.updateType(id, {
          name,
        });

        if (updatedType) {
          res.status(201).json({
            mesage: "success, type updated",
          });
        } else {
          throw new Error("Fail on Dao (updateType)");
        }
      }
    } catch (error) {
      createRecordError({ error, location, description: "catch" });
      res.status(500).json({
        message: "fail, oops something wrong happen",
      });
    }
  }

  // check Ok
  async destroy(req, res) {
    const location = " (controller) - " + import.meta.url + " - (destroy)";
    const { id } = req.params;
    try {
      const type = await typeDao.getTypeByid(id);
      if (!type) {
        res.status(404).json({ message: "fail, type not found" });
      } else {
        const deletedType = await typeDao.destroyType(id);
        if (deletedType) {
          res.status(201).json({
            mesage: "success, type deleted",
          });
        } else {
          throw new Error("Fail on Dao (destroyType)");
        }
      }
    } catch (error) {
      createRecordError({ error, location, description: "catch" });
      res.status(500).json({
        message: "fail, oops something wrong happen",
      });
    }
  }
}

export const typesController = new TypesController();
