import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Services } from "@/sections/Services";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Fundição de alumínio, usinagem CNC, ferramentas para motocicletas e desenvolvimento técnico industrial."
};

export default function ServicosPage() {
  return (
    <main>
      <PageHero
        eyebrow="Serviços"
        title="Fundição, usinagem e desenvolvimento técnico com padrão industrial."
        description="Estrutura preparada para atender empresas que precisam de componentes fundidos, peças usinadas e soluções especiais com controle técnico."
      />
      <Services showIntro={false} />
    </main>
  );
}
