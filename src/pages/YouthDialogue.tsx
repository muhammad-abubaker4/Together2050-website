import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { PageHero } from "../components/ui/PageHero";
import { Seo } from "../components/ui/Seo";
import { youthDialogue, youthDialoguePhaseLabel } from "../data/events";
import { PAGE_SEO, SITE } from "../data/site";

function SeriesJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "EventSeries",
    name: youthDialogue.title,
    description: youthDialogue.summary,
    endDate: "2027-01-31",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    location: {
      "@type": "VirtualLocation",
      url: `${SITE.url}${youthDialogue.path}`,
    },
    organizer: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    image: new URL(youthDialogue.poster, SITE.url).href,
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      url: youthDialogue.registrationUrl,
      price: "0",
      priceCurrency: "PKR",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replaceAll("<", "\\u003c"),
      }}
    />
  );
}

export function YouthDialogue() {
  const ongoing = youthDialoguePhaseLabel() === "Ongoing";

  return (
    <main id="main-content">
      <Seo {...PAGE_SEO.youthDialogue} />
      <SeriesJsonLd />
      <PageHero
        eyebrow={youthDialoguePhaseLabel()}
        title={youthDialogue.title}
        description={youthDialogue.tagline}
      />

      <section className="bg-paper py-16 text-ink sm:py-20 lg:py-24">
        <div className="container-site grid gap-10 lg:grid-cols-[minmax(0,18rem)_1fr] lg:gap-16">
          <div>
            <p className="text-[0.7rem] font-medium tracking-[0.28em] uppercase text-red">
              The series
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Online on Google Meet. Weekly, through January 2027.
            </p>
          </div>
          <div className="max-w-3xl space-y-6 text-base leading-relaxed text-ink text-pretty sm:text-lg">
            <p>{youthDialogue.summary}</p>
            {ongoing ? (
              <Button
                href={youthDialogue.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Register
              </Button>
            ) : null}
          </div>
        </div>

        <div className="container-site mt-16">
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
            Discussions
          </h2>
          <ol className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
            <li className="grid gap-6 py-10 md:grid-cols-[minmax(0,16rem)_1fr] md:gap-12">
              <img
                src={youthDialogue.poster}
                alt={youthDialogue.posterAlt}
                width={youthDialogue.width}
                height={youthDialogue.height}
                decoding="async"
                className="aspect-[4/5] w-full max-w-[16rem] rounded-[5px] border border-ink/10 object-contain"
              />
              <div>
                <p className="text-[0.7rem] font-medium tracking-[0.18em] uppercase text-red">
                  Weekly · Through January 2027
                </p>
                <h3 className="mt-3 text-2xl font-medium tracking-tight sm:text-3xl">
                  {youthDialogue.title}
                </h3>
                <p className="mt-2 text-base text-muted">{youthDialogue.tagline}</p>
                <ul className="mt-6 max-w-2xl border-t border-ink/10">
                  {youthDialogue.topics.map((topic) => (
                    <li key={topic} className="border-b border-ink/10 py-3 text-base">
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="bg-ink py-16 sm:py-20">
        <div className="container-site">
          <p className="text-[0.7rem] font-medium tracking-[0.28em] uppercase text-red">
            Related
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
            Take part in what follows.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-stone">
            Membership, ambassadorship, and collaboration stay open beside the
            series.
          </p>
          <div className="mt-8 flex flex-wrap gap-6 text-sm tracking-[0.14em] uppercase">
            <Link to="/what-we-do/#programs" className="text-paper hover:text-red">
              Our Work
            </Link>
            <Link to="/get-involved/" className="text-paper hover:text-red">
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
