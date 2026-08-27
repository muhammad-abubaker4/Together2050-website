import { Link } from "react-router-dom";
import { FOOTER_LINKS, SITE } from "../../data/site";
import { BrandMark } from "../content/BrandMark";
import { SocialLinks } from "../content/SocialLinks";
import { Container } from "../ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-paper/10 bg-ink text-paper">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <p>
              <BrandMark imgClassName="h-8 max-w-[14rem] sm:h-9" />
            </p>
            <p className="mt-4 max-w-sm text-lg font-medium tracking-tight text-paper">
              {SITE.tagline}
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-stone text-pretty">
              {SITE.description}
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="text-[0.68rem] tracking-[0.22em] uppercase text-stone">
              Explore
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-paper/90 transition-colors hover:text-red"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[0.68rem] tracking-[0.22em] uppercase text-stone">
              Contact
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-4 inline-block text-sm text-paper transition-colors hover:text-red"
            >
              {SITE.email}
            </a>
            <SocialLinks className="mt-6" />
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-paper/10 pt-6 text-xs text-stone sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Together2050. All rights reserved.</p>
          <p>Established {SITE.established}</p>
        </div>
      </Container>
    </footer>
  );
}
