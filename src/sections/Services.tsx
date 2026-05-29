import Image from "next/image";

import { AnimatedSection } from "@/components/AnimatedSection";
import { HighlightedText } from "@/components/HighlightedText";
import { services } from "@/lib/site";

export function Services() {
  return (
    <section className="bg-graphite-950 py-14 lg:py-20">
      <div className="container-premium">
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <AnimatedSection
                key={service.title}
                className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045] transition duration-300 hover:-translate-y-1 hover:border-brand-bright/50 hover:bg-white/[0.075]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-graphite-900">
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/72 via-graphite-950/6 to-transparent" />
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-4">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-bright/12 text-brand-soft transition duration-300 group-hover:bg-brand-bright group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-metal-500">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold text-white">
                    <HighlightedText text={service.title} />
                  </h3>
                  <p className="mt-4 text-base leading-8 text-metal-300">
                    <HighlightedText text={service.description} />
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
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
