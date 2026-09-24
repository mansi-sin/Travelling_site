import React, { useState } from "react";
import { 
  Users, Briefcase, Snowflake, UserCheck, Car, 
  MapPin, ShieldCheck, Clock, Calculator, ArrowRight, 
  CheckCircle2, Sparkles, Phone, MessageCircle, HelpCircle,
  Navigation, Plane, Map
} from "lucide-react";
import { vehicles, taxiServices, waLink, img, PHONE } from "@/data/content";
import { inr, SectionHead } from "@/components/common";
import Seo from "@/components/Seo";

const popularRoutes = [
  { from: "Delhi", to: "Agra (Taj Mahal)", distance: 230, time: "3.5 hrs", popularCar: "Sedan / SUV", startingFrom: 3500 },
  { from: "Delhi", to: "Jaipur (Pink City)", distance: 280, time: "4.5 hrs", popularCar: "Sedan / Innova", startingFrom: 4200 },
  { from: "Delhi", to: "Shimla (Himachal)", distance: 350, time: "7 hrs", popularCar: "Innova Crysta", startingFrom: 6500 },
  { from: "Delhi", to: "Manali (Snow Peak)", distance: 530, time: "11 hrs", popularCar: "Innova / Tempo", startingFrom: 9500 },
  { from: "Delhi", to: "Rishikesh / Haridwar", distance: 240, time: "4.5 hrs", popularCar: "Sedan / SUV", startingFrom: 3800 },
  { from: "Delhi", to: "Chandigarh", distance: 250, time: "4 hrs", popularCar: "Sedan / SUV", startingFrom: 3600 },
];

const taxiFaqs = [
  {
    q: "Are toll taxes and state border taxes included in the fare?",
    a: "State permits, tolls, and parking are transparently billed at actual receipt value or can be bundled into an all-inclusive flat rate upon request.",
  },
  {
    q: "Is there any night driving surcharge?",
    a: "No hidden charges! Driver Night Allowance (DA) of ₹300 applies only if driving between 10:00 PM and 6:00 AM.",
  },
  {
    q: "Can I customize the pickup time and make multiple stops?",
    a: "Yes, 100%! All our outstation and local cabs are exclusively dedicated to you. You can take scenic breaks, restaurant halts, and photo stops anytime.",
  },
  {
    q: "How clean and sanitized are the vehicles?",
    a: "Every vehicle is vacuumed and washed before every trip. Our polite, verified chauffeurs follow all hygiene protocols.",
  },
];

export default function TaxiPage() {
  const [selectedVehicle, setSelectedVehicle] = useState(vehicles[1]); // Sedan default
  const [distanceKm, setDistanceKm] = useState(150);
  const [tripType, setTripType] = useState("outstation-round");
  const [pickupCity, setPickupCity] = useState("Delhi NCR");
  const [dropCity, setDropCity] = useState("");

  const estimatedFare = Math.max(
    selectedVehicle.minFare,
    selectedVehicle.perKm * distanceKm
  );

  const calcBookingMsg = `Hi Rishabh! I want to book a ${selectedVehicle.name} (${selectedVehicle.models}) from ${pickupCity}${
    dropCity ? ` to ${dropCity}` : ""
  } (~${distanceKm} km, ${tripType}). Estimated fare ~${inr(estimatedFare)}. Please confirm availability.`;

  return (
    <div className="min-h-screen">
      <Seo
        title="Taxi Rental Services — Airport Transfers, Local & Outstation Trips"
        description="Book reliable taxi rentals and vehicle rentals — airport transfers, local taxi and outstation trips — from hatchbacks to luxury Mercedes & coach buses with verified drivers."
        path="/taxi"
      />

      {/* ── HERO BANNER ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-slate-950 py-20 lg:py-24 text-white">
        <img
          src={img.car}
          alt="Premium taxi rental services"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />

        <div className="container-wide relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-300 backdrop-blur-md">
            <Car className="h-3.5 w-3.5" /> Chauffeur-Driven Cab Rentals · Delhi NCR & Outstation
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Seamless & Safe Cab Rentals
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            From local city running and guaranteed on-time airport transfers to scenic interstate outstation journeys. Transparent per-km rates & zero hidden fees.
          </p>
        </div>
      </section>

      {/* ── LIVE INTERACTIVE FARE ESTIMATOR WIDGET ─────────────────── */}
      <section className="container-wide -mt-10 relative z-20">
        <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-2xl space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-5">
            <div>
              <div className="flex items-center gap-2 text-primary font-bold text-sm">
                <Calculator className="h-5 w-5" /> Instant Taxi Fare Estimator
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mt-0.5">
                Calculate & Book Your Ride in 30 Seconds
              </h3>
            </div>
            <span className="rounded-full bg-emerald-500/10 text-emerald-600 px-3.5 py-1 text-xs font-bold w-fit">
              ✓ Verified Drivers & AC Guaranteed
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-12">
            {/* Left Controls */}
            <div className="md:col-span-7 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-foreground mb-1.5">
                    Pickup Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type="text"
                      value={pickupCity}
                      onChange={(e) => setPickupCity(e.target.value)}
                      placeholder="e.g. Delhi Airport / Gurgaon"
                      className="w-full rounded-2xl border border-border bg-background pl-10 pr-3 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-foreground mb-1.5">
                    Drop Destination
                  </label>
                  <div className="relative">
                    <Navigation className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type="text"
                      value={dropCity}
                      onChange={(e) => setDropCity(e.target.value)}
                      placeholder="e.g. Agra / Jaipur / Local"
                      className="w-full rounded-2xl border border-border bg-background pl-10 pr-3 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Vehicle Type Selection */}
              <div>
                <label className="block text-xs font-bold text-foreground mb-2">
                  Select Vehicle Category
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {vehicles.map((v) => (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setSelectedVehicle(v)}
                      className={`rounded-2xl border p-3 text-left transition-all ${
                        selectedVehicle.id === v.id
                          ? "border-primary bg-primary/10 text-foreground ring-2 ring-primary/40 shadow-xs"
                          : "border-border bg-background text-muted-foreground hover:bg-secondary"
                      }`}
                    >
                      <p className="text-xs font-bold text-foreground">{v.name}</p>
                      <p className="text-[11px] text-primary font-semibold">{inr(v.perKm)}/km</p>
                      <p className="text-[10px] text-muted-foreground">{v.seats} Seats · {v.ac}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Distance Slider */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-foreground">Estimated Trip Distance:</span>
                  <span className="font-bold text-primary text-sm">{distanceKm} KM</span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="800"
                  step="10"
                  value={distanceKm}
                  onChange={(e) => setDistanceKm(Number(e.target.value))}
                  className="w-full accent-primary cursor-pointer h-2 bg-secondary rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-muted-foreground">
                  <span>Local (40 km)</span>
                  <span>Weekend (250 km)</span>
                  <span>Hills / Outstation (500+ km)</span>
                </div>
              </div>
            </div>

            {/* Right Summary Card */}
            <div className="md:col-span-5 rounded-3xl bg-secondary/60 border border-border p-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Estimated Cost
                  </span>
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-bold text-primary">
                    {selectedVehicle.name}
                  </span>
                </div>

                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-4xl font-bold text-primary">
                      {inr(estimatedFare)}
                    </span>
                    <span className="text-xs text-muted-foreground">(Approx)</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Rate: {inr(selectedVehicle.perKm)}/km × {distanceKm} km (Min fare {inr(selectedVehicle.minFare)})
                  </p>
                </div>

                <div className="space-y-1.5 text-xs text-foreground/85 pt-2 border-t border-border/80">
                  <p className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                    <CheckCircle2 className="h-4 w-4" /> Sanitized AC Vehicle
                  </p>
                  <p className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                    <CheckCircle2 className="h-4 w-4" /> Verified Highway Driver Included
                  </p>
                  <p className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                    <CheckCircle2 className="h-4 w-4" /> 24/7 Dedicated Support
                  </p>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <a
                  href={waLink(calcBookingMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 text-sm font-bold text-white shadow-md hover:scale-[1.02] active:scale-95 transition-all"
                >
                  <MessageCircle className="h-5 w-5" /> Book This Cab on WhatsApp
                </a>
                <a
                  href={`tel:${PHONE.replace(/\s/g, "")}`}
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card py-2.5 text-xs font-bold text-foreground hover:bg-secondary"
                >
                  <Phone className="h-3.5 w-3.5 text-primary" /> Call Chauffeur Desk: {PHONE}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3 CORE SERVICES ───────────────────────────────────────── */}
      <section className="container-wide py-16">
        <SectionHead eyebrow="Tailored for Every Need" title="Our Taxi Rental Services" center />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {taxiServices.map((s) => (
            <div
              key={s.title}
              className="rounded-3xl border border-border bg-card p-7 shadow-xs hover:border-primary/40 hover:shadow-md transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-5">
                <Car className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">{s.title}</h3>
              <p className="text-xs font-semibold text-primary mt-1">{s.subtitle}</p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <ul className="mt-5 space-y-2 text-xs text-foreground/80 pt-4 border-t border-border">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── FULL FLEET SHOWCASE ───────────────────────────────────── */}
      <section className="bg-secondary/40 py-16 border-y border-border">
        <div className="container-wide">
          <SectionHead
            eyebrow="Sanitized & GPS-Tracked"
            title="Our Complete Vehicle Fleet"
            sub="Choose from economical hatchbacks to spacious 49-seater luxury coaches."
          />

          <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {vehicles.map((v) => (
              <div
                key={v.id}
                className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-primary/40 flex flex-col justify-between"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={v.image}
                    alt={v.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3.5 right-3.5 rounded-full bg-black/75 backdrop-blur-md px-3 py-1 text-xs font-bold text-amber-300 shadow-md">
                    {inr(v.perKm)} / KM
                  </span>
                  <span className="absolute bottom-3 left-3.5 rounded-full bg-black/60 px-3 py-1 text-[11px] font-semibold text-white">
                    Min {inr(v.minFare)}
                  </span>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-display text-xl font-bold text-foreground">{v.name}</h3>
                    <p className="text-xs text-primary font-semibold">{v.models}</p>
                    <p className="text-xs text-muted-foreground">{v.recommendedFor}</p>

                    <div className="grid grid-cols-2 gap-2 pt-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5 rounded-md bg-secondary/80 p-1.5">
                        <Users className="h-3.5 w-3.5 text-primary" /> {v.seats} Seats
                      </span>
                      <span className="flex items-center gap-1.5 rounded-md bg-secondary/80 p-1.5">
                        <Briefcase className="h-3.5 w-3.5 text-primary" /> {v.luggage}
                      </span>
                      <span className="flex items-center gap-1.5 rounded-md bg-secondary/80 p-1.5">
                        <Snowflake className="h-3.5 w-3.5 text-primary" /> {v.ac}
                      </span>
                      <span className="flex items-center gap-1.5 rounded-md bg-secondary/80 p-1.5">
                        <UserCheck className="h-3.5 w-3.5 text-emerald-600" /> Chauffeur
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[10px] text-muted-foreground uppercase">Rate from</p>
                      <p className="font-display text-2xl font-bold text-primary">
                        {inr(v.perKm)}<span className="text-xs font-normal text-muted-foreground">/km</span>
                      </p>
                    </div>

                    <a
                      href={waLink(`Hi Rishabh! I want to book a ${v.name} (${v.models}).`)}
                      className="rounded-full bg-[#25D366] px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:scale-105 transition-all flex items-center gap-1.5"
                    >
                      <MessageCircle className="h-4 w-4" /> Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POPULAR OUTSTATION ROUTES ──────────────────────────────── */}
      <section className="container-wide py-16">
        <SectionHead
          eyebrow="Fixed & Fair Pricing"
          title="Popular Outstation Routes from Delhi NCR"
          sub="Explore top weekend gateways, hill stations and heritage cities with fixed starting rates."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {popularRoutes.map((r) => (
            <div
              key={r.to}
              className="rounded-2xl border border-border bg-card p-5 shadow-xs flex flex-col justify-between space-y-3 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-display text-base font-bold text-foreground">
                    {r.from} ➔ {r.to}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {r.distance} KM · Approx {r.time}
                  </p>
                </div>
                <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-bold text-primary">
                  From {inr(r.startingFrom)}
                </span>
              </div>

              <div className="pt-2 border-t border-border flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Ideal: {r.popularCar}</span>
                <a
                  href={waLink(`Hi Rishabh! I want a cab from ${r.from} to ${r.to}. Please share the best quote.`)}
                  className="font-bold text-primary hover:underline flex items-center gap-1"
                >
                  Book Route <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQS SECTION ─────────────────────────────────────────── */}
      <section className="bg-secondary/40 py-16 border-t border-border">
        <div className="container-narrow space-y-8">
          <SectionHead
            eyebrow="Got Questions?"
            title="Frequently Asked Taxi Questions"
            center
          />

          <div className="space-y-4">
            {taxiFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border bg-card p-6 shadow-xs space-y-2"
              >
                <h4 className="font-display text-base font-bold text-foreground flex items-center gap-2">
                  <HelpCircle className="h-4 w-4 text-primary shrink-0" />
                  {faq.q}
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

