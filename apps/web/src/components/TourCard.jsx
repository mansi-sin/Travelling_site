import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Clock, Hotel, MessageCircle, Star, Sparkles, ShieldCheck } from "lucide-react";
import { inr, Stars, Badge } from "@/components/common";
import { waLink } from "@/data/content";

export default function TourCard({ t }) {
  const discountPercent = t.originalPrice
    ? Math.round(((t.originalPrice - t.price) / t.originalPrice) * 100)
    : 15;

  return (
    <div className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-primary/40">
      {/* Top Image Section */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={t.image}
          alt={t.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />
        {/* Subtle gradient vignette for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Top Badges */}
        <div className="absolute left-3.5 top-3.5 flex flex-wrap gap-1.5">
          {t.tag && (
            <span className="rounded-full bg-primary/90 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-white shadow-md">
              {t.tag}
            </span>
          )}
          {discountPercent > 0 && (
            <span className="rounded-full bg-amber-500/90 backdrop-blur-md px-2.5 py-1 text-[11px] font-bold text-slate-950 shadow-md">
              {discountPercent}% OFF
            </span>
          )}
        </div>

        {/* Duration badge */}
        <span className="absolute right-3.5 top-3.5 rounded-full bg-black/75 backdrop-blur-md px-3 py-1 text-xs font-bold text-white shadow-md flex items-center gap-1">
          <Clock className="h-3 w-3 text-amber-400" />
          {t.nights}N / {t.days}D
        </span>

        {/* Bottom destination pill on image */}
        <div className="absolute bottom-3 left-3.5 flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-medium text-white">
          <MapPin className="h-3.5 w-3.5 text-amber-400" />
          <span>{t.destination}</span>
        </div>
      </div>

      {/* Card Content Section */}
      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6 space-y-4">
        <div className="space-y-2">
          {/* Rating */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Stars value={t.rating} />
              <span className="font-bold text-foreground">{t.rating}</span>
              <span className="text-[11px]">({t.reviewsCount || 120}+ reviews)</span>
            </div>
            <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5" /> Verified Tour
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display text-lg sm:text-xl font-bold text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-1">
            <Link to={`/tours/${t.id}`}>{t.title}</Link>
          </h3>

          {/* Key Inclusions Pills */}
          <div className="flex flex-wrap gap-2 pt-1 text-[11px] text-muted-foreground">
            <span className="flex items-center gap-1 rounded-md bg-secondary/80 px-2 py-0.5 font-medium">
              <Hotel className="h-3 w-3 text-primary" /> {t.hotel}
            </span>
            <span className="flex items-center gap-1 rounded-md bg-secondary/80 px-2 py-0.5 font-medium">
              <Clock className="h-3 w-3 text-primary" /> {t.meals}
            </span>
          </div>
        </div>

        {/* Pricing & Call to Actions */}
        <div className="pt-3 border-t border-border flex items-end justify-between gap-3">
          <div>
            <p className="text-[11px] text-muted-foreground">Starting from</p>
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-2xl font-bold text-primary">
                {inr(t.price)}
              </span>
              {t.originalPrice && (
                <span className="text-xs text-muted-foreground line-through">
                  {inr(t.originalPrice)}
                </span>
              )}
            </div>
            <p className="text-[10px] text-muted-foreground">per person on twin sharing</p>
          </div>

          <div className="flex items-center gap-1.5">
            <a
              href={waLink(`Hi! I'm interested in the "${t.title}" package.`)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enquire on WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 hover:bg-emerald-500 hover:text-white transition-all shadow-sm"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </a>

            <Link
              to={`/tours/${t.id}`}
              className="rounded-full bg-primary px-4 py-2.5 text-xs font-bold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md active:scale-95"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}