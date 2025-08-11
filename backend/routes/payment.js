import express from 'express';
import { createCheckoutSession, handleStripeWebhook } from '../controllers/paymentController.js';
// Corrected the typo here
import { verifyToken } from '../utils/verifyToken.js';

const router = express.Router();

// This route is called by your frontend to start the payment process.
// It is protected to ensure only logged-in users can create a payment session.
router.post('/create-checkout-session', verifyToken, createCheckoutSession);

// This route is called by Stripe's servers to confirm a payment.
// It should not have authentication middleware, as it needs to be publicly accessible for Stripe.
router.post('/webhook', handleStripeWebhook);

export default router;