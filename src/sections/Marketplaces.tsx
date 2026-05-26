import Image from "next/image";
import { ExternalLink, PackageSearch, Store } from "lucide-react";

import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site";
import { cn } from "@/utils/cn";

const marketplaceItems = [
  {
    platform: "Loja Tecnofusi",
    description:
      "Canal próprio para produtos disponíveis, peças de motocicleta em revenda e outros itens comerciais.",
    href: siteConfig.marketplaces.loja,
    logoSrc: "/images/tecnofusi-logo.webp",
    logoFallback: "Tecnofusi",
    tone: "tecnofusi" as const
  },
  {
    platform: "Mercado Livre",
    description:
      "Marketplace oficial para itens anunciados pela empresa com compra direta pela plataforma.",
    href: siteConfig.marketplaces.mercadoLivre,
    logoSrc: "/images/marketplaces/mercado-livre.png",
    logoFallback: "Mercado Livre",
    tone: "mercadoLivre" as const
  },
  {
    platform: "Shopee",
    description:
      "Alternativa de compra online para produtos disponíveis no catálogo da Tecnofusi.",
    href: siteConfig.marketplaces.shopee,
    logoSrc: "/images/marketplaces/shopee.webp",
    logoFallback: "Shopee",
    tone: "shopee" as const
  }
];

const marketplaceStyles = {
  tecnofusi: {
    bg: "bg-gradient-to-br from-[#7a0d10] via-[#3d0608] to-[#1a0304]",
    shadow: "shadow-[0_12px_30px_rgba(224,20,27,0.32)]",
    hoverBorder: "hover:border-[#e0141b]/55"
  },
  mercadoLivre: {
    bg: "bg-[#FFE600]",
    shadow: "shadow-[0_12px_30px_rgba(255,230,0,0.25)]",
    hoverBorder: "hover:border-[#FFE600]/55"
  },
  shopee: {
    bg: "bg-[#EE4D2D]",
    shadow: "shadow-[0_12px_30px_rgba(238,77,45,0.28)]",
    hoverBorder: "hover:border-[#EE4D2D]/55"
  }
};

type Tone = keyof typeof marketplaceStyles;

function MarketplaceLogo({
  src,
  fallback,
  tone
}: {
  src: string;
  fallback: string;
  tone: Tone;
}) {
  const { bg, shadow } = marketplaceStyles[tone];

  return (
    <div
      className={cn(
        "relative flex h-24 w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 px-6",
        bg,
        shadow
      )}
    >
      {tone === "tecnofusi" ? (
        <div className="relative h-[62px] w-[62px]">
          <Image
            src={src}
            alt={fallback}
            fill
            sizes="62px"
            className="object-contain"
          />
        </div>
      ) : (
        <div className="relative flex h-[58px] w-[58px] items-center justify-center overflow-hidden rounded-2xl bg-white p-2 shadow-lg">
          <Image
            src={src}
            alt={fallback}
            fill
            sizes="58px"
            className="object-contain rounded-xl"
          />
        </div>
      )}
    </div>
  );
}

export function Marketplaces() {
  return (
    <section className="bg-graphite-950 py-14 lg:py-20">
      <div className="container-premium">
        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Comprar online"
              title="Canais oficiais para comprar com a Tecnofusi."
              description="A loja própria concentra itens de revenda. Mercado Livre e Shopee funcionam como canais oficiais de compra online."
            />

            <div className="mt-5 flex items-center gap-4 rounded-[24px] border border-white/10 bg-white/[0.045] p-5 backdrop-blur-sm">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-bright/12 text-brand-soft">
                <Store className="h-5 w-5" />
              </span>

              <p className="text-sm leading-7 text-metal-300">
                Use esses canais para produtos prontos. Para projetos sob
                medida, o melhor caminho continua sendo o atendimento técnico.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-4 md:grid-cols-3">
            {marketplaceItems.map((item) => (
              <AnimatedSection key={item.platform}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Abrir ${item.platform}`}
                  className={cn(
                    "focus-ring group block h-full rounded-[26px] border border-white/10 bg-white/[0.045] p-5 shadow-[0_16px_48px_rgba(0,0,0,0.22)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/[0.075]",
                    marketplaceStyles[item.tone].hoverBorder
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <MarketplaceLogo
                      src={item.logoSrc}
                      fallback={item.logoFallback}
                      tone={item.tone}
                    />

                    <ExternalLink className="mt-2 h-5 w-5 shrink-0 text-metal-500 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" />
                  </div>

                  <div className="mt-6">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-graphite-950/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-metal-300">
                      <PackageSearch className="h-3.5 w-3.5 text-brand-soft" />
                      Loja oficial
                    </span>

                    <h3 className="mt-4 text-xl font-semibold text-white">
                      {item.platform}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-metal-300">
                      {item.description}
                    </p>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
