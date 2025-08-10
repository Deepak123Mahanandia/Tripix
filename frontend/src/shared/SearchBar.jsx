import React, { useRef } from 'react';
import './search-bar.css';
import { Col, Form, FormGroup } from "reactstrap";
import { BASE_URL } from '../utils/config';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const locationRef = useRef('');
    const maxGroupSizeRef = useRef(0);
    const navigate = useNavigate();

    const searchHandler = async () => {
        const location = locationRef.current.value.trim();
        const maxGroupSize = maxGroupSizeRef.current.value;

        if (location === "" || maxGroupSize === "") {
            return alert("Both fields are required!");
        }

        try {
            const res = await fetch(
                `${BASE_URL}/tours/search/getTourBySearch?city=${location}&maxGroupSize=${maxGroupSize}`
            );

            if (!res.ok) {
                return alert('Something went wrong');
            }

            const result = await res.json();

            navigate(`/tour/search?city=${location}&maxGroupSize=${maxGroupSize}`, {
                state: result.data,
            });

        } catch (err) {
            alert('Error fetching data');
        }
    };

    return (
        <Col lg='12'>
            <div className="search_bar">
                <Form className='d-flex align-items-center gap-4'>
                    <FormGroup className='d-flex gap-3 form_group form_group-fast'>
                        <span><i className="ri-map-pin-line"></i></span>
                        <div>
                            <h6>Location</h6>
                            <input
                                type="text"
                                placeholder='Where are you going'
                                ref={locationRef}
                            />
                        </div>
                    </FormGroup>

                    <FormGroup className='d-flex gap-3 form_group form_group-last'>
                        <span><i className="ri-group-line"></i></span>
                        <div>
                            <h6>Max People</h6>
                            <input
                                type="number"
                                placeholder='0'
                                ref={maxGroupSizeRef}
                            />
                        </div>
                    </FormGroup>

                    <span className="search_icon" type="submit" onClick={searchHandler}>
                        <i className="ri-search-line"></i>
                    </span>
                </Form>
            </div>
        </Col>
    );
};

export default SearchBar;
