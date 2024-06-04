import { Record } from "../models/admin/recordModel.js";

class RecordsDao {
  //Get list of all categories
  async addRecord({ head, body, location, user, description }) {
    try {
      await Record.create({ head, body, location, user, description });
      return true;
    } catch (error) {
      //test
      console.log({
        location: "/RecordsDao/addRecord",
        message: error.message,
      });
      return false;
    }
  }
}
export const recordsDao = new RecordsDao();

export const createRecordError = async (error, location, description) => {
  await recordsDao.addRecord({
    head: error.message,
    body: error,
    location,
    description,
  });
  //test
  console.log({ message: error.message });
};
