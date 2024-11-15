import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import dotenv from "dotenv";

dotenv.config();
const PORT = Number(process.env.PORT);
const DB_URL = process.env.DB_URL;

const app = express();
app.use(express.json());
app.use("/api", router);

async function run() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => {
      console.log("SERVER START on " + PORT);
    });
  } catch (error) {
    console.log(error);
  }
}

run();
