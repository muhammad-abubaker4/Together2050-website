import { Button } from "../ui/Button";
import { cn } from "../../lib/cn";

type CTASectionProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryTo: string;
  secondaryLabel?: string;
  secondaryTo?: string;
  tone?: "dark" | "light";
  className?: string;
};

export function CTASection({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
  tone = "dark",
  className,
}: CTASectionProps) {
  const isDark = tone === "dark";

  return (
    <section
      className={cn(
        "py-20 sm:py-24 lg:py-28",
        isDark ? "bg-ink text-paper" : "bg-paper text-ink",
        className,
      )}
    >
      <div className="container-site max-w-3xl">
        {eyebrow ? (
          <p className="mb-4 text-[0.7rem] font-medium tracking-[0.28em] uppercase text-red">
            {eyebrow}
          </p>
        ) : null}
        <h2
          className={cn(
            "text-3xl font-medium tracking-tight text-balance sm:text-4xl lg:text-5xl",
            isDark ? "text-paper" : "text-ink",
          )}
        >
          {title}
        </h2>
        <p
          className={cn(
            "mt-5 max-w-xl text-base leading-relaxed text-pretty sm:text-lg",
            isDark ? "text-stone" : "text-muted",
          )}
        >
          {description}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button to={primaryTo} variant="primary">
            {primaryLabel}
          </Button>
          {secondaryLabel && secondaryTo ? (
            <Button
              to={secondaryTo}
              variant={isDark ? "secondary" : "on-light"}
            >
              {secondaryLabel}
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
