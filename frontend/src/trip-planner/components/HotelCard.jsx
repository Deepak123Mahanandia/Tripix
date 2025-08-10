import React from 'react';

const HotelCard = ({ hotel, onSelect, isSelected }) => {
  return (
    <div className={`card ${isSelected ? 'selected' : ''}`}>
      <img src={hotel.image} alt={hotel.name} className="card-image"/>
      <h4>{hotel.name}</h4>
      <p>Rating: {hotel.rating} ★</p>
      <p>Price: ₹{hotel.pricePerNight.toLocaleString()}/night</p>
      <button onClick={() => onSelect(hotel)}>{isSelected ? '✓ Selected' : 'Select Hotel'}</button>
    </div>
  );
};
export default HotelCard;