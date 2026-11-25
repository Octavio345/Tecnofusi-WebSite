import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fundição de alumínio para peças industriais sob demanda",
  description: "Fabricação de peças em alumínio coquilhado a partir de desenhos ou projetos técnicos, com análise de viabilidade e usinagem complementar quando necessária.",
  alternates: { canonical: "/fundicao-de-aluminio" }
};

const services = [
  ["Fundição de alumínio coquilhado", "Peças fundidas em alumínio para aplicações industriais, conforme a demanda do projeto."],
  ["Fabricação sob demanda", "Produção a partir de desenhos, especificações e volumes informados pelo cliente."],
  ["Análise técnica", "Avaliação de aplicação, material, tolerâncias e viabilidade antes da fabricação."],
  ["Usinagem complementar", "Acabamento ou ajuste dimensional por empresa parceira do grupo, quando necessário."]
];

const steps = [
  "Envio do desenho ou projeto técnico",
  "Análise da aplicação e da viabilidade",
  "Definição do processo e do ferramental",
  "Fundição, acabamento e entrega conforme o projeto"
];

const photos = [
  {
    src: "/images/fundicao/aluminio-preparado.jpg",
    alt: "Alumínio preparado junto à área de fundição da Tecnofusi",
    caption: "Preparação do alumínio"
  },
  {
    src: "/images/fundicao/vazamento-aluminio.jpg",
    alt: "Vazamento do alumínio na operação de fundição da Tecnofusi",
    caption: "Fundição em operação"
  },
  {
    src: "/images/fundicao/acabamento-peca.jpg",
    alt: "Acabamento manual de uma peça de alumínio na Tecnofusi",
    caption: "Acabamento da peça"
  }
];

export default function FundicaoDeAluminioPage() {
  return (
    <main className="bg-graphite-950 pt-[var(--header-height)]">
      <section className="container-premium grid gap-8 py-14 lg:grid-cols-2 lg:items-center lg:py-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-soft">Fundição industrial</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">Fundição de alumínio para peças industriais sob demanda</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-metal-300">Fabricamos peças em alumínio coquilhado a partir de desenhos ou projetos técnicos, com avaliação da aplicação e das necessidades de cada cliente.</p>
          <div className="mt-8"><Button href={siteConfig.whatsappHref} external>Solicitar orçamento</Button></div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] bg-graphite-900">
          <Image src="/images/site/servico-fundicao.png" alt="Fundição de alumínio na operação industrial da Tecnofusi" fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-contain" />
        </div>
      </section>

      <section className="bg-graphite-900 py-14 lg:py-20">
        <div className="container-premium">
          <SectionHeading eyebrow="Atuação" title="Do projeto à peça fundida" description="A fundição é a atividade principal. A usinagem entra como etapa complementar quando o projeto exige." />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {services.map(([title, description]) => <div key={title} className="rounded-[20px] border border-white/10 bg-graphite-950/55 p-6"><h2 className="text-xl font-semibold text-white">{title}</h2><p className="mt-3 leading-7 text-metal-300">{description}</p></div>)}
          </div>
        </div>
      </section>

      <section className="container-premium py-14 lg:py-20">
        <SectionHeading eyebrow="Como funciona" title="Etapas do atendimento" description="Cada etapa é definida conforme os requisitos técnicos apresentados." />
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => <li key={step} className="rounded-[20px] border border-white/10 bg-white/[0.045] p-6"><span className="text-sm font-bold text-brand-soft">{String(index + 1).padStart(2, "0")}</span><h2 className="mt-4 text-lg font-semibold text-white">{step}</h2></li>)}
        </ol>
      </section>

      <section className="bg-graphite-900 py-14 lg:py-20">
        <div className="container-premium">
          <SectionHeading eyebrow="Estrutura e peças" title="Registros da operação" description="Três etapas da produção registradas na unidade da Tecnofusi." />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {photos.map((photo) => (
              <figure key={photo.src} className="min-w-0 overflow-hidden rounded-[20px] border border-white/10 bg-graphite-950">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 32vw, (min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="px-5 py-4 text-sm font-semibold text-white">{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="container-premium py-14 lg:py-20">
        <SectionHeading eyebrow="Diferenciais" title="Atendimento técnico e produção própria" description="Desde 2011, a Tecnofusi atende projetos industriais com estrutura própria de fundição. A viabilidade, o processo e os prazos são avaliados conforme cada demanda." />
      </section>

      <section id="contato" className="bg-graphite-900 py-14 lg:py-20">
        <div className="container-premium max-w-4xl">
          <SectionHeading eyebrow="Contato" title="Fale sobre seu projeto" description="Converse com nossa equipe pelo WhatsApp para iniciar a avaliação da sua peça." />
          <div className="mt-8"><Button href={siteConfig.whatsappHref} external>Solicitar orçamento pelo WhatsApp</Button></div>
        </div>
      </section>
    </main>
  );
}
