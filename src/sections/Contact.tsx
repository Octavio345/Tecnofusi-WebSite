import { ExternalLink } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { SocialLinks } from "@/components/SocialLinks";
import { contactItems, siteConfig } from "@/lib/site";

export function Contact() {
  const googleRoute = `https://www.google.com/maps/dir/?api=1&destination=${siteConfig.mapsQuery}`;
  const wazeRoute = `https://waze.com/ul?q=${siteConfig.mapsQuery}&navigate=yes`;

  return (
    <section className="bg-graphite-950 py-14 lg:py-20">
      <div className="container-premium">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Contato"
            title="Fale com a TECNOFUSI FUNDIDOS"
            description="Orçamentos para peças avulsas, lotes industriais e desenvolvimento de moldes."
          />
        </AnimatedSection>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.05fr]">
          <AnimatedSection className="grid gap-4">
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="rounded-[22px] border border-white/10 bg-white/[0.045] p-5">
                  <div className="flex gap-4">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-bright/12 text-brand-soft">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-metal-500">{item.label}</p>
                      <p className="mt-2 text-base leading-7 text-white">{item.value}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="grid gap-3 sm:grid-cols-2">
              <Button href={siteConfig.whatsappHref} external className="whitespace-normal px-4 text-center leading-5">
                Fale com a TECNOFUSI FUNDIDOS
              </Button>
              <Button href={`mailto:${siteConfig.email}`} variant="secondary" external>
                Enviar e-mail
              </Button>
            </div>

            <div className="rounded-[22px] border border-white/10 bg-white/[0.045] p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-metal-500">
                Redes sociais
              </p>
              <p className="mt-2 text-sm leading-7 text-metal-300">
                Acompanhe os canais oficiais da empresa e da loja.
              </p>
              <SocialLinks className="mt-5" />
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <ContactForm />
          </AnimatedSection>
        </div>

        <AnimatedSection className="mt-8 overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.045]">
          <div className="map-frame h-[360px]">
            <iframe
              title="Mapa da Tecnofusi"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${siteConfig.mapsQuery}&output=embed`}
            />
          </div>
          <div className="flex flex-col gap-3 border-t border-white/10 p-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-metal-300">{siteConfig.address}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-4 text-sm font-semibold text-white transition hover:bg-white/[0.1]" href={googleRoute} target="_blank" rel="noreferrer">
                Abrir rota no Google Maps
                <ExternalLink className="h-4 w-4" />
              </a>
              <a className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-brand-bright px-4 text-sm font-semibold text-white transition hover:bg-brand-soft" href={wazeRoute} target="_blank" rel="noreferrer">
                Abrir rota no Waze
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
