import { SOCIAL_LINKS } from "../../data/site";
import { cn } from "../../lib/cn";

type SocialLinksProps = {
  className?: string;
  tone?: "dark" | "light";
  names?: Partial<Record<(typeof SOCIAL_LINKS)[number]["label"], string>>;
};

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden fill="currentColor">
      <path d="M14.5 8.5V6.8c0-.7.5-1.3 1.5-1.3h1V3h-2.1C12.4 3 11 4.6 11 6.8v1.7H9v2.7h2V21h3.5v-9.8h2.3l.4-2.7h-2.7z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden fill="currentColor">
      <path d="M6.5 9.2H3.7V20h2.8V9.2zM5.1 4C4.1 4 3.3 4.8 3.3 5.8S4.1 7.6 5.1 7.6 6.9 6.8 6.9 5.8 6.1 4 5.1 4zM20.3 13.3c0-3-1.6-4.4-3.7-4.4-1.7 0-2.5.9-2.9 1.6V9.2H10.9c0 1.9 0 10.8 0 10.8h2.8v-6c0-.3 0-.7.1-1 .3-.7.9-1.4 2-1.4 1.4 0 2 1.1 2 2.6V20h2.8v-6.7z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden fill="currentColor">
      <path d="M22 12.2s0-3.2-.4-4.6c-.2-.9-.9-1.6-1.8-1.8C18.2 5.4 12 5.4 12 5.4s-6.2 0-7.8.4c-.9.2-1.6.9-1.8 1.8C2 9 2 12.2 2 12.2s0 3.2.4 4.6c.2.9.9 1.6 1.8 1.8 1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.4.4-4.6.4-4.6zM10 15.5v-6.6l5.2 3.3-5.2 3.3z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden fill="currentColor">
      <path d="M12.1 3.2A8.7 8.7 0 0 0 4.6 16.3L3.4 20.6l4.4-1.2a8.7 8.7 0 0 0 4.3 1.1h.1A8.7 8.7 0 0 0 12.1 3.2zm5 12.3c-.2.6-1.2 1.1-1.7 1.2-.4.1-.9.1-1.5-.1-.3-.1-.8-.3-1.3-.5-2.3-1-3.8-3.3-3.9-3.5-.1-.2-1-1.3-1-2.5s.6-1.8.9-2c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .5.4.2.6.7 2 .7 2.1.1.1.1.3 0 .4-.1.2-.2.3-.3.5l-.4.4c-.1.1-.3.3-.1.6.2.3.7 1.2 1.6 1.9 1.1.9 2 1.1 2.3 1.3.3.1.4.1.6-.1l.7-.8c.2-.2.3-.2.6-.1l1.8.9c.2.1.4.2.5.3.1.2.1.7-.1 1.3z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden fill="currentColor">
      <path d="M14.2 3h2.4c.2 2.1 1.5 3.6 3.6 3.8v2.5c-1.2 0-2.3-.3-3.4-.9v6.4c0 3.4-2.6 5.7-5.8 5.7S5.2 18.2 5.2 14.8c0-3.3 2.5-5.6 5.7-5.6.3 0 .6 0 .9.1v2.6c-.3-.1-.6-.2-.9-.2-1.8 0-3.1 1.3-3.1 3.1s1.3 3.1 3.1 3.1 3.1-1.3 3.1-3.1V3z" />
    </svg>
  );
}

const icons = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  LinkedIn: LinkedInIcon,
  TikTok: TikTokIcon,
  YouTube: YouTubeIcon,
  WhatsApp: WhatsAppIcon,
} as const;

export function SocialLinks({
  className,
  tone = "dark",
  names,
}: SocialLinksProps) {
  const isDark = tone === "dark";

  return (
    <ul className={cn("flex flex-wrap items-center gap-2", className)}>
      {SOCIAL_LINKS.map((link) => {
        const Icon = icons[link.label];
        const name = names?.[link.label] ?? link.label;
        return (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center border transition-colors",
                isDark
                  ? "border-paper/15 text-paper hover:border-red hover:text-red"
                  : "border-ink/15 text-ink hover:border-red hover:text-red",
              )}
              aria-label={`${name} (opens in a new tab)`}
            >
              <Icon />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
