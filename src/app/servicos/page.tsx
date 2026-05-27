import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Services } from "@/sections/Services";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Fundição de alumínio coquilhado, usinagem complementar, ferramental técnico e itens de revenda pela Loja Tecnofusi."
};

export default function ServicosPage() {
  return (
    <main>
      <PageHero
        eyebrow="Serviços"
        title="Atuação industrial com processo, estrutura e aplicação real."
        description="Fundição de alumínio, usinagem complementar, ferramental técnico e revenda online aparecem separados para deixar claro o papel de cada frente."
      />
      <Services />
    </main>
  );
}
