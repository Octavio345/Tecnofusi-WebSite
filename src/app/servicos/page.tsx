import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Services } from "@/sections/Services";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Fundição de alumínio coquilhado para peças industriais sob demanda, com apoio de usinagem complementar."
};

export default function ServicosPage() {
  return (
    <main>
      <PageHero
        eyebrow="Serviços"
        title="Atuação industrial com processo, estrutura e aplicação real."
        description="Conheça nossa produção de peças industriais em alumínio coquilhado e o apoio complementar de usinagem quando o projeto exige."
      />
      <Services />
    </main>
  );
}
