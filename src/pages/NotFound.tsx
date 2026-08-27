import { Button } from "../components/ui/Button";
import { Seo } from "../components/ui/Seo";
import { PAGE_SEO } from "../data/site";

export function NotFound() {
  return (
    <main id="main-content" className="bg-ink">
      <Seo {...PAGE_SEO.notFound} />
      <div className="container-site flex min-h-[80svh] flex-col justify-center py-28">
        <p className="text-[0.7rem] font-medium tracking-[0.28em] uppercase text-red">
          404
        </p>
        <h1 className="mt-4 max-w-xl text-4xl font-medium tracking-tight sm:text-5xl">
          This page is not here.
        </h1>
        <p className="mt-5 max-w-md text-stone">
          The address may be incorrect, or the page may have moved.
        </p>
        <div className="mt-8">
          <Button to="/" variant="primary">
            Back to home
          </Button>
        </div>
      </div>
    </main>
  );
}
