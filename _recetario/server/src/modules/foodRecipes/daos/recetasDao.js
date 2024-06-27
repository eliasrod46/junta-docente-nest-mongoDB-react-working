import { Receta } from "../models/recetaModel.js";
import { recordsDao } from "../../admin/daos/recordsDao.js";

class RecetasDao {
  // // check Ok
  // async getAllIngredients() {
  //   // set file location
  //   const location = " (dao) - " + import.meta.url + " - (getAllIngredients)";
  //   try {
  //     // get data
  //     const ingredients = await Ingredient.findAll({
  //       include: [
  //         {
  //           model: Type, // will create a left join
  //           // required: true, // inner join
  //           // right: true // has no effect, will create an inner join
  //         },
  //       ],
  //     });
  //     //-- record & return
  //     await recordsDao.addRecord({
  //       head: "success",
  //       body: "sending ingredients",
  //       location,
  //       description: "try",
  //     });
  //     return ingredients;
  //   } catch (error) {
  //     //-- record & return
  //     createRecordError({ error, location, description: "catch" });
  //     return false;
  //   }
  // }
  // // check Ok
  // async getIngredientByid(id) {
  //   // set file location
  //   const location = " (dao) - " + import.meta.url + " - (getIngredientByid)";
  //   try {
  //     // get data
  //     const ingredient = await Ingredient.findOne({
  //       where: { id },
  //       include: [
  //         {
  //           model: Type, // will create a left join
  //           // required: true, // inner join
  //           // right: true // has no effect, will create an inner join
  //         },
  //       ],
  //     });
  //     // check if exist
  //     if (ingredient == null) {
  //       await recordsDao.addRecord({
  //         head: "fail",
  //         body: "ingredient not found",
  //         location,
  //         description: "try",
  //       });
  //       return false;
  //     } else {
  //       await recordsDao.addRecord({
  //         head: "successOK",
  //         body: "sending ingredient",
  //         location,
  //         description: "try",
  //       });
  //       return ingredient;
  //     }
  //   } catch (error) {
  //     createRecordError({ error, location, description: "catch" });
  //     return undefined;
  //   }
  // }
  // // check Ok
  // async addIngredient({ name, types = [] }) {
  //   // set file location
  //   const location = " (dao) - " + import.meta.url + " - (addIngredient)";
  //   try {
  //     // create item
  //     const ingredeintCreated = await Ingredient.create({ name });
  //     // arr to save types to syync
  //     let typesToSync = [];
  //     // adding types
  //     if (types.length > 0) {
  //       types.forEach(async (type, i) => {
  //         // get data
  //         const typeToAdd = await typeDao.getTypeByName(type);
  //         // check if exist
  //         if (typeToAdd == undefined) {
  //           // record
  //           await recordsDao.addRecord({
  //             head: "fail",
  //             body: "Fail on Dao (getByid)",
  //             location,
  //             description: "try",
  //           });
  //         } else if (typeToAdd == false) {
  //           // record
  //           await recordsDao.addRecord({
  //             head: "fail",
  //             body: "fail, type not found",
  //             location,
  //             description: "try",
  //           });
  //         } else {
  //           // add type id to array
  //           typesToSync.push(typeToAdd.id);
  //         }
  //         // chk if last loop
  //         if (i + 1 == types.length) {
  //           // filter no repeat types id
  //           const uniqueArray = [...new Set(typesToSync)];
  //           // record data pivot table
  //           ingredeintCreated.setTypes(uniqueArray);
  //         }
  //       });
  //     }
  //     //-- record & return
  //     await recordsDao.addRecord({
  //       head: "success",
  //       body: "ingredient created",
  //       location,
  //       description: "try",
  //     });
  //     return true;
  //   } catch (error) {
  //     createRecordError({ error, location, description: "catch" });
  //     return false;
  //   }
  //   return true;
  // }
  // // check Ok
  // async updateIngredient(id, { name, types = [] }) {
  //   // set file location
  //   const location = " (dao) - " + import.meta.url + " - (addIngredient)";
  //   const typesToSync = [];
  //   try {
  //     // updading ingredient
  //     await Ingredient.update(
  //       { name },
  //       {
  //         where: {
  //           id,
  //         },
  //       }
  //     );
  //     const updatedIngredient = await this.getIngredientByid(id);
  //     // adding types
  //     if (types.length > 0) {
  //       types.forEach(async (type, i) => {
  //         // get data
  //         const typeToAdd = await typeDao.getTypeByName(type);
  //         // check if exist
  //         if (typeToAdd == undefined) {
  //           // record
  //           await recordsDao.addRecord({
  //             head: "fail",
  //             body: "Fail on Dao (getByid)",
  //             location,
  //             description: "try",
  //           });
  //         } else if (typeToAdd == false) {
  //           // record
  //           await recordsDao.addRecord({
  //             head: "fail",
  //             body: "fail, type not found",
  //             location,
  //             description: "try",
  //           });
  //         } else {
  //           // add type id to array
  //           typesToSync.push(typeToAdd.id);
  //         }
  //         // chk if last loop
  //         if (i + 1 == types.length) {
  //           // filter no repeat types id
  //           const uniqueArray = [...new Set(typesToSync)];
  //           // record data pivot table
  //           updatedIngredient.setTypes(uniqueArray);
  //         }
  //       });
  //     }
  //     //-- record & return
  //     await recordsDao.addRecord({
  //       head: "success",
  //       body: "ingredient updated",
  //       location,
  //       description: "try",
  //     });
  //     return true;
  //   } catch (error) {
  //     createRecordError({ error, location, description: "catch" });
  //     return false;
  //   }
  // }
  // // check Ok
  // async destroyIngredient(id) {
  //   // set file location
  //   const location = " (dao) - " + import.meta.url + " - (destroyIngredient)";
  //   try {
  //     // delete item
  //     await Ingredient.destroy({
  //       where: {
  //         id,
  //       },
  //     });
  //     //-- record & return
  //     await recordsDao.addRecord({
  //       head: "success",
  //       body: "ingredient deleted",
  //       location,
  //       description: "try",
  //     });
  //     return true;
  //   } catch (error) {
  //     createRecordError({ error, location, description: "catch" });
  //     return false;
  //   }
  // }
  // async getAllRecetas() {
  //   try {
  //     const recetas = await Receta.findAll();
  //     //-- record & return
  //     await recordsDao.addRecord({
  //       head: "OK",
  //       body: "sending recetas",
  //       location: "foodRecipes/daos/RecetasDao/getAllRecetas",
  //       description: "try",
  //     });
  //     return recetas;
  //   } catch (error) {
  //     //-- record & return
  //     await recordsDao.addRecord({
  //       head: error.message,
  //       body: error,
  //       location: "foodRecipes/daos/RecetasDao/getAllRecetas",
  //       description: "catch",
  //     });
  //     return [];
  //   }
  // }
  // async getRecetaByid(id) {
  //   try {
  //     const receta = await Receta.findOne({ where: { id } });
  //     if (receta !== 0) {
  //       await recordsDao.addRecord({
  //         head: "OK",
  //         body: "sending receta",
  //         location: "foodRecipes/daos/RecetasDao/getRecetaByid",
  //         description: "try",
  //       });
  //       return receta;
  //     } else {
  //       await recordsDao.addRecord({
  //         head: "fail",
  //         body: "receta not found",
  //         location: "foodRecipes/daos/RecetasDao/getRecetaByid",
  //         description: "try",
  //       });
  //       return undefined;
  //     }
  //   } catch (error) {
  //     await recordsDao.addRecord({
  //       head: error.message,
  //       body: error,
  //       location: "foodRecipes/daos/RecetasDao/getRecetaByid",
  //       description: "catch",
  //     });
  //     return undefined;
  //   }
  // }
  // async addReceta({ name, description, time, quantity }) {
  //   try {
  //     await Receta.create({ name, description, time, quantity });
  //     //-- record & return
  //     await recordsDao.addRecord({
  //       head: "OK",
  //       body: "receta created",
  //       location: "foodRecipes/daos/RecetasDao/addReceta",
  //       description: "try",
  //     });
  //     return true;
  //   } catch (error) {
  //     await recordsDao.addRecord({
  //       head: error.message,
  //       body: error,
  //       location: "foodRecipes/daos/RecetasDao/addReceta",
  //       description: "catch",
  //     });
  //     return false;
  //   }
  // }
  // async updateReceta(id, { name, description, time, quantity }) {
  //   try {
  //     // updading
  //     await Receta.update(
  //       { name, description, time, quantity },
  //       {
  //         where: {
  //           id,
  //         },
  //       }
  //     );
  //     //-- record & return
  //     await recordsDao.addRecord({
  //       head: "OK",
  //       body: "receta updated",
  //       location: "foodRecipes/daos/RecetasDao/updateReceta",
  //       description: "try",
  //     });
  //     return true;
  //   } catch (error) {
  //     await recordsDao.addRecord({
  //       head: error.message,
  //       body: error,
  //       location: "foodRecipes/daos/RecetasDao/updateReceta",
  //       description: "catch",
  //     });
  //     return false;
  //   }
  // }
  // async destroyReceta(id) {
  //   try {
  //     await Receta.destroy({
  //       where: {
  //         id,
  //       },
  //     });
  //     //-- record & return
  //     await recordsDao.addRecord({
  //       head: "OK",
  //       body: "receta deleted",
  //       location: "foodRecipes/daos/RecetasDao/destroyReceta",
  //       description: "try",
  //     });
  //     return true;
  //   } catch (error) {
  //     await recordsDao.addRecord({
  //       head: error.message,
  //       body: error,
  //       location: "foodRecipes/daos/RecetasDao/destroyReceta",
  //       description: "catch",
  //     });
  //     return false;
  //   }
  // }
}
export const recetasDao = new RecetasDao();
