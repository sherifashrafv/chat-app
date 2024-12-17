import express from "express";
import { signup, login, logout } from "../controllers/auth.controller.js";
const router = express.Router();

router.post("/signup", (req, res) => signup);
router.post("/login", (req, res) => login);
router.post("/logout", (req, res) => logout);
export default router;
