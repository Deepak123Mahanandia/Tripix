import express from 'express';
// --- Make sure to import your new controller function ---
import { 
  createCheckoutSession, 
  handleStripeWebhook,
  createTripPayment // Import the new function
} from '../controllers/paymentController.js'; 
import { verifyToken } from '../utils/verifyToken.js';

const router = express.Router();

// --- This is your EXISTING route for tour bookings ---
router.post('/create-checkout-session', verifyToken, createCheckoutSession);

// --- ADD THIS NEW ROUTE specifically for the Tripix flight+hotel payment ---
// We don't need verifyToken here if any user (even not logged in) can use the Tripix planner
router.post('/create-trip-payment', createTripPayment);

// This is your existing webhook route
router.post('/webhook', handleStripeWebhook);

export default router;