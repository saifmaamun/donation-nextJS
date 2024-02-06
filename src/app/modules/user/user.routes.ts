import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

// signup
router.post("/signup", UserController.createUser);
// login
router.post("/login", UserController.loginUser);
// get all user
router.get("/", UserController.getAllUSers);

export default router;
