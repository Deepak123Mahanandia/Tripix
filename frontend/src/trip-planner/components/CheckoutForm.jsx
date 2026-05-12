import React, { useState, useContext } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import { TripContext } from '../TripContext.jsx';
import '../TripPlanner.css'; // Use the same stylesheet

const CheckoutForm = ({ totalAmount }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const { resetTrip } = useContext(TripContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return; // Stripe.js has not yet loaded.
    }

    setIsProcessing(true);
    setError(null);

    const cardElement = elements.getElement(CardElement);
    const { error: paymentMethodError, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (paymentMethodError) {
      setError(paymentMethodError.message);
      setIsProcessing(false);
      return;
    }

    // --- Send payment data to your backend ---
   const response = await fetch('http://localhost:4000/api/v1/payment/create-trip-payment', {
  // ...
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: totalAmount * 100, // Stripe needs the amount in the smallest unit (paise for INR)
        payment_method_id: paymentMethod.id,
      }),
    });

    const paymentResult = await response.json();

    if (paymentResult.error) {
      setError(paymentResult.error);
    } else if (paymentResult.success) {
      // Payment successful!
      resetTrip(); // Clear the selected flight and hotel
      navigate('/trip-planner/confirmation');
    }

    setIsProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="stripe-form">
      <label>Full Name</label>
      <input type="text" placeholder="Enter your full name" required />
      <label>Email Address</label>
      <input type="email" placeholder="Enter your email" required />
      
      <label>Card Details</label>
      <div className="card-element-container">
        <CardElement />
      </div>

      {error && <div className="payment-error">{error}</div>}

      <button disabled={isProcessing || !stripe} className="proceed-button">
        {isProcessing ? "Processing..." : `Confirm & Pay ₹${totalAmount.toLocaleString()}`}
      </button>
    </form>
  );
};

export default CheckoutForm;