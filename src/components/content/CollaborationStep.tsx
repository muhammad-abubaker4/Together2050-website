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
    <li className="group relative flex gap-5">
      <div className="flex flex-col items-center">
        <span
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center border text-[0.7rem] tracking-[0.12em]",
            isDark
              ? "border-paper/20 text-paper"
              : "border-ink/15 text-ink",
          )}
        >
          {step.number}
        </span>
        <span
          className={cn(
            "mt-2 w-px flex-1 group-last:hidden",
            isDark ? "bg-paper/10" : "bg-ink/10",
          )}
          aria-hidden
        />
      </div>
      <div className="pb-10 last:pb-0">
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
