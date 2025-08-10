import React, { useEffect } from 'react';
import "../styles/home.css";
import { Container, Row, Col } from 'reactstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';

import Subtitle from '../shared/Subtitle.jsx';
import SearchBar from '../shared/SearchBar.jsx';
import ServiceList from '../services/ServiceList.jsx';
import FeaturedTourList from '../components/Featured-tour/FeaturedTourList.jsx';
import MemoryImagesGallery from '../components/Image-gallery/MemoryImagesGallery.jsx';
import Testimonial from '../components/Testimonial/Testimonial.jsx';
import Newsletter from '../shared/Newsletter.jsx';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
      <section data-aos="fade-up">
        <Container>
          <Row>
            <Col lg='6'>
              <div className="hero_content">
                <div className="hero_subtitle d-flex align-items-center">
                  <Subtitle subtitle={'Know Before You Go'} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>Unlock Your World of 
                  <span className="highlight"> Memories</span>
                </h1>
                <p>
                  Journey to new destinations and discover the joy of creating lasting memories. Every trip is a chance to write a new story, a collection of moments you'll treasure forever!
                </p>
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero_img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero_img-box mt-4">
                <video src={heroVideo} autoPlay controls loop muted playsInline className="w-100 rounded-3"/>
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero_img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>

            <SearchBar/>
          </Row>
        </Container>
      </section>

      <section className='service' data-aos="fade-up">
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className="services_subtitle">What we serve</h5>
              <h2 className='servies_title'>We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      <section className='feature' data-aos="fade-up">
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <Subtitle subtitle={'Explore'} />
              <h2 className="featured_tour-title">Our Featured Tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      <section className='galler' data-aos="fade-up">
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Gallery'} />
              <h2 className="gallery_title">Visit Our Customers Tour Gallery</h2>
            </Col>
            <Col lg='12'>
              <MemoryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>

      <section className='feedback' data-aos="fade-up">
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Voices of Joy'} />
              <h2 className="testimonial_title">Hear From Our Happy Travellers🩵</h2>
            </Col>
            <Col lg='12'>
              <Testimonial />
            </Col>
          </Row>
        </Container>
      </section>

      <section data-aos="fade-up">
        <Newsletter />
      </section>
    </>
  );
};

export default Home;
