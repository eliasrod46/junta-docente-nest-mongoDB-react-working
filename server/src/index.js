import { app } from "./app.js";
import { conectionDB } from "./database/db.js";
import { SERVER_CONSTANTS } from "./config/constants.js";

conectionDB();

app.listen(SERVER_CONSTANTS.PORT, () => {
  console.log(`Server listening in http://localhost:${SERVER_CONSTANTS.PORT}`);
});
