// In reviewController.js
import Tour from '../models/Tour.js'; // Make sure Tour model is imported
import Review from '../models/Review.js'; // Make sure Review model is imported

export const createReview = async (req, res) => {

  // 'req.body' contains everything we need.
  const newReview = new Review(req.body);

  try {
    const savedReview = await newReview.save();

    // After saving the review, you must also update the corresponding tour's reviews array
    await Tour.findByIdAndUpdate(req.body.tourId, {
      $push: { reviews: savedReview._id }
    });

    res.status(200).json({ success: true, message: 'Review submitted successfully', data: savedReview });

  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to submit review. Please try again.' });
  }
}