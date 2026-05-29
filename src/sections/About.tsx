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
      "Ferramentas para motocicletas e outros itens comerciais ficam na frente de revenda, conforme disponibilidade."
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
        <div className="grid gap-8 lg:grid-cols-[0.95fr_0.85fr] lg:items-stretch">
          <AnimatedSection className="flex flex-col gap-6">
            <SectionHeading
              eyebrow="Sobre a empresa"
              title="Uma operação industrial construída sobre técnica, confiança e continuidade."
              description="A Tecnofusi nasceu com foco industrial e consolidou sua atuação pela capacidade técnica, postura ética, controle de processo e compromisso com o prazo."
            />

            <div className="grid gap-4 sm:grid-cols-2">
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

            <div>
              <Button href="/servicos" variant="secondary">
                Ver áreas de atuação
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection className="premium-border flex h-full flex-col gap-4 overflow-hidden rounded-[28px] bg-white/[0.045] p-3 shadow-premium backdrop-blur-xl lg:self-stretch">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] bg-graphite-950">
              <Image
                src="/images/site/fachada-tecnofusi.jpg"
                alt="Fachada da Tecnofusi"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-graphite-950/95 via-graphite-950/60 to-transparent p-4 sm:p-5">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08] text-brand-soft">
                    <ImageIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-white sm:text-2xl">
                      <HighlightedText text="Fachada da Tecnofusi" />
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-6 text-metal-300">
                      Estrutura física, presença regional e operação voltada para atender empresas com seriedade técnica.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid flex-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {[
                ["2011", "Fundação da empresa e início das atividades."],
                ["Fábrica própria", "Controle do processo produtivo e qualidade técnica."],
                ["B2B", "Atendimento especializado para lotes e projetos sob demanda."]
              ].map(([title, description]) => (
                <div
                  key={title}
                  className="rounded-[20px] border border-white/10 bg-graphite-950/55 p-4"
                >
                  <p className="text-base font-semibold text-white">
                    <HighlightedText text={title} />
                  </p>
                  <p className="mt-1 text-sm leading-6 text-metal-300">
                    <HighlightedText text={description} />
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
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
