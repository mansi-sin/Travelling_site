export const WHATSAPP = "+918810450479";
export const PHONE = "+918810450479";
export const EMAIL = "bookings@travelwithrishabh.com";
export const ADDRESS = "Connaught Place, New Delhi - 110001, India";

export const img = {
  kashmir: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1200&q=80",
  kerala: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
  rajasthan: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
  goa: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
  dubai: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
  bali: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
  himachal: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
  thailand: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80",
  ladakh: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80",
  car: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
};

export const waLink = (text) =>
  `https://wa.me/${WHATSAPP.replace(/\+/g, "")}?text=${encodeURIComponent(text)}`;

const baseItinerary = (n, place) =>
  Array.from({ length: n }, (_, i) => ({
    day: i + 1,
    title:
      i === 0
        ? `Arrival & Welcome in ${place}`
        : i === n - 1
        ? `Farewell & Departure from ${place}`
        : `Explore & Sightseeing Highlights (Day ${i + 1})`,
    detail:
      i === 0
        ? `Warm airport/railway pickup, private transfer to your handpicked stay, welcome briefing and evening at leisure to soak in local vibes.`
        : i === n - 1
        ? `Delicious breakfast, check-out, time for traditional souvenir shopping and comfortable transfer for onward journey.`
        : `Guided private sightseeing covering scenic landscapes, iconic monuments, local food tastings, and evening sunset viewpoints.`,
  }));

const commonInclusions = [
  "Handpicked accommodation on twin sharing basis",
  "Daily sumptuous breakfast & gourmet dinner",
  "Private dedicated AC vehicle for all transfers & sightseeing",
  "Professional English & Hindi speaking guide/chauffeur",
  "Toll taxes, parking charges, fuel & driver allowances",
  "24/7 dedicated travel concierge support",
];

const commonExclusions = [
  "Airfare or train tickets (unless opted as add-on)",
  "Lunches and personal expenses (shopping, laundry)",
  "Monument entry tickets & optional adventure sports",
  "Travel insurance & GST (if not pre-included)",
];

const cancellation =
  "100% Free cancellation up to 30 days before departure. 25% charge 15–29 days prior, 50% charge 7–14 days prior, 100% charge within 7 days of departure date.";

const pkg = (o) => ({
  inclusions: commonInclusions,
  exclusions: commonExclusions,
  cancellation,
  hotel: o.hotel || "4 Star Premium",
  meals: o.meals || "Breakfast & Dinner",
  transport: o.transport || "Private AC Vehicle",
  itinerary: baseItinerary(o.days, o.destination),
  ...o,
});

export const tours = [
  pkg({
    id: "kashmir-paradise",
    title: "Kashmir Paradise & Valley Dreams",
    destination: "Kashmir",
    region: "domestic",
    category: "Family",
    image: img.kashmir,
    days: 6,
    nights: 5,
    price: 28999,
    originalPrice: 35000,
    hotel: "4-Star & Houseboat Stay",
    sightseeing: "Srinagar, Gulmarg Gondola, Pahalgam Betaab Valley, Sonmarg Glacier, Dal Lake Shikara Ride",
    rating: 4.9,
    reviewsCount: 184,
    tag: "Bestseller",
  }),
  pkg({
    id: "himachal-hills",
    title: "Himachal Scenic Hills & Snow Valleys",
    destination: "Himachal Pradesh",
    region: "domestic",
    category: "Family",
    image: img.himachal,
    days: 7,
    nights: 6,
    price: 24999,
    originalPrice: 31000,
    hotel: "4-Star Mountain Resort",
    sightseeing: "Shimla Mall Road, Kufri, Manali, Kullu Valley, Solang Valley Adventure, Rohtang Pass",
    rating: 4.8,
    reviewsCount: 142,
    tag: "Popular",
  }),
  pkg({
    id: "goa-getaway",
    title: "Goa Tropical Beach & Cruise Romance",
    destination: "Goa",
    region: "domestic",
    category: "Honeymoon",
    image: img.goa,
    days: 4,
    nights: 3,
    price: 15999,
    originalPrice: 21999,
    hotel: "5-Star Beachfront Resort",
    sightseeing: "North & South Goa beaches, Mandovi River luxury sunset cruise, Fort Aguada, water sports",
    rating: 4.8,
    reviewsCount: 210,
    tag: "Honeymoon Special",
  }),
  pkg({
    id: "rajasthan-royal",
    title: "Royal Rajasthan Heritage & Desert Safari",
    destination: "Rajasthan",
    region: "domestic",
    category: "Heritage",
    image: img.rajasthan,
    days: 8,
    nights: 7,
    hotel: "Heritage Haveli & Desert Camp",
    price: 32999,
    originalPrice: 42000,
    sightseeing: "Jaipur Amer Fort, Udaipur City Palace, Jodhpur Mehrangarh, Jaisalmer Sam Sand Dunes & Camel Safari",
    rating: 4.9,
    reviewsCount: 167,
    tag: "Heritage",
  }),
  pkg({
    id: "kerala-backwaters",
    title: "Kerala God's Own Country & Backwaters",
    destination: "Kerala",
    region: "domestic",
    category: "Honeymoon",
    image: img.kerala,
    days: 6,
    nights: 5,
    price: 26999,
    originalPrice: 34000,
    hotel: "Luxury Houseboat & Tea Resort",
    sightseeing: "Munnar tea plantations, Thekkady wildlife, Alleppey private houseboat cruise, Kovalam beach",
    rating: 4.9,
    reviewsCount: 195,
    tag: "Honeymoon",
  }),
  pkg({
    id: "dubai-delight",
    title: "Dubai Extravaganza & Desert Wonder",
    destination: "Dubai",
    region: "international",
    category: "Family",
    image: img.dubai,
    days: 5,
    nights: 4,
    hotel: "5-Star Luxury Downtown",
    price: 54999,
    originalPrice: 68000,
    sightseeing: "Burj Khalifa 124th floor, Desert Safari with BBQ dinner, Marina Dhow Cruise, Miracle Garden & Dubai Frame",
    rating: 4.9,
    reviewsCount: 230,
    tag: "Trending",
  }),
  pkg({
    id: "bali-bliss",
    title: "Bali Tropical Villa & Island Explorer",
    destination: "Bali",
    region: "international",
    category: "Honeymoon",
    image: img.bali,
    days: 6,
    nights: 5,
    hotel: "Private Pool Villa",
    price: 48999,
    originalPrice: 59999,
    sightseeing: "Ubud Tegallalang rice terraces, Tanah Lot temple sunset, Nusa Penida island speedboat tour, Uluwatu Kecak dance",
    rating: 4.9,
    reviewsCount: 156,
    tag: "Top Rated",
  }),
  pkg({
    id: "thailand-explorer",
    title: "Thailand Bangkok & Phuket Island Escape",
    destination: "Thailand",
    region: "international",
    category: "Group",
    image: img.thailand,
    days: 6,
    nights: 5,
    hotel: "4-Star Beach Resort",
    price: 42999,
    originalPrice: 52000,
    sightseeing: "Bangkok Grand Palace & Safari World, Pattaya Coral Island, Phuket Phi Phi Islands speedboat tour",
    rating: 4.8,
    reviewsCount: 118,
    tag: "Group Deal",
  }),
];

export const tourCategories = [
  { key: "domestic", label: "Domestic Tours", icon: "🇮🇳" },
  { key: "international", label: "International Tours", icon: "✈️" },
  { key: "Honeymoon", label: "Honeymoon Packages", icon: "💍" },
  { key: "Heritage", label: "Heritage & Culture", icon: "🏰" },
  { key: "Family", label: "Family Vacations", icon: "👨‍👩‍👧‍👦" },
  { key: "Group", label: "Group Tours", icon: "👥" },
];

export const otherDomestic = [
  "Uttarakhand (Rishikesh, Nainital, Mussoorie)",
  "Andaman & Nicobar Islands",
  "North East (Sikkim, Meghalaya, Assam)",
  "Ladakh & Pangong Lake",
  "Tamil Nadu & Ooty",
  "Karnataka & Coorg",
  "Gujarat (Rann of Kutch)",
  "Madhya Pradesh Wildlife",
  "Varanasi & Ayodhya",
  "Goa Beaches",
];

export const otherIntl = [
  "Maldives Overwater Villas",
  "Singapore & Sentosa",
  "Vietnam (Hanoi & Da Nang)",
  "Europe (Switzerland & Paris)",
  "Turkey & Cappadocia",
  "Mauritius",
  "Japan & Tokyo",
];

export const vehicles = [
  {
    id: "hatchback",
    name: "Hatchback",
    models: "Swift / WagonR / Celerio",
    seats: 4,
    luggage: "2 Bags",
    ac: "AC",
    perKm: 11,
    minFare: 1500,
    recommendedFor: "Solo travelers, couples, city runs",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "sedan",
    name: "Prime Sedan",
    models: "Dzire / Etios / Aura / Honda City",
    seats: 4,
    luggage: "3 Bags",
    ac: "AC",
    perKm: 13,
    minFare: 1800,
    recommendedFor: "Families, airport pickups, outstation trips",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "suv",
    name: "Premium SUV",
    models: "Innova Crysta / Ertiga / XL6 / Scorpio",
    seats: 6,
    luggage: "4-5 Bags",
    ac: "AC",
    perKm: 18,
    minFare: 2800,
    recommendedFor: "Long journeys, hills, family luggage",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "luxury",
    name: "Luxury Chauffeur",
    models: "Mercedes Benz / BMW 5 Series / Audi A6",
    seats: 4,
    luggage: "3 Bags",
    ac: "AC Climate Control",
    perKm: 55,
    minFare: 8000,
    recommendedFor: "VIP corporate, weddings, grand arrivals",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "tempo",
    name: "Tempo Traveller",
    models: "Force Traveller 12 / 17 / 20 Seater",
    seats: 17,
    luggage: "12 Bags",
    ac: "AC Pushback Seats",
    perKm: 25,
    minFare: 4800,
    recommendedFor: "Group vacations, pilgrimage, family reunions",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "coach",
    name: "Luxury Volvo Coach Bus",
    models: "35 / 45 / 49 Seater AC Deluxe",
    seats: 49,
    luggage: "45 Bags",
    ac: "Full Climate Control",
    perKm: 48,
    minFare: 12000,
    recommendedFor: "Corporate offsites, school trips, wedding barats",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80",
  },
];

export const taxiServices = [
  {
    title: "Local City Taxi",
    subtitle: "Flexible Hourly & Full Day Rentals",
    desc: "Convenient within-city travel with transparent 4hr/40km & 8hr/80km packages for shopping, appointments or city sightseeing.",
    points: ["Flexible hourly packages", "Multiple stopovers allowed", "Clean, sanitized AC cabs", "Zero surge pricing"],
    icon: "Navigation",
  },
  {
    title: "Airport Transfer",
    subtitle: "On-time Guaranteed Pickup & Drop",
    desc: "Stress-free airport rides with live flight delay tracking, meet-and-greet service by polite chauffeurs, and fixed transparent fares.",
    points: ["Flight delay monitoring", "Chauffeur meet & greet", "Luggage assistance", "Fixed all-inclusive rates"],
    icon: "Plane",
  },
  {
    title: "Outstation Trips",
    subtitle: "One-Way & Round Trips Across India",
    desc: "Safe, scenic long-distance road trips with seasoned highway drivers who know the best routes, safe stops, and mountain passes.",
    points: ["One-way & round trip options", "Interstate permits handled", "Expert highway drivers", "24/7 on-road assistance"],
    icon: "Map",
  },
];

export const testimonials = [
  {
    name: "Ananya & Rohan Sharma",
    place: "Janakpuri, New Delhi",
    trip: "6D Kashmir Family Tour (4 Pax)",
    text: "We booked our 6-day Kashmir trip through Rishabh. Everything from the Dal Lake houseboat to the private Innova in Gulmarg was meticulously arranged. Mushtaq, our driver, was exceptionally courteous and punctual.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    date: "Travelled May 2026",
  },
  {
    name: "Rahul & Sneha Mehta",
    place: "Indiranagar, Bengaluru",
    trip: "5D Coorg & Wayanad Road Trip",
    text: "Booked an Innova Crysta for our family road trip. The car was spotless, AC worked flawlessly, and the driver recommended fantastic local Karnataka cuisine spots. No hidden toll or night charge surprises.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    date: "Travelled April 2026",
  },
  {
    name: "Dr. Fatima & Tariq Khan",
    place: "Banjara Hills, Hyderabad",
    trip: "Dubai 5N/6D Holiday Package",
    text: "Rishabh planned our complete Dubai itinerary including desert safari, Burj Khalifa tickets, and airport transfers. The vouchers arrived on WhatsApp within 2 hours of payment. Zero hassles at hotel check-in.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    date: "Travelled March 2026",
  },
  {
    name: "Vikram Nair",
    place: "Kochi, Kerala",
    trip: "Goa Corporate Group (35 Pax)",
    text: "Organized our annual team offsite in South Goa. Two luxury AC coaches, 5-star beachfront rooms, and dinner cruise were managed with exceptional care. Rishabh personally coordinated every pickup.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    date: "Travelled Feb 2026",
  },
];

export const blog = [
  {
    id: "best-time-kashmir",
    title: "Best Time to Visit Kashmir: Month-by-Month Weather & Sightseeing Guide",
    excerpt: "From tulip blossoms in April and lush green meadows of Pahalgam in June, to fresh snowfall in Gulmarg during December — here is how to plan your dates.",
    image: img.kashmir,
    category: "Destination Guide",
    date: "May 2026",
    read: "6 min read",
  },
  {
    id: "kerala-honeymoon",
    title: "How to Plan a 5-Day Kerala Itinerary: Munnar, Thekkady & Alleppey",
    excerpt: "Detailed day-by-day route with driving times, tea estate tours, private houseboat booking tips, and authentic Ayurvedic massage recommendations.",
    image: img.kerala,
    category: "Itinerary Guide",
    date: "April 2026",
    read: "5 min read",
  },
  {
    id: "dubai-budget",
    title: "First-Time Dubai Trip Checklist: Visa, Metro, Attraction Passes & Currency",
    excerpt: "Essential practical tips for Indian travelers: tourist visa requirements, Dubai Metro Nol cards, best currency exchange options, and combo tickets.",
    image: img.dubai,
    category: "Travel Tips",
    date: "March 2026",
    read: "7 min read",
  },
];

export const whyUs = [
  {
    title: "Direct Human Planning",
    desc: "Speak directly with Rishabh and our destination specialists. No automated bots — we tailor every day to your pace, family preferences, and budget.",
    icon: "Headphones",
  },
  {
    title: "Transparent Fixed Pricing",
    desc: "All taxes, tolls, parking, and driver allowances are clearly itemized upfront. The price quoted on WhatsApp is the final price you pay.",
    icon: "ShieldCheck",
  },
  {
    title: "Inspected Hotels & Sanitized Cabs",
    desc: "We personally verify hotel hygiene, room quality, and meal standards. All taxis are GPS-enabled with verified, professional chauffeurs.",
    icon: "Award",
  },
  {
    title: "24/7 WhatsApp & On-Trip Support",
    desc: "From the moment your train/flight lands until you return home, our team is one WhatsApp message away for instant assistance.",
    icon: "Clock",
  },
];

export const faqs = [
  {
    q: "How do I book a tour package or taxi?",
    a: "You can click any 'WhatsApp' button or call us directly at +91 88104 50479. Tell us your travel dates, destination, number of travelers, and hotel preferences. We'll share a custom itinerary PDF and quotation within 30 minutes.",
  },
  {
    q: "Can I customize the hotels, dates, or add extra days?",
    a: "Yes, 100%! All our packages are fully flexible. You can upgrade to 5-star hotels, request specific room categories, add romantic candlelit dinners, or change the daily sightseeing route.",
  },
  {
    q: "What is included in the taxi rental rates?",
    a: "Our outstation and local rates include fuel, clean AC vehicle, and professional driver allowances. Toll taxes, state border permits, and parking are either included or billed strictly on actual receipts.",
  },
  {
    q: "What is the payment and cancellation policy?",
    a: "We only require a 25% advance token to confirm hotel and cab bookings. The remaining balance can be paid upon arrival. Free cancellation is available up to 15 days before departure.",
  },
];

