import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { About } from "@/sections/About";
import { Credibility } from "@/sections/Credibility";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a atuação da Tecnofusi em fundição de alumínio coquilhado, ferramentas especiais, apoio técnico e Loja Tecnofusi."
};

export default function SobrePage() {
  return (
    <main>
      <PageHero
        eyebrow="Empresa"
        title="Uma indústria técnica, séria e orientada por resultado."
        description="A Tecnofusi consolidou sua atuação em fundição de alumínio coquilhado, fabricação de ferramentas especiais, apoio técnico complementar e canais oficiais de venda."
      />
      <About />
      <Credibility />
    </main>
  );
}
