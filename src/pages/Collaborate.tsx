import { CollaborationStep } from "../components/content/CollaborationStep";
import { Button } from "../components/ui/Button";
import { Reveal } from "../components/ui/Reveal";
import { Seo } from "../components/ui/Seo";
import {
  collaborationAreas,
  collaborationIntro,
  collaborationSteps,
  whyPartner,
} from "../data/collaboration";
import { FORMS, PAGE_SEO, SITE } from "../data/site";

export function Collaborate() {
  return (
    <main id="main-content">
      <Seo {...PAGE_SEO.collaborate} />
      <header className="border-b border-paper/10 bg-ink pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32">
        <div className="container-site">
          <p className="text-[0.7rem] font-medium tracking-[0.28em] uppercase text-red">
            Collaborate
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-medium leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Let's Build Together
          </h1>
          <span className="mt-8 block h-px w-16 bg-red" aria-hidden />
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-stone text-pretty sm:text-lg">
            {collaborationIntro}
          </p>
        </div>
      </header>

      <section className="bg-paper py-16 text-ink sm:py-20 lg:py-24">
        <div className="container-site">
          <Reveal>
            <p className="text-[0.7rem] font-medium tracking-[0.28em] uppercase text-red">
              Areas of collaboration
            </p>
            <h2 className="mt-5 max-w-2xl text-3xl font-medium tracking-tight sm:text-4xl">
              Where we can work together
            </h2>
          </Reveal>
          <ol className="mt-12 border-t border-ink/10">
            {collaborationAreas.map((area, index) => (
              <Reveal
                key={area}
                as="li"
                delay={index * 30}
                className="grid gap-3 border-b border-ink/10 py-5 sm:grid-cols-[4rem_minmax(0,1fr)] sm:items-center sm:gap-8 sm:py-6"
              >
                <p className="text-[0.7rem] font-medium tracking-[0.22em] text-red">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="text-lg font-medium tracking-tight text-ink sm:text-xl">
                  {area}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ink py-20 sm:py-24 lg:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start lg:gap-20">
          <Reveal>
            <p className="text-[0.7rem] font-medium tracking-[0.28em] uppercase text-red">
              Why partner with Together2050
            </p>
            <h2 className="mt-5 max-w-md text-3xl font-medium tracking-tight text-balance sm:text-4xl">
              Shared purpose, mutual respect.
            </h2>
          </Reveal>
          <Reveal
            delay={60}
            className="max-w-2xl space-y-5 text-base leading-relaxed text-stone sm:text-lg lg:pt-1"
          >
            {whyPartner.map((paragraph, index) => (
              <p
                key={paragraph}
                className={
                  index === whyPartner.length - 1
                    ? "border-l-2 border-red pl-6"
                    : undefined
                }
              >
                {paragraph}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-20 text-ink sm:py-24 lg:py-28">
        <div className="container-site">
          <Reveal>
            <p className="text-[0.7rem] font-medium tracking-[0.28em] uppercase text-red">
              Collaboration process
            </p>
            <h2 className="mt-5 max-w-2xl text-3xl font-medium tracking-tight sm:text-4xl">
              A clear way to begin
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
              Partnerships begin with a conversation. For partnership or MoU
              discussions, write to{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="text-ink transition-colors hover:text-red"
              >
                {SITE.email}
              </a>.
            </p>
            <div className="mt-8">
              <Button
                href={FORMS.collaboration}
                variant="primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Collaborate
              </Button>
            </div>
          </Reveal>

          <ol className="mt-14 lg:hidden">
            {collaborationSteps.map((step) => (
              <CollaborationStep key={step.number} step={step} />
            ))}
          </ol>

          <ol className="mt-16 hidden lg:grid lg:grid-cols-5">
            {collaborationSteps.map((step, index) => (
              <li key={step.number} className="relative pr-6 last:pr-0">
                {index < collaborationSteps.length - 1 ? (
                  <span
                    className="absolute top-5 right-4 left-12 h-px bg-ink/15"
                    aria-hidden
                  />
                ) : null}
                <span className="relative z-10 inline-flex h-10 w-10 items-center justify-center border border-ink/15 bg-paper text-[0.7rem] tracking-[0.12em] text-red">
                  {step.number}
                </span>
                <h3 className="mt-5 text-lg font-medium tracking-tight text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
