import express from "express";
import cors from "cors";
import { router } from "./src/routes/index.routes.js";

export const app = express();

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded)
app.use("/api", router);
