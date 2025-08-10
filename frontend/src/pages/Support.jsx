import React from 'react';
import { Container, Row, Col, Accordion, Card, Form, Button } from 'react-bootstrap';

const SupportPage = () => {
    return (
        <div className="bg-light">
            <Container className="px-4 py-5">
                <h1 className="display-5 fw-bold text-center text-dark">We're Here to Help</h1>
                <p className="text-center text-secondary mt-2">Find answers to common questions or get in touch with our support team.</p>
                <Row className="g-5 mt-4" style={{ maxWidth: '60rem', marginLeft: 'auto', marginRight: 'auto' }}>
                    <Col md={6}>
                        <h2 className="fs-4 fw-bold mb-4 text-dark">Frequently Asked Questions</h2>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>How do I book a trip?</Accordion.Header>
                                <Accordion.Body>You can book flights and hotels directly through our "Search & Compare" module. Once you find what you like, just follow the secure checkout process.</Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Can I change or cancel my booking?</Accordion.Header>
                                <Accordion.Body>Cancellation policies vary by provider (airline, hotel). You can view the specific terms before you book and manage your bookings in your profile.</Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Is my payment information secure?</Accordion.Header>
                                <Accordion.Body>Absolutely. We use industry-standard encryption to protect your payment details. Security is our top priority.</Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col md={6}>
                        <h2 className="fs-4 fw-bold mb-4 text-dark">Contact Support</h2>
                        <Card className="p-3 shadow-sm text-center mb-4">
                            <Card.Text className="mb-0 text-dark">For immediate assistance, call us at:<br/>
                                <a href="tel:9348890090" className="fw-bold fs-5 text-primary text-decoration-none">
                                    <i className="bi bi-telephone-fill me-2"></i>9348 890090
                                </a>
                            </Card.Text>
                        </Card>
                        <Card className="p-4 shadow-sm">
                            <Form>
                                <Form.Group className="mb-3"><Form.Control type="text" placeholder="Your Name" /></Form.Group>
                                <Form.Group className="mb-3"><Form.Control type="email" placeholder="Your Email" /></Form.Group>
                                <Form.Group className="mb-3"><Form.Control as="textarea" rows={5} placeholder="Your Message" /></Form.Group>
                                <Button variant="primary" type="submit" className="w-100 fw-bold">Send Message</Button>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SupportPage;