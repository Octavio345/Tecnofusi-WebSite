import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { About } from "@/sections/About";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a história, a estrutura e a atuação industrial da Tecnofusi em fundição de alumínio."
};

export default function SobrePage() {
  return (
    <main>
      <PageHero
        eyebrow="Empresa"
        title="Sobre a Tecnofusi"
        description="Somos uma indústria de fundição de alumínio coquilhado especializada em peças industriais sob demanda. Avaliamos cada projeto conforme a aplicação e integramos usinagem complementar quando necessário."
      />
      <About />
    </main>
  );
}
