import { getLogoSrc } from "../../lib/assets";
import { cn } from "../../lib/cn";

type BrandMarkProps = {
  className?: string;
  imgClassName?: string;
};

export function BrandMark({ className, imgClassName }: BrandMarkProps) {
  return (
    <img
      src={getLogoSrc()}
      alt="Together2050"
      width={1310}
      height={155}
      className={cn(
        "w-auto",
        !imgClassName && "h-7 max-w-[11rem] sm:h-8 sm:max-w-[13.5rem]",
        className,
        imgClassName,
      )}
    />
  );
}
