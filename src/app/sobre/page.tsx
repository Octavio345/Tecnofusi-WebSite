import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { About } from "@/sections/About";

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
        title="Sobre a Tecnofusi."
        description="Conheça a trajetória, a estrutura e os pilares que sustentam a atuação técnica da empresa."
      />
      <About />
    </main>
  );
}
