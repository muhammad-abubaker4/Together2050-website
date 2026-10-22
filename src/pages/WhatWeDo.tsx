import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { PageHero } from "../components/ui/PageHero";
import { Seo } from "../components/ui/Seo";
import {
  eventPhaseLabel,
  sessionTopic,
  sessionsByDate,
  speakerSeries,
  speakerSessions,
} from "../data/events";
import { offerings } from "../data/offerings";
import { pillars } from "../data/pillars";
import { PAGE_SEO } from "../data/site";

const pillarCopy: Record<string, string> = {
  Knowledge:
    "Learning, research, awareness, skill development, and applying what people learn.",
  Connection:
    "Bringing people, ideas, communities, disciplines, and organizations together.",
  Empowerment:
    "Helping people develop capabilities, confidence, and access to opportunities.",
  Contribution:
    "Turning people's knowledge, skills, ideas, and effort into meaningful action.",
};

export function WhatWeDo() {
  return (
    <main id="main-content">
      <Seo {...PAGE_SEO.whatWeDo} />
      <PageHero
        eyebrow="Our Work"
        title="Learn, connect, collaborate, and contribute."
      />
      <Series />
      <Pillars />
      <Areas />
    </main>
  );
}

function Series() {
  return (
    <section id="programs" className="bg-paper py-16 text-ink sm:py-20 lg:py-24">
      <div className="container-site">
        <p className="text-[0.7rem] font-medium tracking-[0.28em] uppercase text-red">
          {eventPhaseLabel()}
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-medium tracking-tight text-balance sm:text-4xl lg:text-5xl">
          {speakerSeries.title}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted text-pretty sm:text-lg">
          {speakerSeries.theme} Four online sessions.
        </p>
        <ul className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {speakerSessions.map((session) => (
            <li key={session.id}>
              <img
                src={session.poster}
                alt={`${session.speaker}, ${session.role}. ${sessionTopic(session)}. ${session.dateLabel}, ${session.timeLabel}, online.`}
                width={session.width}
                height={session.height}
                loading="lazy"
                decoding="async"
                className="h-auto w-full rounded-[5px] border border-ink/10 object-contain"
              />
            </li>
          ))}
        </ul>
        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {sessionsByDate().map((day) => (
            <div key={day.date}>
              <h3 className="text-base font-medium tracking-tight sm:text-lg">
                {day.date}
              </h3>
              <ol className="mt-4 border-t border-ink/10">
                {day.sessions.map((session) => (
                  <li
                    key={session.id}
                    className="grid gap-2 border-b border-ink/10 py-5 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:gap-6"
                  >
                    <p className="text-sm text-red">{session.timeLabel}</p>
                    <div>
                      <h4 className="text-xl font-medium tracking-tight">
                        {sessionTopic(session)}
                      </h4>
                      <p className="mt-1 text-sm text-muted">
                        {session.speaker}, {session.role}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <Button
            href={speakerSeries.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Register
          </Button>
          <Link
            to={speakerSeries.path}
            className="text-sm tracking-[0.14em] uppercase hover:text-red focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red"
          >
            View the series
          </Link>
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section className="bg-ink py-16 sm:py-20 lg:py-24">
      <div className="container-site">
        <h2 className="max-w-md text-3xl font-medium tracking-tight text-balance sm:text-4xl lg:text-5xl">
          Core pillars
        </h2>
        <ol className="mt-12 border-t border-paper/15">
          {pillars.map((pillar) => (
            <li
              key={pillar.number}
              className="grid gap-4 border-b border-paper/15 py-8 lg:grid-cols-[6rem_minmax(0,1fr)] lg:gap-12"
            >
              <p className="text-[0.7rem] font-medium tracking-[0.22em] text-red">
                {pillar.number}
              </p>
              <div className="max-w-3xl">
                <h3 className="text-2xl font-medium tracking-tight sm:text-3xl">
                  {pillar.title}
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-stone text-pretty sm:text-lg">
                  {pillarCopy[pillar.title]}
                </p>
                <p className="mt-4 text-[0.7rem] font-medium tracking-[0.16em] uppercase text-red">
                  {pillar.shortLine}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Areas() {
  return (
    <section className="bg-paper py-16 text-ink sm:py-20 lg:py-24">
      <div className="container-site">
        <h2 className="max-w-3xl text-3xl font-medium tracking-tight text-balance sm:text-4xl lg:text-5xl">
          Areas of work
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted text-pretty sm:text-lg">
          The Cost of Perfection is the confirmed program. These areas are the
          wider work Together2050 aims to develop.
        </p>
        <ol className="mt-12 border-t border-ink/10">
          {offerings.map((offering) => (
            <li
              key={offering.number}
              className="grid gap-4 border-b border-ink/10 py-8 md:grid-cols-[6rem_minmax(0,1fr)] md:gap-10"
            >
              <p className="text-[0.7rem] font-medium tracking-[0.22em] text-red">
                {offering.number}
              </p>
              <div className="max-w-2xl">
                <h3 className="text-2xl font-medium tracking-tight sm:text-3xl">
                  {offering.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted text-pretty">
                  {offering.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
