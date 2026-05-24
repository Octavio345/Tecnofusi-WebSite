import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/Logo";
import { SocialLinks } from "@/components/SocialLinks";
import { navItems, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-graphite-950">
      <div className="container-premium py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.7fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-md text-sm leading-7 text-metal-300">
              Soluções industriais em fundição de alumínio coquilhado e ferramentas especiais para empresas que precisam de precisão, prazo e suporte técnico.
            </p>
            <SocialLinks className="mt-6" />
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Links rápidos</h3>
            <div className="mt-5 grid gap-3">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-metal-300 transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Contato</h3>
            <div className="mt-5 grid gap-4 text-sm text-metal-300">
              <a className="flex gap-3 transition hover:text-white" href={`tel:${siteConfig.phonePrimary.replace(/\D/g, "")}`}>
                <Phone className="mt-0.5 h-4 w-4 text-brand-soft" />
                <span>{siteConfig.phonePrimary} / {siteConfig.whatsapp}</span>
              </a>
              <a className="flex gap-3 transition hover:text-white" href={`mailto:${siteConfig.email}`}>
                <Mail className="mt-0.5 h-4 w-4 text-brand-soft" />
                <span>{siteConfig.email}</span>
              </a>
              <a
                className="flex gap-3 transition hover:text-white"
                href={`https://www.google.com/maps/search/?api=1&query=${siteConfig.mapsQuery}`}
                target="_blank"
                rel="noreferrer"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-soft" />
                <span>{siteConfig.address}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-metal-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Tecnofusi. Todos os direitos reservados.</p>
          <p>Site Criado por Octávio Augusto - Github (Octavio345).</p>
        </div>
      </div>
    </footer>
  );
}
