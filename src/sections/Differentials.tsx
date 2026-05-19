import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { differentiators } from "@/lib/site";

export function Differentials() {
  return (
    <section className="bg-graphite-950 py-20 lg:py-28">
      <div className="container-premium">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Diferenciais"
            title="O que sustenta uma entrega industrial confiável?"
            description="Prazo, qualidade, capacidade produtiva e suporte técnico precisam aparecer antes da proposta comercial. É isso que reduz risco para quem compra serviços industriais."
          />
        </AnimatedSection>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item) => {
            const Icon = item.icon;
            return (
              <AnimatedSection key={item.title} className="group rounded-[24px] border border-white/10 bg-white/[0.045] p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-bright/50 hover:bg-white/[0.07]">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-bright/12 text-brand-soft transition group-hover:bg-brand-bright group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-metal-300">{item.description}</p>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
