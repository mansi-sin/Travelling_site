import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { 
  Menu, X, Phone, MessageCircle, Compass, Mail, 
  MapPin, ShieldCheck, Clock, Star, ChevronRight,
  Headphones, Sparkles, Award
} from "lucide-react";
import { WHATSAPP, PHONE, EMAIL, ADDRESS, waLink } from "@/data/content";

const nav = [
  { to: "/", label: "Home" },
  { to: "/tours", label: "Tour Packages" },
  { to: "/taxi", label: "Taxi Rentals" },
  { to: "/blog", label: "Travel Guides" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" }
];

function TopBar() {
  return (
    <div className="hidden w-full bg-slate-950 py-2 text-xs text-slate-300 border-b border-white/10 md:block">
      <div className="container-wide flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
            <ShieldCheck className="h-3.5 w-3.5" />
            Verified & Trusted Travel Partner Since 2004
          </span>
          <span className="flex items-center gap-1.5 text-slate-400">
            <Clock className="h-3.5 w-3.5 text-amber-400" />
            24/7 Dedicated Trip Support
          </span>
        </div>
        <div className="flex items-center gap-5">
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Mail className="h-3.5 w-3.5 text-primary" /> {EMAIL}
          </a>
          <span className="text-white/20">|</span>
          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            className="flex items-center gap-1.5 font-bold text-amber-300 hover:text-amber-200 transition-colors"
          >
            <Phone className="h-3.5 w-3.5" /> {PHONE}
          </a>
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Determine if navbar should look dark/transparent or light/solid
  const isTransparent = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isTransparent
          ? "bg-gradient-to-b from-black/80 via-black/40 to-transparent border-b border-white/10"
          : "bg-background/95 backdrop-blur-md border-b border-border shadow-md"
      }`}
    >
      <div className="container-wide flex h-20 items-center justify-between gap-4">
        {/* Logo Section */}
        <Link to="/" className="group flex items-center gap-3">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-white shadow-md transition-transform duration-300 group-hover:scale-105">
            <Compass className="h-6 w-6" />
          </div>
          <div className="flex flex-col">
            <span
              className={`font-display text-xl font-bold tracking-tight transition-colors ${
                isTransparent ? "text-white" : "text-foreground group-hover:text-primary"
              }`}
            >
              Travel With Rishabh
            </span>
            <span
              className={`text-[10px] font-bold tracking-widest uppercase flex items-center gap-1 ${
                isTransparent ? "text-amber-300" : "text-muted-foreground"
              }`}
            >
              Tours & Taxi Rentals · New Delhi
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? isTransparent
                      ? "bg-white/20 text-white shadow-sm"
                      : "bg-primary/10 text-primary font-bold"
                    : isTransparent
                    ? "text-slate-200 hover:bg-white/10 hover:text-white"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            className={`flex items-center gap-2 text-xs font-bold transition-colors ${
              isTransparent ? "text-white hover:text-amber-300" : "text-foreground hover:text-primary"
            }`}
          >
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                isTransparent ? "bg-white/15 text-white" : "bg-primary/10 text-primary"
              }`}
            >
              <Phone className="h-3.5 w-3.5" />
            </div>
            <span>{PHONE}</span>
          </a>

          <a
            href={waLink("Hi Rishabh! I'd like to plan a trip / book a taxi.")}
            className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-5 py-2.5 text-xs font-bold text-white shadow-md hover:scale-105 active:scale-95 transition-all"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className={`rounded-xl p-2 transition-colors lg:hidden ${
            isTransparent
              ? "text-white hover:bg-white/10"
              : "text-foreground hover:bg-secondary"
          }`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle Navigation Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {open && (
        <div className="border-b border-border bg-background/98 backdrop-blur-xl px-5 py-6 shadow-2xl lg:hidden animate-in slide-in-from-top-3">
          <nav className="flex flex-col space-y-1">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-secondary"
                  }`
                }
              >
                <span>{n.label}</span>
                <ChevronRight className="h-4 w-4 opacity-40" />
              </NavLink>
            ))}
          </nav>

          <div className="mt-6 pt-5 border-t border-border flex flex-col gap-3">
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="flex items-center justify-center gap-2 rounded-xl border border-border py-3 text-sm font-bold text-foreground hover:bg-secondary"
            >
              <Phone className="h-4 w-4 text-primary" /> Call {PHONE}
            </a>

            <a
              href={waLink("Hi Rishabh! I'd like to plan a trip / book a taxi.")}
              className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 text-sm font-bold text-white shadow-md"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <footer className="mt-auto bg-slate-950 text-slate-300 border-t border-white/10">
      {/* Trust Strip */}
      <div className="border-b border-white/10 bg-slate-900/60 py-8">
        <div className="container-wide grid grid-cols-1 gap-6 sm:grid-cols-3 text-center sm:text-left divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          <div className="flex items-center gap-3.5 px-4 justify-center sm:justify-start">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Safe, Sanitized & Verified</h4>
              <p className="text-xs text-slate-400">Hand-inspected hotels and GPS-tracked sanitized cabs.</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 px-4 pt-6 sm:pt-0 justify-center sm:justify-start">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-400">
              <Clock className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">24x7 Live Travel Concierge</h4>
              <p className="text-xs text-slate-400">Personal manager on call throughout your itinerary.</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 px-4 pt-6 sm:pt-0 justify-center sm:justify-start">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Pan-India & Global Network</h4>
              <p className="text-xs text-slate-400">Covering all 28 Indian states and 30+ top worldwide destinations.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-wide grid gap-12 py-16 md:grid-cols-4">
        {/* Brand info */}
        <div className="space-y-4 md:col-span-1">
          <div className="flex items-center gap-2.5 text-white">
            <Compass className="h-6 w-6 text-primary" />
            <span className="font-display text-xl font-bold tracking-tight">Travel With Rishabh</span>
          </div>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-400">
            Handcrafted holiday packages across India & the globe, plus reliable private taxi rentals. Bringing memories to life since 2004.
          </p>
          <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-amber-400">
            <Star className="h-4 w-4 fill-amber-400" />
            <span>4.9 / 5 Rating from 12,000+ Reviews</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2.5 text-xs sm:text-sm">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="transition-colors hover:text-white flex items-center gap-1.5 text-slate-400">
                  <ChevronRight className="h-3.5 w-3.5 text-primary" /> {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">Direct Contact</h4>
          <ul className="mt-4 space-y-3.5 text-xs sm:text-sm">
            <li>
              <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 text-amber-300 shrink-0">
                  <Phone className="h-4 w-4" />
                </div>
                <span>{PHONE}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 text-primary shrink-0">
                  <Mail className="h-4 w-4" />
                </div>
                <span>{EMAIL}</span>
              </a>
            </li>
            <li className="flex items-start gap-3 text-slate-400">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 text-emerald-400 shrink-0 mt-0.5">
                <MapPin className="h-4 w-4" />
              </div>
              <span className="leading-relaxed">{ADDRESS}</span>
            </li>
          </ul>
        </div>

        {/* Newsletter & WhatsApp */}
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">Exclusive Deals</h4>
          <p className="mt-3 text-xs sm:text-sm text-slate-400">
            Subscribe for secret seasonal discounts, itinerary inspiration & early-bird packages.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
              setEmail("");
            }}
            className="mt-4 flex flex-col gap-2"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..."
              className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-2.5 text-xs text-white placeholder:text-slate-400 focus:border-amber-400 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-xl bg-primary px-4 py-2.5 text-xs font-bold text-white hover:bg-primary/90 transition-all shadow-md"
            >
              Get Free Travel Guide
            </button>
          </form>

          {done && <p className="mt-2 text-xs font-medium text-emerald-400">✓ Thank you for subscribing!</p>}

          <div className="mt-6 flex flex-wrap gap-2 text-[11px] font-semibold">
            <span className="rounded-lg bg-white/10 px-2.5 py-1 text-slate-300">INR ₹ (Indian Rupee)</span>
            <span className="rounded-lg bg-white/10 px-2.5 py-1 text-slate-300">English & Hindi</span>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10 bg-black/40 py-6 text-center text-xs text-slate-500">
        <div className="container-wide flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Travel With Rishabh. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/about" className="hover:text-slate-300 transition-colors">About Us</Link>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">Contact</Link>
            <Link to="/tours" className="hover:text-slate-300 transition-colors">Tours</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Floating Button */}
      <a
        href={waLink("Hi Rishabh! I need assistance with a tour or cab booking.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-35" />
        <MessageCircle className="relative h-7 w-7" />
        {/* Tooltip on hover */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-xl bg-slate-900 px-3 py-1.5 text-xs font-bold text-white shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat with Rishabh
        </span>
      </a>

      {/* Phone Call Button */}
      <a
        href={`tel:${PHONE.replace(/\s/g, "")}`}
        aria-label="Direct Call"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 border border-white/20 text-white shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 mx-auto"
      >
        <Phone className="h-4 w-4 text-amber-400" />
      </a>
    </div>
  );
}

export default function Layout({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col font-sans selection:bg-primary/20 bg-background text-foreground">
      <TopBar />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingActions />
    </div>
  );
}