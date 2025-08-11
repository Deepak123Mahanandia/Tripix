import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import authRoute from './routes/auth.js';
import tourRoute from './routes/tours.js';
import userRoute from './routes/users.js';
import reviewRoute from './routes/reviews.js';
import bookingRoute from './routes/booking.js';
import paymentRoute from './routes/payment.js'; // 1. Import the new payment route


const app = express();
const PORT = process.env.PORT || 4000;

// --- CORRECTED CORS OPTIONS ---
const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
  // Explicitly allow the headers your frontend is sending
  allowedHeaders: ['Content-Type', 'Authorization'],
};

// --- MIDDLEWARE ---
// IMPORTANT: The raw body parser for Stripe webhooks must come BEFORE express.json()
// We define the webhook route here separately from the others.
app.use('/api/v1/payment/webhook', express.raw({ type: 'application/json' }), paymentRoute);

// Middleware
app.use(express.json());
app.use(cors(corsOptions)); // Use the updated options
app.use(cookieParser());

// Routes
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/tours', tourRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/reviews', reviewRoute);
app.use('/api/v1/booking', bookingRoute);
app.use('/api/v1/payment', paymentRoute); 

// Test route
app.get('/', (req, res) => {
  res.send('API is working');
});

// MongoDB connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  }
};

// Start server
app.listen(PORT, () => {
  connect();
  console.log(`🚀 Server running on port ${PORT}`);
});