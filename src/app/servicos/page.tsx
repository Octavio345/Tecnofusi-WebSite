import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Services } from "@/sections/Services";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Fundição de alumínio, usinagem CNC, ferramentas para motocicletas, serviços terceirizados e desenvolvimento técnico industrial."
};

export default function ServicosPage() {
  return (
    <main>
      <PageHero
        eyebrow="Serviços"
        title="Serviços industriais com processo, estrutura e aplicação real."
        description="Fundição de alumínio, usinagem CNC, ferramentas para motocicletas e desenvolvimento técnico para empresas que precisam de peças confiáveis, controle dimensional e viabilidade produtiva."
      />
      <Services showIntro={false} />
    </main>
  );
}
