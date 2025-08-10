import React, { useContext, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { flights as allFlights } from '../data/flights';
import { hotels as allHotels } from '../data/hotels';
import FlightCard from '../components/FlightCard.jsx';
import HotelCard from '../components/HotelCard.jsx';
import { TripContext } from '../TripContext.jsx';
import '../TripPlanner.css';

const TripResultsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedFlight, setSelectedFlight, selectedHotel, setSelectedHotel } = useContext(TripContext);

  const route = location.state?.route || { from: "DEL", to: "BOM", label: "Delhi to Mumbai" };

  const availableFlights = useMemo(() => allFlights.filter(f => f.from === route.from && f.to === route.to), [route]);
  const availableHotels = useMemo(() => allHotels.filter(h => h.city === route.to), [route]);

  return (
    <div className="trip-planner-container">
      <div className="page">
        <h2>Available Flights for {route.label}</h2>
        <div className="card-container">{availableFlights.map(flight => <FlightCard key={flight.id} flight={flight} isSelected={selectedFlight?.id === flight.id} onSelect={setSelectedFlight} />)}</div>
        <h2>Hotels in {route.to}</h2>
        <div className="card-container">{availableHotels.map(hotel => <HotelCard key={hotel.id} hotel={hotel} isSelected={selectedHotel?.id === hotel.id} onSelect={setSelectedHotel} />)}</div>
        <button className="checkout-button" disabled={!selectedFlight || !selectedHotel} onClick={() => navigate('/trip-planner/checkout')}>Proceed to Checkout</button>
      </div>
    </div>
  );
};
export default TripResultsPage;