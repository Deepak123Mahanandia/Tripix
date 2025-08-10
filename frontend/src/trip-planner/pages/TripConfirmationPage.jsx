import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TripContext } from '../TripContext.jsx';
import '../TripPlanner.css';

const TripConfirmationPage = () => {
  const navigate = useNavigate();
  const { resetTrip } = useContext(TripContext);

  useEffect(() => {
    return () => resetTrip();
  }, [resetTrip]);

  return (
    <div className="trip-planner-container">
      <div className="page confirmation">
        <h2>✅ Thank you! Your booking is done.</h2>
        <button onClick={() => navigate('/trip-planner')}>Start a New Search</button>
      </div>
    </div>
  );
};
export default TripConfirmationPage;