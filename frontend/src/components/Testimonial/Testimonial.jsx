import React from 'react';
import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-1.png';
import ava02 from '../../assets/images/ava-2.jpg';
import ava03 from "../../assets/images/girl.png";
import ava04 from '../../assets/images/ava-4.jpg'; // Add 4th avatar image

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {/* Indian Testimonial 1 */}
      <div className="testimonial py-4 px-3">
        <p>
          Tripix made our Goa trip unforgettable! Everything from hotels to local activities was arranged perfectly. Great for group travel!
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="avatar" />
          <div>
            <h5 className="mb-0 mt-3">Aarav Mehta</h5>
            <p>Customer from India</p>
          </div>
        </div>
      </div>

      {/* Indian Testimonial 2 */}
      <div className="testimonial py-4 px-3">
        <p>
          We used Tripix for our college friends’ Manali trip. Super smooth bookings and the planner was very useful. Will use again!
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="avatar" />
          <div>
            <h5 className="mb-0 mt-3">Priya Sharma</h5>
            <p>Customer from India</p>
          </div>
        </div>
      </div>

      {/* Foreign Testimonial 1 */}
      <div className="testimonial py-4 px-3">
        <p>
          Visiting India for the first time, I felt confident using Tripix. The day-by-day itinerary and support were outstanding. Taj Mahal was magical!
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="avatar" />
          <div>
            <h5 className="mb-0 mt-3">Emily Johnson</h5>
            <p>Customer from USA</p>
          </div>
        </div>
      </div>

      {/* Foreign Testimonial 2 */}
      <div className="testimonial py-4 px-3">
        <p>
          Tripix helped us plan a perfect 7-day tour across Rajasthan. The cultural insights and smooth arrangements were beyond expectations!
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava04} className="w-25 h-25 rounded-2" alt="avatar" />
          <div>
            <h5 className="mb-0 mt-3">Luca Moretti</h5>
            <p>Customer from Italy</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
