import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  Search, Car, ShieldCheck, Star, ArrowRight, MapPin, 
  Award, Headphones, Clock, CheckCircle2, 
  Calendar, Users, ChevronRight, Phone, MessageCircle,
  Compass, Plane, Navigation, ShieldAlert, Heart,
  HelpCircle, ChevronDown
} from "lucide-react";
import { tours, testimonials, whyUs, img, vehicles, taxiServices, waLink, blog, faqs } from "@/data/content";
import { inr, Stars, Badge, SectionHead } from "@/components/common";
import TourCard from "@/components/TourCard";
import Seo from "@/components/Seo";

/* Background hero destinations */
const heroSlides = [
  { 
    id: "kashmir", 
    image: img.kashmir, 
    place: "Kashmir", 
    tagline: "Heaven on Earth", 
    subtitle: "Snow-capped peaks, shikara rides on Dal Lake & pine valleys.",
    tourId: "kashmir-paradise",
    price: "₹28,999"
  },
  { 
    id: "kerala", 
    image: img.kerala, 
    place: "Kerala", 
    tagline: "God's Own Country", 
    subtitle: "Serene backwaters, tea gardens of Munnar & luxury houseboats.",
    tourId: "kerala-backwaters",
    price: "₹26,999"
  },
  { 
    id: "rajasthan", 
    image: img.rajasthan, 
    place: "Rajasthan", 
    tagline: "Land of Kings", 
    subtitle: "Majestic forts, desert camel safaris & royal heritage stays.",
    tourId: "rajasthan-royal",
    price: "₹32,999"
  },
  { 
    id: "dubai", 
    image: img.dubai, 
    place: "Dubai", 
    tagline: "City of Dreams", 
    subtitle: "Burj Khalifa, futuristic architecture & thrilling dune bashing.",
    tourId: "dubai-delight",
    price: "₹54,999"
  },
  { 
    id: "bali", 
    image: img.bali, 
    place: "Bali", 
    tagline: "Island of Gods", 
    subtitle: "Private pool villas, sacred cliff temples & turquoise beaches.",
    tourId: "bali-bliss",
    price: "₹48,999"
  },
  { 
    id: "himachal", 
    image: img.himachal, 
    place: "Himachal", 
    tagline: "Peaks & Valleys", 
    subtitle: "Manali snow valleys, Solang adventure & Shimla colonial charm.",
    tourId: "himachal-hills",
    price: "₹24,999"
  },
];

export default function HomePage() {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("tours"); // 'tours' or 'taxi'
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  // Tour search state
  const [destSearch, setDestSearch] = useState("");
  const [budgetFilter, setBudgetFilter] = useState("all");
  const [openFaq, setOpenFaq] = useState(0);
  
  // Taxi calculator state
  const [selectedVehicle, setSelectedVehicle] = useState(vehicles[1]); // Default to Sedan
  const [estimatedKm, setEstimatedKm] = useState(120);
  const [tripType, setTripType] = useState("outstation");

  // Auto-advance hero slides
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = heroSlides[activeSlide];

  // Filtered tours for featured section
  const filteredTours = tours.filter((t) => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "domestic" || selectedCategory === "international") {
      return t.region === selectedCategory;
    }
    return t.category === selectedCategory;
  });

  const handleTourSearch = (e) => {
    e.preventDefault();
    navigate(`/tours?dest=${encodeURIComponent(destSearch)}&budget=${budgetFilter}`);
  };

  const calculatedTaxiFare = Math.max(
    selectedVehicle.minFare,
    selectedVehicle.perKm * estimatedKm
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Seo
        title="Travel With Rishabh — Premium Holiday Packages & Taxi Rentals"
        description="Crafting unforgettable holidays across every Indian state and worldwide. Handpicked tour packages, luxury private taxis, 24/7 dedicated travel concierge."
      />

      {/* ── HERO SECTION ────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-slate-950 pt-24 pb-16 lg:pt-28 lg:pb-20 text-white">
        {/* Background Images with smooth transitions */}
        {heroSlides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === activeSlide ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
            } transform transition-transform duration-10000`}
          >
            <img
              src={slide.image}
              alt={slide.place}
              className="h-full w-full object-cover object-center"
            />
            {/* Rich gradient overlays for luxury contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />
          </div>
        ))}

        <div className="container-wide relative z-10 grid gap-12 lg:grid-cols-12 items-center">
          {/* Left Column: Headings, trust badge and search widget */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/50 px-4 py-1.5 backdrop-blur-md">
              <MapPin className="h-3.5 w-3.5 text-amber-400" />
              <span className="text-xs font-semibold tracking-wider uppercase text-amber-300">
                {currentSlide.place} · {currentSlide.tagline}
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Custom Tour Packages & <br />
              <span className="text-amber-300">Sanitized Taxi Rentals</span>
            </h1>

            <p className="max-w-xl text-base sm:text-lg text-slate-200 leading-relaxed">
              {currentSlide.subtitle} Direct planning with Rishabh & team — honest pricing, verified hotels, and courteous GPS-tracked chauffeurs.
            </p>

            {/* Quick stats / trust chips */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-200 pt-1">
              <div className="flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 backdrop-blur-sm border border-white/10">
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                <span>4.9/5 Rating (Google & TripAdvisor)</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 backdrop-blur-sm border border-white/10">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                <span>Govt. Approved Tour Operator</span>
              </div>
            </div>

            {/* ── SEARCH & BOOKING TABS WIDGET ── */}
            <div className="w-full max-w-xl rounded-3xl border border-white/20 bg-slate-950/80 p-4 sm:p-6 backdrop-blur-xl shadow-2xl">
              {/* Tab Switcher */}
              <div className="flex rounded-2xl bg-white/10 p-1 mb-5">
                <button
                  type="button"
                  onClick={() => setActiveTab("tours")}
                  className={`flex-1 flex items-center justify-center gap-2 rounded-xl py-2.5 text-xs sm:text-sm font-semibold transition-all ${
                    activeTab === "tours"
                      ? "bg-primary text-white shadow-lg"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  <Plane className="h-4 w-4" /> Holiday Packages
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("taxi")}
                  className={`flex-1 flex items-center justify-center gap-2 rounded-xl py-2.5 text-xs sm:text-sm font-semibold transition-all ${
                    activeTab === "taxi"
                      ? "bg-primary text-white shadow-lg"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  <Car className="h-4 w-4" /> Taxi & Car Rentals
                </button>
              </div>

              {/* Tour Packages Form */}
              {activeTab === "tours" && (
                <form onSubmit={handleTourSearch} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Destination
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                          type="text"
                          value={destSearch}
                          onChange={(e) => setDestSearch(e.target.value)}
                          placeholder="e.g. Kashmir, Kerala, Dubai..."
                          className="w-full rounded-xl border border-white/20 bg-white/10 pl-10 pr-3 py-2.5 text-sm text-white placeholder:text-slate-400 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Budget (Per Person)
                      </label>
                      <select
                        value={budgetFilter}
                        onChange={(e) => setBudgetFilter(e.target.value)}
                        className="w-full rounded-xl border border-white/20 bg-slate-900 px-3 py-2.5 text-sm text-white focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                      >
                        <option value="all">Any Budget</option>
                        <option value="under20">Under ₹20,000</option>
                        <option value="20to40">₹20,000 – ₹40,000</option>
                        <option value="above40">Above ₹40,000</option>
                      </select>
                    </div>
                  </div>

                  {/* Quick popular tags */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    <span className="text-[11px] text-slate-400">Popular:</span>
                    {["Kashmir", "Kerala", "Goa", "Dubai", "Bali", "Rajasthan"].map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => setDestSearch(tag)}
                        className="rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-medium text-slate-300 hover:bg-amber-400 hover:text-slate-950 transition-colors"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="submit"
                      className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 py-3 text-sm font-bold text-slate-950 shadow-lg hover:from-amber-300 hover:to-amber-400 transition-all active:scale-[0.98]"
                    >
                      <Search className="h-4 w-4" /> Search Packages
                    </button>
                    <a
                      href={waLink("Hi Rishabh! I want to plan a customized tour package.")}
                      className="flex items-center justify-center gap-1.5 rounded-xl border border-emerald-500/50 bg-emerald-600/30 px-4 py-3 text-xs sm:text-sm font-semibold text-emerald-300 hover:bg-emerald-600/40 transition-all"
                    >
                      <MessageCircle className="h-4 w-4 text-emerald-400" /> WhatsApp
                    </a>
                  </div>
                </form>
              )}

              {/* Taxi Rental Quick Form */}
              {activeTab === "taxi" && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Vehicle Type
                      </label>
                      <select
                        value={selectedVehicle.id}
                        onChange={(e) => {
                          const v = vehicles.find((item) => item.id === e.target.value);
                          if (v) setSelectedVehicle(v);
                        }}
                        className="w-full rounded-xl border border-white/20 bg-slate-900 px-3 py-2.5 text-sm text-white focus:border-amber-400 focus:outline-none"
                      >
                        {vehicles.map((v) => (
                          <option key={v.id} value={v.id}>
                            {v.name} ({v.seats} Seater) — ₹{v.perKm}/km
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Trip Type
                      </label>
                      <select
                        value={tripType}
                        onChange={(e) => setTripType(e.target.value)}
                        className="w-full rounded-xl border border-white/20 bg-slate-900 px-3 py-2.5 text-sm text-white focus:border-amber-400 focus:outline-none"
                      >
                        <option value="outstation">Outstation Round Trip</option>
                        <option value="oneway">Outstation One Way</option>
                        <option value="local">Local City (8hr / 80km)</option>
                        <option value="airport">Airport Pickup / Drop</option>
                      </select>
                    </div>
                  </div>

                  <div className="rounded-xl bg-white/5 p-3 flex items-center justify-between border border-white/10">
                    <div>
                      <p className="text-xs text-slate-400">Estimated Rate ({selectedVehicle.name})</p>
                      <p className="text-lg font-bold text-amber-400">
                        {inr(selectedVehicle.perKm)} <span className="text-xs font-normal text-slate-300">/ km (Min {inr(selectedVehicle.minFare)})</span>
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block rounded-full bg-emerald-500/20 px-2.5 py-1 text-[11px] font-semibold text-emerald-300">
                        AC & Chauffeur Included
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-1">
                    <a
                      href={waLink(
                        `Hi! I need a ${selectedVehicle.name} for ${tripType}. Please share the best fare estimate.`
                      )}
                      className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 py-3 text-sm font-bold text-white shadow-lg hover:from-emerald-400 hover:to-emerald-500 transition-all active:scale-[0.98]"
                    >
                      <MessageCircle className="h-4 w-4" /> Book Cab on WhatsApp
                    </a>
                    <Link
                      to="/taxi"
                      className="flex items-center justify-center rounded-xl bg-white/10 px-4 py-3 text-xs sm:text-sm font-semibold text-white hover:bg-white/20 transition-all"
                    >
                      View Fleet
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Interactive Destination Cards / Hero Gallery */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full max-w-md space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-300 font-semibold px-1">
                <span>Featured Destinations</span>
                <span>Click to explore</span>
              </div>

              {/* Destination Slide Selector Cards */}
              <div className="grid grid-cols-2 gap-3">
                {heroSlides.map((slide, idx) => (
                  <div
                    key={slide.id}
                    onClick={() => setActiveSlide(idx)}
                    className={`group relative cursor-pointer overflow-hidden rounded-2xl border transition-all duration-300 ${
                      idx === activeSlide
                        ? "border-amber-400 ring-2 ring-amber-400/50 shadow-xl scale-[1.02]"
                        : "border-white/15 opacity-75 hover:opacity-100 hover:scale-[1.01]"
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.place}
                      className="h-28 sm:h-32 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    <div className="absolute bottom-2.5 left-2.5 right-2.5">
                      <p className="text-xs font-bold text-white leading-tight">{slide.place}</p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-[10px] text-amber-300 font-medium">{slide.tagline}</span>
                        <span className="text-[10px] font-bold text-white bg-black/60 px-1.5 py-0.5 rounded">
                          {slide.price}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct Link to Currently Selected Hero Package */}
              <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md flex items-center justify-between mt-4">
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-amber-300 font-semibold">Special Package</p>
                  <p className="text-sm font-bold text-white">{currentSlide.place} Tour Package</p>
                </div>
                <Link
                  to={`/tours/${currentSlide.tourId}`}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white text-slate-900 px-4 py-2 text-xs font-bold shadow-md hover:bg-amber-300 transition-colors"
                >
                  View Plan <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── KEY HIGHLIGHTS BAR ────────────────────────────────────── */}
      <section className="border-y border-border bg-card py-6 shadow-sm">
        <div className="container-wide grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex items-center gap-3.5 p-2">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Headphones className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-foreground">Direct Human Planning</h4>
              <p className="text-xs text-muted-foreground">Talk directly to Rishabh & team</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-2">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-foreground">Transparent Fixed Rates</h4>
              <p className="text-xs text-muted-foreground">Zero hidden toll or tax surprises</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-2">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600">
              <Clock className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-foreground">24/7 On-Trip Support</h4>
              <p className="text-xs text-muted-foreground">Dedicated helpline throughout trip</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-2">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-foreground">Audited Stays & Cabs</h4>
              <p className="text-xs text-muted-foreground">Hand-inspected hotels & GPS cabs</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED TOUR PACKAGES ────────────────────────────────── */}
      <section className="container-wide py-16 sm:py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <SectionHead
            eyebrow="Popular Escapes"
            title="Handcrafted Holiday Packages"
            sub="Explore India's most breathtaking valleys, deserts and backwaters alongside world-famous global destinations."
          />
          <Link
            to="/tours"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline shrink-0"
          >
            Explore All {tours.length} Packages <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { key: "all", label: "All Packages" },
            { key: "domestic", label: "Domestic" },
            { key: "international", label: "International" },
            { key: "Honeymoon", label: "Honeymoon Special" },
            { key: "Family", label: "Family Holidays" },
            { key: "Heritage", label: "Heritage & Culture" },
          ].map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat.key
                  ? "bg-primary text-primary-foreground shadow-md scale-105"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tour Cards Grid */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTours.slice(0, 6).map((tour) => (
            <TourCard key={tour.id} t={tour} />
          ))}
        </div>

        {/* Customized Package Callout */}
        <div className="mt-12 rounded-3xl border border-border bg-gradient-to-r from-primary/10 via-amber-500/10 to-primary/5 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
              Want a fully customized travel itinerary?
            </h3>
            <p className="text-sm text-muted-foreground">
              Tell us your destination, dates, group size and budget. We'll design the perfect custom package in 30 minutes!
            </p>
          </div>
          <a
            href={waLink("Hi Rishabh! I want a customized itinerary made for my trip.")}
            className="rounded-full bg-accent px-7 py-3 text-sm font-bold text-accent-foreground shadow-md hover:scale-105 transition-all shrink-0"
          >
            Customize on WhatsApp
          </a>
        </div>
      </section>

      {/* ── TAXI & FLEET CALCULATOR SECTION ──────────────────────── */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="container-wide relative z-10">
          <div className="max-w-2xl text-center mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Trusted Chauffeur & Fleet
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold">
              Reliable Taxi Rentals with Transparent Pricing
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300">
              Local hourly rentals, on-time airport pickups, and comfortable outstation road trips with polite verified drivers.
            </p>
          </div>

          {/* 3 Taxi Service Offerings */}
          <div className="grid gap-6 md:grid-cols-3 mb-16">
            {taxiServices.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-amber-400/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400/20 text-amber-400 mb-4">
                  <Car className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold">{service.title}</h3>
                <p className="text-xs text-amber-300 font-medium mt-0.5">{service.subtitle}</p>
                <p className="text-sm text-slate-300 mt-2">{service.desc}</p>
                <ul className="mt-4 space-y-1.5 text-xs text-slate-300">
                  {service.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Interactive Fleet Rates Showcase */}
          <div className="rounded-3xl border border-white/15 bg-slate-950/80 p-6 sm:p-10 shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h3 className="font-display text-2xl font-bold">Explore Our Vehicle Fleet</h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Sanitized, GPS-tracked vehicles with seasoned professional chauffeurs.
                </p>
              </div>
              <Link
                to="/taxi"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-xs font-semibold hover:bg-white/20 transition-colors w-fit"
              >
                View Full Fleet Details <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {vehicles.map((v) => (
                <div
                  key={v.id}
                  className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden transition-all hover:border-amber-400/50 hover:shadow-lg group"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={v.image}
                      alt={v.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 rounded-full bg-black/70 px-2.5 py-1 text-xs font-bold text-amber-300">
                      {inr(v.perKm)} / km
                    </div>
                  </div>
                  <div className="p-5 space-y-3">
                    <div>
                      <h4 className="font-display text-lg font-bold text-white">{v.name}</h4>
                      <p className="text-xs text-slate-400">{v.models}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                      <span className="flex items-center gap-1.5">
                        <Users className="h-3.5 w-3.5 text-amber-400" /> {v.seats} Seats
                      </span>
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> {v.ac}
                      </span>
                    </div>

                    <div className="pt-2 flex items-center justify-between border-t border-white/10">
                      <span className="text-xs text-slate-400">Min Fare: {inr(v.minFare)}</span>
                      <a
                        href={waLink(`Hi Rishabh! I would like to book a ${v.name} taxi.`)}
                        className="rounded-full bg-amber-400 px-4 py-1.5 text-xs font-bold text-slate-950 hover:bg-amber-300 transition-colors"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────────── */}
      <section className="container-wide py-16 sm:py-20">
        <SectionHead
          eyebrow="Why Travel With Rishabh"
          title="The Gold Standard in Indian & Global Travel"
          sub="We take care of every hotel reservation, flight alignment, private vehicle and local guide so you have zero worries."
          center
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((w, i) => (
            <div
              key={w.title}
              className="rounded-3xl border border-border bg-card p-6 sm:p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary font-bold text-lg mb-5">
                0{i + 1}
              </div>
              <h4 className="font-display text-lg font-bold text-foreground">{w.title}</h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS SECTION ─────────────────────────────────── */}
      <section className="bg-secondary/40 py-16 sm:py-20 border-y border-border">
        <div className="container-wide">
          <SectionHead
            eyebrow="Traveller Stories"
            title="Loved by Over 50,000+ Happy Explorers"
            sub="Real feedback from families, couples, corporate groups and solo travelers."
            center
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-3xl border border-border bg-card p-6 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-3">
                    <Stars value={t.rating} />
                  </div>
                  <p className="text-sm text-foreground/90 italic leading-relaxed">
                    "{t.text}"
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-3 pt-4 border-t border-border/60">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-10 w-10 rounded-full object-cover border border-primary/20"
                  />
                  <div>
                    <h5 className="text-xs font-bold text-foreground">{t.name}</h5>
                    <p className="text-[11px] text-muted-foreground">{t.place} · <span className="text-primary font-semibold">{t.trip}</span></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LATEST TRAVEL GUIDES & BLOG ──────────────────────────── */}
      <section className="container-wide py-16 sm:py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <SectionHead
            eyebrow="Travel Guides"
            title="Expert Advice & Itinerary Guides"
            sub="Curated tips, season guides, and budget recommendations from seasoned travel planners."
          />
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline shrink-0"
          >
            View All Guides <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {blog.map((b) => (
            <article
              key={b.id}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={b.image}
                  alt={b.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                  {b.category}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <span>{b.date}</span>
                    <span>·</span>
                    <span>{b.read}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {b.excerpt}
                  </p>
                </div>
                <Link
                  to="/blog"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                >
                  Read Full Guide <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── FREQUENTLY ASKED QUESTIONS ───────────────────────────── */}
      <section className="container-wide py-16 sm:py-20">
        <div className="max-w-3xl mx-auto">
          <SectionHead
            eyebrow="Clear & Transparent"
            title="Frequently Asked Questions"
            sub="Everything you need to know about our custom packages, taxi bookings, payments, and cancellation."
            center
          />

          <div className="mt-10 space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="flex w-full items-center justify-between p-5 text-left font-display text-base font-bold text-foreground hover:text-primary transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs text-primary font-bold">
                      Q{idx + 1}
                    </span>
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-200 ${
                      openFaq === idx ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-sm text-muted-foreground leading-relaxed border-t border-border/40 animate-in fade-in-50">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-muted-foreground">
              Have a specific question about your upcoming travel dates?{" "}
              <a
                href={waLink("Hi Rishabh! I have a question regarding my travel booking.")}
                className="font-bold text-primary hover:underline"
              >
                Ask Rishabh on WhatsApp →
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION BANNER ─────────────────────────────────── */}
      <section className="container-wide pb-16 sm:pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-primary to-slate-950 px-6 py-12 sm:px-12 sm:py-16 text-white shadow-2xl text-center">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-amber-300">
              Start Your Adventure
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Ready to Plan Your Next Dream Holiday?
            </h2>
            <p className="text-sm sm:text-base text-slate-200">
              Talk directly with Rishabh. Get customized quotes, best season advice, and special discounts with zero obligation.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href={waLink("Hi Rishabh! I'm planning my next trip and would love your guidance.")}
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-3.5 text-sm font-bold text-white shadow-lg hover:scale-105 transition-all"
              >
                <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white/15 px-8 py-3.5 text-sm font-bold text-white backdrop-blur-sm border border-white/20 hover:bg-white/25 transition-all"
              >
                <Phone className="h-4 w-4" /> Request Callback
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}