import React, { useState } from "react";
import { 
  Phone, Mail, MapPin, MessageCircle, Clock, 
  ShieldCheck, Send, CheckCircle2, Sparkles, User, HelpCircle 
} from "lucide-react";
import { SectionHead } from "@/components/common";
import { PHONE, EMAIL, ADDRESS, WHATSAPP, waLink, img } from "@/data/content";
import Seo from "@/components/Seo";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Tour Package",
    destination: "",
    dates: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const directWaMessage = `Hi Rishabh! My name is ${formData.name || "Traveller"}. I'm enquiring about ${formData.service}${
    formData.destination ? ` for ${formData.destination}` : ""
  }.${formData.message ? ` Note: ${formData.message}` : ""}`;

  return (
    <div className="min-h-screen">
      <Seo
        title="Contact Us — Plan Your Dream Trip or Book a Private Cab"
        description="Contact Travel With Rishabh for domestic and international holiday package bookings, honeymoon itineraries, corporate offsites, and 24/7 taxi rental services."
        path="/contact"
      />

      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-slate-950 py-20 lg:py-24 text-white">
        <img
          src={img.goa}
          alt="Contact Travel With Rishabh"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />

        <div className="container-wide relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-300 backdrop-blur-md">
            <Headphones className="h-3.5 w-3.5" /> Direct Travel Desk · New Delhi
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Let's Plan Your Journey
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Have questions about a holiday package, custom itinerary, or outstation cab booking? Our travel advisors usually respond in under 15 minutes.
          </p>
        </div>
      </section>

      {/* Main Form & Contact Information */}
      <section className="container-wide py-14">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-7 rounded-3xl border border-border bg-card p-7 sm:p-10 shadow-sm space-y-6">
            <div>
              <SectionHead eyebrow="Get In Touch" title="Send an Instant Trip Enquiry" />
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Fill out the quick form below and receive a custom itinerary & best price estimate directly on WhatsApp and email.
              </p>
            </div>

            {sent ? (
              <div className="rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center space-y-4 animate-in fade-in">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white mx-auto shadow-md">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Enquiry Sent Successfully!
                </h3>
                <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-foreground">{formData.name || "Traveller"}</strong>. Rishabh has received your details and will get in touch shortly with your custom proposal.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={waLink(directWaMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-xs font-bold text-white shadow-md"
                  >
                    <MessageCircle className="h-4 w-4" /> Open Direct WhatsApp Chat
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSent(false);
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        service: "Tour Package",
                        destination: "",
                        dates: "",
                        message: "",
                      });
                    }}
                    className="rounded-full border border-border px-5 py-3 text-xs font-bold text-foreground hover:bg-secondary"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-xs sm:text-sm text-foreground focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-xs sm:text-sm text-foreground focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. rahul@gmail.com"
                      className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-xs sm:text-sm text-foreground focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">
                      Service Requirement
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-xs sm:text-sm text-foreground focus:border-primary focus:outline-none"
                    >
                      <option value="Tour Package">Holiday Tour Package</option>
                      <option value="Taxi Rental">Outstation Taxi Rental</option>
                      <option value="Airport Transfer">Airport Pickup / Drop</option>
                      <option value="Custom Itinerary">Customized Family Vacation</option>
                      <option value="Honeymoon Package">Honeymoon Package</option>
                      <option value="Corporate Offsite">Corporate Offsite / Group</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">
                      Target Destination / Route
                    </label>
                    <input
                      type="text"
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      placeholder="e.g. Kashmir, Kerala, Dubai, Agra"
                      className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-xs sm:text-sm text-foreground focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">
                      Approximate Travel Dates / Month
                    </label>
                    <input
                      type="text"
                      value={formData.dates}
                      onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                      placeholder="e.g. Next Month / 15th Oct"
                      className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-xs sm:text-sm text-foreground focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-foreground mb-1.5">
                    Any Specific Requirements (Budget, Hotel preference, No. of Pax)
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your group size, room preferences, or special celebration..."
                    className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-xs sm:text-sm text-foreground focus:border-primary focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-primary py-4 text-sm font-bold text-white shadow-lg hover:bg-primary/90 active:scale-95 transition-all"
                >
                  <Send className="h-4 w-4" /> Submit Trip Enquiry
                </button>

                <p className="text-center text-[11px] text-muted-foreground pt-1 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                  We respect your privacy. No spam ever.
                </p>
              </form>
            )}
          </div>

          {/* Right Column: Direct Contact Cards & Google Maps */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHead eyebrow="Direct Channels" title="Reach Us Instantly" />

            <div className="space-y-3">
              {/* WhatsApp Card */}
              <a
                href={waLink("Hi Rishabh! I'd like to talk to you regarding travel.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-3xl border border-border bg-card p-5 shadow-xs transition-all hover:border-[#25D366] hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#25D366]/15 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                    Instant WhatsApp
                  </p>
                  <p className="font-display text-lg font-bold text-foreground">Chat with Rishabh</p>
                  <p className="text-xs text-emerald-600 font-semibold">Online · Replies in &lt; 15 mins</p>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                className="group flex items-center gap-4 rounded-3xl border border-border bg-card p-5 shadow-xs transition-all hover:border-primary hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                    Direct Phone Line
                  </p>
                  <p className="font-display text-lg font-bold text-foreground">{PHONE}</p>
                  <p className="text-xs text-muted-foreground">Mon–Sun · 24/7 Helpline</p>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${EMAIL}`}
                className="group flex items-center gap-4 rounded-3xl border border-border bg-card p-5 shadow-xs transition-all hover:border-primary hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                    Email Desk
                  </p>
                  <p className="text-sm font-bold text-foreground break-all">{EMAIL}</p>
                  <p className="text-xs text-muted-foreground">For corporate quotes & vouchers</p>
                </div>
              </a>

              {/* Office Location */}
              <div className="flex items-start gap-4 rounded-3xl border border-border bg-card p-5 shadow-xs">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-600 mt-0.5">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                    Registered Headquarters
                  </p>
                  <p className="text-sm font-bold text-foreground leading-relaxed">{ADDRESS}</p>
                  <p className="text-xs text-muted-foreground mt-1">Walk-ins welcome by prior appointment</p>
                </div>
              </div>
            </div>

            {/* Google Map Embed with rounded frame */}
            <div className="overflow-hidden rounded-3xl border border-border shadow-xs">
              <iframe
                title="Travel With Rishabh Location"
                className="h-60 w-full"
                loading="lazy"
                src="https://www.google.com/maps?q=Connaught+Place,New+Delhi,India&output=embed"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}