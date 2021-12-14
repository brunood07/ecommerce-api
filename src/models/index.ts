import "dotenv/config";
import mongoose from "mongoose";

const connection = mongoose
  .connect(String(process.env.MONGO_URL))
  .then(() => console.log("DB Connection successfully"))
  .catch((err) => console.log(err));

export default connection;
