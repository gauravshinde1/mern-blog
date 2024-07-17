import express from "express";
import {
  deleteUser,
  signOutUser,
  updateUser,
  getUsers,
} from "../controllers/user.controllers.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/getusers", verifyToken, getUsers);
router.put("/update/:userId", verifyToken, updateUser);
router.delete("/delete/:userId", verifyToken, deleteUser);
router.post("/signOut", signOutUser);

export default router;
