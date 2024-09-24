import express from "express";
import { Login, LogOut } from "../controllers/AuthControllers.js";

const router = express.Router();

router.post("/auth/login", Login);
router.delete("/auth/logout", LogOut);

export default router;
