import express from "express";
import {
  createComment,
  deleteComment,
  getPostComments,
  updateComments,
} from "../controllers/comment.controllers.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/create", verifyToken, createComment);
router.get("/getPostComments", getPostComments);
router.put("/update/:userId/:postId", verifyToken, updateComments);
router.delete("/delete/:userId/:postId", verifyToken, deleteComment);

export default router;
