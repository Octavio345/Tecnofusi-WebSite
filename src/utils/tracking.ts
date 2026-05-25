declare global {
  interface Window {
    trackWhatsApp?: () => void;
  }
}

export function isWhatsAppHref(href: string) {
  return href.includes("wa.me/") || href.includes("whatsapp.com/");
}

export function trackWhatsAppConversion() {
  if (typeof window === "undefined") return;
  window.trackWhatsApp?.();
}

export {};
