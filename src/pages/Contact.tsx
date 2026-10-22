import { Link } from "react-router-dom";
import { ContactForm } from "../components/content/ContactForm";
import { SocialLinks } from "../components/content/SocialLinks";
import { PageHero } from "../components/ui/PageHero";
import { Reveal } from "../components/ui/Reveal";
import { Seo } from "../components/ui/Seo";
import { PAGE_SEO, SITE } from "../data/site";

const whatsappNumber = SITE.phones[0].replace(/\D/g, "");

export function Contact() {
  return (
    <main id="main-content">
      <Seo {...PAGE_SEO.contact} />
      <PageHero
        eyebrow="Contact"
        title="Let's Start a Conversation."
        description="Whether you have a question, an idea, or simply want to connect with Together2050, we'd be glad to hear from you."
      />

      <section className="bg-paper py-16 text-ink sm:py-20 lg:py-24">
        <div className="container-site">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
                Get in Touch
              </h2>
              <ul className="mt-8 space-y-6">
                <li>
                  <p className="text-[0.7rem] tracking-[0.18em] uppercase text-muted">
                    Email
                  </p>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="mt-2 inline-block text-base transition-colors hover:text-red sm:text-lg"
                  >
                    {SITE.email}
                  </a>
                </li>
                <li>
                  <p className="text-[0.7rem] tracking-[0.18em] uppercase text-muted">
                    WhatsApp
                  </p>
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-base transition-colors hover:text-red sm:text-lg"
                  >
                    {SITE.phones[0]}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              </ul>
            </Reveal>

            <Reveal delay={80}>
              <ContactForm />
            </Reveal>
          </div>

          <Reveal className="mt-16 border-t border-ink/10 pt-12 sm:mt-20">
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
              Follow TOGETHER2050
            </h2>
            <SocialLinks
              tone="light"
              className="mt-6"
              names={{ WhatsApp: "WhatsApp Channel" }}
            />
            <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted">
              For partnership proposals, visit <Link to="/collaborate" className="text-ink transition-colors hover:text-red">Collaborate</Link>. To join activities and contribute, visit <Link to="/get-involved" className="text-ink transition-colors hover:text-red">Get Involved</Link>.
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
