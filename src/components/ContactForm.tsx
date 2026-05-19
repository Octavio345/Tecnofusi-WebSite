"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/site";

export function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nome = String(data.get("nome") || "");
    const email = String(data.get("email") || "");
    const telefone = String(data.get("telefone") || "");
    const assunto = String(data.get("assunto") || "");
    const mensagem = String(data.get("mensagem") || "");
    const body = encodeURIComponent(
      `Nome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\nAssunto: ${assunto}\n\nMensagem:\n${mensagem}`
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(`Contato pelo site - ${assunto || nome}`)}&body=${body}`;
    setStatus("Seu aplicativo de e-mail foi aberto com a mensagem preenchida.");
  }

  return (
    <form onSubmit={handleSubmit} className="premium-border rounded-[28px] bg-white/[0.055] p-5 shadow-premium backdrop-blur-xl sm:p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-metal-100">
          Nome
          <input name="nome" required className="focus-ring rounded-2xl border border-white/10 bg-graphite-950/70 px-4 py-3 text-white outline-none transition placeholder:text-metal-500 focus:border-brand-bright" placeholder="Seu nome" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-metal-100">
          E-mail
          <input name="email" type="email" required className="focus-ring rounded-2xl border border-white/10 bg-graphite-950/70 px-4 py-3 text-white outline-none transition placeholder:text-metal-500 focus:border-brand-bright" placeholder="voce@empresa.com" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-metal-100">
          Telefone
          <input name="telefone" className="focus-ring rounded-2xl border border-white/10 bg-graphite-950/70 px-4 py-3 text-white outline-none transition placeholder:text-metal-500 focus:border-brand-bright" placeholder="(00) 00000-0000" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-metal-100">
          Assunto
          <input name="assunto" required className="focus-ring rounded-2xl border border-white/10 bg-graphite-950/70 px-4 py-3 text-white outline-none transition placeholder:text-metal-500 focus:border-brand-bright" placeholder="Orçamento, projeto ou dúvida" />
        </label>
      </div>
      <label className="mt-4 grid gap-2 text-sm font-medium text-metal-100">
        Mensagem
        <textarea name="mensagem" required rows={5} className="focus-ring resize-none rounded-2xl border border-white/10 bg-graphite-950/70 px-4 py-3 text-white outline-none transition placeholder:text-metal-500 focus:border-brand-bright" placeholder="Conte o que você precisa desenvolver, fundir ou usinar." />
      </label>
      <button className="focus-ring mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-bright px-5 text-sm font-semibold text-white shadow-redGlow transition duration-300 hover:-translate-y-0.5 hover:bg-brand-soft sm:w-auto" type="submit">
        Enviar mensagem
        <Send className="h-4 w-4" />
      </button>
      {status && <p className="mt-4 text-sm text-metal-300">{status}</p>}
    </form>
  );
}
