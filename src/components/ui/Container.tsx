import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "header" | "footer" | "nav";
};

export function Container({
  children,
  className,
  as: Tag = "div",
}: ContainerProps) {
  return <Tag className={cn("container-site", className)}>{children}</Tag>;
}
