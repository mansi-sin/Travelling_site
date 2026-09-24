import React from "react";
import { Link } from "react-router-dom";
import { 
  Award, ShieldCheck, Headphones, Sparkles, 
  MapPin, Users, HeartHandshake, CheckCircle2, 
  Phone, MessageCircle, ArrowRight 
} from "lucide-react";
import { img, whyUs, waLink, PHONE, EMAIL, ADDRESS } from "@/data/content";
import { SectionHead } from "@/components/common";
import Seo from "@/components/Seo";

const stats = [
  { n: "18+ Years", l: "Industry Legacy", sub: "Established in New Delhi" },
  { n: "15,000+", l: "Happy Explorers", sub: "Families, Couples & Groups" },
  { n: "4.9 / 5", l: "Average Rating", sub: "Google & TripAdvisor" },
  { n: "98%", l: "Client Retention", sub: "Repeat & Referral Bookings" },
];

const pillars = [
  {
    icon: HeartHandshake,
    title: "Personalized Care",
    desc: "No cookie-cutter templates. We tailor every itinerary to your pace, preferences, dietary choices and budget.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Reliability",
    desc: "Verified hotels with excellent hygiene standards and GPS-tracked sanitized cabs with polite background-checked chauffeurs.",
  },
  {
    icon: Award,
    title: "Direct Best Rates",
    desc: "We work directly with local partners and hoteliers, passing maximum savings and luxury perks directly to you.",
  },
  {
    icon: Headphones,
    title: "24/7 Human Concierge",
    desc: "Never get stuck talking to a bot. A dedicated trip manager is available 24 hours a day on WhatsApp and direct phone.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Seo
        title="About Us — Trusted Travel Agency & Tour Operator Since 2004"
        description="Learn how Travel With Rishabh has been crafting personalized holiday packages and providing verified chauffeur taxi rentals across India and worldwide for two decades."
        path="/about"
      />

      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-slate-950 py-20 lg:py-24 text-white">
        <img
          src={img.himachal}
          alt="Travel With Rishabh team and travel experience"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />

        <div className="container-wide relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-300 backdrop-blur-md">
            <Award className="h-3.5 w-3.5" /> Our Journey & Heritage · New Delhi
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Crafting Personalized Travel Since 2004
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            From our headquarters in Connaught Place, New Delhi to trusted destination networks across India and overseas, Travel With Rishabh delivers authentic, stress-free vacations.
          </p>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="container-wide -mt-10 relative z-20">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 rounded-3xl border border-border bg-card p-6 shadow-xl text-center">
          {stats.map((s) => (
            <div key={s.l} className="p-3">
              <p className="font-display text-3xl sm:text-4xl font-bold text-primary">{s.n}</p>
              <p className="mt-1 text-xs sm:text-sm font-bold text-foreground">{s.l}</p>
              <p className="text-[11px] text-muted-foreground">{s.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story & Vision */}
      <section className="container-narrow py-16 sm:py-20 space-y-8">
        <SectionHead
          eyebrow="Our Story"
          title="Passion for Travel, Dedication to Perfection"
        />

        <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
          <p>
            <strong className="text-foreground font-semibold">Travel With Rishabh</strong> was founded on a simple yet profound premise: every holiday should feel effortless, deeply inspiring, and authentically personal.
          </p>
          <p>
            What started 20 years ago as a dedicated private cab service in New Delhi has expanded into a full-service tour operator and corporate travel partner. Today, we handle everything from romantic honeymoon getaways in Kashmir and Kerala to royal Rajasthan expeditions, high-altitude Ladakh adventures, and lavish international getaways in Dubai, Bali, Thailand, and Europe.
          </p>
          <p>
            We believe the difference between a good trip and a truly unforgettable one lies in the details — punctual airport pickups, hand-inspected hotel rooms with mountain or backwater views, courteous drivers who know the safest scenic routes, and honest pricing with zero hidden charges.
          </p>
        </div>

        {/* Founder note box */}
        <div className="rounded-3xl border border-primary/20 bg-primary/5 p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white font-display font-bold text-xl">
              R
            </div>
            <div>
              <h4 className="font-display text-lg font-bold text-foreground">A Personal Message from Rishabh</h4>
              <p className="text-xs text-primary font-semibold">Founder & Head of Expeditions</p>
            </div>
          </div>
          <p className="text-sm italic text-foreground/85 leading-relaxed">
            "When you book with us, you are not just a booking reference number. You have my personal commitment and our team's 24/7 backing. We treat every traveler like family, ensuring complete safety, utmost comfort, and pure joy throughout your vacation."
          </p>
        </div>
      </section>

      {/* 4 Core Pillars */}
      <section className="bg-secondary/40 py-16 border-y border-border">
        <div className="container-wide">
          <SectionHead
            eyebrow="Our Core Values"
            title="What Sets Us Apart"
            sub="Four foundational pillars that make thousands of travelers trust us year after year."
            center
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-3xl border border-border bg-card p-6 sm:p-7 shadow-xs hover:border-primary/40 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <p.icon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold text-foreground">{p.title}</h4>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="container-wide py-16 sm:py-20 text-center">
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-primary to-slate-950 p-8 sm:p-12 text-white shadow-xl max-w-3xl mx-auto space-y-5">
          <h3 className="font-display text-2xl sm:text-3xl font-bold">
            Let's Make Your Next Trip Extraordinary
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Ready to experience seamless travel? Get in touch today for personalized itinerary advice, car rentals, or group bookings.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={waLink("Hi Rishabh! I'd like to plan my upcoming trip with you.")}
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3 text-sm font-bold text-white shadow-md hover:scale-105 transition-all"
            >
              <MessageCircle className="h-4 w-4" /> Message on WhatsApp
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white/15 px-7 py-3 text-sm font-bold text-white backdrop-blur-sm border border-white/20 hover:bg-white/25 transition-all"
            >
              Contact Our Desk <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}