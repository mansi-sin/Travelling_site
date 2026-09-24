import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  Check, X, MapPin, Utensils, Hotel, Bus, Calendar, 
  Clock, ShieldCheck, Star, Users, MessageCircle, 
  Phone, ArrowLeft, Tag, Sparkles, ChevronRight, Share2 
} from "lucide-react";
import { tours, waLink, PHONE } from "@/data/content";
import { inr, Stars, SectionHead, Badge } from "@/components/common";
import TourCard from "@/components/TourCard";
import Seo from "@/components/Seo";

export default function TourDetailPage() {
  const { id } = useParams();
  const [travellers, setTravellers] = useState(2);
  const [coupon, setCoupon] = useState("WANDER10");
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponMsg, setCouponMsg] = useState("");
  const [reqModalOpen, setReqModalOpen] = useState(false);
  const [callbackSent, setCallbackSent] = useState(false);

  const t = tours.find((x) => x.id === id);

  if (!t) {
    return (
      <div className="container-wide py-32 text-center space-y-4">
        <h2 className="font-display text-3xl font-bold">Tour Package Not Found</h2>
        <p className="text-muted-foreground">The package you are looking for does not exist or has moved.</p>
        <Link
          to="/tours"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-white shadow-md"
        >
          <ArrowLeft className="h-4 w-4" /> Browse All Tour Packages
        </Link>
      </div>
    );
  }

  const discountRate = couponApplied ? 0.1 : 0;
  const basePricePerPerson = t.price;
  const finalPricePerPerson = Math.round(basePricePerPerson * (1 - discountRate));
  const estimatedTotal = finalPricePerPerson * travellers;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (coupon.trim().toUpperCase() === "WANDER10") {
      setCouponApplied(true);
      setCouponMsg("🎉 Coupon WANDER10 applied! 10% instant discount unlocked.");
    } else {
      setCouponMsg("❌ Invalid coupon code. Try 'WANDER10'.");
    }
  };

  const facts = [
    { icon: Calendar, title: "Duration", label: `${t.nights} Nights / ${t.days} Days` },
    { icon: Hotel, title: "Stay", label: t.hotel },
    { icon: Utensils, title: "Meal Plan", label: t.meals },
    { icon: Bus, title: "Transfers", label: t.transport },
  ];

  const relatedTours = tours.filter((x) => x.id !== t.id).slice(0, 3);

  const bookingMessage = `Hi Rishabh! I want to book the "${t.title}" (${t.nights}N/${t.days}D) for ${travellers} travellers.${
    couponApplied ? " Coupon WANDER10 applied." : ""
  } Total approx: ${inr(estimatedTotal)}. Please confirm availability.`;

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={`${t.title} — ${t.nights}N/${t.days}D ${t.destination} Holiday Package`}
        description={`Book the ${t.title} package in ${t.destination} (${t.nights}N/${t.days}D). Handpicked stays, private cab, breakfasts & dinners by Travel With Rishabh.`}
        image={t.image}
        path={`/tours/${t.id}`}
      />

      {/* ── HERO BANNER ─────────────────────────────────────────── */}
      <section className="relative h-[420px] lg:h-[480px] overflow-hidden bg-slate-950 text-white">
        <img
          src={t.image}
          alt={`${t.title} itinerary`}
          className="h-full w-full object-cover object-center brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-black/30" />

        <div className="container-wide absolute inset-0 flex flex-col justify-end pb-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-slate-300 mb-3">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3.5 w-3.5 opacity-50" />
            <Link to="/tours" className="hover:text-white">Tour Packages</Link>
            <ChevronRight className="h-3.5 w-3.5 opacity-50" />
            <span className="text-amber-300 font-semibold">{t.destination}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-white shadow-sm">
              {t.tag || "Featured Package"}
            </span>
            <span className="rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5 text-amber-400" /> {t.destination}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl leading-tight">
            {t.title}
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-200">
            <div className="flex items-center gap-1.5">
              <Stars value={t.rating} />
              <span className="font-bold text-white">{t.rating}</span>
              <span className="text-slate-300">({t.reviewsCount || 150}+ verified reviews)</span>
            </div>
            <span>•</span>
            <span className="flex items-center gap-1 text-emerald-400 font-semibold">
              <ShieldCheck className="h-4 w-4" /> 100% Free Cancellation (30 Days)
            </span>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT & STICKY BOOKING BAR ───────────────────────── */}
      <section className="container-wide grid gap-10 py-12 lg:grid-cols-12">
        {/* Left Column: Facts, Itinerary, Inclusions, Highlights */}
        <div className="lg:col-span-8 space-y-10">
          {/* Quick Facts Grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {facts.map((f) => (
              <div
                key={f.title}
                className="rounded-3xl border border-border bg-card p-5 text-center shadow-xs transition-all hover:border-primary/40"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary mx-auto mb-2">
                  <f.icon className="h-5 w-5" />
                </div>
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">{f.title}</p>
                <p className="mt-0.5 text-xs sm:text-sm font-bold text-foreground">{f.label}</p>
              </div>
            ))}
          </div>

          {/* Sightseeing Highlights */}
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-xs">
            <SectionHead eyebrow="Key Attractions" title="Sightseeing Highlights" />
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-foreground/90">
              {t.sightseeing}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {t.sightseeing.split(",").map((point) => (
                <span
                  key={point}
                  className="rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold text-secondary-foreground"
                >
                  ✓ {point.trim()}
                </span>
              ))}
            </div>
          </div>

          {/* Day-by-Day Itinerary Timeline */}
          <div>
            <SectionHead eyebrow="Full Plan" title="Day-by-Day Detailed Itinerary" />
            <div className="mt-6 space-y-4">
              {t.itinerary.map((d) => (
                <div
                  key={d.day}
                  className="rounded-3xl border border-border bg-card p-6 shadow-xs flex flex-col sm:flex-row gap-5 items-start transition-all hover:border-primary/40"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-teal-700 text-white font-display text-lg font-bold shadow-md">
                    D{d.day}
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-display text-base sm:text-lg font-bold text-foreground">
                        {d.title}
                      </h4>
                      <span className="text-[11px] font-semibold text-primary rounded-full bg-primary/10 px-2.5 py-0.5">
                        Day {d.day}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {d.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inclusions vs Exclusions */}
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Inclusions */}
            <div className="rounded-3xl border border-emerald-500/30 bg-emerald-500/5 p-6 shadow-xs">
              <h3 className="font-display text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
                <Check className="h-5 w-5 text-emerald-600" /> What's Included
              </h3>
              <ul className="mt-4 space-y-2.5">
                {t.inclusions.map((inc) => (
                  <li key={inc} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90">
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-600">
                      ✓
                    </span>
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions */}
            <div className="rounded-3xl border border-border bg-card p-6 shadow-xs">
              <h3 className="font-display text-lg font-bold text-destructive flex items-center gap-2">
                <X className="h-5 w-5" /> What's Excluded
              </h3>
              <ul className="mt-4 space-y-2.5">
                {t.exclusions.map((exc) => (
                  <li key={exc} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground">
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                      ✕
                    </span>
                    <span>{exc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Cancellation Policy Box */}
          <div className="rounded-3xl border border-border bg-secondary/50 p-6 space-y-2">
            <h4 className="font-display text-base font-bold text-foreground flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" /> Transparent Cancellation Policy
            </h4>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {t.cancellation}
            </p>
          </div>
        </div>

        {/* Right Column: Sticky Booking Widget */}
        <aside className="lg:col-span-4">
          <div className="sticky top-24 rounded-3xl border border-border bg-card p-6 sm:p-7 shadow-xl space-y-6">
            {/* Price Header */}
            <div>
              <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                Special Package Price
              </span>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="font-display text-3xl sm:text-4xl font-bold text-primary">
                  {inr(finalPricePerPerson)}
                </span>
                {t.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    {inr(t.originalPrice)}
                  </span>
                )}
                <span className="text-xs text-muted-foreground">/ person</span>
              </div>
              <p className="text-[11px] text-muted-foreground mt-0.5">Twin sharing accommodation</p>
            </div>

            {/* Travellers Counter */}
            <div className="rounded-2xl bg-secondary/50 p-4 border border-border/80 space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-foreground flex items-center gap-1.5">
                  <Users className="h-4 w-4 text-primary" /> Number of Travellers
                </label>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setTravellers((prev) => Math.max(1, prev - 1))}
                    className="flex h-8 w-8 items-center justify-center rounded-xl bg-card border border-border text-foreground font-bold hover:bg-secondary"
                  >
                    -
                  </button>
                  <span className="font-bold text-foreground text-sm w-4 text-center">{travellers}</span>
                  <button
                    type="button"
                    onClick={() => setTravellers((prev) => prev + 1)}
                    className="flex h-8 w-8 items-center justify-center rounded-xl bg-card border border-border text-foreground font-bold hover:bg-secondary"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="pt-2 border-t border-border/60 flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Estimated Total ({travellers} Pax):</span>
                <span className="font-bold text-foreground text-sm">{inr(estimatedTotal)}</span>
              </div>
            </div>

            {/* Coupon Code Section */}
            <form onSubmit={handleApplyCoupon} className="space-y-2">
              <label className="text-xs font-bold text-foreground flex items-center gap-1">
                <Tag className="h-3.5 w-3.5 text-amber-500" /> Have a Coupon Code?
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  placeholder="Enter code (e.g. WANDER10)"
                  className="flex-1 rounded-xl border border-border bg-background px-3 py-2 text-xs uppercase font-bold text-foreground placeholder:font-normal focus:border-primary focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-secondary px-4 py-2 text-xs font-bold text-secondary-foreground hover:bg-secondary/80 transition-colors"
                >
                  Apply
                </button>
              </div>
              {couponMsg && (
                <p className={`text-[11px] font-medium ${couponApplied ? "text-emerald-600" : "text-destructive"}`}>
                  {couponMsg}
                </p>
              )}
            </form>

            {/* Direct Booking CTA */}
            <div className="space-y-3 pt-2">
              <a
                href={waLink(bookingMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 text-sm font-bold text-white shadow-md hover:scale-[1.02] active:scale-95 transition-all"
              >
                <MessageCircle className="h-5 w-5" /> Book Instantly on WhatsApp
              </a>

              <a
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-border bg-secondary/70 py-3 text-xs font-bold text-foreground hover:bg-secondary transition-all"
              >
                <Phone className="h-4 w-4 text-primary" /> Call Expert: {PHONE}
              </a>
            </div>

            {/* Trust Assurance Badge */}
            <div className="pt-2 text-center text-[11px] text-muted-foreground space-y-1">
              <p className="flex items-center justify-center gap-1 text-emerald-600 font-semibold">
                <ShieldCheck className="h-3.5 w-3.5" /> Guaranteed Best Price · Zero Booking Fee
              </p>
              <p>Instant confirmation directly from Rishabh.</p>
            </div>
          </div>
        </aside>
      </section>

      {/* ── SIMILAR / RELATED PACKAGES ────────────────────────────── */}
      <section className="bg-secondary/40 py-16 border-t border-border">
        <div className="container-wide">
          <SectionHead
            eyebrow="More Ideas"
            title="Other Popular Packages You May Like"
            sub="Explore other top rated destinations with handcrafted itineraries."
          />
          <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {relatedTours.map((item) => (
              <TourCard key={item.id} t={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

