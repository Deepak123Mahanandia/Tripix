import React, { useState } from 'react';

const FlightCard = ({ flight, onSelect, isSelected }) => {
  const [selectedPrice, setSelectedPrice] = useState(flight.prices[0]);

  const handleSelect = () => onSelect({ ...flight, finalPrice: selectedPrice.price });

  return (
    <div className={`card ${isSelected ? 'selected' : ''}`}>
      <h4>{flight.airline} {flight.flightNumber}</h4>
      <p>{flight.from} → {flight.to}</p>
      <p>{flight.departureTime} - {flight.arrivalTime} ({flight.duration})</p>
      <div className="price-options">
        <label>Book on:</label>
        <select onChange={(e) => setSelectedPrice(JSON.parse(e.target.value))}>
          {flight.prices.map((p) => (
            <option key={p.site} value={JSON.stringify(p)}>{p.site}: ₹{p.price.toLocaleString()}</option>
          ))}
        </select>
      </div>
      <button onClick={handleSelect}>{isSelected ? '✓ Selected' : 'Select Flight'}</button>
    </div>
  );
};
export default FlightCard;