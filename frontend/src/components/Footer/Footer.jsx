import React from 'react';
import './footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const quick_links = [
  { path: '/gallery', display: 'Gallery' },
  { path: 'login', display: 'Login' },
  { path: '/register', display: 'Register' },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          {/* Logo & Description */}
          <Col lg="4" md="6" sm="12">
            <div className="footer_logo">
              <img src={logo} alt="Tripix Logo" />
              <p>
                Explore the world with Tripix. Discover top destinations, plan smart,
                and travel better every time.
              </p>

              <div className="social_links d-flex align-items-center gap-3 mt-3">
                <Link to="#"><i className="ri-youtube-line"></i></Link>
                <Link to="#"><i className="ri-github-fill"></i></Link>
                <Link to="#"><i className="ri-facebook-circle-fill"></i></Link>
                <Link to="#"><i className="ri-instagram-line"></i></Link>
              </div>
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg="4" md="6" sm="12">
            <h5 className="footer_link-title">Quick Links</h5>
            <ListGroup className="footer_quick-links">
              {quick_links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          {/* Contact Info */}
          <Col lg="4" md="6" sm="12">
            <h5 className="footer_link-title">Contact</h5>
            <ListGroup className="footer_quick-links">

              <ListGroupItem className="ps-0 border-0 d-flex align-items-start gap-2">
                <i className="ri-map-pin-line"></i>
                <span>Bhubaneswar, Odisha</span>
              </ListGroupItem>

              <ListGroupItem className="ps-0 border-0 d-flex align-items-start gap-2">
                <i className="ri-mail-line"></i>
                <span>tripix@gmail.com</span>
              </ListGroupItem>

              <ListGroupItem className="ps-0 border-0 d-flex align-items-start gap-2">
                <i className="ri-phone-line"></i>
                <span>+91 123456789</span>
              </ListGroupItem>

            </ListGroup>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
