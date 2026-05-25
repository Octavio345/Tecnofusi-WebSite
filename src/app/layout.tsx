import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Header } from "@/components/Header";
import { IntroAnimation } from "@/components/IntroAnimation";
import { siteConfig } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Tecnofusi | Fundição de alumínio e ferramentas especiais",
    template: "%s | Tecnofusi"
  },
  description:
    "Tecnofusi: fundição de alumínio coquilhado, fabricação de ferramentas especiais e venda online por canais oficiais.",
  keywords: [
    "Tecnofusi",
    "fundição de alumínio coquilhado",
    "fundição de alumínio",
    "produtos para motocicletas",
    "revenda para motocicletas",
    "ferramentas especiais",
    "venda online Tecnofusi",
    "Santa Bárbara D'Oeste"
  ],
  openGraph: {
    title: "Tecnofusi | Fundição e ferramentas especiais",
    description:
      "Fundição de alumínio coquilhado, fabricação de ferramentas especiais e venda online por canais oficiais.",
    url: siteConfig.url,
    siteName: "Tecnofusi",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/tecnofusi-logo.png",
        width: 1200,
        height: 1200,
        alt: "Logo Tecnofusi"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Tecnofusi | Fundição e ferramentas especiais",
    description:
      "Fundição de alumínio coquilhado, ferramentas especiais e canais oficiais de venda online.",
    images: ["/images/tecnofusi-logo.png"]
  },
  alternates: {
    canonical: siteConfig.url
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        {/*
         * Roda de forma SÍNCRONA antes do primeiro paint.
         * Verifica sessionStorage: se for primeira visita, trava overflow/pointer
         * e seta data-intro="active" no <html> para o IntroAnimation ler.
         * sessionStorage reseta a cada sessão do browser (aba fechada = intro aparece de novo).
         */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var k='tecnofusi_intro_v1';if(!sessionStorage.getItem(k)){sessionStorage.setItem(k,'1');var d=document.documentElement;d.setAttribute('data-intro','active');d.style.overflow='hidden';d.style.pointerEvents='none'}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="font-sans">
        <div className="noise-layer" aria-hidden="true" />
        <IntroAnimation />
        <Header />
        {children}
        <Footer />
        <FloatingWhatsApp />
        <ScrollToTop />
      </body>
    </html>
  );
}
