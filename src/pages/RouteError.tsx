import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Button } from "../components/ui/Button";

export function RouteError() {
  const error = useRouteError();
  const isNotFound = isRouteErrorResponse(error) && error.status === 404;

  return (
    <main id="main-content" className="bg-ink">
      <div className="container-site flex min-h-[70svh] flex-col justify-center py-28">
        <p className="text-[0.7rem] font-medium tracking-[0.28em] uppercase text-red">
          {isNotFound ? "404" : "Error"}
        </p>
        <h1 className="mt-4 max-w-xl text-4xl font-medium tracking-tight sm:text-5xl">
          {isNotFound
            ? "This page is not here."
            : "Something went wrong."}
        </h1>
        <p className="mt-5 max-w-md text-stone">
          {isNotFound
            ? "The address may be incorrect, or the page may have moved."
            : "Please refresh the page. If the problem continues, return home and try again."}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button
            variant="primary"
            onClick={() => window.location.reload()}
          >
            Refresh
          </Button>
          <Button to="/" variant="secondary">
            Back to home
          </Button>
        </div>
      </div>
    </main>
  );
}
