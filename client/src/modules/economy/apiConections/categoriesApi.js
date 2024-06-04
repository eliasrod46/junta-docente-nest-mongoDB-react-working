import { API_PORT } from "../../../config/constants.js";
const ROUTE = "/economy/admin/categories";
const URI = `http://localhost:${API_PORT}/api${ROUTE}`;

export const getAllCategoriesApi = async () => {
  const categories = await fetch(`${URI}`);
  const categoriesJson = await categories.json();
  return categoriesJson;
};

// export const saveIngredientsApi = async (data) => {
//   const reponse = await fetch(`${URI}`, {
//     method: "POST", // *GET, POST, PUT, DELETE, etc.
//     mode: "cors", // no-cors, *cors, same-origin
//     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: "same-origin", // include, *same-origin, omit
//     headers: {
//       "Content-Type": "application/json",
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: "follow", // manual, *follow, error
//     referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     body: JSON.stringify(data), // body data type must match "Content-Type" header
//   });

//   const reponseJson = reponse.json();
//   return reponseJson; //{ message: "success, Teacher added" }
// };
