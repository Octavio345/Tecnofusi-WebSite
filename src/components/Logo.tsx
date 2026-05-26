import Image from "next/image";
import Link from "next/link";
import { cn } from "@/utils/cn";

type LogoProps = {
  className?: string;
  imageClassName?: string;
};

export function Logo({ className, imageClassName }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("focus-ring inline-flex shrink-0 items-center rounded-lg", className)}
      aria-label="Tecnofusi"
    >
      <Image
        src="/images/tecnofusi-logo-animation.webp"
        alt="Tecnofusi"
        width={1323}
        height={743}
        className={cn("h-28 w-auto translate-y-1 sm:h-32", imageClassName)}
        priority
        sizes="500px"
      />
    </Link>
  );
}
