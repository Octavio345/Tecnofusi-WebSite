import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { About } from "@/sections/About";
import { Credibility } from "@/sections/Credibility";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a história, missão, visão, valores e diferenciais técnicos da Tecnofusi."
};

export default function SobrePage() {
  return (
    <main>
      <PageHero
        eyebrow="Empresa"
        title="Uma indústria técnica, séria e orientada por resultado."
        description="A Tecnofusi consolidou sua atuação em serviços industriais com eficiência, ética, qualidade e parceria no desenvolvimento de soluções."
      />
      <About />
      <Credibility />
    </main>
  );
}
