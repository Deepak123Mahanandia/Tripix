import React, { useState } from 'react';
import { Modal, Button, Accordion } from 'react-bootstrap'; // Import Accordion
import { FaMapMarkerAlt, FaCalendarAlt, FaUtensils, FaCheckCircle } from 'react-icons/fa'; // Import icons
import featuredPlaces from '../assets/data/featuredPlaces';
import '../styles/Information.css';

const Information = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleViewDetails = (place) => {
    setSelectedPlace(place);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPlace(null);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4" style={{ color: '#6bd0c1' }}>Featured Destinations</h2>
      <div className="row">
        {featuredPlaces.map((place) => (
          <div className="col-md-4 mb-4" key={place.id}>
            <div className="card shadow-sm h-100">
              <img src={place.photo} className="card-img-top" alt={place.title} style={{ height: '220px', objectFit: 'cover' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{place.title}</h5>
                <p className="card-text"><FaMapMarkerAlt /> <strong>City:</strong> {place.city}</p>
                <p className="card-text"><FaCalendarAlt /> <strong>Best Season:</strong> {place.bestSeason}</p>
                <Button 
                  className="mt-auto"
                  style={{ backgroundColor: '#6bd0c1', borderColor: '#6bd0c1' }} 
                  onClick={() => handleViewDetails(place)}
                >
                  View Details
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedPlace && (
        <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
          <Modal.Header closeButton style={{ backgroundColor: '#6bd0c1', color: 'white' }}>
            <Modal.Title>{selectedPlace.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={selectedPlace.photo} alt={selectedPlace.title} className="img-fluid mb-3 rounded-3" />
            
            <div className="details-section">
                <p><strong>Description:</strong> {selectedPlace.description}</p>
                <p><strong>Famous For:</strong> {selectedPlace.famousFor}</p>
                <p><FaUtensils /> <strong>Must Try Foods:</strong> {selectedPlace.mustTryFoods.join(', ')}</p>
                <p><strong>Must Do Activities:</strong> {selectedPlace.mustDoActivities.join(', ')}</p>
            </div>

            {/* --- NEW ITINERARY ACCORDION --- */}
            <div className="itinerary-section mt-4">
                <h4 className="itinerary-title">5-Day Itinerary</h4>
                <Accordion defaultActiveKey="0" flush>
                  {selectedPlace.itinerary.map((dayPlan, index) => (
                    <Accordion.Item eventKey={index.toString()} key={index}>
                      <Accordion.Header>
                        <strong>Day {dayPlan.day}:</strong> &nbsp;{dayPlan.title}
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul className="activity-list">
                          {dayPlan.activities.map((activity, i) => (
                            <li key={i}>
                              <FaCheckCircle className="activity-icon" />
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
            </div>
            {/* --- END OF ITINERARY ACCORDION --- */}

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default Information;