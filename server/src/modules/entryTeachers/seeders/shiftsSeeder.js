import { shiftDao } from "../daos/shiftsDaos.js";

const dates = [
  "03/04/2024",
  "04/04/2024",
  "05/04/2024",
  "08/04/2024",
  "09/04/2024",
  "10/04/2024",
  "11/04/2024",
  "12/04/2024",
  "15/04/2024",
  "16/04/2024",
  "17/04/2024",
  "18/04/2024",
  "19/04/2024",
];

const times = [
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
];

const TYPE = "complementaria";
const YEAR = 2024;
const CANT = 6;

const setDate = (d) => {
  const splitDate = d.split("/");
  return new Date(splitDate[2], splitDate[1] - 1, splitDate[0]);
};

// const beautyDate = (d) => {
//   return d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
// };

export async function shiftsSeed() {
  // const date = setDate(dates[0]);
  // console.log(beautyDate(date)); // Por ejemplo: 24/8/2019

  dates.forEach(async function (date) {
    times.forEach(async function (time) {
      for (let index = 0; index < CANT; index++) {
        await shiftDao.addShift({
          date,
          time,
          type: TYPE,
          year: YEAR,
        });
      }
    });
  });
}
