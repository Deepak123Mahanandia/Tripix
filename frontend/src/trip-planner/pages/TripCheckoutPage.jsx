import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlane, FaHotel, FaUser } from 'react-icons/fa';
import { TripContext } from '../TripContext.jsx';
import Stepper from '../components/Stepper.jsx';
import '../TripPlanner.css';

const TripCheckoutPage = () => {
  const navigate = useNavigate();
  const { selectedFlight, selectedHotel } = useContext(TripContext);

  if (!selectedFlight || !selectedHotel) {
    return <div className="page modern-ui"><h2>Please select a flight and hotel first.</h2><button onClick={() => navigate('/trip-planner/results')}>Go Back</button></div>;
  }

  const nights = 5;
  const hotelTotal = selectedHotel.pricePerNight * nights;
  const grandTotal = selectedFlight.finalPrice + hotelTotal;

  return (
    <div className="trip-planner-container modern-ui">
      <Stepper currentStep={2} />
      <div className="page-header">
        <h3>Review and Confirm Your Trip</h3>
      </div>
      <div className="checkout-layout">
        <div className="summary-column">
          <h4>Itinerary Summary</h4>
          <div className="summary-card">
            <h5><FaPlane className="icon" /> Flight Details</h5>
            <p><strong>{selectedFlight.airline} {selectedFlight.flightNumber}</strong> ({selectedFlight.from} → {selectedFlight.to})</p>
            <p>Booked via: {selectedFlight.bookedOn}</p>
            <p className="price">₹{selectedFlight.finalPrice.toLocaleString()}</p>
          </div>
          <div className="summary-card">
            <h5><FaHotel className="icon" /> Hotel Details</h5>
            <p><strong>{selectedHotel.name}</strong></p>
            <p>{nights} nights</p>
            <p className="price">₹{hotelTotal.toLocaleString()}</p>
          </div>
          <div className="total-summary">
            <h4>Grand Total</h4>
            <h2 className="price">₹{grandTotal.toLocaleString()}</h2>
          </div>
        </div>
        <div className="details-column">
          <h4><FaUser className="icon" /> Passenger & Payment</h4>
          <div className="form-card">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" />
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" />
            <label>Card Details</label>
            <input type="text" placeholder="Card Number" />
            <button className="proceed-button" onClick={() => navigate('/trip-planner/confirmation')}>
              Confirm & Pay ₹{grandTotal.toLocaleString()}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripCheckoutPage;