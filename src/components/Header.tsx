"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";
import { useScrolled } from "@/hooks/useScrolled";
import { navItems, siteConfig } from "@/lib/site";
import { cn } from "@/utils/cn";

export function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(18);
  const pathname = usePathname();

  return (
    <LazyMotion features={domAnimation} strict>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-white/10 bg-graphite-950/78 shadow-premium backdrop-blur-2xl"
            : "bg-transparent"
        )}
      >
        <div className="container-premium flex h-[var(--header-height)] items-center justify-between">
          <Logo />

        <nav
          className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.045] p-1 backdrop-blur-xl lg:flex"
          aria-label="Navegação principal"
        >
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "focus-ring relative rounded-full px-4 py-2 text-sm font-medium transition duration-300",
                  active
                    ? "text-white"
                    : "text-metal-100 hover:bg-brand-bright/14 hover:text-white"
                )}
              >
                {active && (
                  <m.span
                    layoutId="active-nav-pill"
                    className="absolute inset-0 rounded-full bg-brand-bright shadow-red-glow"
                    transition={{
                      type: "spring",
                      stiffness: 420,
                      damping: 34
                    }}
                    aria-hidden="true"
                  />
                )}

                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href={siteConfig.whatsappHref} external>
            Solicitar orçamento
          </Button>
        </div>

        <button
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.06] text-white backdrop-blur-xl lg:hidden"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "container-premium grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 lg:hidden",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="min-h-0">
          <nav className="mb-4 rounded-2xl border border-white/10 bg-graphite-900/94 p-3 shadow-premium backdrop-blur-2xl">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "focus-ring relative block overflow-hidden rounded-xl px-4 py-3 text-base font-medium transition duration-300",
                    active
                      ? "text-white"
                      : "text-metal-100 hover:bg-brand-bright/14 hover:text-white"
                  )}
                  onClick={() => setOpen(false)}
                >
                  {active && (
                    <m.span
                      layoutId="active-mobile-nav-pill"
                      className="absolute inset-0 rounded-xl bg-brand-bright shadow-red-glow"
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 34
                      }}
                      aria-hidden="true"
                    />
                  )}

                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
        </div>
      </header>
    </LazyMotion>
  );
}
