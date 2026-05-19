import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/utils/cn";

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  className?: string;
};

const variants = {
  primary:
    "bg-brand-bright text-white shadow-red-glow hover:bg-brand-soft hover:-translate-y-0.5",
  secondary:
    "border border-white/14 bg-white/[0.06] text-white backdrop-blur-xl hover:border-brand-bright/60 hover:bg-white/[0.1] hover:-translate-y-0.5",
  ghost: "text-metal-100 hover:bg-white/[0.07] hover:text-white"
};

export function Button({ children, href, variant = "primary", external, className }: ButtonProps) {
  const classes = cn(
    "focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition duration-300",
    variants[variant],
    className
  );

  if (external) {
    return (
      <a className={classes} href={href} target="_blank" rel="noreferrer">
        {children}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}
