import {
  BadgeCheck,
  Factory,
  Handshake,
  ImageIcon,
  Layers3,
  Microscope,
  Sparkles,
  Store,
  Wrench
} from "lucide-react";
import Image from "next/image";

import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { HighlightedText } from "@/components/HighlightedText";
import { SectionHeading } from "@/components/SectionHeading";

const overviewCards = [
  {
    icon: Factory,
    title: "Fundição de alumínio",
    description:
      "Peças em alumínio coquilhado para demandas industriais, com controle técnico e repetibilidade."
  },
  {
    icon: Wrench,
    title: "Ferramental técnico",
    description:
      "Moldes, dispositivos e ferramentas especiais ligados aos projetos industriais e à operação produtiva."
  },
  {
    icon: Layers3,
    title: "Apoio ao projeto",
    description:
      "Análise de viabilidade, aplicação, material e necessidades de acabamento antes da produção."
  },
  {
    icon: Store,
    title: "Loja Tecnofusi",
    description:
      "Peças para motocicletas e outros itens comerciais ficam na frente de revenda, conforme disponibilidade."
  }
];

const commitments = [
  {
    icon: BadgeCheck,
    title: "Qualidade e prazo",
    description:
      "Padrões rígidos de qualidade e compromisso com entrega seguem como critérios centrais da operação."
  },
  {
    icon: Factory,
    title: "Custo competitivo",
    description:
      "A produção busca equilibrar qualidade, prazo e viabilidade comercial para demandas industriais."
  },
  {
    icon: Handshake,
    title: "Parceria técnica",
    description:
      "A empresa atua junto ao cliente no aprimoramento de processos e no desenvolvimento de novos projetos."
  }
];

const timeline = [
  {
    year: "2011",
    title: "Fundação e início das atividades",
    description:
      "Início das atividades com foco no mercado para terceiros, capacidade técnica, ética e compromisso com prazos."
  },
  {
    year: "2014",
    title: "Ampliação técnica e comercial",
    description:
      "Evolução da estrutura técnica e organização de produtos comerciais em canais de venda."
  },
  {
    year: "2017",
    title: "Consolidação no mercado",
    description:
      "Fortalecimento da reputação por eficiência, eficácia e fidelização de clientes."
  },
  {
    year: "Hoje",
    title: "Operação técnica e venda online",
    description:
      "Fundição, ferramentas, apoio técnico complementar e canais comerciais oficiais compõem a atuação atual."
  }
];

const values = [
  {
    icon: Microscope,
    title: "Precisão",
    description: "Detalhe técnico como critério de decisão."
  },
  {
    icon: BadgeCheck,
    title: "Confiança",
    description: "Ética, seriedade e compromisso com entrega."
  },
  {
    icon: Layers3,
    title: "Consistência",
    description: "Processos repetíveis para qualidade estável."
  },
  {
    icon: Sparkles,
    title: "Evolução",
    description: "Melhoria contínua aplicada ao que gera resultado."
  }
];

export function About() {
  return (
    <section className="relative overflow-hidden bg-graphite-900 py-14 lg:py-20">
      <div className="absolute inset-0 bg-tech-grid bg-[size:42px_42px] opacity-[0.08]" aria-hidden="true" />
      <div className="container-premium relative">
        <div className="grid gap-7">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Sobre a empresa"
              title="Uma operação industrial construída sobre técnica, confiança e continuidade."
              description="A Tecnofusi nasceu com foco industrial e consolidou sua atuação pela capacidade técnica, postura ética, controle de processo e compromisso com o prazo."
            />
          </AnimatedSection>

          <AnimatedSection className="premium-border mx-auto w-full max-w-4xl overflow-hidden rounded-[30px] bg-white/[0.05] p-3 shadow-premium backdrop-blur-xl sm:p-4">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] bg-graphite-950">
              <Image
                src="/images/site/fachada-tecnofusi.jpg"
                alt="Fachada da Tecnofusi"
                fill
                sizes="(min-width: 1280px) 1180px, 100vw"
                className="object-contain"
                priority
              />
            </div>

            <div className="grid gap-5 p-4 sm:p-5 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
              <div className="flex items-center gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08] text-brand-soft">
                  <ImageIcon className="h-5 w-5" />
                </span>
                <h3 className="text-2xl font-semibold text-white">
                  <HighlightedText text="Fachada da Tecnofusi" />
                </h3>
              </div>
              <p className="text-sm leading-7 text-metal-300">
                Estrutura física, presença regional e operação voltada para
                atender empresas com seriedade técnica.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {overviewCards.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[24px] border border-white/10 bg-graphite-950/55 p-5"
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-bright/12 text-brand-soft">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 text-lg font-semibold text-white">
                      <HighlightedText text={item.title} />
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-metal-300">
                      <HighlightedText text={item.description} />
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-6">
              <Button href="/servicos" variant="secondary">
                Ver áreas de atuação
              </Button>
            </div>
          </AnimatedSection>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Compromisso"
              title="A forma de trabalho continua sendo técnica e próxima."
              description="A empresa combina capacidade produtiva, responsabilidade comercial e apoio no desenvolvimento de soluções."
            />
          </AnimatedSection>

          <div className="grid gap-4 md:grid-cols-3">
            {commitments.map((item) => {
              const Icon = item.icon;

              return (
                <AnimatedSection
                  key={item.title}
                  className="rounded-[24px] border border-white/10 bg-white/[0.045] p-6"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-bright/12 text-brand-soft">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-white">
                    <HighlightedText text={item.title} />
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-metal-300">
                    <HighlightedText text={item.description} />
                  </p>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Linha do tempo"
              title="Anos que explicam a evolução da empresa."
              description="Um resumo direto da origem, consolidação e atuação atual da Tecnofusi."
            />
          </AnimatedSection>

          <div className="grid gap-4">
            {timeline.map((item) => (
              <AnimatedSection
                key={item.year}
                className="premium-border rounded-[24px] bg-white/[0.05] p-5 backdrop-blur-xl"
              >
                <div className="grid gap-4 sm:grid-cols-[86px_1fr] sm:items-start">
                  <div className="flex h-16 w-20 items-center justify-center rounded-2xl bg-white text-sm font-bold text-brand-deep shadow-[0_14px_40px_rgba(255,255,255,0.08)]">
                    {item.year}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      <HighlightedText text={item.title} />
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-metal-300">
                      <HighlightedText text={item.description} />
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {values.map((item) => {
            const Icon = item.icon;

            return (
              <AnimatedSection
                key={item.title}
                className="rounded-[24px] border border-white/10 bg-graphite-950/60 p-6"
              >
                <Icon className="h-6 w-6 text-brand-soft" />
                <h3 className="mt-4 text-lg font-semibold text-white">
                  <HighlightedText text={item.title} />
                </h3>
                <p className="mt-2 text-sm leading-6 text-metal-300">
                  <HighlightedText text={item.description} />
                </p>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
