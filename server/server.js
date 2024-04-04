import express from "express";
import { SERVER_CONSTANTS } from "./config/constants.js";
import cors from "cors";
import { db } from "./database/db.js";
import { router as TeacherRoutes } from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded)
app.use("/teachers", TeacherRoutes);

try {
  await db.authenticate();
  console.log("database connection success");
} catch (error) {
  console.log(`database connection error: ${error.message}`);
}

app.get("/", (req, res) => {
  res.send("holis");
});

app.listen(SERVER_CONSTANTS.PORT, () => {
  console.log(`Server listening in http://localhost:${SERVER_CONSTANTS.PORT}`);
});
