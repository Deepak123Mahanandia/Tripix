import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import authRoute from './routes/auth.js';
import tourRoute from './routes/tours.js';
import userRoute from './routes/users.js';
import reviewRoute from './routes/reviews.js';
import bookingRoute from './routes/booking.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

const corsOptions = {
  origin: 'http://localhost:5173',  // frontend URL
  credentials: true,
};

// Middleware
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/tours', tourRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/reviews', reviewRoute);
app.use('/api/v1/booking', bookingRoute);

// Test route
app.get('/', (req, res) => {
  res.send('API is working');
});

// Start server
app.listen(PORT, () => {
  connect();
  console.log(`🚀 Server running on port ${PORT}`);
});

// MongoDB connection
async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  }
}
