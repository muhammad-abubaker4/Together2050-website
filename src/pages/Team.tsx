import { TeamMember } from "../components/content/TeamMember";
import { Divider } from "../components/ui/Divider";
import { PageHero } from "../components/ui/PageHero";
import { Reveal } from "../components/ui/Reveal";
import { Seo } from "../components/ui/Seo";
import { PAGE_SEO } from "../data/site";
import { cofounder, founder, teamIntro } from "../data/team";

export function Team() {
  return (
    <main id="main-content">
      <Seo {...PAGE_SEO.team} />
      <PageHero eyebrow="Team" title="Our Team" description={teamIntro} />

      <section className="bg-paper py-16 text-ink sm:py-20 lg:py-24">
        <div className="container-site space-y-20">
          <Reveal>
            <h2 className="text-[0.7rem] font-medium tracking-[0.28em] uppercase text-red">
              Founding leadership
            </h2>
          </Reveal>

          <Reveal>
            <TeamMember member={founder} featured tone="light" />
          </Reveal>

          <Divider tone="light" />

          <Reveal>
            <TeamMember member={cofounder} featured tone="light" />
          </Reveal>
        </div>
      </section>

      {/* Shown when the core team is complete.
      <section className="bg-paper py-16 text-ink sm:py-20 lg:py-24">
        <div className="container-site">
          <Reveal>
            <p className="text-[0.7rem] font-medium tracking-[0.28em] uppercase text-red">
              Core Team
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
              Programs, research, community, and outreach.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
            {coreTeam.map((member, index) => (
              <Reveal key={member.id} delay={index * 80}>
                <TeamMember member={member} tone="light" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      */}
    </main>
  );
}
