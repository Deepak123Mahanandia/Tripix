import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlane, FaHotel, FaUser } from 'react-icons/fa';
import { TripContext } from '../TripContext.jsx';
import Stepper from '../components/Stepper.jsx';
import '../TripPlanner.css';

const TripCheckoutPage = () => {
    const navigate = useNavigate();
    const { selectedFlight, selectedHotel } = useContext(TripContext);
    const BASE_URL = import.meta.env.VITE_API_URL;
    // --- NEW: State for form inputs and loading status ---
    const [isLoading, setIsLoading] = useState(false);
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');

    if (!selectedFlight || !selectedHotel) {
        return <div className="page modern-ui"><h2>Please select a flight and hotel first.</h2><button onClick={() => navigate('/trip-planner/results')}>Go Back</button></div>;
    }

    const nights = 5;
    const hotelTotal = selectedHotel.pricePerNight * nights;
    const grandTotal = selectedFlight.finalPrice + hotelTotal;

    // This function will now be triggered by the form's onSubmit event
    const handleCheckout = async (event) => {
        event.preventDefault(); // Prevent default form submission
        setIsLoading(true);

        try {
            const response = await fetch(`${BASE_URL}/payment/create-trip-payment`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    totalAmount: grandTotal,
                    flight: selectedFlight,
                    hotel: selectedHotel,
                    userEmail: userEmail, // Send the email to the backend
                }),
            });

            const data = await response.json();

            if (data.url) {
                window.location.href = data.url;
            } else {
                alert('Failed to create payment session. Please try again.');
                setIsLoading(false);
            }
        } catch (error) {
            console.error('Checkout error:', error);
            alert('An error occurred. Please try again.');
            setIsLoading(false);
        }
    };

    return (
        <div className="trip-planner-container modern-ui">
            <Stepper currentStep={2} />
            <div className="page-header">
                <h3>Review and Confirm Your Trip</h3>
            </div>
            <div className="checkout-layout">
                <div className="summary-column">
                    {/* ... Your summary column remains the same ... */}
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
                    <h4><FaUser className="icon" /> Passenger Details</h4>
                    {/* --- UPDATED: Now a form with inputs --- */}
                    <form className="form-card" onSubmit={handleCheckout}>
                        <label>Full Name</label>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            required
                        />
                        <label>Email Address</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                            required
                        />
                        <button type="submit" className="proceed-button" disabled={isLoading}>
                            {isLoading ? 'Processing...' : `Proceed to Pay ₹${grandTotal.toLocaleString()}`}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TripCheckoutPage;