import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Contact } from "@/sections/Contact";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a Tecnofusi por WhatsApp, telefone, e-mail ou visite a empresa em Santa Bárbara D'Oeste."
};

export default function ContatoPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contato"
        title="Fale com a equipe técnica da Tecnofusi."
        description="Envie sua demanda de fundição de alumínio, ferramenta especial ou desenvolvimento industrial. A equipe retorna com orientação objetiva."
      />
      <Contact />
    </main>
  );
}
