import { cn } from "../../lib/cn";

type WordmarkProps = {
  className?: string;
};

export function Wordmark({ className }: WordmarkProps) {
  return (
    <span className={cn("font-medium tracking-[0.16em] sm:tracking-[0.28em]", className)}>
      <span className="text-red">TOGETHER</span>
      <span className="text-paper">2050</span>
    </span>
  );
}
