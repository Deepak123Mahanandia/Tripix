export const flights = [
  // Delhi (DEL) to Mumbai (BOM)
  { id: 1, airline: "Vistara", flightNumber: "UK-993", from: "DEL", to: "BOM", departureTime: "09:30", arrivalTime: "11:40", duration: "2h 10m", prices: [ { site: "MakeMyTrip", price: 5100 }, { site: "Goibibo", price: 5050 }, { site: "Vistara", price: 5120 } ]},
  { id: 2, airline: "IndiGo", flightNumber: "6E-204", from: "DEL", to: "BOM", departureTime: "08:00", arrivalTime: "10:05", duration: "2h 05m", prices: [ { site: "MakeMyTrip", price: 4850 }, { site: "Goibibo", price: 4900 }, { site: "IndiGo", price: 5050 } ]},
  // Bengaluru (BLR) to Delhi (DEL)
  { id: 3, airline: "Air India", flightNumber: "AI-505", from: "BLR", to: "DEL", departureTime: "11:00", arrivalTime: "13:45", duration: "2h 45m", prices: [ { site: "MakeMyTrip", price: 5600 }, { site: "Goibibo", price: 5650 }, { site: "Air India", price: 5700 } ]},
  // Mumbai (BOM) to Goa (GOI)
  { id: 4, airline: "SpiceJet", flightNumber: "SG-451", from: "BOM", to: "GOI", departureTime: "12:15", arrivalTime: "13:25", duration: "1h 10m", prices: [ { site: "MakeMyTrip", price: 2800 }, { site: "Goibibo", price: 2850 }, { site: "SpiceJet", price: 2900 } ]},
  // Kolkata (CCU) to Chennai (MAA)
  { id: 5, airline: "IndiGo", flightNumber: "6E-821", from: "CCU", to: "MAA", departureTime: "07:00", arrivalTime: "09:25", duration: "2h 25m", prices: [ { site: "MakeMyTrip", price: 4200 }, { site: "Goibibo", price: 4150 }, { site: "IndiGo", price: 4300 } ]},
  // Hyderabad (HYD) to Bengaluru (BLR)
  { id: 6, airline: "AirAsia", flightNumber: "I5-1552", from: "HYD", to: "BLR", departureTime: "18:00", arrivalTime: "19:10", duration: "1h 10m", prices: [ { site: "MakeMyTrip", price: 2500 }, { site: "Goibibo", price: 2550 }, { site: "AirAsia", price: 2600 } ]},
];