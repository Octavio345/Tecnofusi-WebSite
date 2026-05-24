import { BadgeCheck, Factory, Layers3, Ruler } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";

const items = [
  "Peças fundidas em alumínio coquilhado",
  "Controle rigoroso de processo",
  "Apoio técnico ao desenvolvimento de soluções",
  "Atendimento consultivo para empresas",
  "Desenvolvimento de ferramental e equipamentos especiais",
  "Foco em qualidade, prazo e melhor custo-benefício"
];

const metrics = [
  { icon: Factory, label: "Especialidade", value: "Alumínio coquilhado" },
  { icon: Ruler, label: "Controle", value: "Processo técnico" },
  { icon: Layers3, label: "Atuação", value: "Fundição + ferramentas" },
  { icon: BadgeCheck, label: "Postura", value: "Ética e seriedade" }
];

export function Credibility() {
  return (
    <section className="bg-graphite-900 py-20 lg:py-28">
      <div className="container-premium">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Autoridade técnica"
              title="Credibilidade vem de processo, equipamento e entrega."
              description="A Tecnofusi reúne estrutura produtiva, controle de processo e postura comercial séria para atender empresas que precisam de previsibilidade."
            />
          </AnimatedSection>

          <AnimatedSection className="premium-border rounded-[30px] bg-white/[0.05] p-6 shadow-premium backdrop-blur-xl sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {metrics.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-graphite-950/60 p-5">
                    <Icon className="h-5 w-5 text-brand-soft" />
                    <p className="mt-4 text-sm text-metal-300">{item.label}</p>
                    <strong className="mt-1 block text-xl font-semibold text-white">{item.value}</strong>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>

        <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <AnimatedSection key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <span className="h-2 w-2 rounded-full bg-brand-bright" />
              <span className="text-sm leading-6 text-metal-100">{item}</span>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
