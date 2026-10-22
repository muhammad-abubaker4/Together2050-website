import type { Person } from "../../data/person";
import { getPortraitSrc } from "../../lib/assets";
import { cn } from "../../lib/cn";

type PortraitProps = {
  person: Person;
  className?: string;
  frameClassName?: string;
  position?: string;
  priority?: boolean;
};

export function Portrait({
  person,
  className,
  frameClassName,
  position,
  priority = false,
}: PortraitProps) {
  const src = getPortraitSrc(person.id);

  return (
    <div
      className={cn(
        "relative aspect-[4/5] overflow-hidden rounded-[5px] bg-ink-soft",
        frameClassName,
      )}
    >
      {src ? (
        <img
          src={src}
          alt={person.name}
          width={800}
          height={1000}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className={cn("absolute inset-0 h-full w-full object-cover", className)}
          style={{
            objectPosition: position ?? person.photoPosition ?? "center 20%",
            transform: person.photoScale ? `scale(${person.photoScale})` : undefined,
            transformOrigin: person.photoOrigin,
          }}
        />
      ) : (
        <div
          className="flex h-full min-h-40 items-end justify-between p-4"
          aria-hidden
        >
          <span className="text-3xl font-medium tracking-tight text-paper">
            {person.initials}
          </span>
          <span className="h-8 w-px bg-red" />
        </div>
      )}
    </div>
  );
}
