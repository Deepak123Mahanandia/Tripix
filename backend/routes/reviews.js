import express from "express";
import { createReview } from "../controllers/reviewController.js";
import { verifyToken } from "../utils/verifyToken.js";


const router = express.Router();

// POST /api/review/:tourId
router.post("/:tourId", verifyToken, createReview);


export default router;
