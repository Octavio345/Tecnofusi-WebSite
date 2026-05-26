import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Services } from "@/sections/Services";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Fundição de alumínio coquilhado, ferramentas especiais, apoio de usinagem e itens de revenda pela Loja Tecnofusi."
};

export default function ServicosPage() {
  return (
    <main>
      <PageHero
        eyebrow="Serviços"
        title="Atuação industrial com processo, estrutura e aplicação real."
        description="Fundição e ferramentas formam o núcleo industrial. Usinagem CNC entra como apoio complementar, e itens de revenda ficam na Loja Tecnofusi."
      />
      <Services showIntro={false} />
    </main>
  );
}
