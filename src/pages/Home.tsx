import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Portrait } from "../components/content/Portrait";
import { Button } from "../components/ui/Button";
import { Seo } from "../components/ui/Seo";
import {
  eventPhaseLabel,
  speakerSeries,
  speakerSessions,
} from "../data/events";
import { pillars } from "../data/pillars";
import { FORMS, PAGE_SEO } from "../data/site";
import { founder, founderMessage } from "../data/team";
import { cn } from "../lib/cn";

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

export function Home() {
  return (
    <main id="main-content">
      <Seo {...PAGE_SEO.home} />
      <Hero />
      <Idea />
      <Ecosystem />
      <Building />
      <Borders />
      <FounderSection />
      <TakePart />
      <Close />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-8 hidden select-none md:block md:pr-6 lg:bottom-12 lg:pr-8 xl:top-1/2 xl:bottom-auto xl:-translate-y-1/2 xl:pr-12"
      >
        <p className="text-right font-semibold leading-[0.78] tracking-[-0.06em] text-white/25 text-[5.75rem] lg:text-[8rem] xl:text-[13rem]">
          20
          <br />
          50
        </p>
      </div>
      <div className="container-site relative">
        <p className="text-[0.7rem] font-medium tracking-[0.28em] uppercase text-red">
          A global, community-driven initiative
        </p>
        <h1 className="mt-5 max-w-4xl text-4xl font-medium leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
          Together, We Create What Matters.
        </h1>
        <div className="mt-6 max-w-xl">
          <p className="text-base leading-relaxed text-stone text-pretty sm:text-lg">
            Together2050 connects people, ideas, and opportunities to turn
            shared aspirations into meaningful action. We are building a
            community-driven ecosystem where people can learn, collaborate,
            create initiatives, and contribute to a better future.
          </p>
          <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button to="/about" className="w-full sm:w-auto">
              Explore Together2050
            </Button>
            <Button
              href={FORMS.membership}
              variant="secondary"
              className="w-full sm:w-auto"
              {...external}
            >
              Become Part of the Community
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Idea() {
  return (
    <section className="bg-paper py-16 text-ink sm:py-20 lg:py-28">
      <div className="container-site grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
        <h2 className="max-w-md text-3xl font-medium tracking-tight text-balance sm:text-4xl lg:text-5xl">
          Why Together2050 Exists
        </h2>
        <div>
          <div className="max-w-xl space-y-4 text-base leading-relaxed text-muted text-pretty sm:text-lg">
            <p>
              Meaningful progress rarely happens in isolation. People have
              knowledge, ideas, abilities, and aspirations, but they do not
              always have the connections, opportunities, or collaborative
              spaces needed to turn them into action.
            </p>
            <p>
              Together2050 exists to help bring these elements together,
              creating pathways for people and communities to learn, connect,
              collaborate, and contribute.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            <TextLink to="/about" tone="light">
              Discover Our Purpose
            </TextLink>
            <TextLink to="/vision" tone="light">
              Read the Vision
            </TextLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function Ecosystem() {
  return (
    <section className="bg-ink py-16 sm:py-20 lg:py-28">
      <div className="container-site">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:items-end lg:gap-16">
          <h2 className="max-w-md text-3xl font-medium tracking-tight text-balance sm:text-4xl lg:text-5xl">
            An Ecosystem Built Around Possibility
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-stone text-pretty sm:text-lg">
            We believe progress grows when knowledge is shared, connections are
            formed, potential is developed, and people contribute to something
            beyond themselves.
          </p>
        </div>

        <ol className="mt-14 border-l border-paper/20 lg:grid lg:grid-cols-4 lg:gap-8 lg:border-l-0 lg:border-t lg:pt-10">
          {pillars.map((pillar) => (
            <li key={pillar.number} className="relative py-8 pl-8 lg:py-0 lg:pl-0">
              <span
                aria-hidden
                className="absolute top-10 -left-px h-2 w-2 -translate-x-1/2 bg-red lg:top-[-2.65rem] lg:left-0 lg:translate-x-0"
              />
              <p className="text-[0.7rem] font-medium tracking-[0.22em] text-red">
                {pillar.number}
              </p>
              <h3 className="mt-4 text-2xl font-medium tracking-tight">
                {pillar.title}
              </h3>
              <p className="mt-3 max-w-xs text-base leading-relaxed text-stone">
                {pillar.preview}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function seriesWhen() {
  const first = speakerSessions[0].dateLabel.split(" ");
  const last = speakerSessions[speakerSessions.length - 1].dateLabel.split(" ");
  if (first[1] === last[1] && first[2] === last[2]) {
    return `${first[0]}–${last[0]} ${first[1]} ${first[2]}`;
  }
  return `${speakerSessions[0].dateLabel} – ${speakerSessions[speakerSessions.length - 1].dateLabel}`;
}

function Building() {
  return (
    <section className="bg-paper py-16 text-ink sm:py-20 lg:py-28">
      <div className="container-site">
        <h2 className="max-w-3xl text-3xl font-medium tracking-tight text-balance sm:text-4xl lg:text-5xl">
          From Shared Ideas to Meaningful Action
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted text-pretty sm:text-lg">
          As the initiative grows, this work can take different forms, from
          learning and research to community-led projects and partnerships.
          What is confirmed is listed here.
        </p>

        <article className="mt-12 grid gap-6 border-y border-ink/10 py-8 sm:py-10 lg:grid-cols-[9rem_minmax(0,1fr)_auto] lg:items-end lg:gap-10">
          <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-red">
            {eventPhaseLabel()}
          </p>
          <div>
            <h3 className="text-2xl font-medium tracking-tight sm:text-3xl">
              {speakerSeries.title}
            </h3>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
              {speakerSeries.theme}
            </p>
            <p className="mt-3 text-sm text-ink">
              {seriesWhen()} · {speakerSeries.attendance}
            </p>
          </div>
          <TextLink to={speakerSeries.path} tone="light">
            View the series
          </TextLink>
        </article>

        <div className="mt-8">
          <TextLink to="/what-we-do" tone="light">
            Explore Our Work
          </TextLink>
        </div>
      </div>
    </section>
  );
}

function Borders() {
  return (
    <section className="bg-ink py-16 sm:py-20 lg:py-28">
      <div className="container-site">
        <div className="max-w-3xl">
        <h2 className="text-3xl font-medium tracking-tight text-balance sm:text-4xl lg:text-5xl">
          Local Ideas. Shared Possibilities. A Wider Future.
        </h2>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-stone text-pretty sm:text-lg">
          <p>
            Together2050 is being built with the ambition to connect people and
            communities across different places and backgrounds. We want people
            to contribute where they are, discover collaborators beyond their
            immediate circles, and help meaningful ideas grow through shared
            effort.
          </p>
          <p>
            The long-term direction is global participation, supported by
            meaningful local action and cross-community collaboration.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
          <TextLink to="/get-involved">Get involved</TextLink>
          <TextLink href={FORMS.collaboration}>Collaborate</TextLink>
        </div>
        </div>
      </div>
    </section>
  );
}

function FounderSection() {
  return (
    <section className="bg-paper py-16 text-ink lg:py-20">
      <div className="container-site grid items-start gap-10 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] lg:items-center lg:gap-16">
        <Portrait
          person={founder}
          priority
          frameClassName="aspect-[4/5] w-full max-w-[18rem] border border-ink/10"
        />
        <div>
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
            {founder.name}
          </h2>
          <p className="mt-2 text-[0.7rem] font-medium tracking-[0.16em] uppercase text-red">
            Founder, Together2050
          </p>
          <div className="mt-4 space-y-2 text-base leading-normal text-muted text-pretty sm:text-lg">
            {founderMessage.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TakePart() {
  return (
    <section className="bg-ink py-16 sm:py-20 lg:py-28">
      <div className="container-site">
        <h2 className="max-w-3xl text-3xl font-medium tracking-tight text-balance sm:text-4xl lg:text-5xl">
          What Will You Build With Us?
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-stone text-pretty sm:text-lg">
          You do not need to have everything figured out to contribute. Bring an
          idea, a skill, a question, a community need, or a willingness to
          collaborate. Together2050 is creating opportunities for people to
          participate in work that matters.
        </p>
        <ol className="mt-10 border-t border-paper/15">
          <Pathway
            number="01"
            title="Join the Community"
            body="For people who want to connect, learn, and participate."
            action="Join"
            href={FORMS.membership}
          />
          <Pathway
            number="02"
            title="Contribute Your Skills"
            body="For people who want to help with initiatives and collaborative work. Write to us and say how you can help."
            action="Write to us"
            to="/get-involved#contact"
          />
          <Pathway
            number="03"
            title="Become an Ambassador"
            body="For people interested in representing and supporting Together2050 in their communities. The ambassador form is how you put your name forward."
            action="Ambassador"
            href={FORMS.ambassador}
          />
          <Pathway
            number="04"
            title="Propose an Initiative"
            body="For people who want to bring forward an idea or community project."
            action="Propose"
            href={FORMS.collaboration}
          />
          <Pathway
            number="05"
            title="Collaborate With Us"
            body="For individuals, organizations, educational institutions, and other potential partners."
            action="Collaborate"
            href={FORMS.collaboration}
          />
        </ol>
      </div>
    </section>
  );
}

function Close() {
  return (
    <section className="bg-paper py-16 text-ink sm:py-20 lg:py-28">
      <div className="container-site">
        <h2 className="max-w-3xl text-3xl font-medium tracking-tight text-balance sm:text-4xl lg:text-5xl">
          Built to keep connecting people, ideas, and opportunities.
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted text-pretty sm:text-lg">
          Together2050 is a long-term, community-driven initiative. Its purpose
          is to make learning, collaboration, and contribution possible well
          beyond any single event.
        </p>
        <div className="mt-8">
          <TextLink to="/vision" tone="light">
            Read the Vision
          </TextLink>
        </div>
      </div>
    </section>
  );
}

function TextLink({
  to,
  href,
  children,
  tone = "dark",
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  tone?: "dark" | "light";
}) {
  const className = cn(
    "text-[0.7rem] font-medium tracking-[0.16em] uppercase transition-colors hover:text-red",
    tone === "light" ? "text-ink" : "text-paper",
  );

  if (href) {
    return (
      <a href={href} className={className} {...external}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to ?? "/"} className={className}>
      {children}
    </Link>
  );
}

function Pathway({
  number,
  title,
  body,
  action,
  href,
  to,
}: {
  number: string;
  title: string;
  body: string;
  action: string;
  href?: string;
  to?: string;
}) {
  return (
    <li className="grid gap-4 border-b border-paper/15 py-6 sm:grid-cols-[3rem_minmax(0,1fr)_15rem] sm:items-center sm:gap-8">
      <p className="text-[0.7rem] tracking-[0.18em] text-red">{number}</p>
      <div>
        <h3 className="text-xl font-medium tracking-tight">{title}</h3>
        <p className="mt-1 max-w-2xl text-sm leading-relaxed text-stone sm:text-base">
          {body}
        </p>
      </div>
      {href ? (
        <Button href={href} className="w-full whitespace-nowrap" {...external}>
          {action}
        </Button>
      ) : (
        <Button to={to ?? "/get-involved#contact"} className="w-full whitespace-nowrap">
          {action}
        </Button>
      )}
    </li>
  );
}
