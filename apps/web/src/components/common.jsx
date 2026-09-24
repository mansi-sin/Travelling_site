import React from "react";
import { Star } from "lucide-react";

export const inr = (n) => "₹" + n.toLocaleString("en-IN");

export function SectionHead({ eyebrow, title, sub, center }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <span className="text-xs font-600 uppercase tracking-[0.2em] text-accent">{eyebrow}</span>
      )}
      <h2 className="mt-2 font-display text-3xl font-600 leading-tight sm:text-4xl">{title}</h2>
      {sub && <p className="mt-3 text-muted-foreground">{sub}</p>}
    </div>
  );
}

export function Stars({ value = 5, className = "" }) {
  return (
    <span className={`inline-flex ${className}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < Math.round(value) ? "fill-accent text-accent" : "text-muted"}`} />
      ))}
    </span>
  );
}

export function Badge({ children }) {
  return (
    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-600 text-secondary-foreground">{children}</span>
  );
}
