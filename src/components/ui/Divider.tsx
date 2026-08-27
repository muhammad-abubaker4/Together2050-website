import { cn } from "../../lib/cn";

type DividerProps = {
  tone?: "dark" | "light";
  className?: string;
};

export function Divider({ tone = "dark", className }: DividerProps) {
  return (
    <div
      className={cn(
        "h-px w-full",
        tone === "dark" ? "bg-paper/10" : "bg-ink/10",
        className,
      )}
      aria-hidden
    />
  );
}
