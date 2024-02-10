import express from "express";
import { DonatedController } from "./donated.controller";

const router = express.Router();

router.get("/", DonatedController.getAllData);
router.post("/", DonatedController.addData);

export default router;
