import { OrgHierarchy } from "../components/content/OrgHierarchy";
import { Portrait } from "../components/content/Portrait";
import { ProfileLinks } from "../components/content/ProfileCard";
import { Seo } from "../components/ui/Seo";
import type { Person } from "../data/person";
import { PAGE_SEO } from "../data/site";
import {
  cofounder,
  communicationsTeam,
  communityOutreach,
  executiveLeadership,
  founder,
  researchTeam,
  teamIntro,
} from "../data/team";

function personById(people: Person[], id: string) {
  const person = people.find((item) => item.id === id);
  if (!person) {
    throw new Error(`Missing team member: ${id}`);
  }
  return person;
}

const sections: { id: string; name: string; members: Person[] }[] = [
  {
    id: "founding",
    name: "Founder and Co-Founder",
    members: [founder, cofounder],
  },
  {
    id: "executive",
    name: "Executive Leadership",
    members: executiveLeadership,
  },
  {
    id: "directors",
    name: "Directors",
    members: [
      personById(communityOutreach, "aimen-sultan"),
      personById(researchTeam, "saira-gulzar"),
      personById(communicationsTeam, "arbeeha-zahid"),
    ],
  },
  {
    id: "team",
    name: "Team Members",
    members: [
      personById(communicationsTeam, "dua-amjad"),
      personById(communicationsTeam, "ahmed-mujtaba"),
      personById(researchTeam, "muhammad-hassan"),
    ],
  },
];

const roster = sections.flatMap((section) =>
  section.members.map((person, index) => ({
    person,
    group: index === 0 ? section.name : null,
  })),
);

function roleLabel(role: string) {
  return role.replace(", Together2050", "");
}

function Member({
  person,
  number,
  group,
  priority = false,
}: {
  person: Person;
  number: string;
  group: string | null;
  priority?: boolean;
}) {
  return (
    <article className="grid items-start gap-6 border-b border-ink/10 py-10 md:grid-cols-[3rem_18rem_minmax(0,1fr)] md:gap-x-8 md:py-12">
      {group ? (
        <h2 className="text-[0.7rem] font-medium tracking-[0.28em] uppercase text-red md:col-span-3">
          {group}
        </h2>
      ) : null}
      <p className="text-sm font-medium tracking-[0.18em] text-muted tabular-nums">
        {number}
      </p>
      <Portrait
        person={person}
        priority={priority}
        frameClassName="aspect-[4/5] w-full max-w-[18rem] border border-ink/10"
      />
      <div className="min-w-0 md:pt-1">
        <p className="text-[0.7rem] font-medium tracking-[0.16em] uppercase text-red">
          {roleLabel(person.role)}
        </p>
        <h3 className="mt-2 text-xl font-medium tracking-tight sm:text-2xl">
          {person.name}
        </h3>
        <ProfileLinks person={person} align="start" />
        <p className="mt-3 max-w-xl text-base leading-relaxed text-muted text-pretty">
          {person.summary}
        </p>
      </div>
    </article>
  );
}

export function CoreTeam() {
  return (
    <main id="main-content">
      <Seo {...PAGE_SEO.team} />
      <header className="border-b border-paper/10 bg-ink pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32">
        <div className="container-site">
          <p className="text-[0.7rem] font-medium tracking-[0.28em] uppercase text-red">
            Team
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-medium leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Team
          </h1>
          <span className="mt-8 block h-px w-16 bg-red" aria-hidden />
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-stone text-pretty sm:text-lg">
            {teamIntro}
          </p>
        </div>
      </header>

      <section className="bg-paper py-16 text-ink sm:py-20 lg:py-24">
        <div className="container-site">
          <ol className="list-none border-t border-ink/10">
            {roster.map((entry, index) => (
              <li key={entry.person.id}>
                <Member
                  person={entry.person}
                  number={String(index + 1).padStart(2, "0")}
                  group={entry.group}
                  priority={index === 0}
                />
              </li>
            ))}
          </ol>
        </div>
      </section>

      <OrgHierarchy />
    </main>
  );
}
