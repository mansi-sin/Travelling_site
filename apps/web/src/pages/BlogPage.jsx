import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  BookOpen, Clock, Calendar, Search, ArrowRight, 
  Sparkles, MessageCircle, Share2, Tag, CheckCircle2 
} from "lucide-react";
import { blog, img, waLink } from "@/data/content";
import { SectionHead } from "@/components/common";
import Seo from "@/components/Seo";

export default function BlogPage() {
  const [selectedCat, setSelectedCat] = useState("all");
  const [search, setSearch] = useState("");
  const [activeArticle, setActiveArticle] = useState(null);

  const categories = ["all", "Destination Guide", "Honeymoon Special", "Travel Tips"];

  const filteredArticles = blog.filter((b) => {
    if (selectedCat !== "all" && b.category !== selectedCat) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      return b.title.toLowerCase().includes(q) || b.excerpt.toLowerCase().includes(q);
    }
    return true;
  });

  return (
    <div className="min-h-screen">
      <Seo
        title="Travel Guides & Tips — Kashmir, Kerala, Dubai & Bali Itineraries"
        description="Insider travel guides, honeymoon tips, packing advice, and month-by-month destination breakdowns from Travel With Rishabh's seasoned travel planners."
        path="/blog"
      />

      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-slate-950 py-20 lg:py-24 text-white">
        <img
          src={img.bali}
          alt="Travel guides and vacation tips"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />

        <div className="container-wide relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-300 backdrop-blur-md">
            <BookOpen className="h-3.5 w-3.5" /> Travel Insights & Advice
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Travel Guides & Insider Tips
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Curated advice, best seasons to visit, budget hacks and scenic itineraries written by our on-ground travel specialists.
          </p>
        </div>
      </section>

      {/* Main Blog Area */}
      <section className="container-wide py-12">
        {/* Filters & Search Bar */}
        <div className="mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full sm:w-auto">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCat(c)}
                className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
                  selectedCat === c
                    ? "bg-primary text-primary-foreground shadow-md scale-105"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {c === "all" ? "All Articles" : c}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search guides..."
              className="w-full rounded-2xl border border-border bg-card pl-10 pr-3 py-2 text-xs sm:text-sm text-foreground focus:border-primary focus:outline-none"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((b) => (
            <article
              key={b.id}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-primary/40"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={b.image}
                  alt={b.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <span className="absolute top-3.5 left-3.5 rounded-full bg-black/75 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-amber-300 shadow-md">
                  {b.category}
                </span>
                <span className="absolute bottom-3.5 right-3.5 rounded-full bg-black/60 backdrop-blur-sm px-2.5 py-1 text-[10px] font-semibold text-white flex items-center gap-1">
                  <Clock className="h-3 w-3 text-amber-400" /> {b.read}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{b.date}</span>
                    <span>·</span>
                    <span>By Travel With Rishabh</span>
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                    {b.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {b.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <button
                    onClick={() => setActiveArticle(b)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary hover:underline"
                  >
                    Read Full Story <ArrowRight className="h-3.5 w-3.5" />
                  </button>

                  <a
                    href={waLink(`Hi Rishabh! I read your article "${b.title}" and would love travel guidance.`)}
                    className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
                  >
                    <MessageCircle className="h-3.5 w-3.5" /> Ask Expert
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── ARTICLE MODAL ─────────────────────────────────────────── */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm animate-in fade-in">
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-2xl space-y-5">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-foreground hover:bg-secondary/80 font-bold"
            >
              ✕
            </button>

            <div className="relative h-60 overflow-hidden rounded-2xl">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                className="h-full w-full object-cover"
              />
              <span className="absolute bottom-3 left-3 rounded-full bg-black/75 px-3 py-1 text-xs font-bold text-amber-300">
                {activeArticle.category}
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>{activeArticle.date}</span>
              <span>·</span>
              <span>{activeArticle.read}</span>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground">
              {activeArticle.title}
            </h2>

            <div className="space-y-3 text-sm text-foreground/85 leading-relaxed">
              <p>{activeArticle.excerpt}</p>
              <p>
                Planning a trip to this region? Our team arranges customized private tours including boutique stays, private AC vehicles, airport transfers, and guided sightseeing.
              </p>
              <div className="rounded-2xl bg-secondary/60 p-4 space-y-2">
                <h4 className="font-bold text-foreground text-xs uppercase tracking-wider">Expert Recommendation</h4>
                <p className="text-xs text-muted-foreground">
                  Book at least 3-4 weeks in advance during peak season to lock in best flight rates and 5-star hotel availability.
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-border flex flex-col sm:flex-row gap-3">
              <a
                href={waLink(`Hi Rishabh! I want to plan a trip based on your guide: "${activeArticle.title}".`)}
                className="flex-1 flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 text-sm font-bold text-white shadow-md"
              >
                <MessageCircle className="h-4 w-4" /> Plan This Trip on WhatsApp
              </a>
              <button
                onClick={() => setActiveArticle(null)}
                className="rounded-full border border-border px-6 py-3 text-xs font-bold hover:bg-secondary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── NEWSLETTER & FREE CONSULTATION ──────────────────────────── */}
      <section className="bg-secondary/40 py-16 border-t border-border">
        <div className="container-narrow text-center space-y-4">
          <SectionHead
            eyebrow="Stay Inspired"
            title="Get Our Secret Season Travel Cheatsheet"
            sub="Join 15,000+ wanderers who receive our monthly handpicked deals and offbeat travel itineraries."
            center
          />
          <div className="pt-2 flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-white shadow-md hover:bg-primary/90 transition-all"
            >
              Get Free Custom Trip Advice <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

