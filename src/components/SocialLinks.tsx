"use client";

import type { ReactNode } from "react";
import { siteConfig } from "@/lib/site";
import { cn } from "@/utils/cn";
import { isWhatsAppHref, trackWhatsAppConversion } from "@/utils/tracking";

type SocialVariant = "hero" | "footer";

function InstagramIcon() {
  return (
    <svg className="h-[17px] w-[17px]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17" cy="7" r="1.2" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="h-[17px] w-[17px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14.2 8.2V6.9c0-.7.5-.9 1-.9h1.7V3.1c-.3 0-1.5-.1-2.8-.1-2.8 0-4.7 1.7-4.7 4.8v2.7H6.3v3.3h3.1V21h3.8v-7.2h3l.5-3.3h-3.5V8.2h1z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg className="h-[17px] w-[17px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M10.2 15.3V8.7l5.7 3.3-5.7 3.3Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="h-[17px] w-[17px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M9.2 8.6c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.3.1.5-.1.7l-.4.5c-.1.1-.2.3-.1.5.3.6.8 1.2 1.3 1.6.6.5 1.2.8 1.9 1 .2.1.4 0 .5-.2l.5-.6c.2-.2.4-.3.7-.2l1.6.7c.3.1.4.3.4.6 0 .6-.2 1.2-.6 1.6-.4.4-1 .6-1.8.5-1.5-.2-3.2-.9-4.8-2.4-1.5-1.5-2.4-3.2-2.6-4.7-.1-.7.1-1.3.5-1.7.2-.2.4-.4.6-.5Z" />
    </svg>
  );
}

const socialItems = [
  {
    href: siteConfig.socials.instagramFundidos,
    title: "Instagram",
    subtitle: "Fundidos",
    tone: "instagram" as const,
    icon: <InstagramIcon />
  },
  {
    href: siteConfig.socials.instagramLoja,
    title: "Instagram",
    subtitle: "Loja",
    tone: "instagram" as const,
    icon: <InstagramIcon />
  },
  {
    href: siteConfig.socials.facebookFundidos,
    title: "Facebook",
    subtitle: "Fundidos",
    tone: "facebook" as const,
    icon: <FacebookIcon />
  },
  {
    href: siteConfig.socials.facebookLoja,
    title: "Facebook",
    subtitle: "Loja",
    tone: "facebook" as const,
    icon: <FacebookIcon />
  },
  {
    href: siteConfig.socials.youtube,
    title: "YouTube",
    subtitle: "Canal",
    tone: "youtube" as const,
    icon: <YoutubeIcon />
  },
  {
    href: siteConfig.socials.whatsapp,
    title: "WhatsApp",
    subtitle: "Atendimento",
    tone: "whatsapp" as const,
    icon: <WhatsAppIcon />
  }
];

function SocialItem({
  href,
  title,
  subtitle,
  children,
  tone,
  variant
}: {
  href: string;
  title: string;
  subtitle: string;
  children: ReactNode;
  tone: "instagram" | "facebook" | "youtube" | "whatsapp";
  variant: SocialVariant;
}) {
  const badgeClass = {
    instagram:
      "bg-[radial-gradient(circle_at_30%_110%,#feda75_0%,#fa7e1e_25%,#d62976_50%,#962fbf_75%,#4f5bd5_100%)] shadow-[0_0_18px_rgba(214,41,118,0.32)]",
    facebook: "bg-[#1877F2] shadow-[0_0_18px_rgba(24,119,242,0.3)]",
    youtube: "bg-[#FF0000] shadow-[0_0_18px_rgba(255,0,0,0.28)]",
    whatsapp: "bg-[#25D366] shadow-[0_0_18px_rgba(37,211,102,0.26)]"
  };
  const handleClick = () => {
    if (isWhatsAppHref(href)) {
      trackWhatsAppConversion();
    }
  };

  if (variant === "hero") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={`${title} - ${subtitle}`}
        title={`${title} - ${subtitle}`}
        onClick={handleClick}
        className="focus-ring group flex min-h-[78px] min-w-0 flex-col items-center justify-center rounded-2xl border border-white/12 bg-graphite-950/55 px-2 py-2 text-center text-metal-100 shadow-[0_12px_34px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-0.5 hover:border-white/24 hover:bg-white/[0.075]"
      >
        <span
          className={cn(
            "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white ring-1 ring-white/20 transition duration-300 group-hover:scale-105",
            badgeClass[tone]
          )}
        >
          {children}
        </span>

        <span className="mt-2 block w-full min-w-0">
          <span className="block truncate text-[11px] font-semibold leading-none text-white">
            {title}
          </span>
          <span className="mt-1 block truncate text-[10px] leading-none text-metal-300 transition group-hover:text-metal-100">
            {subtitle}
          </span>
        </span>
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${title} - ${subtitle}`}
      title={`${title} - ${subtitle}`}
      onClick={handleClick}
      className="focus-ring group inline-flex min-h-11 min-w-0 items-center gap-2 rounded-2xl border border-white/12 bg-graphite-950/55 px-3 py-2 text-left text-metal-100 shadow-[0_12px_34px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-0.5 hover:border-white/24 hover:bg-white/[0.075]"
    >
      <span
        className={cn(
          "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white ring-1 ring-white/20 transition duration-300 group-hover:scale-105",
          badgeClass[tone]
        )}
      >
        {children}
      </span>

      <span className="min-w-0 leading-tight">
        <span className="block truncate text-xs font-semibold text-white">{title}</span>
        <span className="block truncate text-[11px] text-metal-300 transition group-hover:text-metal-100">
          {subtitle}
        </span>
      </span>
    </a>
  );
}

export function SocialLinks({
  className,
  variant = "footer"
}: {
  className?: string;
  variant?: SocialVariant;
}) {
  return (
    <div
      className={cn(
        variant === "hero"
          ? "grid min-w-0 grid-cols-3 gap-2"
          : "grid grid-cols-1 gap-2 min-[420px]:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2",
        className
      )}
    >
      {socialItems.map((item) => (
        <SocialItem
          key={`${item.title}-${item.subtitle}`}
          href={item.href}
          title={item.title}
          subtitle={item.subtitle}
          tone={item.tone}
          variant={variant}
        >
          {item.icon}
        </SocialItem>
      ))}
    </div>
  );
}
