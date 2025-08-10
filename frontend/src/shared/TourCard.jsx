import React from 'react'
import "../shared/Tour-card.css"
import { Card, CardBody } from "reactstrap";
import { Link } from 'react-router-dom'
import "./Tour-card.css"
import calculateAvgRating from '../utils/avgRating';

const TourCard = ({ tour }) => {

  const { _id, title, photo, price, featured, reviews, city } = tour;

   const {totalRating,avgRating}=calculateAvgRating(reviews)

  return (
    <div>
      <Card>
        <div className="tour_img">
          <img src={photo} alt="" />
          {featured && <span>Featured</span>}

        </div>

        <CardBody>

          <div className="card_top d-flex align_items-center justify-content-between">
            <span className='tour_location d-flex align-items-center gap-1'>
              <i class="ri-map-pin-line"></i>{city}
            </span>

            <span className='tour_rating d-flex align-items-center gap-1'>
              <i class="ri-star-fill"></i>{avgRating === 0 ? null : avgRating}
              {totalRating === 0 ? 'Not rated' :
              <span>({reviews.length})</span>}
            </span>
          </div>

          <h5 className="tour_title"><Link to={`/tour/${_id}`}>{title}</Link></h5>

          <div className="card_bottom d-flex align-itmes-center justify-content-between mt-3">
            <h5>₹{price} <span>/per person</span></h5>

            <button className="booking_btn ">
              <Link to={`/tour/${_id}`}>Book Now</Link>
            </button>

          </div>
        </CardBody>
      </Card>


    </div>
  )
}

export default TourCard
