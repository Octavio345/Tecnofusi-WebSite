import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Header } from "@/components/Header";
import { IntroAnimation } from "@/components/IntroAnimation";
import { siteConfig } from "@/lib/site";
import {
  googleAdsConversionScript,
  googleTagManagerScript,
  trackingConfig
} from "@/lib/tracking";

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
    "Tecnofusi: fundição de alumínio coquilhado, ferramentas especiais, apoio técnico complementar e Loja Tecnofusi.",
  keywords: [
    "Tecnofusi",
    "fundição de alumínio coquilhado",
    "fundição de alumínio",
    "Loja Tecnofusi",
    "peças para motocicletas em revenda",
    "itens de revenda",
    "ferramentas especiais",
    "venda online Tecnofusi",
    "Santa Bárbara D'Oeste"
  ],
  openGraph: {
    title: "Tecnofusi | Fundição e ferramentas especiais",
    description:
      "Fundição de alumínio coquilhado, ferramentas especiais, apoio técnico complementar e Loja Tecnofusi.",
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
      "Fundição de alumínio coquilhado, ferramentas especiais, apoio técnico complementar e Loja Tecnofusi.",
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
        <script
          dangerouslySetInnerHTML={{
            __html: googleTagManagerScript,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: googleAdsConversionScript,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var k='tecnofusi_intro_v1';if(!sessionStorage.getItem(k)){sessionStorage.setItem(k,'1');var d=document.documentElement;d.setAttribute('data-intro','active');d.style.overflow='hidden';d.style.pointerEvents='none'}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="font-sans">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${trackingConfig.googleTagManagerId}`}
            height={0}
            width={0}
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
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
