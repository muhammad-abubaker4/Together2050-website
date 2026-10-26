import { Link } from "react-router-dom";
import { ContactForm } from "../components/content/ContactForm";
import { SocialLinks } from "../components/content/SocialLinks";
import { Button } from "../components/ui/Button";
import { Seo } from "../components/ui/Seo";
import { FORMS, PAGE_SEO, SITE } from "../data/site";

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

const paths = [
  {
    number: "01",
    title: "Join the Community",
    body: "For people who want to connect, learn, and participate.",
    action: "Join",
    href: FORMS.membership,
  },
  {
    number: "02",
    title: "Contribute Your Skills",
    body: "For people who want to help with initiatives and collaborative work. Write to us and say how you can help.",
    action: "Write to us",
    to: "/get-involved/#contact",
  },
  {
    number: "03",
    title: "Become an Ambassador",
    body: "For people interested in representing and supporting Together2050 in their communities. The ambassador form is how you put your name forward.",
    action: "Ambassador",
    href: FORMS.ambassador,
  },
  {
    number: "04",
    title: "Propose an Initiative",
    body: "For people who want to bring forward an idea or community project.",
    action: "Propose",
    href: FORMS.collaboration,
  },
  {
    number: "05",
    title: "Collaborate With Us",
    body: "For individuals, organizations, educational institutions, and other potential partners.",
    action: "Collaborate",
    href: FORMS.collaboration,
  },
] as const;

const whatsappNumber = SITE.phones[0].replace(/\D/g, "");

export function GetInvolved() {
  return (
    <main id="main-content">
      <Seo {...PAGE_SEO.getInvolved} />
      <header className="border-b border-paper/10 bg-ink pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32">
        <div className="container-site">
          <p className="text-[0.7rem] font-medium tracking-[0.28em] uppercase text-red">
            Get Involved
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-medium leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Turn Your Intent Into Impact.
          </h1>
          <span className="mt-8 block h-px w-16 bg-red" aria-hidden />
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-stone text-pretty sm:text-lg">
            Join a community of people who want to turn ideas into meaningful
            work. Contribute your skills, start a conversation locally, or
            collaborate with Together2050.
          </p>
        </div>
      </header>

      <section className="bg-paper py-16 text-ink sm:py-20 lg:py-24">
        <div className="container-site">
          <ol className="divide-y divide-ink/10 border-t border-ink/10">
            {paths.map((path) => (
              <li
                key={path.number}
                className="grid gap-4 py-6 sm:grid-cols-[3rem_minmax(0,1fr)_15rem] sm:items-center sm:gap-8 lg:py-8"
              >
                <p className="text-[0.7rem] font-medium tracking-[0.18em] text-red">
                  {path.number}
                </p>
                <div>
                  <h2 className="text-xl font-medium tracking-tight sm:text-2xl">
                    {path.title}
                  </h2>
                  <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                    {path.body}
                  </p>
                </div>
                {"href" in path ? (
                  <Button
                    href={path.href}
                    className="w-full whitespace-nowrap motion-reduce:transition-none"
                    {...external}
                  >
                    {path.action}
                  </Button>
                ) : (
                  <Button
                    to={path.to}
                    className="w-full whitespace-nowrap motion-reduce:transition-none"
                  >
                    {path.action}
                  </Button>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="scroll-mt-24 bg-ink py-16 sm:py-20 lg:py-24"
      >
        <div className="container-site">
          <p className="text-[0.7rem] font-medium tracking-[0.28em] uppercase text-red">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="mt-5 max-w-xl text-3xl font-medium tracking-tight text-balance text-paper sm:text-4xl"
          >
            Let's Start a Conversation.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-stone text-pretty sm:text-lg">
            Whether you have a question, an idea, or simply want to connect
            with Together2050, we'd be glad to hear from you.
          </p>
        </div>
      </section>

      <section className="bg-paper py-16 text-ink sm:py-20 lg:py-24">
        <div className="container-site">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <h3 className="text-2xl font-medium tracking-tight sm:text-3xl">
                Get in Touch
              </h3>
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

              <h3 className="mt-14 text-2xl font-medium tracking-tight sm:text-3xl">
                Follow TOGETHER2050
              </h3>
              <SocialLinks
                tone="light"
                className="mt-6"
                names={{ WhatsApp: "WhatsApp Channel" }}
              />
            </div>

            <ContactForm />
          </div>

          <p className="mt-16 max-w-2xl border-t border-ink/10 pt-10 text-sm leading-relaxed text-muted">
            For partnership proposals, visit{" "}
            <Link
              to="/collaborate/"
              className="text-ink underline decoration-current underline-offset-[0.18em] transition-colors hover:text-red"
            >
              Collaborate
            </Link>
            . To join activities and contribute, choose a pathway above.
          </p>
        </div>
      </section>
    </main>
  );
}
