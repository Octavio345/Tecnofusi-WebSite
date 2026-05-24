import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Services } from "@/sections/Services";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Fundição de alumínio coquilhado, ferramentas para motocicletas e apoio técnico para soluções industriais."
};

export default function ServicosPage() {
  return (
    <main>
      <PageHero
        eyebrow="Serviços"
        title="Serviços industriais com processo, estrutura e aplicação real."
        description="Fundição de alumínio coquilhado com suporte técnico para desenvolvimento, fabricação de ferramentas para motocicletas e apoio de usinagem CNC por empresa parceira do mesmo grupo quando necessário."
      />
      <Services showIntro={false} />
    </main>
  );
}
