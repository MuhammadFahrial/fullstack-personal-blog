import express from "express";
import {
  getPosts,
  getPostsById,
  createPosts,
  updatePosts,
  deletePosts,
} from "../controllers/PostsControllers.js";
import { adminOnly } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/posts", getPosts);
router.get("/posts/:id", getPostsById);
router.post("/posts", adminOnly, createPosts);
router.patch("/posts/:id", adminOnly, updatePosts);
router.delete("/posts/:id", adminOnly, deletePosts);

export default router;
