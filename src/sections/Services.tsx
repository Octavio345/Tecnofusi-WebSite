import { ArrowUpRight, CheckCircle2, ListChecks } from "lucide-react";

import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/lib/site";

export function Services({ showIntro = true }: { showIntro?: boolean }) {
  const showDetails = !showIntro;

  return (
    <section className="bg-graphite-950 py-20 lg:py-28">
      <div className="container-premium">
        {showIntro && (
          <AnimatedSection>
            <SectionHeading
              eyebrow="Serviços"
              title="Capacidade técnica para transformar necessidade industrial em solução."
              description="A Tecnofusi atua em fundição de alumínio coquilhado, ferramentas para motocicletas e desenvolvimento sob demanda para empresas que exigem qualidade e viabilidade produtiva."
            />
          </AnimatedSection>
        )}

        <div className="mt-12 grid gap-5 md:grid-cols-2">
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
                      Serviço técnico
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

        {showDetails && (
          <div className="mt-14 grid gap-5">
            {services.map((service) => {
              const Icon = service.icon;
              const hasDetailsContent =
                ("technicalPoints" in service && service.technicalPoints) ||
                ("segments" in service && service.segments) ||
                ("highlights" in service && service.highlights);

              return (
                <AnimatedSection
                  key={`${service.title}-detail`}
                  className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.045] shadow-[0_18px_60px_rgba(0,0,0,0.2)]"
                >
                  <div className={hasDetailsContent ? "grid gap-0 lg:grid-cols-[0.9fr_1.1fr]" : ""}>
                    <div className={hasDetailsContent ? "border-b border-white/10 bg-gradient-to-br from-brand-deep/35 via-white/[0.04] to-transparent p-6 sm:p-8 lg:border-b-0 lg:border-r" : "bg-gradient-to-br from-brand-deep/35 via-white/[0.04] to-transparent p-6 sm:p-8 lg:max-w-3xl"}>
                      <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-bright/14 text-brand-soft">
                        <Icon className="h-6 w-6" />
                      </span>
                      <h3 className="mt-6 text-2xl font-semibold text-white">
                        {service.title}
                      </h3>
                      <p className="mt-4 text-base leading-8 text-metal-300">
                        {service.details}
                      </p>
                    </div>

                    {hasDetailsContent && (
                    <div className="grid gap-5 p-6 sm:p-8">
                      {"technicalPoints" in service && service.technicalPoints && (
                        <div>
                          <div className="flex items-center gap-3">
                            <ListChecks className="h-5 w-5 text-brand-soft" />
                            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                              Propriedades do alumínio
                            </h4>
                          </div>

                          <div className="mt-4 grid gap-3 sm:grid-cols-2">
                            {service.technicalPoints.map((item) => (
                              <div
                                key={item}
                                className="rounded-2xl border border-white/10 bg-graphite-950/55 p-4 text-sm leading-6 text-metal-200"
                              >
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {"segments" in service && service.segments && (
                        <div>
                          <div className="flex items-center gap-3">
                            <ListChecks className="h-5 w-5 text-brand-soft" />
                            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                              Segmentos atendidos
                            </h4>
                          </div>

                          <div className="mt-4 grid gap-3 sm:grid-cols-2">
                            {service.segments.map((item) => (
                              <div
                                key={item}
                                className="rounded-2xl border border-white/10 bg-graphite-950/55 p-4 text-sm leading-6 text-metal-200"
                              >
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {"highlights" in service && service.highlights && (
                        <div>
                          <div className="flex items-center gap-3">
                            <CheckCircle2 className="h-5 w-5 text-brand-soft" />
                            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                              Aplicações e vantagens
                            </h4>
                          </div>

                          <div className="mt-4 grid gap-3 sm:grid-cols-2">
                            {service.highlights.map((item) => (
                              <div
                                key={item}
                                className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4"
                              >
                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-bright" />
                                <span className="text-sm leading-6 text-metal-200">
                                  {item}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    )}
                  </div>
                </AnimatedSection>
              );
            })}

          </div>
        )}

        <AnimatedSection className="mt-12 rounded-[28px] border border-white/10 bg-gradient-to-r from-brand-deep/50 via-white/[0.05] to-graphite-800 p-6 sm:p-8 lg:flex lg:items-center lg:justify-between">
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
      </div>
    </section>
  );
}
