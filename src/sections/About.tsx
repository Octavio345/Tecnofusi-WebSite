import { ImageIcon } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";

const pillars = [
  { label: "Fundição", detail: "Alumínio coquilhado" },
  { label: "Ferramentas", detail: "Projetos especiais" },
  { label: "Loja", detail: "Revenda online" }
];

export function About({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <section className="relative overflow-hidden bg-graphite-900 py-14 lg:py-20">
        <div className="absolute inset-0 bg-tech-grid bg-[size:42px_42px] opacity-[0.08]" aria-hidden="true" />
        <div className="container-premium relative">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <AnimatedSection>
              <SectionHeading
                eyebrow="Quem somos"
                title="Uma base industrial criada para entregar precisão, prazo e suporte técnico."
                description="Desde 2011, a Tecnofusi une fundição de alumínio coquilhado, fabricação de ferramentas especiais, apoio técnico complementar e venda online por canais oficiais."
              />
              <div className="mt-6">
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
    <section className="relative overflow-hidden bg-graphite-900 py-14 lg:py-20">
      <div className="absolute inset-0 bg-tech-grid bg-[size:42px_42px] opacity-[0.08]" aria-hidden="true" />
      <div className="container-premium relative">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Sobre a empresa"
              title="Uma operação industrial construída sobre técnica, confiança e continuidade."
              description="A Tecnofusi nasceu com foco industrial e consolidou sua atuação pela capacidade técnica, postura ética, controle de processo e compromisso com o prazo."
            />
            <div className="mt-5 grid gap-4 text-base leading-8 text-metal-300">
              <p>
                A empresa atua em fundição de alumínio coquilhado, fabricação de
                ferramentas e equipamentos especiais. A loja reúne
                produtos disponíveis para venda online, incluindo peças para
                motocicletas e outros itens de revenda quando houver estoque.
              </p>
              <p>
                Desde a fundação, atende terceiros com foco em peças fundidas
                por gravidade em alumínio, mantendo padrões rígidos de
                qualidade, compromisso com prazos e custo competitivo. A
                parceria no aprimoramento de processos e no desenvolvimento de
                novos projetos também faz parte do atendimento técnico.
              </p>
              <p>
                Quando o projeto exige acabamento ou ajuste dimensional, a
                Tecnofusi pode integrar apoio de usinagem CNC por empresa
                parceira do mesmo grupo empresarial, mantendo essa etapa como
                complemento técnico dentro do escopo avaliado.
              </p>
              <p>
                O atendimento é voltado para empresas que precisam de
                componentes confiáveis, apoio técnico na análise de viabilidade
                e uma relação comercial séria do primeiro contato até a entrega.
              </p>
            </div>
            <div className="mt-6">
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

      </div>
    </section>
  );
}
