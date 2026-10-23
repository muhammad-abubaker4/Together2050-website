import type { Person } from "../../data/person";
import { Portrait } from "./Portrait";

type ProfileCardProps = {
  person: Person;
};

function position(role: string) {
  return role.replace(", Together2050", "");
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden fill="currentColor">
      <path d="M6.5 9.2H3.7V20h2.8V9.2zM5.1 4C4.1 4 3.3 4.8 3.3 5.8S4.1 7.6 5.1 7.6 6.9 6.8 6.9 5.8 6.1 4 5.1 4zM20.3 13.3c0-3-1.6-4.4-3.7-4.4-1.7 0-2.5.9-2.9 1.6V9.2H10.9c0 1.9 0 10.8 0 10.8h2.8v-6c0-.3 0-.7.1-1 .3-.7.9-1.4 2-1.4 1.4 0 2 1.1 2 2.6V20h2.8v-6.7z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function GmailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden fill="currentColor">
      <path d="M22 6.2v11.5c0 .7-.6 1.3-1.3 1.3h-3.2V11.2L12 15.2 6.5 11.2v7.8H3.3c-.7 0-1.3-.6-1.3-1.3V6.2c0-1.6 1.8-2.5 3.1-1.6L6.5 5.5 12 9.5l5.5-4 1.2-.9c1.3-.9 3.1 0 3.1 1.6z" />
    </svg>
  );
}

export function ProfileLinks({
  person,
  align = "center",
}: {
  person: Person;
  align?: "center" | "start";
}) {
  const links = [
    person.linkedin
      ? {
          label: "LinkedIn",
          href: person.linkedin,
          external: true,
          aria: `LinkedIn profile of ${person.name}`,
          icon: <LinkedInIcon />,
        }
      : null,
    person.instagram
      ? {
          label: "Instagram",
          href: person.instagram,
          external: true,
          aria: `Instagram profile of ${person.name}`,
          icon: <InstagramIcon />,
        }
      : null,
    person.email
      ? {
          label: "Gmail",
          href: `mailto:${person.email}`,
          external: false,
          aria: `Email ${person.name} at ${person.email}`,
          icon: <GmailIcon />,
        }
      : null,
  ].filter((link) => link !== null);

  if (links.length === 0) return null;

  return (
    <ul
      className={`mt-5 flex flex-wrap items-center gap-2 ${
        align === "start" ? "justify-start" : "justify-center lg:justify-start"
      }`}
    >
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            {...(link.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            aria-label={link.aria}
            title={link.label === "Gmail" ? person.email : undefined}
            className="inline-flex h-10 w-10 items-center justify-center border border-ink/15 text-ink transition-colors hover:border-red hover:text-red"
          >
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function ProfileCard({ person }: ProfileCardProps) {
  return (
    <article className="grid gap-8 border-b border-ink/10 py-12 text-center lg:grid-cols-[18rem_minmax(0,1fr)] lg:items-center lg:gap-16 lg:py-16 lg:text-left">
      <Portrait
        person={person}
        frameClassName="mx-auto aspect-[4/5] w-full max-w-[18rem] border border-ink/10 lg:mx-0"
      />
      <div className="min-w-0">
        <p className="text-[0.7rem] font-medium tracking-[0.16em] uppercase text-red">
          {position(person.role)}
        </p>
        <h2 className="mt-3 text-2xl font-medium tracking-tight text-ink">{person.name}</h2>
        <ProfileLinks person={person} />
        {person.bio ? (
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-ink text-pretty lg:mx-0">
            {person.bio}
          </p>
        ) : null}
        {person.advisoryRole ? (
          <div className="mx-auto mt-4 flex max-w-3xl items-start gap-3 text-left lg:mx-0">
            <span aria-hidden className="mt-1 w-0.5 shrink-0 self-stretch bg-red" />
            <p className="text-base leading-relaxed text-muted text-pretty">
              {person.advisoryRole}
            </p>
          </div>
        ) : null}
      </div>
    </article>
  );
}
