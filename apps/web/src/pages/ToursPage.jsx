import React, { useMemo, useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { 
  Search, Filter, SlidersHorizontal, Sparkles, MapPin, 
  ArrowRight, MessageCircle, Phone, Compass 
} from "lucide-react";
import { tours, tourCategories, otherDomestic, otherIntl, img, waLink } from "@/data/content";
import { SectionHead } from "@/components/common";
import TourCard from "@/components/TourCard";
import Seo from "@/components/Seo";

export default function ToursPage() {
  const [searchParams] = useSearchParams();
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("recommended");
  const [budgetFilter, setBudgetFilter] = useState("all");

  // Read initial query params from home search
  useEffect(() => {
    const destParam = searchParams.get("dest");
    const budgetParam = searchParams.get("budget");
    if (destParam) setSearchQuery(destParam);
    if (budgetParam) setBudgetFilter(budgetParam);
  }, [searchParams]);

  const filteredList = useMemo(() => {
    let result = [...tours];

    // Filter by Category / Region
    if (filter !== "all") {
      if (filter === "domestic" || filter === "international") {
        result = result.filter((t) => t.region === filter);
      } else {
        result = result.filter((t) => t.category === filter);
      }
    }

    // Filter by Search text (destination or title)
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.destination.toLowerCase().includes(q) ||
          t.sightseeing.toLowerCase().includes(q)
      );
    }

    // Filter by Budget
    if (budgetFilter === "under20") {
      result = result.filter((t) => t.price <= 20000);
    } else if (budgetFilter === "20to40") {
      result = result.filter((t) => t.price > 20000 && t.price <= 40000);
    } else if (budgetFilter === "above40") {
      result = result.filter((t) => t.price > 40000);
    }

    // Sorting
    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [filter, searchQuery, budgetFilter, sortBy]);

  return (
    <div className="min-h-screen">
      <Seo
        title="Tour Packages — Domestic, International, Honeymoon & Group Tours"
        description="Explore holiday packages for every Indian state and top international destinations. Verified hotels, private transport, transparent pricing with Travel With Rishabh."
        path="/tours"
      />

      {/* Hero Banner with scenic backdrop */}
      <section className="relative overflow-hidden bg-slate-950 py-20 lg:py-24 text-white">
        <img
          src={img.rajasthan}
          alt="Domestic and international holiday packages"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />

        <div className="container-wide relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-300 backdrop-blur-md">
            <Compass className="h-3.5 w-3.5" /> Handpicked Domestic & International Tours
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Explore Handcrafted Journeys
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Domestic holidays across every corner of India & top global getaways. Handcrafted with luxury stays, verified chauffeurs & 24/7 concierge support.
          </p>
        </div>
      </section>

      {/* Main Catalog Area */}
      <section className="container-wide py-12">
        {/* Search & Filter Controls Bar */}
        <div className="mb-8 rounded-3xl border border-border bg-card p-5 sm:p-6 shadow-sm space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search destination, city, tour..."
                className="w-full rounded-2xl border border-border bg-background pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            {/* Budget Range Filter */}
            <div>
              <select
                value={budgetFilter}
                onChange={(e) => setBudgetFilter(e.target.value)}
                className="w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none"
              >
                <option value="all">Budget: All Price Ranges</option>
                <option value="under20">Under ₹20,000</option>
                <option value="20to40">₹20,000 – ₹40,000</option>
                <option value="above40">Above ₹40,000</option>
              </select>
            </div>

            {/* Sort Options */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none"
              >
                <option value="recommended">Sort by: Recommended</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated (Highest Stars)</option>
              </select>
            </div>

            {/* Reset Filters */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  setFilter("all");
                  setSearchQuery("");
                  setBudgetFilter("all");
                  setSortBy("recommended");
                }}
                className="w-full rounded-2xl border border-border bg-secondary/80 px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
            {[{ key: "all", label: "All Packages", icon: "✨" }, ...tourCategories].map((c) => (
              <button
                key={c.key}
                onClick={() => setFilter(c.key)}
                className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
                  filter === c.key
                    ? "bg-primary text-primary-foreground shadow-md scale-105"
                    : "bg-secondary/70 text-secondary-foreground hover:bg-secondary"
                }`}
              >
                <span>{c.icon || "•"}</span>
                <span>{c.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 flex items-center justify-between text-xs text-muted-foreground px-1">
          <p>Showing <span className="font-bold text-foreground">{filteredList.length}</span> curated tour packages</p>
          {searchQuery && (
            <p>Matching keyword: <span className="font-bold text-primary">"{searchQuery}"</span></p>
          )}
        </div>

        {/* Tours Grid or Empty State */}
        {filteredList.length > 0 ? (
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {filteredList.map((t) => (
              <TourCard key={t.id} t={t} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-border bg-card p-12 text-center max-w-lg mx-auto space-y-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto">
              <Compass className="h-8 w-8" />
            </div>
            <h3 className="font-display text-xl font-bold">No packages match your search</h3>
            <p className="text-sm text-muted-foreground">
              Don't worry! We design 100% customized tour itineraries for any destination in India or abroad.
            </p>
            <a
              href={waLink(`Hi Rishabh! I am looking for a package for "${searchQuery || "my custom destination"}". Can you create one?`)}
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white shadow-md hover:scale-105 transition-all"
            >
              <MessageCircle className="h-4 w-4" /> Request Custom Package on WhatsApp
            </a>
          </div>
        )}
      </section>

      {/* ── PAN-INDIA & WORLDWIDE DESTINATIONS DIRECTORY ───────────── */}
      <section className="bg-secondary/40 py-16 border-t border-border">
        <div className="container-wide grid gap-12 md:grid-cols-2">
          <div className="space-y-4">
            <SectionHead eyebrow="Pan-India Coverage" title="More Domestic Destinations" />
            <p className="text-sm text-muted-foreground">
              We arrange end-to-end flight/train transfers, private resort stays, and dedicated cabs across all states:
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {otherDomestic.map((d) => (
                <a
                  key={d}
                  href={waLink(`Hi Rishabh! I want to plan a trip to ${d}. Please share packages.`)}
                  className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-foreground hover:border-primary hover:text-primary transition-colors shadow-2xs"
                >
                  📍 {d}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <SectionHead eyebrow="International Holidays" title="World Destinations" />
            <p className="text-sm text-muted-foreground">
              Visas, airport transfers, luxury hotels, and sightseeing pre-arranged with trusted on-ground partners:
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {otherIntl.map((d) => (
                <a
                  key={d}
                  href={waLink(`Hi Rishabh! I want to plan an international trip to ${d}.`)}
                  className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-foreground hover:border-primary hover:text-primary transition-colors shadow-2xs"
                >
                  ✈️ {d}
                </a>
              ))}
            </div>
            <div className="pt-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
              >
                Need group or corporate offsite packages? Contact our planners <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

