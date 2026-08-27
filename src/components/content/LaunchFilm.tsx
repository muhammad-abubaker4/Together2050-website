import { SITE } from "../../data/site";

type LaunchFilmProps = {
  videoSrc?: string;
};

export function LaunchFilm({ videoSrc }: LaunchFilmProps) {
  return (
    <section className="border-y border-paper/10 bg-ink-soft py-16 sm:py-20 lg:py-24">
      <div className="container-site">
        <p className="text-[0.7rem] font-medium tracking-[0.28em] uppercase text-red">
          The Launch Film
        </p>
        <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
          Together2050
        </h2>
        <p className="mt-3 text-lg text-stone">{SITE.launch}</p>

        {videoSrc ? (
          <div className="mt-10 aspect-video w-full overflow-hidden border border-paper/12 bg-ink">
            <video
              className="h-full w-full object-cover"
              controls
              playsInline
              preload="metadata"
              src={videoSrc}
            >
              Your browser does not support the video element.
            </video>
          </div>
        ) : (
          <div className="mt-10 flex min-h-56 w-full items-end border border-paper/12 bg-ink p-6 sm:min-h-80 sm:p-10">
            <p className="max-w-lg text-sm leading-relaxed text-stone sm:text-base">
              Nothing meaningful is built in isolation.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
