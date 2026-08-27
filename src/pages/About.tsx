import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ValueItem } from "../components/content/ValueItem";
import { PageHero } from "../components/ui/PageHero";
import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Seo } from "../components/ui/Seo";
import { PAGE_SEO, SITE } from "../data/site";
import { values } from "../data/values";

export function About() {
  return (
    <main id="main-content">
      <Seo {...PAGE_SEO.about} />
      <PageHero
        eyebrow="About"
        title="About Together2050"
        description={SITE.description}
      />

      <section className="bg-paper py-16 text-ink sm:py-20 lg:py-24">
        <div className="container-site max-w-3xl space-y-6 text-base leading-relaxed text-ink text-pretty sm:text-lg">
          <Reveal>
            <p>
              Together2050 is a platform focused on the future, built on the
              belief that meaningful progress begins when people, ideas, and
              opportunities come together. We exist to create spaces for
              learning, connection, collaboration, and contribution. By bringing
              together diverse perspectives, knowledge, skills, and ambitions,
              we aim to help individuals and communities transform potential
              into purposeful action.
            </p>
          </Reveal>
          <Reveal delay={40}>
            <p>
              Together2050 is not defined by a single field, profession,
              generation, or type of initiative. Our work can evolve across
              knowledge, technology, innovation, community development,
              creativity, and social impact, all connected by a shared purpose
              to create meaningful progress through collective effort.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p>
              We believe the future is not built by a few people working alone.
              It is built when more people are able to participate, contribute,
              and create what matters.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-16 sm:py-20 lg:py-24">
        <div className="container-site grid gap-10 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="text-[0.7rem] font-medium tracking-[0.28em] uppercase text-red">
              Why we exist
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
              Nothing meaningful is built in isolation.
            </h2>
          </Reveal>
          <Reveal delay={60} className="space-y-5 text-base leading-relaxed text-stone sm:text-lg">
            <p>
              Every idea needs someone who believes in it. Every opportunity
              begins somewhere. Progress grows when people share what they know,
              open doors for others, and build something beyond themselves.
            </p>
            <p>
              Together2050 exists to create a place where people can learn,
              connect, exchange ideas, create, and contribute.
            </p>
            <p>
              Established {SITE.established}, the platform is being built for
              the long term, as an institution that can continue beyond any
              individual.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-16 text-ink sm:py-20 lg:py-24">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="Core values"
              title="What Guides Us"
            />
          </Reveal>
          <div className="mt-10">
            {values.map((value) => (
              <ValueItem key={value.number} value={value} tone="light" />
            ))}
          </div>
          <Reveal>
            <Link
              to="/vision"
              className="group mt-4 inline-flex items-center gap-2 text-sm tracking-[0.12em] uppercase"
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
    </main>
  );
}
