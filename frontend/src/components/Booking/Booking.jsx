import React, { useState, useContext } from 'react';
import "./booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { BASE_URL } from '../../utils/config';

const Booking = ({ tour, avgRating }) => {
    const { price, reviews, title } = tour;
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const [booking, setBooking] = useState({
        userId: user && user._id,
        userEmail: user && user.email,
        tourName: title,
        fullName: '',
        phone: '',
        guestSize: 1,
        bookAt: ''
    });

    const handleChange = e => {
        setBooking(prev => ({ ...prev, [e.target.id]: e.target.value }))
    };

    const servicefee = 5500;
    const totalAmount = Number(price) * Number(booking.guestSize) + Number(servicefee);

    // =========== THIS IS THE CORRECTED FUNCTION FOR STRIPE ===========
    const handleClick = async e => {
        e.preventDefault();

        try {
            if (!user || user === undefined || user === null) {
                return alert('Please sign in to book.');
            }

            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            };
            
            // This is the data we'll send to the backend to create the Stripe session
            const stripeBookingData = {
                tourName: title,
                price: price,
                guestSize: booking.guestSize,
            };

            // Call your new backend endpoint to create the payment session
            const res = await fetch(`${BASE_URL}/payment/create-checkout-session`, {
                method: 'post',
                headers: headers,
                body: JSON.stringify(stripeBookingData)
            });

            const result = await res.json();

            if (!res.ok) {
                return alert(result.message);
            }

            // Redirect the user to the Stripe Checkout page URL sent from the backend
            if (result.url) {
                window.location.href = result.url;
            }

        } catch (err) {
            alert(err.message);
        }
    };
    // ===============================================================

    return (
        <div className="booking">
            <div className="booking_top d-flex align-items-center justify-content-center ">
                <h3>₹{price}<span>Per person</span></h3>
                <span className='tour_rating d-flex align-items-center '>
                    <i className="ri-star-fill"></i>
                    {avgRating === 0 ? null : avgRating} ({reviews?.length})
                </span>
            </div>

            <div className="booking_form">
                <h5>Information</h5>
                <Form className='booking_info-form' onSubmit={handleClick}>
                    <FormGroup>
                        <input type="text" placeholder='Full Name' id="fullName" required
                            onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <input type="number" placeholder='Phone' id="phone" required
                            onChange={handleChange} />
                    </FormGroup>
                    <FormGroup className='d-flex align-items-center gap-3'>
                        <input type="date" placeholder='' id="bookAt" required
                            onChange={handleChange} />
                        <input type="number" placeholder='Guest' id="guestSize" required
                            onChange={handleChange} />
                    </FormGroup>
                </Form>
            </div>

            <div className="booking_bottom">
                <ListGroup>
                    <ListGroupItem className='border-0 px-0'>
                        <h5 className='d-flex align-items-center gap-1'>₹{price} <i className="ri-close-line"></i> {booking.guestSize} person(s)</h5>
                        <span>₹{Number(price) * Number(booking.guestSize)}</span>
                    </ListGroupItem>
                    <ListGroupItem className='border-0 px-0'>
                        <h5>Service charge</h5>
                        <span>₹{servicefee}</span>
                    </ListGroupItem>
                    <ListGroupItem className='border-0 px-0 total'>
                        <h5>Total</h5>
                        <span>₹{totalAmount}</span>
                    </ListGroupItem>
                </ListGroup>
                <Button className="btn primary_btn w-100 mt-4" onClick={handleClick}>Book Now</Button>
            </div>
        </div>
    );
};

export default Booking;