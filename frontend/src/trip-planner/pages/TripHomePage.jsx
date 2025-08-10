import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../TripPlanner.css'; // Import the CSS

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
    <div className="trip-planner-container">
      <div className="page">
        <h1>Search and Compare</h1>
        <p>Compare and book flights & hotels seamlessly.</p>
        <form onSubmit={handleSearch} className="search-form">
          <select value={selectedRoute} onChange={(e) => setSelectedRoute(e.target.value)}>
            {routes.map((r, index) => <option key={index} value={JSON.stringify(r)}>{r.label}</option>)}
          </select>
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};
export default TripHomePage;