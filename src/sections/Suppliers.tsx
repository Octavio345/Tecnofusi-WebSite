import { Factory, ShieldCheck } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";

const suppliers = [
  {
    name: "Fornecedor parceiro",
    logoPath: "/images/fornecedores/fornecedor-1.png"
  }
];

export function Suppliers() {
  return (
    <section className="bg-graphite-950 py-20 lg:py-24">
      <div className="container-premium">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Fornecedores"
              title="Parcerias que ajudam a sustentar qualidade e continuidade."
              description="Trabalhamos com relações comerciais que apoiam a estabilidade da produção, a seleção de materiais e a consistência das entregas."
            />
          </AnimatedSection>

          <AnimatedSection className="premium-border rounded-[28px] bg-white/[0.045] p-5 shadow-premium backdrop-blur-xl sm:p-6">
            <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
              <div className="grid gap-4 sm:grid-cols-2">
                {suppliers.map((supplier) => (
                  <div
                    key={supplier.name}
                    className="relative min-h-[132px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] bg-[length:70%_70%] bg-center bg-no-repeat p-6"
                    style={{ backgroundImage: `url('${supplier.logoPath}')` }}
                    aria-label={supplier.name}
                  >
                    <span className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-graphite-950/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-metal-300 backdrop-blur-xl">
                      {supplier.name}
                    </span>
                  </div>
                ))}

                <div className="flex min-h-[132px] items-center gap-4 rounded-2xl border border-white/10 bg-graphite-950/55 p-5">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-bright/12 text-brand-soft">
                    <ShieldCheck className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">Critério técnico</p>
                    <p className="mt-2 text-sm leading-6 text-metal-300">
                      Relações escolhidas por confiabilidade, fornecimento e padrão de entrega.
                    </p>
                  </div>
                </div>
              </div>

              <div className="hidden h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-brand-bright/12 text-brand-soft sm:flex">
                <Factory className="h-7 w-7" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
