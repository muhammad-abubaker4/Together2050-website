import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "../../lib/cn";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "article" | "li" | "section";
};

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -6% 0px" },
    );

    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (!inView) {
      setVisible(false);
    }

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none",
        visible ? "translate-y-0 opacity-100" : "translate-y-6 motion-safe:opacity-0",
        className,
      )}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}
