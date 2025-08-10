import Booking from '../models/Booking.js'; // ✅ Fixed import

// ✅ Create new booking
export const createBooking = async (req, res) => {
  const newBooking = new Booking(req.body);
  try {
    const savedBooking = await newBooking.save();
    res.status(200).json({
      success: true,
      message: 'Your tour is booked',
      data: savedBooking
    });
  } catch (err) {
    res.status(500).json({  // ✅ Use 500 for internal error
      success: true,
      message: 'Internal server error'
    });
  }
}; 

 // get single booking
export const getBookings = async (req, res) => {
    const id = req.params.id; // ✅ Use id from params if needed
  try {
    const books = await Booking.findById(id);
    res.status(200).json({
      success: true,
      message: 'successfull',
      data: books,
    });
  } catch (err) {
    res.status(404).json({
      success: true,
      message: 'not found'
    });
  }
};

// get all single bookings
export const getAllBookings = async (req, res) => {
  try {
    const book = await Booking.find();
    res.status(200).json({
      success: true,
      message: 'successfull',
      data: books,
    });
  } catch (err) {
    res.status(404).json({
      success: true,
      message: 'internal server error',
    });
  }
};

