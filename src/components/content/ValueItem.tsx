import type { ValueItem as ValueData } from "../../data/values";
import { cn } from "../../lib/cn";

type ValueItemProps = {
  value: ValueData;
  tone?: "dark" | "light";
};

export function ValueItem({ value, tone = "dark" }: ValueItemProps) {
  const isDark = tone === "dark";

  return (
    <article
      className={cn(
        "border-t py-8 first:border-t-0 first:pt-0 sm:py-10",
        isDark ? "border-paper/10" : "border-ink/10",
      )}
    >
      <div className="grid gap-4 md:grid-cols-[7rem_minmax(0,14rem)_1fr] md:items-start md:gap-8">
        <p className="text-[0.7rem] tracking-[0.28em] text-red">{value.number}</p>
        <h3
          className={cn(
            "text-xl font-medium tracking-tight sm:text-2xl",
            isDark ? "text-paper" : "text-ink",
          )}
        >
          {value.title}
        </h3>
        <p
          className={cn(
            "max-w-xl text-base leading-relaxed text-pretty",
            isDark ? "text-stone" : "text-muted",
          )}
        >
          {value.description}
        </p>
      </div>
    </article>
  );
}
