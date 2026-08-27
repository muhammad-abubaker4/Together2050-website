import type { Pillar } from "../../data/pillars";
import { cn } from "../../lib/cn";

type PillarCardProps = {
  pillar: Pillar;
  featured?: boolean;
  tone?: "dark" | "light";
};

export function PillarCard({
  pillar,
  featured = false,
  tone = "dark",
}: PillarCardProps) {
  const isDark = tone === "dark";

  return (
    <article
      className={cn(
        "flex h-full flex-col border p-6 sm:p-8",
        isDark ? "border-paper/12" : "border-ink/10 bg-paper",
        featured && "lg:p-10",
      )}
    >
      <p className="text-[0.7rem] font-medium tracking-[0.28em] text-red">
        {pillar.number}
      </p>
      <h3
        className={cn(
          "mt-4 font-medium tracking-tight",
          featured ? "text-3xl sm:text-4xl" : "text-2xl",
          isDark ? "text-paper" : "text-ink",
        )}
      >
        {pillar.title}
      </h3>
      <p
        className={cn(
          "mt-4 leading-relaxed text-pretty",
          featured ? "text-base sm:text-lg" : "text-base",
          isDark ? "text-paper/85" : "text-muted",
        )}
      >
        {pillar.description}
      </p>
      <p
        className={cn(
          "mt-3 leading-relaxed text-pretty",
          isDark ? "text-paper/85" : "text-muted",
        )}
      >
        {pillar.body}
      </p>
      <p
        className={cn(
          "mt-auto pt-8 text-sm tracking-wide",
          isDark ? "text-paper" : "text-ink",
        )}
      >
        {pillar.shortLine}
      </p>
    </article>
  );
}
