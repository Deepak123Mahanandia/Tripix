import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
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
              <div className="card-body">
                <h5 className="card-title">{place.title}</h5>
                <p className="card-text"><strong>City:</strong> {place.city}</p>
                <p className="card-text"><strong>Best Season:</strong> {place.bestSeason}</p>
                <Button style={{ backgroundColor: '#6bd0c1', borderColor: '#6bd0c1' }} onClick={() => handleViewDetails(place)}>
                  View Details
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedPlace && (
        <Modal show={showModal} onHide={handleCloseModal} size="lg">
          <Modal.Header closeButton style={{ backgroundColor: '#6bd0c1', color: 'white' }}>
            <Modal.Title>{selectedPlace.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={selectedPlace.photo} alt={selectedPlace.title} className="img-fluid mb-3" style={{ borderRadius: '5px' }} />
            <p><strong>City:</strong> {selectedPlace.city}</p>
            <p><strong>Best Season:</strong> {selectedPlace.bestSeason}</p>
            <p><strong>Description:</strong> {selectedPlace.description}</p>
            <p><strong>Famous For:</strong> {selectedPlace.famousFor}</p>
            <p><strong>Must Try Foods:</strong> {selectedPlace.mustTryFoods.join(', ')}</p>
            <p><strong>Distances:</strong></p>
            <ul>
              <li><strong>Railway Station:</strong> {selectedPlace.distanceFromRailwayStation}</li>
              <li><strong>Airport:</strong> {selectedPlace.distanceFromAirport}</li>
              <li><strong>Bus Station:</strong> {selectedPlace.distanceFromBusStation}</li>
            </ul>
            <p><strong>Must Visit Nearby Places:</strong> {selectedPlace.mustVisitNearbyPlaces.join(', ')}</p>
            <p><strong>Must Do Activities:</strong> {selectedPlace.mustDoActivities.join(', ')}</p>
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
