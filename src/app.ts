import "dotenv/config";
import express from "express";
import mongoose from "mongoose";

import { router } from "./routes";

const app = express();

app.use(express.json());

app.use(router);

mongoose
  .connect(String(process.env.MONGO_URL))
  .then(() => console.log("DB Connection successfully"))
  .catch((err) => console.log(err));

export { app };
