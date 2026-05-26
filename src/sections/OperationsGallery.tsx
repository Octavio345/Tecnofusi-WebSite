import Image from "next/image";
import { Building2, Factory, Wrench } from "lucide-react";

import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";

const photos = [
  {
    title: "Fundição em alumínio",
    description:
      "Processo produtivo com foco em repetibilidade, controle e qualidade de acabamento.",
    src: "/images/site/processo-fundicao.jpg",
    alt: "Forno industrial usado no processo de fundição de alumínio da Tecnofusi",
    icon: Factory
  },
  {
    title: "Estrutura Tecnofusi",
    description:
      "Base operacional voltada para atendimento técnico, organização produtiva e compromisso com prazo.",
    src: "/images/site/fachada-tecnofusi.jpg",
    alt: "Fachada da Tecnofusi",
    icon: Building2
  },
  {
    title: "Revenda online",
    description:
      "Peças para motocicletas e outros itens comerciais divulgados nos canais da loja.",
    src: "/images/site/revenda-motocicletas.jpg",
    alt: "Componentes de motocicleta representando itens de revenda Tecnofusi",
    icon: Wrench
  }
];

export function OperationsGallery() {
  return (
    <section className="bg-graphite-950 py-14 lg:py-20">
      <div className="container-premium">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Operação"
            title="Estrutura, processos e canais comerciais Tecnofusi."
            description="Um recorte visual do que sustenta as entregas: fundição de alumínio, estrutura técnica, fabricação de ferramentas especiais e revenda online por canais oficiais."
          />
        </AnimatedSection>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {photos.map((photo) => {
            const Icon = photo.icon;

            return (
              <AnimatedSection
                key={photo.title}
                className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045] shadow-[0_18px_60px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-brand-bright/45 hover:bg-white/[0.07]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-graphite-900">
                  {photo.src ? (
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(224,20,27,0.22),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))]" />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/88 via-graphite-950/8 to-transparent" />
                  <div className="absolute left-5 top-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-graphite-950/70 text-brand-soft backdrop-blur-xl">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">
                    {photo.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-metal-300">
                    {photo.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
