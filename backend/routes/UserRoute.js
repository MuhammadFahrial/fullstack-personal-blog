import express from "express";
import {
  getUsers,
  createUsers,
  updateUsers,
  deleteUser,
} from "../controllers/UsersControllers.js";
import { adminOnly } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/users", adminOnly, getUsers);
router.post("/users", adminOnly, createUsers);
router.patch("/users/:id", adminOnly, updateUsers);
router.delete("/users/:id", adminOnly, deleteUser);

export default router;
