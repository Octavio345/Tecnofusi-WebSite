import { ArrowUpRight } from "lucide-react";

import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/lib/site";

export function Services({ showIntro = true }: { showIntro?: boolean }) {
  return (
    <section className="bg-graphite-950 py-14 lg:py-20">
      <div className="container-premium">
        {showIntro && (
          <AnimatedSection>
            <SectionHeading
              eyebrow="Serviços"
              title="Áreas de atuação apresentadas com clareza técnica."
              description="A Tecnofusi separa com clareza o que fabrica, o que apoia tecnicamente e o que entra nos canais comerciais."
            />
          </AnimatedSection>
        )}

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <AnimatedSection
                key={service.title}
                className="group rounded-[28px] border border-white/10 bg-white/[0.045] p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-bright/50 hover:bg-white/[0.075] sm:p-8"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-bright/12 text-brand-soft transition duration-300 group-hover:bg-brand-bright group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-metal-500">
                      {service.category}
                    </span>
                  </div>

                  <ArrowUpRight className="h-5 w-5 text-metal-500 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-metal-300">
                  {service.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {service.bullets.map((bullet) => (
                    <span
                      key={bullet}
                      className="rounded-full border border-white/10 bg-graphite-950/70 px-3 py-1.5 text-xs font-medium text-metal-100"
                    >
                      {bullet}
                    </span>
                  ))}
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {showIntro && (
          <AnimatedSection className="mt-10 rounded-[28px] border border-white/10 bg-gradient-to-r from-brand-deep/50 via-white/[0.05] to-graphite-800 p-6 sm:p-8 lg:flex lg:items-center lg:justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-white">
                Tem um projeto técnico para avaliar?
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-metal-300">
                Envie desenhos, aplicação, material desejado, volume estimado ou
                uma descrição do problema. A equipe retorna com o caminho mais
                adequado.
              </p>
            </div>
            <Button href="/contato" className="mt-6 lg:mt-0">
              Falar com especialista
            </Button>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
