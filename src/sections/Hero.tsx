"use client";

import Image from "next/image";
import { LazyMotion, domAnimation, m } from "framer-motion";
import {
  ArrowUpRight,
  CircuitBoard,
  Factory,
  Gauge,
  ShieldCheck
} from "lucide-react";

import { fadeUp, staggerContainer } from "@/animations/variants";
import { Button } from "@/components/Button";
import { HighlightedText } from "@/components/HighlightedText";
import { TechBackground } from "@/components/TechBackground";
import { stats } from "@/lib/site";

const processSteps = [
  {
    number: "01",
    title: "Análise técnica",
    description:
      "Avaliamos aplicação, ligas de alumínio, tolerâncias e volume para garantir viabilidade técnica."
  },
  {
    number: "02",
    title: "Desenvolvimento de Ferramental",
    description:
      "Definimos o processo de fundição ideal e projetamos os moldes e dispositivos necessários."
  },
  {
    number: "03",
    title: "Produção e Fundição",
    description:
      "Execução com rigoroso controle de repetibilidade, garantindo prazos e integridade das peças."
  },
  {
    number: "04",
    title: "Logística Integrada",
    description:
      "Produtos prontos para montagem ou revenda, com distribuição estratégica para todo o Brasil."
  }
];

const capabilities = [
  { label: "Fundição", value: "Alumínio", icon: Factory },
  { label: "Processo", value: "Controle", icon: Gauge },
  { label: "Controle", value: "Qualidade", icon: ShieldCheck }
];

function BrazilIcon() {
  return (
    <svg
      className="h-10 w-10 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="11.5" fill="#16a34a" />
      <path d="M12 4.2 21.2 12 12 19.8 2.8 12 12 4.2Z" fill="#facc15" />
      <circle cx="12" cy="12" r="4.4" fill="#1d4ed8" />
      <path
        d="M8.2 11.2c2.3-.6 5-.3 7.6.9"
        stroke="#ffffff"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative isolate overflow-x-hidden pt-[calc(var(--header-height)+8px)] sm:pt-[calc(var(--header-height)+12px)]">
      <TechBackground />

      <div className="relative z-10 mx-auto w-full max-w-[1520px] px-4 pb-8 pt-2 sm:px-6 lg:px-4 lg:pb-14 lg:pt-4">
        <LazyMotion features={domAnimation} strict>
          <m.div
            className="premium-border relative w-full overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] px-4 py-6 shadow-premium backdrop-blur-xl sm:rounded-[32px] sm:px-8 sm:py-8 lg:px-12 lg:py-9 xl:px-14"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
          <div className="absolute inset-0 bg-tech-grid bg-[size:42px_42px] opacity-[0.13]" aria-hidden="true" />
          <div className="absolute left-0 top-0 h-full w-1/3 bg-brand-deep/12 blur-3xl" aria-hidden="true" />
          <div className="absolute right-0 top-0 h-full w-1/3 bg-signal-cyan/8 blur-3xl" aria-hidden="true" />

          <div className="relative grid min-w-0 items-center gap-6 lg:grid-cols-[minmax(0,1.12fr)_minmax(430px,0.88fr)] xl:gap-8">
            <m.div variants={fadeUp} className="min-w-0 max-w-[880px]">
              <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-metal-100 backdrop-blur-xl sm:text-xs sm:tracking-[0.18em]">
                <CircuitBoard className="h-4 w-4 shrink-0 text-brand-soft" />
                <span className="truncate">Tecnologia industrial aplicada</span>
              </div>

              <h1 className="mt-5 max-w-4xl text-balance text-[2.15rem] font-semibold leading-[1.08] text-white min-[390px]:text-[2.35rem] sm:text-5xl lg:text-[3.7rem] xl:text-[4rem]">
                Tecnologia em{" "}
                <span className="text-brand-soft [text-shadow:0_0_28px_rgba(224,20,27,0.28)]">
                  fundição de alumínio
                </span>{" "}
                e ferramentas especiais
              </h1>

              <p className="mt-4 max-w-3xl text-[15px] leading-7 text-metal-300 sm:text-lg sm:leading-8">
                <HighlightedText text="A Tecnofusi atua na fabricação de peças em alumínio coquilhado, desenvolvimento de ferramentas e comercialização de produtos técnicos por canais próprios e marketplaces." />
              </p>

              <div className="mt-5 grid gap-3 sm:flex sm:flex-row">
                <Button href="/servicos" variant="secondary" className="w-full sm:w-auto sm:min-w-48">
                  Ver serviços
                </Button>
              </div>

              <div className="mt-5 max-w-xl rounded-[24px] border border-white/10 bg-graphite-950/45 p-3 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:p-4 lg:mt-6">
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.035] to-brand-deep/10 p-3 sm:p-4">
                  <div className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-graphite-950/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_30px_rgba(0,0,0,0.22)]">
                      <BrazilIcon />
                    </span>

                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-white">Entrega nacional</p>
                      <p className="mt-1 text-sm font-medium leading-6 text-metal-300">
                        Produtos enviados para todo o Brasil com qualidade máxima e compromisso com prazo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </m.div>

            <m.div variants={fadeUp} className="relative hidden lg:block">
              <div className="premium-border relative overflow-hidden rounded-[30px] bg-white/[0.055] p-4 shadow-premium backdrop-blur-xl">
                <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-graphite-950 p-5">
                  <div className="absolute inset-0 bg-tech-grid bg-[size:34px_34px] opacity-25" />
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-deep via-brand-bright to-signal-cyan" />

                  <div className="relative">
                    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 backdrop-blur-xl">
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-metal-300">
                        Fluxo técnico
                      </span>

                      <span className="inline-flex items-center gap-2 text-xs font-semibold text-white">
                        <span className="h-2 w-2 rounded-full bg-brand-bright shadow-red-glow" />
                        Ativo
                      </span>
                    </div>

                    <div className="mt-5 flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.045] p-4">
                      <div className="relative h-20 w-20 shrink-0">
                        <Image
                          src="/images/tecnofusi-emblem.png"
                          alt="Logo Tecnofusi"
                          fill
                          sizes="80px"
                          className="object-contain drop-shadow-[0_12px_30px_rgba(224,20,27,0.26)]"
                        />
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-white">Atendimento industrial sob demanda</p>
                        <p className="mt-1 text-sm leading-6 text-metal-300">
                          Do desenvolvimento do projeto à entrega final, com suporte técnico especializado em cada etapa.
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3">
                      {processSteps.map((step) => (
                        <div key={step.number} className="rounded-2xl border border-white/10 bg-white/[0.055] p-4 backdrop-blur-xl">
                          <div className="flex gap-3">
                            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-bright/14 text-xs font-bold text-brand-soft">
                              {step.number}
                            </span>

                            <div>
                              <p className="text-sm font-semibold text-white">{step.title}</p>
                              <p className="mt-1 text-xs leading-5 text-metal-300">{step.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-3">
                      {capabilities.map((item) => {
                        const Icon = item.icon;

                        return (
                          <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-bright/14 text-brand-soft">
                              <Icon className="h-4 w-4" />
                            </span>
                            <p className="mt-3 text-sm font-semibold text-white">{item.value}</p>
                            <p className="mt-1 text-xs text-metal-300">{item.label}</p>
                          </div>
                        );
                      })}
                    </div>

                    <a
                      href="/contato"
                      className="focus-ring mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.07] px-5 text-sm font-semibold text-white transition duration-300 hover:border-brand-bright/60 hover:bg-brand-bright"
                    >
                      Enviar projeto para análise
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </m.div>
          </div>
          </m.div>

          <m.div
            className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {stats.map((item) => (
              <m.div
                key={item.label}
                variants={fadeUp}
                className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl sm:p-5"
              >
                <strong className="block text-2xl font-semibold text-white sm:text-3xl">{item.value}</strong>
                <span className="mt-2 block text-sm leading-6 text-metal-300">{item.label}</span>
              </m.div>
            ))}
          </m.div>
        </LazyMotion>
      </div>
    </section>
  );
}
