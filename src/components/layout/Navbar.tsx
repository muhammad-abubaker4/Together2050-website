import { useEffect, useId, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "../../data/site";
import { BrandMark } from "../content/BrandMark";
import { Button } from "../ui/Button";
import { cn } from "../../lib/cn";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const panelId = useId();
  const wasOpen = useRef(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      if (wasOpen.current) {
        menuButtonRef.current?.focus();
      }
      wasOpen.current = false;
      return;
    }

    wasOpen.current = true;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function focusableElements() {
      const root = headerRef.current;
      if (!root) return [];
      return Array.from(
        root.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
        ),
      ).filter((el) => {
        if (el.closest("[hidden]")) return false;
        return el.getClientRects().length > 0;
      });
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const items = focusableElements();
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (event.shiftKey && (active === first || !rootContains(active))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (active === last || !rootContains(active))) {
        event.preventDefault();
        first.focus();
      }
    }

    function rootContains(node: Node | null) {
      return Boolean(node && headerRef.current?.contains(node));
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        scrolled || open
          ? "border-paper/10 bg-ink/95 backdrop-blur-md"
          : "border-transparent bg-ink/70 backdrop-blur-sm",
      )}
    >
      <div className="container-site flex h-16 items-center justify-between gap-3 sm:gap-4 lg:h-[4.25rem]">
        <Link
          to="/"
          className="min-w-0 shrink"
          aria-label="Together2050 home"
        >
          <BrandMark imgClassName="h-6 max-w-[9.5rem] sm:h-7 sm:max-w-[11rem] md:h-8 md:max-w-[13.5rem]" />
        </Link>

        <nav className="hidden items-center gap-5 xl:flex xl:gap-7" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                cn(
                  "text-[0.68rem] font-medium tracking-[0.18em] uppercase transition-colors",
                  isActive ? "text-red" : "text-paper/80 hover:text-paper",
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden xl:block">
          <Button to="/contact" variant="primary" className="px-5 py-2.5">
            Get Involved
          </Button>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-paper/15 text-paper xl:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
        </button>
      </div>

      <div
        id={panelId}
        ref={panelRef}
        hidden={!open}
        className={cn(
          "border-t border-paper/10 bg-ink xl:hidden",
          open ? "block" : "hidden",
        )}
      >
        <div className="container-site flex flex-col gap-1 py-6">
          <div className="mb-2 flex justify-end">
            <button
              ref={closeButtonRef}
              type="button"
              className="border border-paper/15 px-4 py-2 text-[0.68rem] font-medium tracking-[0.18em] uppercase text-paper"
              onClick={closeMenu}
            >
              Close
            </button>
          </div>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                cn(
                  "border-b border-paper/10 py-3 text-sm tracking-[0.16em] uppercase",
                  isActive ? "text-red" : "text-paper",
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="pt-5">
            <Button to="/contact" variant="primary" className="w-full">
              Get Involved
            </Button>
          </div>
          <p className="pt-6 text-xs tracking-wide text-stone">{SITE.tagline}</p>
        </div>
      </div>
    </header>
  );
}
