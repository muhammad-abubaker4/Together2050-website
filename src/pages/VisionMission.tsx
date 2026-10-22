import { PageHero } from "../components/ui/PageHero";
import { Seo } from "../components/ui/Seo";
import { PAGE_SEO } from "../data/site";

export function VisionMission() {
  return (
    <main id="main-content">
      <Seo {...PAGE_SEO.vision} />
      <PageHero eyebrow="Vision & Mission" title="Shaping What Comes Next." />
      <Vision />
      <Mission />
    </main>
  );
}

function Vision() {
  return (
    <section className="bg-paper py-16 text-ink sm:py-20 lg:py-24">
      <div className="container-site grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
        <h2 className="max-w-md text-3xl font-medium tracking-tight text-balance sm:text-4xl lg:text-5xl">
          Our Vision
        </h2>
        <div className="max-w-xl space-y-4 text-base leading-relaxed text-muted text-pretty sm:text-lg">
          <p>
            We envision a future where people come together through shared
            possibilities, where knowledge is accessible, ideas are exchanged
            openly, and collective potential is transformed into meaningful
            action.
          </p>
          <p>
            We aspire to contribute to lasting progress toward 2050 and beyond.
          </p>
        </div>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section className="bg-ink py-16 sm:py-20 lg:py-24">
      <div className="container-site grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
        <h2 className="max-w-md text-3xl font-medium tracking-tight text-balance sm:text-4xl lg:text-5xl">
          Our Mission
        </h2>
        <div className="max-w-xl space-y-4 text-base leading-relaxed text-stone text-pretty sm:text-lg">
          <p>
            Our mission is to connect people, ideas, and opportunities; empower
            individuals and communities through knowledge, innovation, and
            collaboration; and create pathways through which potential can
            become meaningful contribution.
          </p>
          <p>
            We aim to build an environment where people can learn from one
            another, share ideas, develop capabilities, form meaningful
            connections, and work together on challenges and opportunities that
            matter.
          </p>
          <p>
            Through initiatives, communities, partnerships, projects, and open
            collaboration, Together2050 seeks to turn individual potential into
            collective progress.
          </p>
          <p className="border-l-2 border-red pl-6">
            Our mission is not limited to preparing people for the future. It
            is about enabling people to actively participate in creating it.
          </p>
        </div>
      </div>
    </section>
  );
}
