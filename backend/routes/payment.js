import express from 'express';
// --- Make sure to import your new controller function ---
import { 
  createCheckoutSession, 
  handleStripeWebhook,
  createTripPayment 
} from '../controllers/paymentController.js'; 
import { verifyToken } from '../utils/verifyToken.js';

const router = express.Router();


router.post('/create-checkout-session', verifyToken, createCheckoutSession);


router.post('/create-trip-payment', createTripPayment);


router.post('/webhook', handleStripeWebhook);

export default router;