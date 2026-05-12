import express from 'express';
import { createBooking, getBookings, getAllBookings } from '../controllers/bookingController.js';
import Booking from '../models/Booking.js';


import { verifyAdmin, verifyToken } from '../utils/verifyToken.js';

const router = express.Router();


router.post('/', verifyToken, createBooking);


router.get('/:id', verifyToken, getBookings); 
router.get('/', verifyAdmin, getAllBookings);

export default router;