import React, { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { flights as allFlights } from '../data/flights';
import { hotels as allHotels } from '../data/hotels';
import FlightCard from '../components/FlightCard.jsx';
import HotelCard from '../components/HotelCard.jsx';
import Stepper from '../components/Stepper.jsx';
import { TripContext } from '../TripContext.jsx';
import '../TripPlanner.css';

const TripResultsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedFlight, setSelectedFlight, selectedHotel, setSelectedHotel } = useContext(TripContext);
  const route = location.state?.route || { from: "DEL", to: "BOM", label: "Delhi to Mumbai" };

  const availableFlights = allFlights.filter(f => f.from === route.from && f.to === route.to);
  const availableHotels = allHotels.filter(h => h.city === route.to);

  return (
    <div className="trip-planner-container modern-ui">
      <Stepper currentStep={1} />
      <div className="page-header">
        <h3>Showing Results for: <strong>{route.label}</strong></h3>
        <p>Select one flight and one hotel to proceed.</p>
      </div>

      <div className="results-layout">
        <div className="results-column">
          <h4>Flights</h4>
          {availableFlights.map(flight => <FlightCard key={flight.id} flight={flight} isSelected={selectedFlight?.id === flight.id} onSelect={setSelectedFlight} />)}
        </div>
        <div className="results-column">
          <h4>Hotels</h4>
          {availableHotels.map(hotel => <HotelCard key={hotel.id} hotel={hotel} isSelected={selectedHotel?.id === hotel.id} onSelect={setSelectedHotel} />)}
        </div>
      </div>
      
      {selectedFlight && selectedHotel && (
        <div className="footer-actions">
          <button className="proceed-button" onClick={() => navigate('/trip-planner/checkout')}>
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default TripResultsPage;