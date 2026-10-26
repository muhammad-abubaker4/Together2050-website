import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Seo } from "../components/ui/Seo";
import { PageHero } from "../components/ui/PageHero";
import {
  eventPhaseLabel,
  sessionImageAlt,
  sessionTopic,
  speakerSeries,
  speakerSessions,
} from "../data/events";
import { PAGE_SEO, SITE } from "../data/site";

function EventJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: speakerSeries.title,
    description: speakerSeries.summary,
    startDate: "2026-10-24",
    endDate: "2026-10-25",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "VirtualLocation",
      url: `${SITE.url}${speakerSeries.path}`,
    },
    organizer: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    image: speakerSessions.map((session) => new URL(session.poster, SITE.url).href),
    subEvent: speakerSessions.map((session) => ({
      "@type": "Event",
      name: sessionTopic(session),
      description: session.summary,
      startDate: session.startsAt,
      eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      performer: {
        "@type": "Person",
        name: session.speaker,
        jobTitle: session.role,
      },
      image: new URL(session.poster, SITE.url).href,
    })),
    offers: {
      "@type": "Offer",
      url: speakerSeries.registrationUrl,
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

export function EventDetail() {
  const phase = eventPhaseLabel();

  return (
    <main id="main-content">
      <Seo {...PAGE_SEO.costOfPerfection} />
      <EventJsonLd />
      <PageHero
        eyebrow={phase}
        title={speakerSeries.title}
        description={speakerSeries.theme}
      />

      <section className="bg-paper py-16 text-ink sm:py-20 lg:py-24">
        <div className="container-site grid gap-10 lg:grid-cols-[minmax(0,18rem)_1fr] lg:gap-16">
          <div>
            <p className="text-[0.7rem] font-medium tracking-[0.28em] uppercase text-red">
              The series
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {speakerSeries.attendance}. Times are Pakistan Standard Time (PKT).
            </p>
          </div>
          <div className="max-w-3xl space-y-6 text-base leading-relaxed text-ink text-pretty sm:text-lg">
            <p>{speakerSeries.summary}</p>
            <Button
              href={speakerSeries.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Register
            </Button>
          </div>
        </div>

        <div className="container-site mt-16">
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
            Sessions
          </h2>
          <ol className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
            {speakerSessions.map((session) => (
              <li
                key={session.id}
                id={session.id}
                className="grid gap-6 py-10 md:grid-cols-[minmax(0,16rem)_1fr] md:gap-12"
              >
                <img
                  src={session.poster}
                  alt={sessionImageAlt(session)}
                  width={session.width}
                  height={session.height}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full max-w-[16rem] rounded-[5px] border border-ink/10 object-contain"
                />
                <div>
                  <p className="text-[0.7rem] font-medium tracking-[0.18em] uppercase text-red">
                    {session.dateLabel} · {session.timeLabel}
                  </p>
                  <h3 className="mt-3 text-2xl font-medium tracking-tight sm:text-3xl">
                    {session.title}
                  </h3>
                  <p className="mt-2 text-base text-muted">{session.subtitle}</p>
                  <p className="mt-5 text-lg font-medium tracking-tight">
                    {session.speaker}
                  </p>
                  <p className="mt-1 text-sm tracking-[0.12em] uppercase text-muted">
                    {session.role}
                  </p>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink text-pretty">
                    {session.summary}
                  </p>
                </div>
              </li>
            ))}
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
            These four sessions are the published program. Membership,
            ambassadorship, and collaboration stay open beside them.
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
