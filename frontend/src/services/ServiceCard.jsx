import React from 'react';
import './servicecard.css'; // We will create this CSS file next

const ServiceCard = ({ item }) => {
  const { icon, title, desc } = item;

  return (
    <div className="service__item">
      <div className="service__icon">
        {icon}
      </div>
      <h5>{title}</h5>
      <p>{desc}</p>
    </div>
  );
};

export default ServiceCard;