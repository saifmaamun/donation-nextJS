import express from "express";
import { DonationController } from "./donation.controller";

const router = express.Router();

router.get("/:id", DonationController.getSinglePost);
router.delete("/:id", DonationController.deletePost);
router.patch("/:id", DonationController.updatePost);
router.get("/", DonationController.getAllPosts);
router.post("/", DonationController.addPPost);

export default router;
