# Tecnofusi

Site institucional da Tecnofusi, com foco em fundição de alumínio coquilhado e peças industriais sob demanda. A usinagem é apresentada como etapa complementar quando necessária ao projeto.

## Requisitos

- Node.js compatível com Next.js 15
- npm

## Instalação local

```bash
npm install
npm run dev
```

O site abre em `http://localhost:3000`. Para gerar a versão de produção, use `npm run build`. As dependências diretas estão em `package.json`: Next.js, React, Framer Motion, Lucide e clsx. Tailwind CSS, PostCSS, TypeScript e ESLint são dependências de desenvolvimento.

## Páginas

- `/`: apresentação institucional e visão geral da operação.
- `/sobre`: história, estrutura e compromissos da empresa.
- `/servicos`: fundição e apoio complementar de usinagem.
- `/fundicao-de-aluminio`: serviços, processo, imagens e contato para projetos industriais.
- `/contato`: canais de atendimento, formulário e localização.

O número do WhatsApp, telefone, e-mail e endereço ficam em `src/lib/site.ts`. Todos os botões de orçamento usam a mensagem pré-preenchida configurada nesse arquivo.

## Formulário

O formulário aparece somente na página `/contato`. Ao preenchê-lo, o visitante abre uma conversa com o número de WhatsApp configurado em `src/lib/site.ts`. A mensagem já contém nome, empresa, e-mail, telefone, cidade/estado, descrição do projeto e quantidade estimada. O visitante confere e envia a mensagem no WhatsApp.

Arquivos não são transferidos pelo link de conversa. Quando houver desenho técnico, o visitante pode anexá-lo diretamente na conversa após abri-la. O formulário não usa API nem credenciais de envio de e-mail.

## Mensuração

O GTM e a conversão do Google Ads permanecem em `src/lib/tracking.ts`. O botão do formulário registra a abertura do WhatsApp da mesma forma que os outros links de WhatsApp. Isso mede a intenção de contato, não confirma que a pessoa enviou a mensagem.

## Antes da publicação

Confirmar com a Tecnofusi as imagens industriais e descrições técnicas. O telefone e o e-mail exibidos no site foram mantidos.
