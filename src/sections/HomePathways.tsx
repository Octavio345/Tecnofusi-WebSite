import {
  BadgeCheck,
  Building2,
  ListChecks,
  MessageCircle,
  Users
} from "lucide-react";

import { AnimatedSection } from "@/components/AnimatedSection";
import { HighlightedText } from "@/components/HighlightedText";
import { SectionHeading } from "@/components/SectionHeading";

const topics = [
  {
    icon: Building2,
    title: "Quem Somos",
    points: ["História da empresa", "Estrutura própria", "Atuação industrial"]
  },
  {
    icon: BadgeCheck,
    title: "Missão, Visão e Valores",
    points: ["Qualidade técnica", "Ética e seriedade", "Compromisso com prazo"]
  },
  {
    icon: Users,
    title: "Equipe",
    points: ["Atendimento comercial", "Apoio técnico", "Encaminhamento por demanda"]
  },
  {
    icon: ListChecks,
    title: "Serviços e Produtos",
    points: ["Fundição de alumínio", "Usinagem complementar", "Loja e marketplaces"]
  },
  {
    icon: MessageCircle,
    title: "Perguntas Frequentes",
    points: ["Orçamentos", "Prazos e disponibilidade", "Projetos sob demanda"]
  }
];

export function HomePathways() {
  return (
    <section className="bg-graphite-900 py-14 lg:py-20">
      <div className="container-premium">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Conheça a Tecnofusi"
            title="Informações essenciais para clientes, parceiros e fornecedores."
            description="Encontre rapidamente os principais pontos sobre a empresa, sua atuação técnica, seus serviços e seus canais de atendimento."
          />
        </AnimatedSection>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((item) => {
            const Icon = item.icon;

            return (
              <AnimatedSection
                key={item.title}
                className="group rounded-[24px] border border-white/10 bg-white/[0.045] p-6 shadow-[0_16px_48px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-1 hover:border-brand-bright/45 hover:bg-white/[0.07]"
              >
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-bright/12 text-brand-soft transition group-hover:bg-brand-bright group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-xl font-semibold text-white">
                    <HighlightedText text={item.title} />
                  </h3>
                </div>

                <ul className="mt-5 grid gap-3 text-sm leading-6 text-metal-300">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-soft" />
                      <span>
                        <HighlightedText text={point} />
                      </span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
