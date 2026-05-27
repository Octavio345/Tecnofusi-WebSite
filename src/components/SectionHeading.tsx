import { HighlightedText } from "@/components/HighlightedText";
import { cn } from "@/utils/cn";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, align = "left", className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-soft">{eyebrow}</p>
      <h2 className="mt-3 text-balance text-3xl font-semibold tracking-normal text-white sm:text-4xl lg:text-5xl">
        <HighlightedText text={title} />
      </h2>
      {description && (
        <p className="mt-4 text-base leading-8 text-metal-300 sm:text-lg">
          <HighlightedText text={description} />
        </p>
      )}
    </div>
  );
}
