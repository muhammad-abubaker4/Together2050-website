import { ProfileCard } from "../components/content/ProfileCard";
import { Reveal } from "../components/ui/Reveal";
import { Seo } from "../components/ui/Seo";
import { advisoryCouncil, advisoryIntro } from "../data/advisory";
import { PAGE_SEO } from "../data/site";

export function AdvisoryCouncil() {
  return (
    <main id="main-content">
      <Seo {...PAGE_SEO.advisory} />
      <header className="border-b border-paper/10 bg-ink pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32">
        <div className="container-site">
          <p className="text-[0.7rem] font-medium tracking-[0.28em] uppercase text-red">
            Advisory Council
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-medium leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Advisory Council
          </h1>
          <span className="mt-8 block h-px w-16 bg-red" aria-hidden />
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-stone text-pretty sm:text-lg">
            {advisoryIntro}
          </p>
        </div>
      </header>

      <section className="bg-paper py-16 text-ink sm:py-20 lg:py-24">
        <div className="container-site">
          <div className="border-t border-ink/10">
            {advisoryCouncil.map((person, index) => (
              <Reveal key={person.id} delay={index * 40}>
                <ProfileCard person={person} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
