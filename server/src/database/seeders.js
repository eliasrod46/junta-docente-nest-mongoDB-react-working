import { teacherSeed } from "../modules/teachers/seeders/teacherSeeder.js";
import { shiftsSeed } from "../modules/entryTeachers/seeders/shiftsSeeder.js";

// import { Shift } from "../modules/entryTeachers/models/shiftsModel.js";
// const teacherShiftSeed = async () => {
//   const shifts = await Shift.findAll({});
//   shifts.forEach(async (shift, i) => {
//     await Shift.update(
//       { type: "complementaria" },
//       {
//         where: {
//           id: shift.id,
//         },
//       }
//     );
//   });
// };

export const seed = async () => {
  // await teacherSeed();
  // await shiftsSeed();
  // await teacherShiftSeed();
};
