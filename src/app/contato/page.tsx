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
        title="Fale com nossos especialistas."
        description="Da FUNDIÇÃO DE ALUMÍNIO ao produto final, oferecemos o suporte técnico que sua indústria precisa."
      />
      <Contact />
    </main>
  );
}
