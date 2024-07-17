import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  create,
  deletepost,
  updatepost,
  getPosts,
} from "../controllers/post.controllers.js";

const router = express.Router();

router.post("/create", verifyToken, create);
router.get("/getposts", getPosts);
router.put("/updatepost/:postId/:userId", verifyToken, updatepost);
router.delete("/deletepost/:postId/:userId", verifyToken, deletepost);

export default router;
