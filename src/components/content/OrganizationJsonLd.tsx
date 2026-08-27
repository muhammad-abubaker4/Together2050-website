import { SITE, SOCIAL_LINKS } from "../../data/site";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    email: SITE.email,
    foundingDate: SITE.foundingDate,
    description: SITE.description,
    slogan: SITE.tagline,
    logo: `${SITE.url}/apple-touch-icon.png`,
    sameAs: SOCIAL_LINKS.map((link) => link.href),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
