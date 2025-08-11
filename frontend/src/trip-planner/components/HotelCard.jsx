import React from 'react';
import { FaStar, FaRupeeSign } from 'react-icons/fa';

const HotelCard = ({ hotel, onSelect, isSelected }) => {
  return (
    <div className={`planner-card hotel-card ${isSelected ? 'selected' : ''}`} onClick={() => onSelect(hotel)}>
      <img src={hotel.image} alt={hotel.name} className="hotel-image" />
      <div className="hotel-info">
        <h5>{hotel.name}</h5>
        <div className="hotel-details">
          <span><FaStar className="icon star" /> {hotel.rating}</span>
          <span><FaRupeeSign className="icon" /> {hotel.pricePerNight.toLocaleString()}/night</span>
        </div>
      </div>
      {isSelected && <div className="selected-indicator">✓</div>}
    </div>
  );
};

export default HotelCard;