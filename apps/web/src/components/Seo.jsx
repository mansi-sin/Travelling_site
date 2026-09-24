import React from "react";
import { Helmet } from "react-helmet";

const SITE = "Travel With Rishabh";
const BASE_KEYWORDS = [
  "travel booking", "vacation packages", "travel agency", "tour operator",
  "domestic tours", "international tours", "holiday packages", "group tours",
  "honeymoon packages", "corporate travel", "airport transfers", "local taxi",
  "outstation trips", "vehicle rentals", "India tour packages", "taxi rental",
];

export default function Seo({
  title,
  description,
  keywords = [],
  image = "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200",
  path = "/",
  schema,
}) {
  const fullTitle = title ? `${title} | ${SITE}` : `${SITE} — Tour Packages & Taxi Rentals across India & the World`;
  const url = `https://travelwithrishabh.com${path}`;
  const kw = Array.from(new Set([...keywords, ...BASE_KEYWORDS])).join(", ");

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={kw} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
}
