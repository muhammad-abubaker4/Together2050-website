import type { CollaborationStep as Step } from "../../data/collaboration";
import { cn } from "../../lib/cn";

type CollaborationStepProps = {
  step: Step;
  tone?: "dark" | "light";
};

export function CollaborationStep({
  step,
  tone = "light",
}: CollaborationStepProps) {
  const isDark = tone === "dark";

  return (
    <li className="group relative flex gap-5 pb-10 last:pb-0">
      <div className="relative w-10 shrink-0">
        <span
          className={cn(
            "relative z-10 flex h-10 w-10 items-center justify-center border bg-paper text-[0.7rem] tracking-[0.12em]",
            isDark
              ? "border-paper/20 bg-transparent text-paper"
              : "border-ink/15 text-red",
          )}
        >
          {step.number}
        </span>
        <span
          className={cn(
            "absolute top-12 -bottom-6 left-1/2 w-px -translate-x-1/2 group-last:hidden",
            isDark ? "bg-paper/20" : "bg-ink/15",
          )}
          aria-hidden
        />
      </div>
      <div>
        <h3
          className={cn(
            "text-lg font-medium tracking-tight sm:text-xl",
            isDark ? "text-paper" : "text-ink",
          )}
        >
          {step.title}
        </h3>
        <p
          className={cn(
            "mt-2 max-w-md text-sm leading-relaxed sm:text-base",
            isDark ? "text-stone" : "text-muted",
          )}
        >
          {step.description}
        </p>
      </div>
    </li>
  );
}
