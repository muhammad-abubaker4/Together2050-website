import { cn } from "../../lib/cn";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  className,
}: PageHeroProps) {
  return (
    <header
      className={cn(
        "border-b border-paper/10 bg-ink pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24",
        className,
      )}
    >
      <div className="container-site">
        {eyebrow ? (
          <p className="mb-5 text-[0.7rem] font-medium tracking-[0.28em] uppercase text-red">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="max-w-4xl text-4xl font-medium leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone text-pretty sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </header>
  );
}
