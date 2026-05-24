"use client";

import { LazyMotion, domAnimation, m, type Variants } from "framer-motion";
import { fadeUp } from "@/animations/variants";
import { cn } from "@/utils/cn";

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div";
  variants?: Variants;
};

export function AnimatedSection({
  children,
  className,
  id,
  as = "section",
  variants = fadeUp
}: AnimatedSectionProps) {
  const Component = as === "section" ? m.section : m.div;

  return (
    <LazyMotion features={domAnimation} strict>
      <Component
        id={id}
        className={cn(className)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={variants}
      >
        {children}
      </Component>
    </LazyMotion>
  );
}
