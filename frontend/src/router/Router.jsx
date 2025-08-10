import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Your existing page imports
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import SearchResultList from '../pages/SearchResultList';
import Tour from '../pages/Tour';
import TourDetails from '../pages/TourDetails';
import Planner from '../pages/Planner';
import Support from '../pages/Support';
import Information from '../pages/Information';
import Thankyou from '../pages/Thankyou';
import About from '../pages/About';

// --- 1. ADD NEW IMPORTS HERE ---
import { TripProvider } from '../trip-planner/TripContext.jsx'; // Added .js for clarity
import TripHomePage from '../trip-planner/pages/TripHomePage.jsx';
import TripResultsPage from '../trip-planner/pages/TripResultsPage.jsx';
import TripCheckoutPage from '../trip-planner/pages/TripCheckoutPage.jsx'; // <-- .jsx added here
import TripConfirmationPage from '../trip-planner/pages/TripConfirmationPage.jsx'; // <-- .jsx added here
// --- END OF NEW IMPORTS ---

const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

const Router = () => {
  return (
    // --- 2. WRAP YOUR ROUTES WITH THE PROVIDER ---
    <TripProvider>
      <Routes>
        {/* Your Existing Routes */}
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/tour/:id" element={<TourDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/thank-you" element={<Thankyou />} />
        <Route path="/tour/search" element={<SearchResultList />} />
        <Route path="/support" element={<Support />} />
        <Route
          path="/planner"
          element={isLoggedIn ? <Planner /> : <Navigate to="/login" />}
        />
        <Route path="/information" element={<Information />} />
        <Route path="/about" element={<About />} />

        {/* --- 3. ADD NEW TRIP PLANNER ROUTES HERE --- */}
        <Route path="/trip-planner" element={<TripHomePage />} />
        <Route path="/trip-planner/results" element={<TripResultsPage />} />
        <Route path="/trip-planner/checkout" element={<TripCheckoutPage />} />
        <Route path="/trip-planner/confirmation" element={<TripConfirmationPage />} />
        {/* --- END OF NEW ROUTES --- */}

      </Routes>
    </TripProvider>
  );
};

export default Router;