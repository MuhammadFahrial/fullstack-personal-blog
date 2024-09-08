import express from "express";
import { Login, LogOut } from "../controllers/AuthControllers.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

router.post("/auth/login", Login);
router.get("/token", refreshToken);
router.delete("/auth/logout", LogOut);

export default router;
