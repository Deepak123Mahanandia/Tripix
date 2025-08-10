import Tour from '../models/Tour.js'; // Import the Tour model
import Review from '../models/Review.js'; // Import the Review model

export const createReview = async (req, res) => {
   const { tourID } = req.params;
   const newReview = new Review({...req.body});

   try {
     const savedReview = await newReview.save();
     await Tour.findByIdAndUpdate(tourID, {
       $push: { reviews: savedReview._id }
     });

     res.status(200).json({
       success: true,
       message: 'Review submitted successfully',
       data: savedReview
     });
   } catch (err) {
     res.status(200).json({ success: false, message: 'failed to submit review' });
   }
};
