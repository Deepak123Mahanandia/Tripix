// backend/models/Review.js
import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    reviewText: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    tourId: {
      type: mongoose.Types.ObjectId,
      ref: "Tour",
      required: true,
    },
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Review", reviewSchema);
