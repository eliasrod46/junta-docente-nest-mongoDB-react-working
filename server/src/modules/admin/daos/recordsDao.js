import { Record } from "../models/recordModel.js";

class RecordsDao {
  //Get list of all records
  async getAllRecords() {
    try {
      const records = await Record.findAll();
      return records;
    } catch (error) {
      console.log({ message: error.message });
      return [];
    }
  }

  //Create record
  async addRecord({ head, body, location, description = "" }) {
    try {
      await Record.create({ head, body, location, description });
      return true;
    } catch (error) {
      console.log({ message: error.message });
      return undefined;
    }
  }
}
export const recordsDao = new RecordsDao();
