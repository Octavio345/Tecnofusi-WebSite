import {
  Cpu,
  Factory,
  Gauge,
  Handshake,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Timer
} from "lucide-react";

const whatsappHref =
  `https://wa.me/5519993482165?text=${encodeURIComponent("Olá, gostaria de solicitar um orçamento para fundição de uma peça em alumínio.")}`;

export const siteConfig = {
  name: "Tecnofusi",
  url: "https://tecnofusi.com.br",
  description:
    "Fundição de alumínio coquilhado e fabricação de peças industriais sob demanda.",
  phonePrimary: "(19) 3455-5329",
  whatsapp: "(19) 99348-2165",
  whatsappHref,
  email: "tecnofusi@tecnofusi.com.br",
  address: "Rua Bárbara Rosa Vital, 129 - Condomínio Cintec - Santa Bárbara d'Oeste/SP - 13459-626",
  mapsQuery:
    "Rua%20B%C3%A1rbara%20Rosa%20Vital%2C%20129%20-%20Condom%C3%ADnio%20Cintec%20-%20Santa%20B%C3%A1rbara%20d%27Oeste%2FSP%20-%2013459-626",
  socials: {
    instagramFundidos: "https://www.instagram.com/tecnofusifundidos/",
    facebookFundidos: "https://www.facebook.com/tecnofusifundidos",
    youtube: "https://www.youtube.com/@edvaldogallina9902",
    whatsapp: whatsappHref
  }
};

export const navItems = [
  { label: "Quem Somos", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Fundição", href: "/fundicao-de-aluminio" },
  { label: "Contato", href: "/contato" }
];

export const stats = [
  { value: "2011", label: "Experiência consolidada no mercado de fundição e metalurgia" },
  { value: "Fábrica Própria", label: "Controle total do processo produtivo e garantia de qualidade técnica" },
  { value: "Foco B2B", label: "Atendimento especializado para lotes industriais e projetos sob demanda" },
  { value: "Sob demanda", label: "Peças industriais fabricadas a partir de projetos técnicos" }
];

export const services = [
  {
    icon: Factory,
    category: "Atividade principal",
    title: "Fundição de alumínio coquilhado",
    description:
      "Produção de peças em alumínio coquilhado para demandas industriais sob medida, com controle técnico e repetibilidade.",
    image: {
      src: "/images/site/servico-fundicao.png",
      alt: "Registro da produção de alumínio da Tecnofusi"
    },
    bullets: ["Alumínio coquilhado", "Produção técnica", "Qualidade uniforme"],
    details:
      "A fundição de alumínio coquilhado é a base produtiva da Tecnofusi. Cada demanda é avaliada conforme aplicação, desenho técnico e volume previsto.",
    highlights: [
      "Baixa densidade e redução de peso",
      "Boa condutividade térmica e elétrica",
      "Resistência à corrosão",
      "Boa usinabilidade e acabamento",
      "Flexibilidade no desenvolvimento de peças",
      "Fácil reciclagem"
    ],
    technicalPoints: [
      "Estabilidade dimensional",
      "Acabamento superficial superior",
      "Repetibilidade em produção seriada",
      "Boa resistência mecânica"
    ]
  },
  {
    icon: Cpu,
    category: "Apoio complementar",
    title: "Usinagem CNC complementar",
    description:
      "Quando uma peça ou ferramenta exige acabamento, ajustes ou tolerâncias específicas, a Tecnofusi pode integrar apoio de usinagem CNC por empresa parceira do mesmo grupo.",
    image: {
      src: "/images/site/servico-usinagem.png",
      alt: "Área de usinagem com equipamentos CNC do mesmo grupo empresarial"
    },
    bullets: ["Empresa parceira", "Mesmo grupo empresarial", "Etapa complementar"],
    details:
      "A usinagem CNC entra como etapa complementar quando o projeto exige acabamento, ajuste dimensional ou integração entre peça fundida e aplicação final. Esse apoio é realizado por empresa parceira do mesmo grupo empresarial e integrado ao atendimento quando fizer sentido técnico.",
    highlights: [
      "Acabamento de peças quando necessário",
      "Ajustes dimensionais complementares",
      "Integração com projetos fundidos",
      "Encaminhamento pelo mesmo grupo empresarial"
    ]
  }
];

export const differentiators = [
  {
    icon: ShieldCheck,
    title: "Rigor Técnico e Qualidade",
    description:
      "Acompanhamento técnico da produção com foco na consistência das peças fundidas."
  },
  {
    icon: Timer,
    title: "Pontualidade e Planejamento",
    description:
      "Planejamento de produção e alinhamento de prazos conforme o projeto aprovado."
  },
  {
    icon: Gauge,
    title: "Excelência Operacional",
    description:
      "Estrutura própria de fundição e avaliação da viabilidade técnica de cada demanda."
  },
  {
    icon: Handshake,
    title: "Engenharia Consultiva",
    description:
      "Atendimento para alinhar aplicação, material e tolerâncias ao projeto apresentado."
  }
];

export const contactItems = [
  { icon: Phone, label: "Telefone", value: `${siteConfig.phonePrimary}` },
  { icon: MessageCircle, label: "WhatsApp", value: siteConfig.whatsapp },
  { icon: Mail, label: "E-mail", value: siteConfig.email },
  { icon: MapPin, label: "Endereço", value: siteConfig.address }
];
