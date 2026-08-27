import type { TeamMember as TeamMemberData } from "../../data/team";
import { getTeamPhotoSrc } from "../../lib/assets";
import { cn } from "../../lib/cn";

type TeamMemberProps = {
  member: TeamMemberData;
  featured?: boolean;
  tone?: "dark" | "light";
};

export function TeamMember({
  member,
  featured = false,
  tone = "dark",
}: TeamMemberProps) {
  const isDark = tone === "dark";
  const photo = getTeamPhotoSrc(member.id);

  return (
    <article
      className={cn(
        "flex flex-col",
        featured
          ? "gap-8 lg:grid lg:grid-cols-[minmax(0,18rem)_1fr] lg:items-start lg:gap-14"
          : "gap-5",
      )}
    >
      {photo ? (
        <div
          className={cn(
            "overflow-hidden border",
            isDark ? "border-paper/12" : "border-ink/10",
            featured ? "aspect-[4/5] sm:min-h-72 lg:min-h-80" : "aspect-[4/5]",
          )}
        >
          <img
            src={photo}
            alt={member.name}
            width={720}
            height={900}
            className="h-full w-full object-cover object-top"
            loading="lazy"
            decoding="async"
          />
        </div>
      ) : (
        <div
          className={cn(
            "flex items-end justify-between border p-6",
            isDark ? "border-paper/12 bg-ink-soft" : "border-ink/10 bg-cream/60",
            featured ? "min-h-56 sm:min-h-72 lg:min-h-80" : "min-h-40",
          )}
          aria-hidden
        >
          <span
            className={cn(
              "font-medium leading-none tracking-tight",
              featured ? "text-6xl sm:text-7xl" : "text-4xl",
              isDark ? "text-paper" : "text-ink",
            )}
          >
            {member.initials}
          </span>
          <span className="h-10 w-px bg-red" />
        </div>
      )}

      <div>
        <p className="text-[0.7rem] font-medium tracking-[0.16em] uppercase text-red sm:tracking-[0.22em]">
          {member.role}
        </p>
        <h3
          className={cn(
            "mt-2 font-medium tracking-tight",
            featured ? "text-3xl sm:text-4xl" : "text-2xl",
            isDark ? "text-paper" : "text-ink",
          )}
        >
          {member.name}
        </h3>
        <p
          className={cn(
            "mt-4 max-w-2xl leading-relaxed text-pretty",
            featured ? "text-base sm:text-lg" : "text-sm sm:text-base",
            isDark ? "text-stone" : "text-muted",
          )}
        >
          {member.bio}
        </p>
      </div>
    </article>
  );
}
