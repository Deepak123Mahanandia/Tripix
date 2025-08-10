import React, { createContext, useState } from "react";

export const TripContext = createContext();

export const TripProvider = ({ children }) => {
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [selectedHotel, setSelectedHotel] = useState(null);

  const resetTrip = () => {
    setSelectedFlight(null);
    setSelectedHotel(null);
  };
  
  return (
    <TripContext.Provider value={{ selectedFlight, setSelectedFlight, selectedHotel, setSelectedHotel, resetTrip }}>
      {children}
    </TripContext.Provider>
  );
};