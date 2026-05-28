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
        title="Sobre a Tecnofusi"
        description="Somos uma indústria de fundição de alumínio coquilhado especializada no desenvolvimento de componentes sob demanda para diversos setores e ferramentas para motocicletas. Nosso diferencial é a unidade de usinagem integrada ao grupo, que acelera a produção e garante rigor técnico. Unimos essa capacidade fabril a uma operação de revenda online, atendendo com eficiência o mercado B2B e o consumidor final."
      />
      <About />
    </main>
  );
}
