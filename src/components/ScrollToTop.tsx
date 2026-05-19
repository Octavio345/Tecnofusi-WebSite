"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [rendered, setRendered] = useState(false);
  const [visible, setVisible]   = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const shouldShow = window.scrollY > 320;

      if (shouldShow && !rendered) {
        setRendered(true);
        // pequeno delay para o elemento entrar no DOM antes da transição
        requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
      }

      if (!shouldShow && rendered) {
        setVisible(false);
        // aguarda a animação de saída terminar antes de desmontar
        const t = setTimeout(() => setRendered(false), 350);
        return () => clearTimeout(t);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [rendered]);

  if (!rendered) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Voltar ao topo"
      className={[
        "focus-ring fixed bottom-12 left-5 z-50 md:hidden",
        "inline-flex h-14 w-14 items-center justify-center rounded-full",
        "bg-[#e0141b] text-white",
        "shadow-[0_0_28px_6px_rgba(224,20,27,0.45)]",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1 hover:scale-105",
        "hover:shadow-[0_0_38px_8px_rgba(224,20,27,0.55)]",
        visible
          ? "translate-y-0 scale-100 opacity-100"
          : "translate-y-5 scale-90 opacity-0",
      ].join(" ")}
    >
      <ArrowUp className="h-6 w-6" />
    </button>
  );
}