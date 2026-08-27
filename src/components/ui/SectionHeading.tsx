import { cn } from "../../lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  as?: "h1" | "h2";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  as: Tag = "h2",
  className,
}: SectionHeadingProps) {
  const muted = tone === "dark" ? "text-stone" : "text-muted";
  const titleColor = tone === "dark" ? "text-paper" : "text-ink";

  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-4 text-[0.7rem] font-medium tracking-[0.28em] uppercase text-red",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <Tag
        className={cn(
          "text-3xl font-medium leading-[1.15] tracking-tight text-balance sm:text-4xl lg:text-5xl",
          titleColor,
        )}
      >
        {title}
      </Tag>
      {description ? (
        <p
          className={cn(
            "mt-5 max-w-2xl text-base leading-relaxed text-pretty sm:text-lg",
            muted,
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
