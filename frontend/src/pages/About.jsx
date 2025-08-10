import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import the CSS file for this page
import '../styles/about.css'; 

// Online URLs for images
const aboutHeroImgUrl = 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
const ourStoryImgUrl = 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
      {/* ========== HERO SECTION ========== */}
      <section className="about__hero-section" style={{ backgroundImage: `url(${aboutHeroImgUrl})` }}>
        <div className="about__hero-overlay"></div>
        <Container>
          <Row>
            <Col lg="12">
              <div className="about__hero-content text-center">
                <h1 data-aos="fade-up">We Believe Travel is an Experience, Not Just a Destination</h1>
                <p data-aos="fade-up" data-aos-delay="100">
                  Discover the story behind Tripix and our passion for creating unforgettable journeys.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ========== OUR STORY SECTION ========== */}
      <section className='story'>
        <Container>
          <Row className='align-items-center'>
            <Col lg="6" data-aos="fade-right">
              <div className="our-story__content">
                <div className="section-subtitle">Our Story</div>
                <h2 className="section__title">From a Dream to Your Next Adventure</h2>
                <p>
                  Tripix was born from a simple idea: to make authentic travel accessible to everyone. Our founders, a group of avid explorers, felt that too many people were missing out on the true essence of travel—the connections made, the cultures experienced, and the memories forged.
                </p>
                <p>
                  We started by guiding friends on trips, sharing our favorite hidden gems and local secrets. Today, we've grown into a community of travelers and experts dedicated to crafting perfect, personalized itineraries that go beyond the ordinary.
                </p>
              </div>
            </Col>
            <Col lg="6" data-aos="fade-left">
              <div className="our-story__img">
                <img src={ourStoryImgUrl} alt="Our Story" className="w-100 rounded-3" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* ========== OUR VALUES SECTION ========== */}
      <section className="values__section">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5" data-aos="fade-up">
              <div className="section-subtitle">Our Principles</div>
              <h2 className="section__title">What Makes Us Different</h2>
            </Col>
          </Row>
          <Row>
            <Col lg="4" md="6" data-aos="fade-up" data-aos-delay="100">
              <div className="value__card">
                <div className="value__icon">
                  <i className="ri-shield-check-line"></i>
                </div>
                <h5>Safety First</h5>
                <p>Your safety is our top priority. We partner with trusted providers to ensure a secure and worry-free experience.</p>
              </div>
            </Col>
            <Col lg="4" md="6" data-aos="fade-up" data-aos-delay="200">
              <div className="value__card">
                <div className="value__icon">
                  <i className="ri-hand-heart-line"></i>
                </div>
                <h5>Authentic Experiences</h5>
                <p>We craft journeys that immerse you in local culture, connecting you with the heart and soul of each destination.</p>
              </div>
            </Col>
            <Col lg="4" md="6" data-aos="fade-up" data-aos-delay="300">
              <div className="value__card">
                <div className="value__icon">
                  <i className="ri-earth-line"></i>
                </div>
                <h5>Sustainable Travel</h5>
                <p>We are committed to responsible tourism that respects the environment and supports local communities.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ========== CALL TO ACTION SECTION ========== */}
      <section className="cta__section" data-aos="zoom-in">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Ready to Start Your Next Adventure?</h2>
              <p>Let us help you plan the trip of a lifetime. Get in touch with our travel experts today.</p>
              <Button className="cta__btn" href="/contact">Contact Us</Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;