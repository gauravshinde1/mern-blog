import express from "express";
import {
  createComment,
  deleteComment,
  getPostComments,
  editComments,
  likeComment,
  getComments,
} from "../controllers/comment.controllers.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/create", verifyToken, createComment);
router.get("/getPostComments", getPostComments);
router.put("/likeComment/:commentId", verifyToken, likeComment);
router.put("/editComment/:commentId", verifyToken, editComments);
router.delete("/delete/:commentId", verifyToken, deleteComment);
router.get("/getcomments", verifyToken, getComments);

export default router;
