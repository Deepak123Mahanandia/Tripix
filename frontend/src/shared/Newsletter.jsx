import React from 'react'
import './newletter.css'

import {Container,Row,Col} from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

const Newsletter = () => {
  return (
    <section className='newsletter'>
        <Container>
            <Row>
                <Col lg='6'>
                   <div className="newsletter_content">
                    <h2>Unlock Exclusive Travel Tips & Deals from Tripix!</h2>

                    <div className="newletter_input">
                        <input type="email" placeholder='Enter your email' />
                        <button className='btn newsletter_btn'>Subscribe</button>
                    </div>

                    <p>
                        Join thousands of travelers who trust Tripix for expert travel guides, top destination picks, budget-friendly tips, and exclusive offers—delivered straight to your inbox. Whether you're planning a quick getaway or a grand adventure, we've got you covered. <strong>Stay curious. Travel smarter.</strong>
                    </p>
                   </div>
                </Col>
                <Col lg='6'>
                  <div className="newsletter_img">
                    <img src={maleTourist} alt="" />
                  </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Newsletter
