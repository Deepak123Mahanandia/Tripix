import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import authRoute from '../routes/auth.js';
import tourRoute from '../routes/tours.js';
import userRoute from '../routes/users.js';
import reviewRoute from '../routes/reviews.js';
import bookingRoute from '../routes/booking.js';
import paymentRoute from '../routes/payment.js';

const app = express();


const corsOptions = {
  origin: true,
  credentials: true,
};

app.use(cors(corsOptions));


app.use(
  '/api/v1/payment/webhook',
  express.raw({ type: 'application/json' }),
  paymentRoute
);


app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());


app.use('/api/v1/auth', authRoute);
app.use('/api/v1/tours', tourRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/reviews', reviewRoute);
app.use('/api/v1/booking', bookingRoute);
app.use('/api/v1/payment', paymentRoute);


app.get('/', (req, res) => {
  res.send('API is working');
});


const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
  }
};


connect();


export default app;