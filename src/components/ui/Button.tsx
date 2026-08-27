import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "on-light";

type CommonProps = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    to?: undefined;
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  to: string;
  href?: undefined;
};

type ButtonAsAnchor = CommonProps & {
  href: string;
  to?: undefined;
  target?: string;
  rel?: string;
};

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-red text-paper hover:bg-red-deep border border-red hover:border-red-deep",
  secondary:
    "bg-transparent text-paper border border-paper/25 hover:border-paper hover:bg-paper/5",
  ghost:
    "bg-transparent text-paper border-transparent hover:text-red px-0",
  "on-light":
    "bg-transparent text-ink border border-ink/20 hover:border-ink hover:bg-ink hover:text-paper",
};

export function Button(props: ButtonProps) {
  const { children, className, variant = "primary" } = props;
  const classes = cn(
    "inline-flex items-center justify-center gap-2 px-6 py-3 text-[0.7rem] font-medium tracking-[0.18em] uppercase transition-colors duration-200",
    "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red disabled:pointer-events-none disabled:opacity-50",
    variantClasses[variant],
    className,
  );

  if ("to" in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        {children}
      </Link>
    );
  }

  if ("href" in props && props.href) {
    return (
      <a
        href={props.href}
        className={classes}
        target={props.target}
        rel={props.rel}
      >
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button
      type={buttonProps.type ?? "button"}
      className={classes}
      disabled={buttonProps.disabled}
      onClick={buttonProps.onClick}
    >
      {children}
    </button>
  );
}
