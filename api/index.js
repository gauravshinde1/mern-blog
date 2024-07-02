import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "../api/routes/auth.route.js";
import userRoutes from "../api/routes/user.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDb is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
