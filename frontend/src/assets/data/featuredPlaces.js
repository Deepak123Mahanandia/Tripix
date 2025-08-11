import img01 from '../images/tour-img01.jpg';
import img02 from '../images/tour-img02.jpg';
import img03 from '../images/tour-img03.jpg';
import img04 from '../images/tour-img04.jpg';
import img05 from '../images/tour-img05.jpg';
import img06 from '../images/tour-img06.jpg';
import img07 from '../images/kerala.jpg';
import img08 from '../images/tour-img08.jpg';
import img09 from '../images/tour-img09.jpg';
import img10 from '../images/tour-img10.jpg';
import img11 from '../images/puri.jpg';

const featuredPlaces = [
  {
    id: "01",
    title: "Manali Adventure",
    city: "Manali",
    photo: img08,
    bestSeason: "December to February",
    description: "Nestled in the heart of Himachal Pradesh, Manali is a beautiful hill station known for snow-capped mountains, charming valleys, and thrilling winter sports. From Rohtang Pass to Solang Valley, visitors are treated to breathtaking views and exciting adventures, including skiing and snowboarding.",
    famousFor: "Snow adventures, scenic valleys",
    mustTryFoods: ["Siddu", "Trout Fish", "Dham"],
    distanceFromRailwayStation: "165 km (Joginder Nagar Railway Station)",
    distanceFromAirport: "50 km (Bhuntar Airport)",
    distanceFromBusStation: "1.5 km (Manali Bus Depot)",
    mustVisitNearbyPlaces: ["Rohtang Pass", "Solang Valley", "Hadimba Temple"],
    mustDoActivities: ["Skiing", "River Rafting", "Paragliding"],
    // --- NEW ITINERARY DATA ---
    itinerary: [
      { day: 1, title: "Arrival and Local Sightseeing", activities: ["Arrive in Manali, check into your hotel.", "Visit Hadimba Temple, a unique wooden temple surrounded by cedar forests.", "Explore the shops and cafes on Mall Road in the evening."] },
      { day: 2, title: "Solang Valley Adventures", activities: ["Full day excursion to Solang Valley.", "Engage in thrilling activities like paragliding, zorbing, and skiing (seasonal).", "Enjoy breathtaking views of the glaciers and snow-capped peaks."] },
      { day: 3, title: "Rohtang Pass Expedition", activities: ["Take a scenic drive towards Rohtang Pass (subject to accessibility).", "Play in the snow at the snow point and enjoy the stunning mountain landscape.", "Visit the picturesque villages of Kothi and Gulaba on the way."] },
      { day: 4, title: "Old Manali and Hot Springs", activities: ["Explore the charming lanes of Old Manali and visit the Manu Temple.", "Take a relaxing dip in the Vashisht Hot Water Springs.", "Enjoy a riverside cafe experience along the Beas River."] },
      { day: 5, title: "Kullu Valley and Departure", activities: ["Visit Kullu for its famous shawls and handicrafts.", "Experience the thrill of river rafting in the Beas River.", "Depart from Manali with unforgettable memories."] },
    ]
  },
  {
    id: "02",
    title: "Goa Beach Holiday",
    city: "Goa",
    photo: img09,
    bestSeason: "November to February",
    description: "Goa is India's ultimate beach paradise, offering golden sands, vibrant nightlife, and Portuguese heritage. Whether you're partying in North Goa or enjoying serenity in South Goa, the state is a blend of relaxation and adventure.",
    famousFor: "Beaches, nightlife, seafood",
    mustTryFoods: ["Fish Curry Rice", "Prawn Balchão", "Bebinca"],
    distanceFromRailwayStation: "20 km (Madgaon Railway Station)",
    distanceFromAirport: "30 km (Dabolim Airport)",
    distanceFromBusStation: "1 km (Panaji Bus Stand)",
    mustVisitNearbyPlaces: ["Baga Beach", "Fort Aguada", "Dudhsagar Falls"],
    mustDoActivities: ["Jet Skiing", "Beach Parties", "Parasailing"],
    itinerary: [
      { day: 1, title: "Arrival in North Goa", activities: ["Arrive at Dabolim Airport (GOI), check into a hotel in North Goa.", "Relax on Calangute Beach and explore the local shacks.", "Experience the vibrant nightlife at Baga Beach and Tito's Lane."] },
      { day: 2, title: "North Goa Exploration", activities: ["Visit the historic Fort Aguada for panoramic views.", "Explore the Anjuna Flea Market (Wednesdays) or Vagator Beach.", "Enjoy the sunset at a cliffside restaurant in Vagator."] },
      { day: 3, title: "Old Goa Heritage and Panjim", activities: ["Explore the UNESCO World Heritage sites of Old Goa, including Basilica of Bom Jesus.", "Walk through the colourful Latin Quarter of Fontainhas in Panjim.", "Enjoy an evening Mandovi River cruise."] },
      { day: 4, title: "Serene South Goa", activities: ["Take a trip to South Goa to experience its tranquil beaches.", "Visit Colva Beach and relax on the pristine Palolem Beach.", "Enjoy a quiet dinner at a beachside restaurant in the south."] },
      { day: 5, title: "Spice Plantation and Departure", activities: ["Visit a tropical spice plantation for a guided tour and traditional Goan lunch.", "Enjoy some last-minute souvenir shopping.", "Depart from Dabolim Airport."] },
    ]
  },
  {
    id: "03",
    title: "Kerala Backwaters",
    city: "Alleppey",
    photo: img07,
    bestSeason: "September to March",
    description: "Alleppey, the Venice of the East, is known for its vast network of tranquil backwaters. A houseboat cruise here offers a peaceful retreat surrounded by lush greenery, paddy fields, and local village life.",
    famousFor: "Backwater houseboats",
    mustTryFoods: ["Kerala Sadya", "Karimeen Pollichathu", "Appam with Stew"],
    distanceFromRailwayStation: "2 km (Alleppey Railway Station)",
    distanceFromAirport: "83 km (Cochin International Airport)",
    distanceFromBusStation: "2 km (Alleppey Bus Stand)",
    mustVisitNearbyPlaces: ["Kumarakom", "Marari Beach", "Pathiramanal Island"],
    mustDoActivities: ["Houseboat Cruise", "Ayurvedic Spa", "Village Walks"],
    itinerary: [
      { day: 1, title: "Arrival and Houseboat Check-in", activities: ["Arrive in Alleppey and check into your private houseboat by noon.", "Enjoy a traditional Keralan lunch as you begin your cruise through the backwaters.", "Witness the serene village life, paddy fields, and coconut groves."] },
      { day: 2, title: "Full Day Backwater Experience", activities: ["Wake up to the gentle lapping of water and enjoy breakfast on the houseboat.", "Cruise through narrower canals and explore deeper parts of the backwaters.", "Anchor for the night and enjoy a freshly prepared dinner under the stars."] },
      { day: 3, title: "Marari Beach Relaxation", activities: ["After breakfast, disembark from the houseboat.", "Transfer to a resort near the pristine Marari Beach.", "Spend the day relaxing on the clean, sandy shores and swimming in the sea."] },
      { day: 4, title: "Local Culture and Cuisine", activities: ["Take a walk through a local village to understand the culture and lifestyle.", "Try your hand at fishing with the locals.", "Participate in a Keralan cooking demonstration."] },
      { day: 5, title: "Departure from Cochin", activities: ["Enjoy a final Keralan breakfast.", "Transfer to Cochin International Airport (COK) for your departure.", "Optionally, explore Fort Kochi if time permits."] },
    ]
  },
  {
    id: "04",
    title: "Westminster Bridge",
    city: "London",
    photo: img01,
    bestSeason: "April to September",
    description: "Located in central London, Westminster Bridge offers iconic views of the Thames River, Big Ben, and the Houses of Parliament. It's a hotspot for tourists and photographers alike.",
    famousFor: "Big Ben, Thames River views",
    mustTryFoods: ["Fish and Chips", "Shepherd's Pie", "English Breakfast"],
    distanceFromRailwayStation: "2 km (London Waterloo Station)",
    distanceFromAirport: "27 km (Heathrow Airport)",
    distanceFromBusStation: "1 km (Victoria Coach Station)",
    mustVisitNearbyPlaces: ["London Eye", "Buckingham Palace", "Trafalgar Square"],
    mustDoActivities: ["River Cruise", "Photography", "Historical Walks"],
    itinerary: [
      { day: 1, title: "Arrival and Royal Westminster", activities: ["Arrive in London, check into your hotel.", "Walk across Westminster Bridge to see the Houses of Parliament and Big Ben.", "Take a ride on the London Eye for panoramic city views."] },
      { day: 2, title: "Museums and Culture", activities: ["Visit the British Museum to see world-famous artifacts like the Rosetta Stone.", "Explore the vibrant area of Covent Garden for street performers and shopping.", "Watch a world-class theatre show in the West End in the evening."] },
      { day: 3, title: "Royal London", activities: ["Witness the Changing of the Guard ceremony at Buckingham Palace.", "Take a leisurely stroll through St. James's Park and Hyde Park.", "Explore the upscale shops of Knightsbridge, including Harrods."] },
      { day: 4, title: "Historic Towers and Markets", activities: ["Discover the history of the Tower of London and see the Crown Jewels.", "Walk across the iconic Tower Bridge.", "Explore the culinary delights at Borough Market."] },
      { day: 5, title: "Art and Departure", activities: ["Visit the National Gallery in Trafalgar Square.", "Enjoy some last-minute shopping on Oxford Street.", "Depart from Heathrow Airport (LHR)."] },
    ]
  },
  {
    id: "05",
    title: "Bali, Indonesia",
    city: "Bali",
    photo: img02,
    bestSeason: "April to October",
    description: "Bali is a tropical island that offers a perfect mix of beaches, culture, and spiritual retreats. It's famous for temples, surfing, and yoga retreats, making it a dream destination for all types of travelers.",
    famousFor: "Temples, surfing, tropical beaches",
    mustTryFoods: ["Nasi Goreng", "Babi Guling", "Satay"],
    distanceFromRailwayStation: "N/A",
    distanceFromAirport: "13 km (Ngurah Rai International Airport)",
    distanceFromBusStation: "5 km (Denpasar Bus Terminal)",
    mustVisitNearbyPlaces: ["Ubud", "Tanah Lot", "Seminyak"],
    mustDoActivities: ["Surfing", "Temple Visits", "Snorkeling"],
    itinerary: [
      { day: 1, title: "Arrival in Seminyak", activities: ["Arrive at Ngurah Rai International Airport (DPS) and transfer to Seminyak.", "Settle into your hotel and enjoy the vibrant beach clubs.", "Watch the sunset from Seminyak Beach."] },
      { day: 2, title: "Ubud's Cultural Heart", activities: ["Travel to Ubud, the cultural center of Bali.", "Visit the Sacred Monkey Forest Sanctuary.", "Explore the Tegalalang Rice Terraces and enjoy a coffee tasting."] },
      { day: 3, title: "Temples and Sunsets", activities: ["Visit the iconic Tanah Lot Temple, perched on a rock formation in the sea.", "Head to Uluwatu Temple on a cliff edge for stunning views.", "Watch a traditional Kecak fire dance performance at Uluwatu at sunset."] },
      { day: 4, title: "Island Hopping or Water Sports", activities: ["Take a fast boat to Nusa Penida to see Kelingking Beach.", "Alternatively, enjoy water sports like surfing in Canggu or snorkeling in Amed.", "Relax with a traditional Balinese massage in the evening."] },
      { day: 5, title: "Relaxation and Departure", activities: ["Enjoy a floating breakfast in your villa's pool.", "Go for last-minute souvenir shopping at a local market.", "Depart from Ngurah Rai International Airport (DPS)."] },
    ]
  },
  {
    id: "06",
    title: "Northern Thailand Mountains",
    city: "Thailand",
    photo: img03,
    bestSeason: "December to February",
    description: "While Thailand is known for beaches, the northern mountains offer cool retreats and cultural exploration. Think misty hills, tribal villages, and fresh mountain air.",
    famousFor: "Mountain villages and trails",
    mustTryFoods: ["Khao Soi", "Sai Oua", "Sticky Rice"],
    distanceFromRailwayStation: "90 km (Chiang Mai Railway Station)",
    distanceFromAirport: "70 km (Chiang Rai Airport)",
    distanceFromBusStation: "4 km (Local Bus Stand)",
    mustVisitNearbyPlaces: ["Chiang Rai", "Doi Inthanon", "Mae Hong Son"],
    mustDoActivities: ["Trekking", "Ziplining", "Cultural Tours"],
    itinerary: [
      { day: 1, title: "Arrival in Chiang Mai", activities: ["Arrive at Chiang Mai International Airport (CNX).", "Explore the ancient temples within the Old City walls.", "Visit the vibrant Night Bazaar for shopping and street food."] },
      { day: 2, title: "Elephants and Nature", activities: ["Visit an ethical elephant sanctuary to feed and bathe the elephants.", "Hike to a waterfall in the lush mountains surrounding Chiang Mai.", "Enjoy a traditional Khantoke dinner with cultural performances."] },
      { day: 3, title: "Doi Inthanon National Park", activities: ["Take a day trip to Doi Inthanon, the highest peak in Thailand.", "Visit the stunning King and Queen Pagodas.", "Walk the Ang Ka Nature Trail through a cloud forest."] },
      { day: 4, title: "Day Trip to Chiang Rai", activities: ["Travel to Chiang Rai to see the incredible White Temple (Wat Rong Khun).", "Visit the unique Blue Temple (Wat Rong Suea Ten).", "Explore the Golden Triangle where Thailand, Laos, and Myanmar meet."] },
      { day: 5, title: "Relax and Depart", activities: ["Take a Thai cooking class to learn local recipes.", "Enjoy a relaxing Thai massage.", "Depart from Chiang Mai International Airport (CNX)."] },
    ]
  },
  {
    id: "07",
    title: "Sunrise in Northern Thailand",
    city: "Thailand",
    photo: img04,
    bestSeason: "October to February",
    description: "Witness stunning sunrises over misty hills and rice terraces in Northern Thailand. A peaceful escape filled with nature and scenic beauty.",
    famousFor: "Scenic sunrise views",
    mustTryFoods: ["Nam Prik", "Laab", "Tom Yum"],
    distanceFromRailwayStation: "120 km (Chiang Mai Railway Station)",
    distanceFromAirport: "80 km (Chiang Rai Airport)",
    distanceFromBusStation: "3 km",
    mustVisitNearbyPlaces: ["Phu Chi Fa", "Mae Salong", "Golden Triangle"],
    mustDoActivities: ["Sunrise Photography", "Camping", "Mountain Hiking"],
    itinerary: [
      { day: 1, title: "Journey to Phu Chi Fa", activities: ["Travel from Chiang Rai to the mountainous region of Phu Chi Fa.", "Check into a local guesthouse and acclimatize to the altitude.", "Enjoy a simple dinner with fresh local ingredients."] },
      { day: 2, title: "The Sea of Mist", activities: ["Wake up early for a pre-dawn hike to the summit of Phu Chi Fa.", "Witness the spectacular sunrise over a 'sea of mist' covering the valleys below.", "Spend the day exploring nearby hill tribe villages."] },
      { day: 3, title: "Mae Salong's Tea Plantations", activities: ["Travel to Mae Salong, a town known for its Chinese heritage and tea plantations.", "Visit a tea plantation for a tour and tasting session.", "Enjoy the unique Yunnanese cuisine available in the town."] },
      { day: 4, title: "Exploring the Golden Triangle", activities: ["Visit the Golden Triangle, the point where three countries meet.", "Take a boat trip on the Mekong River.", "Visit the Hall of Opium museum for a historical perspective."] },
      { day: 5, title: "Return to Chiang Rai", activities: ["Enjoy a final mountain breakfast.", "Travel back to Chiang Rai for some last-minute shopping.", "Depart from Chiang Rai Airport (CEI)."] },
    ]
  },
  {
    id: "08",
    title: "Nusa Penida",
    city: "Indonesia",
    photo: img05,
    bestSeason: "May to September",
    description: "Nusa Penida is a rugged island off Bali's southeast coast known for its cliffs, turquoise water, and unique rock formations. It's perfect for adventure seekers and nature lovers.",
    famousFor: "Rock formations, cliffs, diving spots",
    mustTryFoods: ["Sate Lilit", "Pepes Ikan", "Bakso"],
    distanceFromRailwayStation: "N/A",
    distanceFromAirport: "30 km via ferry from Bali",
    distanceFromBusStation: "N/A",
    mustVisitNearbyPlaces: ["Kelingking Beach", "Broken Beach", "Crystal Bay"],
    mustDoActivities: ["Cliff Hiking", "Snorkeling", "Boat Tour"],
    itinerary: [
      { day: 1, title: "Arrival and West Coast Wonders", activities: ["Take a fast boat from Bali to Nusa Penida.", "Check into your hotel and rent a scooter.", "Hike down to the famous Kelingking Beach (T-Rex Bay)."] },
      { day: 2, title: "Broken Beach and Natural Pools", activities: ["Visit Angel's Billabong, a stunning natural infinity pool.", "Walk over to Broken Beach (Pasih Uug), a unique circular cove.", "Enjoy the sunset from a cliffside viewpoint."] },
      { day: 3, title: "Snorkeling with Manta Rays", activities: ["Take a boat trip to Manta Point for a chance to snorkel with majestic Manta Rays.", "Explore other snorkeling spots like Crystal Bay and Gamat Bay.", "Relax on the white sands of Crystal Bay in the afternoon."] },
      { day: 4, title: "East Coast Adventures", activities: ["Explore the eastern side of the island.", "Visit the iconic Diamond Beach and Atuh Beach.", "Climb the famous treehouse (Rumah Pohon Molenteng) for incredible views."] },
      { day: 5, title: "Departure", activities: ["Enjoy a final island breakfast.", "Do some last-minute souvenir shopping near the harbor.", "Take the fast boat back to Bali for your onward journey."] },
    ]
  },
  {
    id: "09",
    title: "Cherry Blossoms Spring",
    city: "Tokyo",
    photo: img06,
    bestSeason: "March to April",
    description: "Spring in Japan is synonymous with cherry blossoms. Tokyo's parks burst into color, making it a magical time for visitors. Enjoy the blooming beauty and peaceful atmosphere.",
    famousFor: "Cherry blossom viewing",
    mustTryFoods: ["Sakura Mochi", "Ramen", "Takoyaki"],
    distanceFromRailwayStation: "5 km (Tokyo Station)",
    distanceFromAirport: "65 km (Narita Airport)",
    distanceFromBusStation: "4 km (Tokyo Bus Terminal)",
    mustVisitNearbyPlaces: ["Ueno Park", "Shinjuku Gyoen", "Mount Fuji"],
    mustDoActivities: ["Hanami", "Temple Tours", "Shopping"],
    itinerary: [
      { day: 1, title: "Arrival in Shinjuku", activities: ["Arrive at Narita (NRT) or Haneda (HND) Airport and travel to Shinjuku.", "Check into your hotel and visit the Shinjuku Gyoen National Garden for your first cherry blossom viewing.", "Ascend the Tokyo Metropolitan Government Building for free panoramic city views."] },
      { day: 2, title: "Shibuya and Harajuku", activities: ["Experience the famous Shibuya Crossing.", "Visit the Hachiko Memorial Statue.", "Explore the trendy boutiques and quirky culture of Harajuku's Takeshita Street."] },
      { day: 3, title: "Traditional Asakusa and Ueno Park", activities: ["Visit the historic Senso-ji Temple in Asakusa.", "Enjoy a Hanami (cherry blossom viewing party) at Ueno Park, one of Tokyo's most popular spots.", "Explore the museums within Ueno Park."] },
      { day: 4, title: "Imperial Palace and Akihabara", activities: ["Visit the East Garden of the Imperial Palace, the former site of Edo Castle.", "Immerse yourself in the world of anime, manga, and electronics in Akihabara.", "Enjoy dinner and a unique experience at a themed cafe."] },
      { day: 5, title: "Day Trip or Departure", activities: ["Take an optional day trip to see Mount Fuji from Hakone or Lake Kawaguchiko.", "Alternatively, visit the Tsukiji Outer Market for fresh seafood breakfast.", "Depart from the airport."] },
    ]
  },
  {
    id: "10",
    title: "Holmen Lofoten",
    city: "Norway", // Corrected from France
    photo: img10,
    bestSeason: "June to August",
    description: "Famous for its dramatic peaks and traditional fishing villages, Holmen Lofoten offers unforgettable coastal adventures and scenic landscapes perfect for hiking and photography.",
    famousFor: "Fishing villages, fjords, and peaks",
    mustTryFoods: ["Stockfish", "Whale Steak", "Cloudberries"], // Corrected foods for Norway
    distanceFromRailwayStation: "N/A",
    distanceFromAirport: "15 km (Leknes Airport)",
    distanceFromBusStation: "1 km (Local Bus Stop)",
    mustVisitNearbyPlaces: ["Reine", "Nusfjord", "Hamnøy"],
    mustDoActivities: ["Photography", "Kayaking", "Hiking"],
    itinerary: [
      { day: 1, title: "Arrival in Lofoten", activities: ["Fly into Leknes Airport (LKN) and pick up a rental car.", "Drive to the picturesque village of Reine and check into a 'rorbu' (traditional fisherman's cabin).", "Watch the midnight sun during the summer months."] },
      { day: 2, title: "Iconic Fishing Villages", activities: ["Explore the charming and iconic fishing villages of Reine, Hamnøy, and Sakrisøy.", "Photograph the red cabins against the dramatic mountain backdrops.", "Enjoy a fresh seafood dinner at a local restaurant."] },
      { day: 3, title: "Hiking and Beaches", activities: ["Hike the famous Reinebringen trail for one of the most breathtaking views in the world (for experienced hikers).", "Alternatively, visit the stunning white sand beaches of Haukland and Uttakleiv.", "Enjoy a picnic on the beach."] },
      { day: 4, title: "Viking History and Kayaking", activities: ["Visit the Lofotr Viking Museum to step back in time.", "Go for a sea kayaking tour to explore the coastline and fjords from the water.", "Look for sea eagles and other wildlife."] },
      { day: 5, title: "Departure", activities: ["Enjoy a final scenic drive through the islands.", "Do some last-minute souvenir shopping for local crafts.", "Return your rental car and depart from Leknes Airport (LKN)."] },
    ]
  },
  {
    id: "11",
    title: "Spiritual Journey to Puri",
    city: "Puri",
    photo: img11,
    bestSeason: "October to February",
    description: "Puri is one of the Char Dham pilgrimage sites. Home to the Jagannath Temple and a bustling beach scene, it's a mix of spirituality, tradition, and coastal charm in Odisha.",
    famousFor: "Jagannath Temple and Puri Beach",
    mustTryFoods: ["Khicede", "Chhena Poda", "Rasabali"],
    distanceFromRailwayStation: "3 km (Puri Railway Station)",
    distanceFromAirport: "60 km (Bhubaneswar Airport)",
    distanceFromBusStation: "2 km (Puri Bus Stand)",
    mustVisitNearbyPlaces: ["Konark Sun Temple", "Chilika Lake", "Raghurajpur Village"],
    mustDoActivities: ["Temple Darshan", "Beach Walks", "Craft Village Visit"],
    itinerary: [
      { day: 1, title: "Arrival and Jagannath Temple", activities: ["Arrive in Puri and check into your hotel.", "Visit the world-famous Jagannath Temple for darshan (viewing from outside may be necessary for non-Hindus).", "In the evening, relax and watch the sunset at Puri Beach."] },
      { day: 2, title: "Konark Sun Temple", activities: ["Take a day trip to the magnificent Konark Sun Temple, a UNESCO World Heritage site.", "Marvel at the intricate stone carvings and the grand chariot architecture.", "Visit the Chandrabhaga Beach near Konark."] },
      { day: 3, title: "Chilika Lake and Dolphins", activities: ["Travel to Satapada on Chilika Lake, Asia's largest brackish water lagoon.", "Take a boat cruise to see the Irrawaddy dolphins and visit the sea mouth.", "Enjoy a fresh seafood lunch at a lakeside restaurant."] },
      { day: 4, title: "Crafts Village and Local Art", activities: ["Visit the heritage crafts village of Raghurajpur.", "See Pattachitra painters at work and buy unique, handmade souvenirs.", "Explore the local markets in Puri for handicrafts and textiles."] },
      { day: 5, title: "Relax and Departure", activities: ["Enjoy a final morning walk on the beach.", "Savor the local delicacies and the famous temple prasad.", "Depart from Puri Railway Station or drive to Bhubaneswar Airport (BBI)."] },
    ]
  },
];

export default featuredPlaces;