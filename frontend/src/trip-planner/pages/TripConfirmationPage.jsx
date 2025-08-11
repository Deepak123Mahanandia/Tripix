import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TripContext } from '../TripContext.jsx';
import Stepper from '../components/Stepper.jsx'; // Import the Stepper
import '../TripPlanner.css';

const TripConfirmationPage = () => {
  const navigate = useNavigate();
  const { resetTrip } = useContext(TripContext);

  // Automatically reset the trip when the component unmounts
  useEffect(() => {
    return () => {
      resetTrip();
    };
  }, [resetTrip]);

  return (
    // This wrapper applies the new modern UI styles
    <div className="trip-planner-container modern-ui">
      <Stepper currentStep={3} />
      <div className="page confirmation">
        <h2>✅ Thank you! Your booking is done.</h2>
        <button className="proceed-button" style={{width: 'auto'}} onClick={() => navigate('/trip-planner')}>
          Plan Another Trip
        </button>
      </div>
    </div>
  );
};

export default TripConfirmationPage;