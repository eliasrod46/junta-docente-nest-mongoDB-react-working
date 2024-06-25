import { Type } from "../models/TypeModel.js";
import { recordsDao, createRecordError } from "../../admin/daos/recordsDao.js";

class TypeDao {
  // check Ok
  async getAllTypes() {
    const location = " (dao) - " + import.meta.url + " - (getAllTypes)";
    try {
      const types = await Type.findAll();
      //-- record & return
      await recordsDao.addRecord({
        head: "success",
        body: "sending recetas",
        location,
        description: "try",
      });
      return types;
    } catch (error) {
      //-- record & return
      createRecordError({ error, location, description: "catch" });
      return false;
    }
  }

  // check Ok
  async getTypeByid(id) {
    const location = " (dao) - " + import.meta.url + " - (getTypeByid)";
    try {
      const type = await Type.findOne({ where: { id } });
      if (type == null) {
        await recordsDao.addRecord({
          head: "fail",
          body: "type not found",
          location,
          description: "try",
        });
        return false;
      } else {
        await recordsDao.addRecord({
          head: "success",
          body: "sending type",
          location,
          description: "try",
        });
        return type;
      }
    } catch (error) {
      createRecordError({ error, location, description: "catch" });
      return undefined;
    }
  }

  // check Ok
  async getTypeByName(name) {
    const location = " (dao) - " + import.meta.url + " - (getTypeByName)";
    try {
      const type = await Type.findOne({ where: { name } });
      if (type == null) {
        await recordsDao.addRecord({
          head: "fail",
          body: "type not found",
          location,
          description: "try",
        });
        return false;
      } else {
        await recordsDao.addRecord({
          head: "success",
          body: "sending type",
          location,
          description: "try",
        });
        return type;
      }
      }
    } catch (error) {
      createRecordError({ error, location, description: "catch" });
      return undefined;
    }
  }

  // check Ok
  async addType({ name }) {
    const location = " (dao) - " + import.meta.url + " - (addType)";
    try {
      await Type.create({ name });
      //-- record & return
      await recordsDao.addRecord({
        head: "success",
        body: "Type created",
        location,
        description: "try",
      });
      return true;
    } catch (error) {
      createRecordError({ error, location, description: "catch" });
      return false;
    }
  }

  // check Ok
  async updateType(id, { name }) {
    const location = " (dao) - " + import.meta.url + " - (updateType)";
    try {
      // updading
      await Type.update(
        { name },
        {
          where: {
            id,
          },
        }
      );

      //-- record & return
      await recordsDao.addRecord({
        head: "success",
        body: "type updated",
        location,
        description: "try",
      });
      return true;
    } catch (error) {
      createRecordError({ error, location, description: "catch" });
      return false;
    }
  }

  // check Ok
  async destroyType(id) {
    const location = " (dao) - " + import.meta.url + " - (destroyType)";
    try {
      await Type.destroy({
        where: {
          id,
        },
      });
      //-- record & return
      await recordsDao.addRecord({
        head: "success",
        body: "type deleted",
        location,
        description: "try",
      });
      return true;
    } catch (error) {
      createRecordError({ error, location, description: "catch" });
      return false;
    }
  }
}
export const typeDao = new TypeDao();
