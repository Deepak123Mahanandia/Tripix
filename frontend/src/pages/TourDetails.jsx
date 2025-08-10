import React, { useRef, useState } from 'react';
import '../styles/tour-details.css';
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import calculateAvgRating from '../utils/avgRating';
import avatar from "../assets/images/avatar.jpg";
import Booking from '../components/Booking/Booking';
import Newsletter from '../shared/Newsletter';
import useFetch from './../hooks/useFetch'; // Make sure to import useFetch
import { BASE_URL } from './../utils/config'; // It's good practice to have a base URL config

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef('');
  const [tourRating, setTourRating] = useState(null);

  // Fetch data for the specific tour using the useFetch hook
  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);

  // ========== Conditional Loading and Error Handling ==========
  // This is the most important part to prevent the "undefined" error.
  
  if (loading) {
    return (
      <Container>
        <Row>
          <Col className='text-center pt-5'>
            <h4>Loading...</h4>
          </Col>
        </Row>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Row>
          <Col className='text-center pt-5'>
            <h4>{error}</h4>
          </Col>
        </Row>
      </Container>
    );
  }

  // Once loading is false and there's no error, we can proceed
  const { photo, title, desc, price, address, reviews, city, distance, maxGroupSize } = tour;
  const { totalRating, avgRating } = calculateAvgRating(reviews);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };

  const submitHandler = e => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;
    alert(`${reviewText}, ${tourRating}`);
    // You will call your review submission API here
  };

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <div className="tour_content">
                <img src={photo} alt="" />

                <div className="tour_info">
                  <h2>{title}</h2>
                  <div className="d-flex align-items-center gap-5">
                    <span className='tour_rating d-flex align-items-center gap-1'>
                      <i className="ri-star-fill" style={{ color: "var(--secondary-color)" }}></i>
                      {avgRating === 0 ? null : avgRating}
                      {totalRating === 0 ? ('Not rated') : (<span>({reviews?.length})</span>)}
                    </span>
                    <span>
                      <i className="ri-map-pin-fill"></i> {address}
                    </span>
                  </div>

                  <div className="tour_extra-details">
                    <span><i className="ri-map-pin-2-line"></i> {city} </span>
                    <span><i className="ri-money-rupee-circle-line"></i> ₹{price} /per person</span>
                    <span><i className="ri-map-pin-time-line"></i> {distance} k/m</span>
                    <span><i className="ri-group-line"></i> {maxGroupSize} people</span>
                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>

                {/* ====== Tour Review Section ====== */}
                <div className="tour_reviews mt-4">
                  <h4>Reviews ({reviews?.length} reviews)</h4>
                  <Form onSubmit={submitHandler}>
                    <div className='d-flex align-items-center gap-3 mb-4 rating_group'>
                      {[1, 2, 3, 4, 5].map(num => (
                        <span key={num} onClick={() => setTourRating(num)}>
                          {num} <i className="ri-star-s-fill"></i>
                        </span>
                      ))}
                    </div>
                    <div className="review_input">
                      <input type="text" ref={reviewMsgRef} placeholder='Share your thoughts' required />
                      <button className="btn primary_btn text-white" type='submit'>
                        Submit
                      </button>
                    </div>
                  </Form>
                  
                  <ListGroup className='user_reviews'>
                    {reviews?.map((review, index) => (
                      <div className="review_item" key={index}>
                        <img src={avatar} alt="" />
                        <div className='w-100'>
                          <div className="d-flex align-items-center justify-content-between">
                            <div>
                              <h5>{review.username}</h5>
                              <p>{new Date(review.createdAt).toLocaleDateString("en-US", options)}</p>
                            </div>
                            <span className='d-flex align-items-center'>
                              {review.rating} <i className="ri-star-s-fill"></i>
                            </span>
                          </div>
                          <h6>{review.reviewText}</h6>
                        </div>
                      </div>
                    ))}
                  </ListGroup>
                </div>
              </div>
            </Col>
            <Col lg='4'>
              <Booking tour={tour} avgRating={avgRating} />
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default TourDetails;