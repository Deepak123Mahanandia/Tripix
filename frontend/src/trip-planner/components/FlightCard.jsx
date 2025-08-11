import React, { useState } from 'react';
import { FaPlaneDeparture, FaPlaneArrival, FaClock, FaRupeeSign } from 'react-icons/fa';

const FlightCard = ({ flight, onSelect, isSelected }) => {
  const [selectedPrice, setSelectedPrice] = useState(flight.prices[0]);

  const handleSelect = () => {
    onSelect({ ...flight, finalPrice: selectedPrice.price, bookedOn: selectedPrice.site });
  };

  return (
    <div className={`planner-card flight-card ${isSelected ? 'selected' : ''}`} onClick={handleSelect}>
      <div className="airline-info">
        <h5>{flight.airline}</h5>
        <p>{flight.flightNumber}</p>
      </div>
      <div className="flight-details">
        <div className="flight-time">
          <FaPlaneDeparture className="icon" />
          <span>{flight.from} <strong>{flight.departureTime}</strong></span>
        </div>
        <div className="flight-duration">
          <FaClock className="icon" />
          <span>{flight.duration}</span>
        </div>
        <div className="flight-time">
          <FaPlaneArrival className="icon" />
          <span>{flight.to} <strong>{flight.arrivalTime}</strong></span>
        </div>
      </div>
      <div className="flight-booking">
        <select className="price-dropdown" onClick={(e) => e.stopPropagation()} onChange={(e) => setSelectedPrice(JSON.parse(e.target.value))}>
          {flight.prices.map((p) => (
            <option key={p.site} value={JSON.stringify(p)}>{p.site}</option>
          ))}
        </select>
        <div className="price-display">
          <FaRupeeSign /> {selectedPrice.price.toLocaleString()}
        </div>
      </div>
      {isSelected && <div className="selected-indicator">✓</div>}
    </div>
  );
};

export default FlightCard;