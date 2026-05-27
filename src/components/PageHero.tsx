import { AnimatedSection } from "@/components/AnimatedSection";
import { HighlightedText } from "@/components/HighlightedText";
import { TechBackground } from "@/components/TechBackground";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden pt-[calc(var(--header-height)+12px)]">
      <TechBackground />
      <div className="container-premium relative z-10 pb-10 pt-5 lg:pb-16 lg:pt-8">
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
            <HighlightedText text={title} />
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-metal-300 sm:text-lg">
            <HighlightedText text={description} />
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
