/**
 * JSON-LD for the homepage. Deliberately omits aggregateRating, review,
 * offers and any user-count claim — none of that is substantiated, and
 * Milestone 20's own brief is explicit that structured data must stay
 * truthful rather than invented for SEO gain.
 */
export function buildStructuredData(siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}#organization`,
        name: "CliniDoc",
        url: siteUrl,
        logo: `${siteUrl}/brand/lockup-horizontal.svg`,
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        url: siteUrl,
        name: "CliniDoc",
        publisher: { "@id": `${siteUrl}#organization` },
      },
      {
        "@type": "SoftwareApplication",
        name: "CliniDoc",
        applicationCategory: "HealthApplication",
        operatingSystem: "Web",
        description:
          "CliniDoc connects patients, care teams, clinical programs, assessments, appointments, documentation and clinical records in one connected healthcare platform.",
      },
    ],
  };
}
