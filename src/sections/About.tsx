import { ImageIcon } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { timeline, values } from "@/lib/site";

const pillars = [
  { label: "Fundição", detail: "Alumínio por gravidade" },
  { label: "Usinagem", detail: "Tornos e centros CNC" },
  { label: "Soluções", detail: "Ferramental sob demanda" }
];

export function About({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <section className="relative overflow-hidden bg-graphite-900 py-20 lg:py-24">
        <div className="absolute inset-0 bg-tech-grid bg-[size:42px_42px] opacity-[0.08]" aria-hidden="true" />
        <div className="container-premium relative">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <AnimatedSection>
              <SectionHeading
                eyebrow="Quem somos"
                title="Uma base industrial criada para entregar precisão, prazo e suporte técnico."
                description="Desde 2011, a Tecnofusi atua em fundição de alumínio, usinagem CNC e desenvolvimento de soluções especiais para demandas industriais."
              />
              <div className="mt-8">
                <Button href="/sobre" variant="secondary">
                  Conhecer a empresa
                </Button>
              </div>
            </AnimatedSection>

            <div className="grid gap-4 sm:grid-cols-3">
              {pillars.map((item) => (
                <AnimatedSection
                  key={item.label}
                  className="rounded-[24px] border border-white/10 bg-graphite-950/60 p-5"
                >
                  <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-brand-soft">
                    {item.label}
                  </span>
                  <strong className="mt-3 block text-lg font-semibold text-white">
                    {item.detail}
                  </strong>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-graphite-900 py-20 lg:py-28">
      <div className="absolute inset-0 bg-tech-grid bg-[size:42px_42px] opacity-[0.08]" aria-hidden="true" />
      <div className="container-premium relative">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Sobre a empresa"
              title="Uma operação industrial construída sobre técnica, confiança e continuidade."
              description="A Tecnofusi nasceu com foco em serviços para terceiros e consolidou sua atuação pela capacidade técnica, postura ética, controle de processo e compromisso com o prazo."
            />
            <div className="mt-6 grid gap-5 text-base leading-8 text-metal-300">
              <p>
                A empresa atua em fundição de alumínio por gravidade, usinagem
                industrial e desenvolvimento de ferramentas e equipamentos
                especiais para motocicletas. O foco é transformar necessidade
                real de produção em solução viável, estável e aplicável no chão
                de fábrica.
              </p>
              <p>
                O atendimento é voltado para empresas que precisam de
                componentes confiáveis, apoio técnico na análise de viabilidade
                e uma relação comercial séria do primeiro contato até a entrega.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/servicos" variant="secondary">
                Ver áreas de atuação
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection className="premium-border overflow-hidden rounded-[30px] bg-white/[0.05] shadow-premium backdrop-blur-xl">
            <div
              className="relative min-h-[360px] bg-graphite-950 bg-cover bg-center"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(7,8,10,0.06), rgba(7,8,10,0.82)), url('/images/site/fachada-tecnofusi.jpg')"
              }}
            >
              <div
                className="absolute inset-0 bg-tech-grid bg-[size:38px_38px] opacity-[0.11]"
                aria-hidden="true"
              />
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-deep via-brand-bright to-signal-cyan" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08] text-brand-soft backdrop-blur-xl">
                  <ImageIcon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-2xl font-semibold text-white">
                  Fachada da Tecnofusi
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-metal-300">
                  Estrutura física, presença regional e operação voltada para
                  atender empresas com seriedade técnica.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <div className="mt-14 grid gap-4">
          {timeline.map((item) => (
            <AnimatedSection
              key={item.year}
              className="premium-border rounded-[24px] bg-white/[0.05] p-5 backdrop-blur-xl"
            >
              <div className="flex gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-sm font-bold text-brand-deep">
                  {item.year}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-metal-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {values.map((item) => {
            const Icon = item.icon;
            return (
              <AnimatedSection
                key={item.title}
                className="rounded-[24px] border border-white/10 bg-graphite-950/60 p-6"
              >
                <Icon className="h-6 w-6 text-brand-soft" />
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-metal-300">
                  {item.description}
                </p>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
