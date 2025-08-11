import React, { useEffect, useRef, useState, useContext } from 'react';
import '../styles/tour-details.css';
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import calculateAvgRating from '../utils/avgRating';
import avatar from "../assets/images/avatar.jpg";
import Booking from '../components/Booking/Booking';
import Newsletter from '../shared/Newsletter';
import useFetch from './../hooks/useFetch';
import { BASE_URL } from './../utils/config';
import { AuthContext } from '../context/AuthContext';

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef('');
  const [tourRating, setTourRating] = useState(null);
  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (tour) {
      window.scrollTo(0, 0);
    }
  }, [tour]);

  if (loading) {
    return (
      <Container>
        <Row><Col className='text-center pt-5'><h4>Loading...</h4></Col></Row>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Row><Col className='text-center pt-5'><h4>{error}</h4></Col></Row>
      </Container>
    );
  }

  const { photo, title, desc, price, address, reviews, city, distance, maxGroupSize } = tour;
  const { totalRating, avgRating } = calculateAvgRating(reviews);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };

  const submitHandler = async e => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    try {
      // --- DEBUG LINES ADDED ---
      console.log('User object at time of submission:', user);
      // -------------------------

      if (!user || user === undefined || user === null) {
        return alert('You must be signed in to post a review.');
      }
      
      const reviewObj = {
        username: user.username,
        userId: user._id,
        tourId: id,
        reviewText,
        rating: tourRating,
      };

      const headers = {
          'Content-Type': 'application/json'
      };
      if (user?.token) {
          headers['Authorization'] = `Bearer ${user.token}`;
      }

      // --- DEBUG LINES ADDED ---
      console.log('Final headers being sent:', headers);
      // -------------------------

      const res = await fetch(`${BASE_URL}/reviews/${id}`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(reviewObj),
      });

      const result = await res.json();
      if (!res.ok) {
        return alert(result.message);
      }

      alert(result.message);
      window.location.reload();

    } catch (err) {
      alert('An error occurred. Please try again.');
    }
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
                    <span><i className="ri-map-pin-fill"></i> {address}</span>
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

                <div className="tour_reviews mt-4">
                  <h4>Reviews ({reviews?.length} reviews)</h4>
                  <Form onSubmit={submitHandler}>
                    <div className='d-flex align-items-center gap-3 mb-4 rating_group'>
                      {[1, 2, 3, 4, 5].map(num => (
                        <span key={num} onClick={() => setTourRating(num)}>
                          <i className={tourRating >= num ? "ri-star-s-fill active__star" : "ri-star-s-fill"}></i>
                        </span>
                      ))}
                    </div>
                    <div className="review_input">
                      <input type="text" ref={reviewMsgRef} placeholder='Share your thoughts' required />
                      <button className="btn primary_btn text-white" type='submit'>Submit</button>
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
                            <span className='d-flex align-items-center'>{review.rating} <i className="ri-star-s-fill"></i></span>
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