import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Services } from "@/sections/Services";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Fundição de alumínio coquilhado, fabricação de ferramentas especiais, revenda para motocicletas e apoio técnico complementar."
};

export default function ServicosPage() {
  return (
    <main>
      <PageHero
        eyebrow="Serviços"
        title="Atuação industrial com processo, estrutura e aplicação real."
        description="Fundição de alumínio coquilhado, fabricação de ferramentas especiais, revenda de produtos para motocicletas e apoio de usinagem CNC por empresa parceira do mesmo grupo quando necessário."
      />
      <Services showIntro={false} />
    </main>
  );
}
