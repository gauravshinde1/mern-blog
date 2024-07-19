import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "../api/routes/auth.route.js";
import userRoutes from "../api/routes/user.route.js";
import postRoutes from "../api/routes/post.route.js";
import commentRoutes from "../api/routes/comment.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDb is connected!");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);
app.use("/api/comment", commentRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
