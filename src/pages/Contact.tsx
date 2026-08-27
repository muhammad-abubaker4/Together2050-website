import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactForm } from "../components/content/ContactForm";
import { SocialLinks } from "../components/content/SocialLinks";
import { PageHero } from "../components/ui/PageHero";
import { Reveal } from "../components/ui/Reveal";
import { Seo } from "../components/ui/Seo";
import { PAGE_SEO, SITE, SOCIAL_LINKS } from "../data/site";

export function Contact() {
  return (
    <main id="main-content">
      <Seo {...PAGE_SEO.contact} />
      <PageHero
        eyebrow="Contact"
        title="Have an Idea?"
        description="A conversation can become an opportunity. An idea can become action. Let's create what matters together."
      />

      <section className="bg-paper py-16 text-ink sm:py-20 lg:py-24">
        <div className="container-site grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="text-[0.7rem] font-medium tracking-[0.28em] uppercase text-red">
              Official channels
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
              Get in touch
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
              Use the official email or social channels below. We do not
              publish additional contact details.
            </p>

            <a
              href={`mailto:${SITE.email}`}
              className="mt-8 inline-flex items-center gap-3 border border-ink/15 px-4 py-3 text-sm transition-colors hover:border-red hover:text-red"
            >
              <Mail size={16} aria-hidden />
              {SITE.email}
            </a>

            <div className="mt-10" id="community">
              <p className="text-[0.7rem] tracking-[0.22em] uppercase text-muted">
                Join the community
              </p>
              <SocialLinks tone="light" className="mt-4" />
              <ul className="mt-6 space-y-2 text-sm text-muted">
                {SOCIAL_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-ink"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="border border-ink/10 bg-cream/40 p-6 sm:p-8">
              <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-red">
                Write to us
              </p>
              <p className="mt-3 mb-8 text-sm leading-relaxed text-muted">
                Messages are received at {SITE.email}.
              </p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-16 sm:py-20">
        <div className="container-site grid gap-4 sm:grid-cols-3 sm:gap-6">
          <Reveal>
            <a
              href="#community"
              className="block border border-paper/12 p-6 transition-colors hover:border-red"
            >
              <p className="text-[0.7rem] tracking-[0.2em] uppercase text-red">
                Join the community
              </p>
              <p className="mt-3 text-stone">
                Follow Together2050 on the official channels and write to us if
                you would like to take part.
              </p>
            </a>
          </Reveal>
          <Reveal delay={60}>
            <Link
              to="/collaborate"
              className="block border border-paper/12 p-6 transition-colors hover:border-red"
            >
              <p className="text-[0.7rem] tracking-[0.2em] uppercase text-red">
                Collaborate with us
              </p>
              <p className="mt-3 text-stone">
                Individuals, communities, organizations, and institutions are
                welcome to begin a conversation.
              </p>
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <a
              href={`mailto:${SITE.email}`}
              className="block border border-paper/12 p-6 transition-colors hover:border-red"
            >
              <p className="text-[0.7rem] tracking-[0.2em] uppercase text-red">
                Contact us
              </p>
              <p className="mt-3 text-stone">{SITE.email}</p>
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
