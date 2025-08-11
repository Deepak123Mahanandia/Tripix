import React from 'react';
import { Card, CardBody } from "reactstrap";
import { Link } from 'react-router-dom';
import { RiMapPinLine, RiStarFill } from 'react-icons/ri'; // Import icons from react-icons
import calculateAvgRating from '../utils/avgRating';
import "./Tour-card.css"; // We will use this single CSS file

const TourCard = ({ tour }) => {
  const { _id, title, photo, price, featured, reviews, city } = tour;
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  return (
    <div className="tour__card">
      <Card className="h-100">
        <div className="tour__img">
          <Link to={`/tour/${_id}`}>
            <img src={photo} alt={title} />
          </Link>
          {featured && <span>Featured</span>}
        </div>

        <CardBody>
          <div className="card__top">
            <span className='tour__location'>
              <RiMapPinLine className='icon' /> {city}
            </span>
            <span className='tour__rating'>
              <RiStarFill className='icon' />
              {avgRating === 0 ? null : avgRating}
              {totalRating === 0 ? ('Not rated') : (<span>({reviews.length})</span>)}
            </span>
          </div>

          <h5 className="tour__title">
            <Link to={`/tour/${_id}`}>{title}</Link>
          </h5>

          <div className="card__bottom">
            <span className="price">
              ₹{price} <span>/per person</span>
            </span>
            <button className="booking__btn">
              <Link to={`/tour/${_id}`}>Book Now</Link>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default TourCard;