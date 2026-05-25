# Site Tecnofusi

Site institucional da Tecnofusi, desenvolvido com Next.js, React, TypeScript, Tailwind CSS, Framer Motion e Lucide Icons.

O site organiza a comunicação da empresa em quatro pontos: fundição de alumínio coquilhado, fabricação de ferramentas especiais, apoio complementar de usinagem CNC por empresa parceira do mesmo grupo e venda online por canais oficiais. Produtos para motocicletas entram como revenda.

## O que precisa instalar

Requisitos:

```bash
node -v
npm -v
```

Use Node.js 20 ou superior.

Depois de baixar o projeto, instale as dependências com:

```bash
npm install
```

Esse comando lê o `package.json` e instala todas as dependências diretas do projeto.

Bibliotecas usadas pelo site:

- `next`
- `react`
- `react-dom`
- `framer-motion`
- `lucide-react`
- `clsx`

Ferramentas de desenvolvimento:

- `typescript`
- `tailwindcss`
- `@tailwindcss/postcss`
- `postcss`
- `eslint`
- `eslint-config-next`
- `@types/node`
- `@types/react`
- `@types/react-dom`

Não precisa instalar esses pacotes um por um quando o projeto já está clonado. O caminho certo é rodar `npm install` na raiz do projeto.

## Como rodar

Ambiente local:

```bash
npm run dev
```

Build de produção:

```bash
npm run build
```

Servidor de produção após o build:

```bash
npm run start
```

## Estrutura

```txt
src/app
```

Rotas do App Router, metadados, sitemap, robots e layout global.

```txt
src/components
```

Componentes reutilizáveis: header, footer, botões, formulário, links sociais, logo, animação inicial e elementos de interface.

```txt
src/sections
```

Seções completas das páginas: hero, serviços, sobre, diferenciais, credibilidade, galeria operacional, marketplaces e contato.

```txt
src/lib/site.ts
```

Conteúdo central do site. É o primeiro arquivo para revisar quando mudar telefone, endereço, redes sociais, serviços, textos institucionais ou links comerciais.

```txt
src/styles
```

Entrada global de CSS, tokens visuais, base do site, utilitários globais e módulos CSS específicos.

```txt
public/images
```

Imagens servidas diretamente pelo site, incluindo logo, fotos da empresa e marcas dos marketplaces.

## Páginas

- `/`: página inicial com posicionamento, diferenciais, serviços, operação, sobre, credibilidade e canais de compra.
- `/sobre`: contexto da empresa, atuação, histórico e valores.
- `/servicos`: detalhamento das áreas de atuação.
- `/contato`: formulário com envio para WhatsApp, dados de contato e mapa.

## Posicionamento atual

- Fundição de alumínio coquilhado é a atividade principal.
- Ferramentas especiais entram como frente industrial.
- Usinagem CNC aparece como apoio complementar, feito por empresa parceira do mesmo grupo quando o projeto exige.
- Produtos para motocicletas entram como revenda, sem comunicação de fabricação própria.
- Instagram e Facebook da antiga frente de motocicletas aparecem no site como canais da Loja.
- Jardinagem não tem área própria no site. Quando houver produto nessa categoria, ele deve entrar na comunicação geral de fundição ou venda online.

## Conteúdo e manutenção

Ao alterar textos, manter a separação entre o que a empresa fabrica, o que revende e o que executa com apoio parceiro. Essa separação evita promessa comercial errada e deixa o site mais profissional.

Antes de publicar qualquer mudança:

```bash
npm run build
```

Se a mudança envolver texto de serviço, revisar também:

- `src/lib/site.ts`
- `src/app/layout.tsx`
- `src/app/sobre/page.tsx`
- `src/app/servicos/page.tsx`
- `src/app/contato/page.tsx`

## Deploy

O site está preparado para deploy em Vercel. Para produção, conferir domínio, variáveis de ambiente se forem adicionadas no futuro, links de redes sociais, links de marketplaces e dados de contato.
