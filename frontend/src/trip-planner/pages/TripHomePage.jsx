import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../TripPlanner.css'; // Make sure this CSS is imported

const routes = [
  { from: "DEL", to: "BOM", label: "Delhi to Mumbai" },
  { from: "BLR", to: "DEL", label: "Bengaluru to Delhi" },
  { from: "BOM", to: "GOI", label: "Mumbai to Goa" },
  { from: "CCU", to: "MAA", label: "Kolkata to Chennai" },
  { from: "HYD", to: "BLR", label: "Hyderabad to Bengaluru" },
];

const TripHomePage = () => {
  const navigate = useNavigate();
  const [selectedRoute, setSelectedRoute] = useState(JSON.stringify(routes[0]));

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/trip-planner/results', { state: { route: JSON.parse(selectedRoute) } });
  };

  return (
    // This wrapper applies the new modern UI styles
    <div className="trip-planner-container modern-ui">
      <div className="page-header">
        <h1>Trip Planner</h1>
        <p>Compare flights & hotels and book your perfect trip in one place.</p>
      </div>

      <form onSubmit={handleSearch} className="search-form">
        <div className="custom-select-wrapper">
          <select value={selectedRoute} onChange={(e) => setSelectedRoute(e.target.value)}>
            {routes.map((r, index) => (
              <option key={index} value={JSON.stringify(r)}>
                {r.label}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default TripHomePage;