import { PillarCard } from "../components/content/PillarCard";
import { PageHero } from "../components/ui/PageHero";
import { Reveal } from "../components/ui/Reveal";
import { Seo } from "../components/ui/Seo";
import { offerings } from "../data/offerings";
import { pillars } from "../data/pillars";
import { PAGE_SEO } from "../data/site";

export function WhatWeDo() {
  return (
    <main id="main-content">
      <Seo {...PAGE_SEO.whatWeDo} />
      <PageHero
        eyebrow="What We Do"
        title="Spaces for learning, connection, collaboration, and contribution."
        description="Together2050 creates spaces and opportunities for people to learn, connect, collaborate, and contribute."
      />

      <section className="bg-ink py-16 sm:py-20 lg:py-24">
        <div className="container-site">
          <Reveal>
            <p className="text-[0.7rem] font-medium tracking-[0.28em] uppercase text-red">
              Core pillars
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-medium tracking-tight sm:text-4xl">
              What We Stand On
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-stone sm:text-lg">
              Together2050 stands on four core pillars that guide its direction
              and decisions.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.number} delay={index * 50}>
                <PillarCard pillar={pillar} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 text-ink sm:py-20 lg:py-24">
        <div className="container-site">
          <Reveal>
            <p className="text-[0.7rem] font-medium tracking-[0.28em] uppercase text-red">
              What we offer
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-medium tracking-tight sm:text-4xl">
              Areas of work
            </h2>
          </Reveal>

          <ol className="mt-12">
            {offerings.map((offering, index) => (
              <Reveal key={offering.number} as="li" delay={index * 40}>
                <article className="grid gap-4 border-t border-ink/10 py-10 md:grid-cols-[6rem_1fr] md:gap-10">
                  <p className="text-[0.7rem] tracking-[0.22em] text-red">
                    {offering.number}
                  </p>
                  <div>
                    <h3 className="text-2xl font-medium tracking-tight sm:text-3xl">
                      {offering.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted text-pretty">
                      {offering.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
