import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TripContext } from '../TripContext.jsx';
import '../TripPlanner.css';

const TripCheckoutPage = () => {
  const navigate = useNavigate();
  const { selectedFlight, selectedHotel } = useContext(TripContext);

  if (!selectedFlight || !selectedHotel) {
    return <div className="page"><h2>Oops! Please go back and select a flight and a hotel.</h2><button onClick={() => navigate('/trip-planner/results')}>Go Back</button></div>;
  }

  const nights = 5; // Static for this example
  const hotelTotal = selectedHotel.pricePerNight * nights;
  const grandTotal = selectedFlight.finalPrice + hotelTotal;

  return (
    <div className="trip-planner-container">
      <div className="page">
        <h1>Confirm Your Booking</h1>
        <div className="summary-card"><h3>Passenger Details</h3><input type="text" placeholder="Full Name" className="full-width-input" /><input type="email" placeholder="Email Address" className="full-width-input" /></div>
        <div className="summary-card"><h3>Itinerary</h3><p><strong>Flight:</strong> {selectedFlight.airline} {selectedFlight.flightNumber}</p><p><strong>Hotel:</strong> {selectedHotel.name} ({nights} nights)</p><hr /><h3>Price Summary</h3><p>Flight: ₹{selectedFlight.finalPrice.toLocaleString()}</p><p>Hotel: ₹{hotelTotal.toLocaleString()}</p><p><strong>Total: ₹{grandTotal.toLocaleString()}</strong></p></div>
        <button className="confirm-button" onClick={() => navigate('/trip-planner/confirmation')}>Confirm & Book Now</button>
      </div>
    </div>
  );
};
export default TripCheckoutPage;