import { AnimatedSection } from "@/components/AnimatedSection";
import { TechBackground } from "@/components/TechBackground";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden pt-[calc(var(--header-height)+56px)]">
      <TechBackground />
      <div className="container-premium relative z-10 py-16 lg:py-28">
        {/* w-full garante que max-w-4xl funcione corretamente em todos os breakpoints */}
        <AnimatedSection className="w-full max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-soft">
            {eyebrow}
          </p>
          <h1
            className="
              mt-5 text-balance
              text-[clamp(1.75rem,5vw,3.75rem)]
              font-semibold tracking-normal text-white
              break-words hyphens-auto
            "
            lang="pt-BR"
          >
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-metal-300 sm:text-lg">
            {description}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}