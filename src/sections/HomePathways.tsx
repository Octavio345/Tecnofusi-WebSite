import {
  Building2,
  Headphones,
  ListChecks,
  ShoppingBag
} from "lucide-react";

import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { HighlightedText } from "@/components/HighlightedText";
import { SectionHeading } from "@/components/SectionHeading";

const pathways = [
  {
    icon: Building2,
    label: "Empresa",
    title: "Institucional",
    description:
      "História, estrutura e posicionamento da Tecnofusi em uma leitura concentrada.",
    href: "/sobre",
    cta: "Abrir sobre"
  },
  {
    icon: ListChecks,
    label: "Atuação",
    title: "Serviços",
    description:
      "Frentes técnicas organizadas para entender fabricação, apoio complementar e revenda.",
    href: "/servicos",
    cta: "Ver serviços"
  },
  {
    icon: Headphones,
    label: "Atendimento",
    title: "Contato",
    description:
      "Canal direto para iniciar orçamento, avaliação técnica ou conversa comercial.",
    href: "/contato",
    cta: "Falar com a equipe"
  }
];

export function HomePathways() {
  return (
    <section className="bg-graphite-900 py-14 lg:py-20">
      <div className="container-premium">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Visão geral"
            title="Empresa, atuação técnica, loja e atendimento direto."
            description="Quatro entradas objetivas para conhecer a Tecnofusi, avaliar uma demanda, comprar online ou solicitar atendimento."
          />
        </AnimatedSection>

        <div className="mt-8 grid gap-5 lg:grid-cols-4">
          {pathways.map((item) => {
            const Icon = item.icon;

            return (
              <AnimatedSection
                key={item.title}
                className="group flex min-h-full flex-col rounded-[26px] border border-white/10 bg-white/[0.045] p-6 shadow-[0_16px_48px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-1 hover:border-brand-bright/45 hover:bg-white/[0.07]"
              >
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-bright/12 text-brand-soft transition group-hover:bg-brand-bright group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-metal-500">
                    {item.label}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  <HighlightedText text={item.title} />
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-metal-300">
                  <HighlightedText text={item.description} />
                </p>

                <Button href={item.href} variant="secondary" className="mt-6 w-full">
                  {item.cta}
                </Button>
              </AnimatedSection>
            );
          })}

          <AnimatedSection className="group flex min-h-full flex-col rounded-[26px] border border-white/10 bg-gradient-to-br from-brand-deep/40 via-white/[0.045] to-graphite-950 p-6 shadow-[0_16px_48px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-1 hover:border-brand-bright/45">
            <div className="flex items-center gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-bright/12 text-brand-soft transition group-hover:bg-brand-bright group-hover:text-white">
                <ShoppingBag className="h-5 w-5" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-metal-500">
                Compra online
              </span>
            </div>

            <h3 className="mt-6 text-xl font-semibold text-white">
              <HighlightedText text="Loja Tecnofusi" />
            </h3>
            <p className="mt-3 flex-1 text-sm leading-7 text-metal-300">
              Direcionamento para loja própria, Mercado Livre e Shopee.
            </p>

            <Button href="#comprar-online" variant="secondary" className="mt-6 w-full">
              Ver canais
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
