"use client";

import { MessageCircle } from "lucide-react";
import { FormEvent } from "react";
import { siteConfig } from "@/lib/site";
import { trackWhatsAppConversion } from "@/utils/tracking";

const inputClass = "focus-ring rounded-2xl border border-white/10 bg-graphite-950/70 px-4 py-3 text-white outline-none placeholder:text-metal-500 focus:border-brand-bright";

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const field = (name: string) => String(data.get(name) || "").trim();
    const message = [
      "Olá, gostaria de solicitar um orçamento para fundição de uma peça em alumínio.",
      "",
      "*Dados para contato*",
      `Nome: ${field("nome")}`,
      `Empresa: ${field("empresa")}`,
      `E-mail: ${field("email")}`,
      `Telefone: ${field("telefone")}`,
      `Cidade/estado: ${field("cidadeEstado")}`,
      "",
      "*Projeto*",
      `Descrição da peça ou projeto: ${field("descricao")}`,
      `Quantidade estimada: ${field("quantidade") || "Não informada"}`
    ].join("\n");
    const url = new URL(siteConfig.whatsappHref);
    url.searchParams.set("text", message);
    trackWhatsAppConversion();
    window.location.assign(url.toString());
  }

  return (
    <form onSubmit={handleSubmit} className="premium-border rounded-[28px] bg-white/[0.055] p-5 shadow-premium backdrop-blur-xl sm:p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-metal-100">Nome<input name="nome" required maxLength={120} className={inputClass} /></label>
        <label className="grid gap-2 text-sm font-medium text-metal-100">Empresa<input name="empresa" required maxLength={120} className={inputClass} /></label>
        <label className="grid gap-2 text-sm font-medium text-metal-100">E-mail<input name="email" type="email" required maxLength={160} className={inputClass} /></label>
        <label className="grid gap-2 text-sm font-medium text-metal-100">Telefone<input name="telefone" type="tel" required maxLength={30} className={inputClass} /></label>
        <label className="grid gap-2 text-sm font-medium text-metal-100">Cidade/estado<input name="cidadeEstado" required maxLength={120} className={inputClass} /></label>
        <label className="grid gap-2 text-sm font-medium text-metal-100">Quantidade estimada (opcional)<input name="quantidade" type="number" min="1" className={inputClass} /></label>
      </div>
      <label className="mt-4 grid gap-2 text-sm font-medium text-metal-100">Descrição da peça ou projeto<textarea name="descricao" required maxLength={5000} rows={5} className={`${inputClass} resize-y`} /></label>
      <p className="mt-4 text-xs leading-5 text-metal-300">Se tiver um desenho técnico, você poderá anexá-lo na conversa. Confira a mensagem antes de enviá-la pelo WhatsApp.</p>
      <button className="focus-ring mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-bright px-5 text-sm font-semibold text-white transition hover:bg-brand-soft" type="submit">Continuar no WhatsApp<MessageCircle className="h-4 w-4" /></button>
    </form>
  );
}
