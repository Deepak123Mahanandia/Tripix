import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser'; // ✅ FIXED


import authRoute from './routes/auth.js'; // ✅ FIXED
import tourRoute from './routes/tours.js'; // ✅ FIXED
import userRoute from './routes/users.js'; // ✅ FIXED
import reviewRoute from './routes/reviews.js'; // ✅ FIXED
import bookingRoute from './routes/booking.js'; // ✅ FIXED

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
const corsOptions = {
  origin: true,
  credentials: true, // ✅ FIXED
};

// database connection
//mongoose.set('strictQuery', false); // ✅ FIXED

const connect = async () => {
  try {
    await mongoose.connect(`${process.env.MONGDB_URI}/tripix`); // OR your MongoDB Atlas URI
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
};


// Middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/tours', tourRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/reviews', reviewRoute);
app.use('/api/v1/booking', bookingRoute);


// for testing purposes, you can set PORT in .env file
app.get('/', (req, res) => {
  res.send('API is working');
});

// Start server
app.listen(PORT, () => {
    connect(); // Call the connection function

  console.log(`Server is running on port ${PORT}`);
});
