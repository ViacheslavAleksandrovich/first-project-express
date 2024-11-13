import express from "express";
import mongoose from "mongoose";
import router from "./router.js";

const PORT = 5000;
const DB_URL =
  "mongodb+srv://ksm05012000:ODIpFtemzX7GaQHl@cluster0.m2aky.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
