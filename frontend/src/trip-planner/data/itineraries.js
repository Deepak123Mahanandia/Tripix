export const itineraries = [
  {
    cityCode: "BOM", 
    cityName: "Mumbai",
    plan: [
      { day: 1, title: "South Mumbai Heritage", description: "Start at the Gateway of India, take a ferry to Elephanta Caves, and end your evening with a walk along Marine Drive." },
      { day: 2, title: "Culture and Bazaars", description: "Explore the vibrant Colaba Causeway for shopping and visit the Chhatrapati Shivaji Maharaj Vastu Sangrahalaya museum." },
      { day: 3, title: "Bollywood and Beaches", description: "Visit the famous Juhu Beach and see the homes of Bollywood stars in Bandra." },
     -
      { day: 4, title: "Art and Local Life", description: "Explore the Kala Ghoda art precinct, and experience a ride on the famous Mumbai local train." },
      { day: 5, title: "Relaxation and Departure", description: "Enjoy a final stroll at Worli Sea Face and do some last-minute shopping before heading to the airport." }
    ],
    optionalActivities: [
      { id: 'BOM01', name: 'Crawford Market Tour', description: 'Experience the energy of this historic Victorian market.' },
      { id: 'BOM02', name: 'Dharavi Slum Tour', description: 'A guided tour to understand the local industries and community.' },
      { id: 'BOM03', name: 'Sanjay Gandhi National Park', description: 'Explore ancient Buddhist caves and a rich variety of wildlife.' },
      { id: 'BOM04', name: 'Street Food Tour at Chowpatty', description: 'Taste famous Mumbai street food like Pav Bhaji and Bhel Puri.' }
    ]
  },
  {
    cityCode: "GOI", // Goa
    cityName: "Goa",
    plan: [
      { day: 1, title: "North Goa Beaches", description: "Relax on the famous Calangute and Baga beaches, enjoy water sports, and experience the vibrant nightlife." },
      { day: 2, title: "Old Goa and Panjim", description: "Explore the historic churches of Old Goa, a UNESCO World Heritage site, and walk through the charming Latin Quarter of Fontainhas in Panjim." },
      { day: 3, title: "South Goa Serenity", description: "Discover the pristine and quieter beaches of South Goa like Palolem and Agonda." },
      // --- NEW DAYS ADDED ---
      { day: 4, title: "Adventure and Nature", description: "Take a trip to the spectacular Dudhsagar Falls or visit a local spice plantation." },
      { day: 5, title: "Markets and Departure", description: "Visit the Anjuna Flea Market for souvenirs and enjoy a final Goan meal before your flight." }
    ],
    optionalActivities: [
      { id: 'GOI01', name: 'Dudhsagar Falls Trip', description: 'Visit one of India\'s tallest waterfalls, located on the Mandovi River.' },
      { id: 'GOI02', name: 'Spice Plantation Tour', description: 'Take a guided tour of a local spice farm and enjoy a traditional Goan lunch.' },
      { id: 'GOI03', name: 'Anjuna Flea Market', description: 'Shop for souvenirs, handicrafts, and clothes at this iconic weekly market.' }
    ]
  },
  {
    cityCode: "DEL", // Delhi
    cityName: "Delhi",
    plan: [
      { day: 1, title: "Historical Monuments", description: "Visit the magnificent Red Fort, India Gate, and the towering Qutub Minar." },
      { day: 2, title: "Modern & Spiritual Delhi", description: "Explore the serene Lotus Temple, visit Humayun's Tomb, and enjoy the evening at Connaught Place." },
      { day: 3, title: "Shopping and Culture", description: "Experience the bustling Chandni Chowk market and visit the grand Akshardham Temple." },
      // --- NEW DAYS ADDED ---
      { day: 4, title: "Lutyens' Delhi", description: "Drive past the Parliament House, Rashtrapati Bhavan, and visit the National Museum to see incredible artifacts." },
      { day: 5, title: "Gardens and Departure", description: "Relax at the beautiful Lodhi Garden and then proceed to the airport for your departure." }
    ],
    optionalActivities: [
      { id: 'DEL01', name: 'Old Delhi Food Tour', description: 'Taste authentic street food like jalebis and parathas in the lanes of Old Delhi.' },
      { id: 'DEL02', name: 'Kingdom of Dreams', description: 'Experience a spectacular Bollywood-style musical show in nearby Gurgaon.' },
      { id: 'DEL03', name: 'Dilli Haat', description: 'Shop for handicrafts from all over India and enjoy regional cuisines.' }
    ]
  },
  {
    cityCode: "MAA", // Chennai
    cityName: "Chennai",
    plan: [
      { day: 1, title: "Beaches and Temples", description: "Relax at Marina Beach, the second-longest urban beach in the world, and visit the ancient Kapaleeshwarar Temple." },
      { day: 2, title: "Colonial History", description: "Explore Fort St. George, the first English fortress in India, and the Government Museum." },
      { day: 3, title: "Art and Culture", description: "Visit the Kalakshetra Foundation for traditional arts and crafts, and enjoy the cultural hub of Mylapore." },
      // --- NEW DAYS ADDED ---
      { day: 4, title: "Day Trip to Mahabalipuram", description: "Explore ancient rock-cut temples, the Five Rathas, and the famous Shore Temple, a UNESCO site." },
      { day: 5, title: "Shopping and Departure", description: "Shop for silk sarees in T. Nagar and enjoy a final South Indian coffee before your flight." }
    ],
    optionalActivities: [
      { id: 'MAA01', name: 'Day Trip to Mahabalipuram', description: 'Explore ancient rock-cut temples and the famous Shore Temple, a UNESCO site.' },
      { id: 'MAA02', name: 'DakshinaChitra Museum', description: 'Experience the living history of South Indian art, craft, and architecture.' },
      { id: 'MAA03', name: 'Besant Nagar Beach Evening', description: 'Enjoy a pleasant evening at \'Bessie\' beach, popular with locals.' }
    ]
  },
  {
    cityCode: "BLR", // Bengaluru
    cityName: "Bengaluru",
    plan: [
      { day: 1, title: "Gardens and Palaces", description: "Stroll through the beautiful Lalbagh Botanical Garden and visit the historic Bangalore Palace." },
      { day: 2, title: "Science and Spirit", description: "Explore the Visvesvaraya Industrial & Technological Museum and find peace at the ISKCON Temple." },
      { day: 3, title: "Shopping and Relaxation", description: "Visit the lively Commercial Street for shopping and relax in the serene Cubbon Park." },
      // --- NEW DAYS ADDED ---
      { day: 4, title: "Day Trip to Nandi Hills", description: "Witness a stunning sunrise from this ancient hill fortress located just outside the city." },
      { day: 5, title: "Cafes and Departure", description: "Explore the trendy cafes and boutiques of Koramangala before heading to the airport." }
    ],
    optionalActivities: [
      { id: 'BLR01', name: 'Day Trip to Nandi Hills', description: 'Witness a stunning sunrise from this ancient hill fortress located just outside the city.' },
      { id: 'BLR02', name: 'Explore the Craft Brewery Scene', description: 'Visit some of Bangalore\'s famous microbreweries in Indiranagar or Koramangala.' },
      { id: 'BLR03', name: 'Bannerghatta National Park', description: 'Experience a wildlife safari and see tigers, lions, and bears.' }
    ]
  }
];