# Tecnofusi Premium Website

Website institucional premium para a Tecnofusi, construído com Next.js, React, TypeScript, TailwindCSS, Framer Motion e Lucide Icons.

## 1. Instalação do ambiente

Requisitos:

```bash
node -v
npm -v
```

Use Node.js 20+ ou superior. Neste workspace foi detectado Node.js 22.14.0 e npm 10.9.2.

## 2. Como criar o projeto do zero

Comando recomendado para iniciar um projeto equivalente:

```bash
npm create next-app@latest tecnofusi-premium -- --ts --tailwind --eslint --app --src-dir --import-alias "@/*"
cd tecnofusi-premium
npm install framer-motion lucide-react clsx
```

Nesta entrega, a estrutura já foi criada diretamente no workspace atual.

## 3. Dependências utilizadas

- `next`: framework React com App Router, SEO, otimização de imagens e build de produção.
- `react` e `react-dom`: base da interface.
- `tailwindcss`: design system utilitário para UI responsiva e consistente.
- `framer-motion`: animações suaves de entrada, hover e reveal ao scroll.
- `lucide-react`: ícones modernos, leves e consistentes.
- `clsx`: composição segura de classes CSS.
- `typescript`: tipagem e manutenção em escala.
- `eslint` e `eslint-config-next`: qualidade estática do código.
- `postcss` e `autoprefixer`: pipeline CSS usado pelo Tailwind.

## 4. Estrutura das pastas

```txt
/
├─ public/
│  └─ images/
│     └─ tecnofusi-logo.png
├─ src/
│  ├─ app/
│  │  ├─ contato/page.tsx
│  │  ├─ servicos/page.tsx
│  │  ├─ sobre/page.tsx
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  ├─ robots.ts
│  │  └─ sitemap.ts
│  ├─ animations/
│  │  └─ variants.ts
│  ├─ assets/
│  │  └─ README.md
│  ├─ components/
│  │  ├─ AnimatedSection.tsx
│  │  ├─ Button.tsx
│  │  ├─ ContactForm.tsx
│  │  ├─ FloatingWhatsApp.tsx
│  │  ├─ Footer.tsx
│  │  ├─ Header.tsx
│  │  ├─ Logo.tsx
│  │  ├─ PageHero.tsx
│  │  ├─ SectionHeading.tsx
│  │  ├─ SocialLinks.tsx
│  │  └─ TechBackground.tsx
│  ├─ hooks/
│  │  └─ useScrolled.ts
│  ├─ lib/
│  │  └─ site.ts
│  ├─ sections/
│  │  ├─ About.tsx
│  │  ├─ Contact.tsx
│  │  ├─ Credibility.tsx
│  │  ├─ Differentials.tsx
│  │  ├─ Hero.tsx
│  │  └─ Services.tsx
│  ├─ styles/
│  │  └─ README.md
│  └─ utils/
│     └─ cn.ts
├─ next.config.ts
├─ package.json
├─ postcss.config.mjs
├─ tailwind.config.ts
└─ tsconfig.json
```

## 5. Arquitetura escolhida

A arquitetura usa o App Router do Next.js com páginas semânticas para `Home`, `Sobre`, `Serviços` e `Contato`.

- `src/app`: rotas, metadata, SEO técnico, sitemap, robots e layout global.
- `src/components`: componentes reutilizáveis como header, footer, botões, formulário, background e blocos animados.
- `src/sections`: seções completas de página, organizadas por intenção de negócio.
- `src/lib`: conteúdo institucional centralizado, contatos, serviços e dados do site.
- `src/animations`: presets de animação Framer Motion.
- `src/hooks`: hooks de comportamento de UI, como estado de scroll da navbar.
- `src/utils`: utilitários pequenos e genéricos.
- `public`: assets servidos diretamente pelo navegador.

Essa divisão evita arquivos gigantes, facilita manutenção e permite evoluir o site para CMS, integração com formulário real, blog ou landing pages por campanha.

## 6. Como rodar localmente

```bash
npm install
npm run dev
```

Depois acesse:

```txt
http://localhost:3000
```

## 7. Build para produção

```bash
npm run build
npm run start
```

## 8. Deploy futuro

Opção mais direta: Vercel.

```bash
npm install -g vercel
vercel
vercel --prod
```

Também é possível publicar em Netlify, Render, Railway, Docker ou VPS. Para produção real, recomendo:

- configurar domínio `tecnofusi.com.br`;
- trocar redes sociais caso existam URLs oficiais diferentes;
- integrar formulário com Resend, SendGrid, HubSpot ou API própria;
- adicionar imagens reais de máquinas, peças e parque fabril;
- configurar analytics e eventos de conversão no WhatsApp/formulário.