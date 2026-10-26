import { Button } from "../components/ui/Button";
import { PageHero } from "../components/ui/PageHero";
import { Seo } from "../components/ui/Seo";
import { pillars } from "../data/pillars";
import { PAGE_SEO } from "../data/site";
import { founderMessage } from "../data/team";

const participationLinks = [
  { label: "Our Work", to: "/what-we-do/" },
  { label: "Collaborate", to: "/collaborate/" },
  { label: "Get Involved", to: "/get-involved/" },
] as const;

export function About() {
  return (
    <main id="main-content">
      <Seo {...PAGE_SEO.about} />
      <PageHero
        eyebrow="About"
        title="More Than a Name. A Shared Direction."
      />
      <What />
      <Why />
      <FounderMessage />
      <HowItWorks />
      <Participation />
      <Audience />
    </main>
  );
}

function What() {
  return (
    <section className="bg-paper py-16 text-ink sm:py-20 lg:py-24">
      <div className="container-site grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
        <h2 className="max-w-md text-3xl font-medium tracking-tight text-balance sm:text-4xl lg:text-5xl">
          What is Together2050?
        </h2>
        <div className="max-w-xl space-y-4 text-base leading-relaxed text-muted text-pretty sm:text-lg">
          <p>
            Together2050 is a platform focused on the future, built on the
            belief that meaningful progress begins when people, ideas, and
            opportunities come together. We exist to create spaces for
            learning, connection, collaboration, and contribution. By bringing
            together diverse perspectives, knowledge, skills, and ambitions, we
            aim to help individuals and communities transform potential into
            purposeful action.
          </p>
          <p>
            Together2050 is not defined by a single field, profession,
            generation, or type of initiative. Our work can evolve across
            knowledge, technology, innovation, community development,
            creativity, and social impact, all connected by a shared purpose to
            create meaningful progress through collective effort.
          </p>
          <p>
            We believe the future is not built by a few people working alone.
            It is built when more people are able to participate, contribute,
            and create what matters.
          </p>
        </div>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section className="bg-ink py-16 sm:py-20 lg:py-24">
      <div className="container-site grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
        <h2 className="max-w-md text-3xl font-medium tracking-tight text-balance sm:text-4xl lg:text-5xl">
          Why Together2050 Exists
        </h2>
        <div className="max-w-xl space-y-4 text-base leading-relaxed text-stone text-pretty sm:text-lg">
          <p>
            Great ideas often remain unrealized not because of a lack of talent
            or ambition, but because the right people, opportunities, and
            resources never meet.
          </p>
          <p>
            Ideas and potential often stay disconnected from the people,
            knowledge, opportunities, and collaboration needed to become
            meaningful action.
          </p>
          <p>
            Together2050 seeks to help bridge those gaps by creating spaces for
            learning, connection, collaboration, and contribution. That is the
            direction of the work. It is not a claim that these gaps have
            already been closed.
          </p>
        </div>
      </div>
    </section>
  );
}

function FounderMessage() {
  return (
    <section className="bg-paper py-16 text-ink sm:py-20 lg:py-24">
      <div className="container-site grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-20">
        <div>
          <p className="text-[0.7rem] font-medium tracking-[0.28em] uppercase text-red">
            A message from the founder
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
            Muhammad Abubaker
          </h2>
          <p className="mt-2 text-[0.7rem] font-medium tracking-[0.18em] uppercase text-red">
            Founder, Together2050
          </p>
        </div>
        <div className="max-w-2xl space-y-3 text-base leading-normal text-muted text-pretty sm:text-lg">
          {founderMessage.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="bg-ink py-16 sm:py-20 lg:py-24">
      <div className="container-site">
        <h2 className="max-w-3xl text-3xl font-medium tracking-tight text-balance sm:text-4xl lg:text-5xl">
          How Together2050 Works
        </h2>
        <div className="mt-5 max-w-2xl space-y-4 text-base leading-relaxed text-stone text-pretty sm:text-lg">
          <p>
            Together2050 stands on four core pillars that guide its direction
            and decisions.
          </p>
          <p>
            Knowledge, connection, empowerment, and contribution guide the
            platform together. They are connected principles, not separate
            departments or independently established programs.
          </p>
        </div>
        <ol className="mt-12 border-t border-paper/15">
          {pillars.map((pillar) => (
            <li
              key={pillar.number}
              className="grid gap-4 border-b border-paper/15 py-8 lg:grid-cols-[6rem_minmax(0,1fr)] lg:gap-12"
            >
              <p className="text-[0.7rem] font-medium tracking-[0.22em] text-red">
                {pillar.number}
              </p>
              <div className="max-w-3xl">
                <h3 className="text-2xl font-medium tracking-tight sm:text-3xl">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-paper sm:text-lg">
                  {pillar.description}
                </p>
                <p className="mt-3 text-base leading-relaxed text-stone text-pretty">
                  {pillar.title === "Connection"
                    ? "Together2050 seeks to connect individuals, communities, disciplines, organizations, and ideas. We believe that when diverse perspectives come together, new possibilities emerge."
                    : pillar.body}
                </p>
                <p className="mt-4 text-[0.7rem] font-medium tracking-[0.16em] uppercase text-red">
                  {pillar.shortLine}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Participation() {
  return (
    <section className="bg-paper py-16 text-ink sm:py-20 lg:py-24">
      <div className="container-site grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
        <h2 className="max-w-md text-3xl font-medium tracking-tight text-balance sm:text-4xl lg:text-5xl">
          What Participation Can Look Like
        </h2>
        <div>
          <div className="max-w-xl space-y-4 text-base leading-relaxed text-muted text-pretty sm:text-lg">
            <p>
              People may take part by learning and sharing knowledge, exchanging
              ideas, finding collaborators, developing their capabilities,
              contributing skills, proposing initiatives, and working with
              communities or organizations.
            </p>
            <p>
              As the platform grows, these efforts may take different forms.
              They are ways to participate in or develop work through
              Together2050. They are not a statement that every activity is
              already running.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {participationLinks.map((link) => (
              <Button
                key={link.to}
                to={link.to}
                variant="on-light"
                className="w-full sm:w-auto"
              >
                {link.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Audience() {
  return (
    <section className="bg-ink py-16 sm:py-20 lg:py-24">
      <div className="container-site grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
        <h2 className="max-w-md text-3xl font-medium tracking-tight text-balance sm:text-4xl lg:text-5xl">
          Who Together2050 Is For
        </h2>
        <div className="max-w-xl space-y-4 text-base leading-relaxed text-stone text-pretty sm:text-lg">
          <p>
            Together2050 is for individuals, students, professionals, creators,
            community members, organizations, institutions, and potential
            collaborators.
          </p>
          <p>
            People can take part from different fields, generations, and
            places. What they share is a willingness to learn, connect,
            collaborate, and contribute.
          </p>
        </div>
      </div>
    </section>
  );
}
