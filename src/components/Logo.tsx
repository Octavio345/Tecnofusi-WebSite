import Image from "next/image";
import Link from "next/link";
import { cn } from "@/utils/cn";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("focus-ring inline-flex shrink-0 items-center rounded-lg", className)}
      aria-label="Tecnofusi"
    >
      <Image
        src="/images/tecnofusi-logo-animation.png"
        alt="Tecnofusi"
        width={1323}
        height={743}
        className="h-40 w-auto translate-y-2 sm:h-48"
        priority
        quality={100}
        sizes="500px"
      />
    </Link>
  );
}