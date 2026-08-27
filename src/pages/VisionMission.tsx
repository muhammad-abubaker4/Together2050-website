import { PageHero } from "../components/ui/PageHero";
import { Reveal } from "../components/ui/Reveal";
import { Seo } from "../components/ui/Seo";
import { PAGE_SEO } from "../data/site";

export function VisionMission() {
  return (
    <main id="main-content">
      <Seo {...PAGE_SEO.vision} />
      <PageHero
        eyebrow="Vision & Mission"
        title="Our Vision and Our Mission"
      />

      <section className="bg-paper py-16 text-ink sm:py-20 lg:py-24">
        <div className="container-site grid gap-8 lg:grid-cols-[minmax(0,16rem)_1fr] lg:gap-16">
          <Reveal>
            <h2 className="text-2xl font-medium tracking-tight text-red sm:text-3xl">
              Our Vision
            </h2>
          </Reveal>
          <Reveal delay={40} className="max-w-3xl space-y-6">
            <p className="text-base leading-relaxed text-muted text-pretty sm:text-lg">
              We envision a future where people come together through shared
              possibilities, where knowledge is accessible, ideas are exchanged
              openly, and collective potential is transformed into meaningful
              action.
            </p>
            <p className="text-base leading-relaxed text-muted text-pretty sm:text-lg">
              By connecting people, ideas, and opportunities, we aspire to
              contribute to lasting progress toward 2050 and beyond.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-16 sm:py-20 lg:py-28">
        <div className="container-site grid gap-8 lg:grid-cols-[minmax(0,16rem)_1fr] lg:gap-16">
          <Reveal>
            <h2 className="text-2xl font-medium tracking-tight text-red sm:text-3xl">
              Our Mission
            </h2>
          </Reveal>
          <Reveal delay={40} className="max-w-3xl space-y-6">
            <p className="text-base leading-relaxed text-stone text-pretty sm:text-lg">
              Our mission is to connect people, ideas, and opportunities;
              empower individuals and communities through knowledge, innovation,
              and collaboration; and create pathways through which potential can
              become meaningful contribution.
            </p>
            <p className="text-base leading-relaxed text-stone text-pretty sm:text-lg">
              We aim to build an environment where people can learn from one
              another, share ideas, develop capabilities, form meaningful
              connections, and work together on challenges and opportunities
              that matter.
            </p>
            <p className="text-base leading-relaxed text-stone text-pretty sm:text-lg">
              Through initiatives, communities, partnerships, projects, and open
              collaboration, Together2050 seeks to turn individual potential
              into collective progress.
            </p>
            <p className="text-base leading-relaxed text-stone text-pretty sm:text-lg">
              Our mission is not limited to preparing people for the future.
            </p>
            <blockquote className="border-l-2 border-red pl-6">
              <p className="text-2xl font-medium leading-snug tracking-tight text-balance sm:text-3xl lg:text-4xl">
                It is about enabling people to actively participate in creating
                it.
              </p>
            </blockquote>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
