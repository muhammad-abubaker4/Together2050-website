import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { CTASection } from "../components/content/CTASection";
import { LaunchFilm } from "../components/content/LaunchFilm";
import { OrganizationJsonLd } from "../components/content/OrganizationJsonLd";
import { PillarCard } from "../components/content/PillarCard";
import { Wordmark } from "../components/content/Wordmark";
import { Reveal } from "../components/ui/Reveal";
import { Seo } from "../components/ui/Seo";
import { offerings } from "../data/offerings";
import { pillars } from "../data/pillars";
import { PAGE_SEO, SITE } from "../data/site";
import { values } from "../data/values";

export function Home() {
  return (
    <main id="main-content">
      <Seo {...PAGE_SEO.home} />
      <OrganizationJsonLd />
      <Hero />
      <WhySection />
      <PillarsSection />
      <OfferingsSection />
      <ValuesSection />
      <VisionSection />
      <CollaboratePreview />
      <LaunchFilm />
      <FinalStatement />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end bg-ink pt-24 pb-16 sm:pb-20 lg:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-start justify-end overflow-hidden pt-[12%]"
      >
        <p className="w-full max-w-full pr-[4%] text-right font-medium leading-none tracking-[-0.08em] text-white/5 text-[clamp(4.5rem,23vw,16rem)]">
          2050
        </p>
      </div>

      <div className="container-site relative z-10 w-full">
        <h1 className="max-w-4xl text-4xl font-medium leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
          Together, We Create What Matters.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-stone text-pretty sm:text-lg">
          {SITE.description}
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button to="/contact" variant="primary">
            Get Involved
          </Button>
          <Button to="/about" variant="secondary">
            Explore Together2050
          </Button>
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section className="bg-paper py-20 text-ink sm:py-24 lg:py-32">
      <div className="container-site grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_1.1fr] lg:gap-20">
        <Reveal>
          <p className="text-[0.7rem] font-medium tracking-[0.28em] uppercase text-red">
            Introduction
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
            Why Together2050?
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <div className="space-y-5 text-base leading-relaxed text-muted text-pretty sm:text-lg">
            <p>Nothing meaningful is built in isolation.</p>
            <p>
              Every idea needs someone who believes in it. Every opportunity
              begins somewhere. Progress grows when people share what they know,
              open doors for others, and build something beyond themselves.
            </p>
            <p>
              Together2050 exists to create a place where people can learn,
              connect, exchange ideas, create, and contribute.
            </p>
            <Link
              to="/about"
              className="group mt-4 inline-flex items-center gap-2 text-sm tracking-[0.12em] uppercase text-ink"
            >
              Learn more about us
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function PillarsSection() {
  return (
    <section className="bg-ink py-20 sm:py-24 lg:py-32">
      <div className="container-site">
        <Reveal>
          <p className="text-[0.7rem] font-medium tracking-[0.28em] uppercase text-red">
            Four pillars
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-medium tracking-tight text-balance sm:text-4xl lg:text-5xl">
            What We Stand On
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-stone sm:text-lg">
            Together2050 stands on four core pillars that guide its direction
            and decisions.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.number} delay={index * 60}>
              <PillarCard pillar={pillar} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function OfferingsSection() {
  return (
    <section className="bg-paper py-20 text-ink sm:py-24 lg:py-32">
      <div className="container-site">
        <Reveal>
          <p className="text-[0.7rem] font-medium tracking-[0.28em] uppercase text-red">
            Spaces and opportunities
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-medium tracking-tight text-balance sm:text-4xl lg:text-5xl">
            What We Do
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Together2050 creates spaces and opportunities for people to learn,
            connect, collaborate, and contribute.
          </p>
        </Reveal>

        <ol className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
          {offerings.map((offering, index) => (
            <Reveal key={offering.number} as="li" delay={index * 40}>
              <div className="grid gap-3 py-8 md:grid-cols-[5rem_minmax(0,16rem)_1fr] md:gap-8">
                <span className="text-[0.7rem] tracking-[0.22em] text-red">
                  {offering.number}
                </span>
                <h3 className="text-xl font-medium tracking-tight">
                  {offering.title}
                </h3>
                <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                  {offering.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <Link
            to="/what-we-do"
            className="group mt-10 inline-flex items-center gap-2 text-sm tracking-[0.12em] uppercase"
          >
            Read more about what we do
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function ValuesSection() {
  return (
    <section className="bg-ink py-20 sm:py-24 lg:py-32">
      <div className="container-site">
        <Reveal>
          <p className="text-[0.7rem] font-medium tracking-[0.28em] uppercase text-red">
            Core values
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
            What Guides Us
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px bg-paper/10 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <Reveal
              key={value.number}
              delay={index * 50}
              className="bg-ink p-6 sm:p-8"
            >
              <p className="text-[0.7rem] tracking-[0.22em] text-red">
                {value.number}
              </p>
              <h3 className="mt-6 text-xl font-medium tracking-tight">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-stone text-pretty">
                {value.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function VisionSection() {
  return (
    <section className="bg-cream py-20 text-ink sm:py-24 lg:py-32">
      <div className="container-site grid gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <h2 className="text-2xl font-medium tracking-tight text-red sm:text-3xl">
            Our Vision
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted text-pretty sm:text-lg">
            We envision a future where people come together through shared
            possibilities, where knowledge is accessible, ideas are exchanged
            openly, and collective potential is transformed into meaningful
            action.
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="text-2xl font-medium tracking-tight text-red sm:text-3xl">
            Our Mission
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted text-pretty sm:text-lg">
            Our mission is not limited to preparing people for the future. It is
            about enabling people to actively participate in creating it.
          </p>
          <Link
            to="/vision"
            className="group mt-8 inline-flex items-center gap-2 text-sm tracking-[0.12em] uppercase"
          >
            Read our vision and mission
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function CollaboratePreview() {
  return (
    <CTASection
      tone="light"
      eyebrow="Partnerships"
      title="Let's Build Together"
      description="Together2050 believes that meaningful progress is strengthened through collaboration. We welcome opportunities to work with individuals, communities, organizations, institutions, and initiatives that share a commitment to knowledge, connection, empowerment, innovation, and meaningful contribution."
      primaryLabel="Partner With Together2050"
      primaryTo="/collaborate"
    />
  );
}

function FinalStatement() {
  return (
    <section className="bg-ink py-24 sm:py-32 lg:py-40">
      <div className="container-site">
        <Reveal>
          <h2 className="max-w-4xl text-4xl font-medium leading-[1.08] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            The future is not built alone.
            <span className="mt-3 block text-paper">It is built together.</span>
          </h2>
          <p className="mt-12 text-[0.72rem]">
            <Wordmark />
          </p>
          <p className="mt-3 text-lg text-paper sm:text-xl">{SITE.tagline}</p>
        </Reveal>
      </div>
    </section>
  );
}
