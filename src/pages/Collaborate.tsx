import { CollaborationStep } from "../components/content/CollaborationStep";
import { Button } from "../components/ui/Button";
import { PageHero } from "../components/ui/PageHero";
import { Reveal } from "../components/ui/Reveal";
import { Seo } from "../components/ui/Seo";
import {
  collaborationAreas,
  collaborationIntro,
  collaborationSteps,
  whyPartner,
} from "../data/collaboration";
import { PAGE_SEO, SITE } from "../data/site";

export function Collaborate() {
  return (
    <main id="main-content">
      <Seo {...PAGE_SEO.collaborate} />
      <PageHero
        eyebrow="Collaborate"
        title="Let's Build Together"
        description={collaborationIntro}
      />

      <section className="bg-paper py-16 text-ink sm:py-20 lg:py-24">
        <div className="container-site">
          <Reveal>
            <p className="text-[0.7rem] font-medium tracking-[0.28em] uppercase text-red">
              Areas of collaboration
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-medium tracking-tight sm:text-4xl">
              Where we can work together
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-px bg-ink/10 sm:grid-cols-2">
            {collaborationAreas.map((area, index) => (
              <Reveal
                key={area}
                as="li"
                delay={index * 30}
                className="bg-paper px-5 py-6"
              >
                <p className="text-[0.7rem] tracking-[0.2em] text-red">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 text-lg font-medium tracking-tight">{area}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ink py-16 sm:py-20 lg:py-24">
        <div className="container-site grid gap-10 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="text-[0.7rem] font-medium tracking-[0.28em] uppercase text-red">
              Why partner with Together2050
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
              Shared purpose, mutual respect.
            </h2>
          </Reveal>
          <Reveal delay={60} className="space-y-5 text-base leading-relaxed text-stone sm:text-lg">
            {whyPartner.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-16 text-ink sm:py-20 lg:py-24">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Reveal>
            <p className="text-[0.7rem] font-medium tracking-[0.28em] uppercase text-red">
              Collaboration process
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
              A clear way to begin
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
              Partnerships begin with a conversation. Write to{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="text-ink underline decoration-ink/20 underline-offset-4 hover:decoration-red"
              >
                {SITE.email}
              </a>
              .
            </p>
            <div className="mt-8">
              <Button href={`mailto:${SITE.email}`} variant="primary">
                Partner With Together2050
              </Button>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <ol>
              {collaborationSteps.map((step) => (
                <CollaborationStep key={step.number} step={step} />
              ))}
            </ol>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
