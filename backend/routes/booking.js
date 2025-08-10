import express from 'express';
import { createBooking, getBookings, getAllBookings } from '../controllers/bookingController.js';
import Booking from '../models/Booking.js'; // Ensure the model is imported correctly

import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

router.post('/', verifyUser, createBooking);
router.get('/:id', verifyUser, getBookings);
router.get('/', verifyAdmin, getAllBookings);

export default router;