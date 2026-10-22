import { Button } from "../components/ui/Button";
import { Seo } from "../components/ui/Seo";
import { FORMS, PAGE_SEO } from "../data/site";

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
    to: "/contact",
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

export function GetInvolved() {
  return (
    <main id="main-content">
      <Seo {...PAGE_SEO.getInvolved} />
      <header className="border-b border-paper/10 bg-ink pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24">
        <div className="container-site grid items-end gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-20">
          <div>
            <p className="text-[0.7rem] font-medium tracking-[0.28em] uppercase text-red">
              Get Involved
            </p>
            <h1 className="mt-5 max-w-xl text-4xl font-medium leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Turn Your Intent Into Impact.
            </h1>
          </div>
          <p className="max-w-md border-l-2 border-red pl-6 text-base leading-relaxed text-stone text-pretty sm:text-lg">
            Join a community of people who want to turn ideas into meaningful
            work. Contribute your skills, start a conversation locally, or
            collaborate with Together2050.
          </p>
        </div>
      </header>

      <section className="bg-paper py-16 text-ink sm:py-20 lg:py-24">
        <div className="container-site">
          <ol className="grid gap-4 lg:grid-cols-3">
            {paths.map((path) => (
              <li key={path.number} className="h-full">
                <article className="flex h-full flex-col border border-ink/10 p-6 transition-colors duration-200 motion-reduce:transition-none hover:border-red sm:p-8">
                  <p className="text-[0.7rem] tracking-[0.2em] text-red">
                    {path.number}
                  </p>
                  <h2 className="mt-5 text-2xl font-medium tracking-tight">
                    {path.title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-muted">
                    {path.body}
                  </p>
                  <div className="mt-8 lg:mt-auto lg:pt-10">
                    {"href" in path ? (
                      <Button
                        href={path.href}
                        className="motion-reduce:transition-none"
                        {...external}
                      >
                        {path.action}
                      </Button>
                    ) : (
                      <Button to={path.to} className="motion-reduce:transition-none">
                        {path.action}
                      </Button>
                    )}
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
