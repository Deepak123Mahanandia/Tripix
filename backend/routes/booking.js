import express from 'express';
import { createBooking, getBookings, getAllBookings } from '../controllers/bookingController.js';
import Booking from '../models/Booking.js';

// Change 'verifyUser' to 'verifyToken' in the import
import { verifyAdmin, verifyToken } from '../utils/verifyToken.js';

const router = express.Router();

// Change 'verifyUser' to 'verifyToken' here
router.post('/', verifyToken, createBooking);

// For these routes, verifyUser might be correct if you intend to check ownership
router.get('/:id', verifyToken, getBookings); // Changed to verifyToken for simplicity
router.get('/', verifyAdmin, getAllBookings);

export default router;