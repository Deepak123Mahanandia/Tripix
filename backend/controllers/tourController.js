import Tour from '../models/Tour.js';

// Create a new tour
export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);
  try {
    const savedTour = await newTour.save();
    res.status(200).json({
      success: true,
      message: 'Successfully created',
      data: savedTour
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to create. Try again later.'
    });
  }
}; // ✅ Added closing brace here
  

// update tour
export const updateTour = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedTour = await Tour.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: 'Successfully updated',
      data: updatedTour
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to update. Try again later.'
    });
  }  
};
// delete tour
export const deleteTour = async (req, res) => {
  const id = req.params.id;
  try {
    await Tour.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: 'Successfully deleted',
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete. Try again later.'
    });
  }
};
// getsingle tour
export const getSingleTour = async (req, res) => {
  const id = req.params.id;
  try {
    const tour = await Tour.findById(id).populate('reviews');

    res.status(200).json({
      success: true,
      message: 'Successfully fetched',
      data: tour
    });
  } catch (err) {
    res.status(404).json({      success: false,
      message: 'Failed to fetch. Try again later.'
    });
  }  
};
// getAll tour
export const getAllTour = async (req, res) => {
  const page = parseInt(req.query.page);

  
  try {
    const tours = await Tour.find({}).populate('reviews')
    .skip(page * 8)
    .limit(8);

    res.status(200).json({
      success: true,
      count: tours.length,
      message: 'Successfully fetched all tours',
      data: tours
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: 'not found'
    });
  }  
};

// Get tour by search (only city and maxGroupSize)
export const getTourBySearch = async (req, res) => {
  const city = new RegExp(req.query.city, 'i'); // case-insensitive city match
  const maxGroupSize = parseInt(req.query.maxGroupSize);

  try {
    const tours = await Tour.find({
      city,
      maxGroupSize: { $gte: maxGroupSize },
    });

    res.status(200).json({
      success: true,
      message: 'Successful',
      data: tours,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: 'Not found',
    });
  }
};


// get featured tours
export const getFeaturedTours = async (req, res) => {
  try {
    const tours = await Tour.find({ featured: true }).populate('reviews');
    res.status(200).json({
      success: true,
      message: 'Successfully fetched featured tours',
      data: tours
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: 'Failed to fetch featured tours'
    });
  }
};


//get tour counts
export const getTourCounts = async (req, res) => {
  try {
    const tourcount = await Tour.estimatedDocumentCount();
    res.status(200).json({
      success: true,
      message: 'Successfully fetched tour count',
      data: count
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: 'Failed to fetch tour count'
    });
  }
};
