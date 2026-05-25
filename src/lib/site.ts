import {
  BadgeCheck,
  Cpu,
  Drill,
  Factory,
  Gauge,
  Handshake,
  Layers3,
  Mail,
  MapPin,
  MessageCircle,
  Microscope,
  Phone,
  ShieldCheck,
  Sparkles,
  Timer,
  Wrench
} from "lucide-react";

const whatsappHref =
  "https://wa.me/5519981359252?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Tecnofusi%20e%20gostaria%20de%20solicitar%20um%20atendimento.";

export const siteConfig = {
  name: "Tecnofusi",
  url: "https://tecnofusi.com.br",
  description:
    "Fundição de alumínio coquilhado, fabricação de ferramentas especiais e venda online de produtos oficiais e itens de revenda.",
  phonePrimary: "(19) 3455-5329",
  whatsapp: "(19) 98135-9252",
  whatsappHref,
  email: "tecnofusi@tecnofusi.com.br",
  address: "Rua Bárbara Rosa Vital, 129 - Condomínio Cintec - Santa Bárbara d'Oeste/SP - 13459-626",
  mapsQuery:
    "Rua%20B%C3%A1rbara%20Rosa%20Vital%2C%20129%20-%20Condom%C3%ADnio%20Cintec%20-%20Santa%20B%C3%A1rbara%20d%27Oeste%2FSP%20-%2013459-626",
  socials: {
    instagramFundidos: "https://www.instagram.com/tecnofusifundidos/",
    instagramLoja: "https://www.instagram.com/tecnofusimotocicletas/",
    facebookFundidos: "https://www.facebook.com/tecnofusifundidos",
    facebookLoja: "https://www.facebook.com/tecnofusimotocicletas",
    youtube: "https://www.youtube.com/@edvaldogallina9902",
    whatsapp: whatsappHref
  },
  marketplaces: {
    loja: "https://lojatecnofusi.com.br/",
    mercadoLivre:
      "https://www.mercadolivre.com.br/pagina/tecnofusifundidos?fbclid=IwY2xjawR1uAdleHRuA2FlbQIxMABicmlkETExM2FsR0dva0IxZnRqMUsxc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHm4Lb8_D0QrD7r4LG_T8T2oOgdJ3vS1GXV_EuSb5P8aXXwLNaDdn9P8zSJnm_aem_1pUTsN-kXCI_NI1Z6UTdBg",
    shopee:
      "https://shopee.com.br/tecnofusi?entryPoint=ShopBySearch&searchKeyword=tecnofusi&fbclid=IwY2xjawR1t9hleHRuA2FlbQIxMABicmlkETExM2FsR0dva0IxZnRqMUsxc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHuCduaj7YTlcP1TxMotm2wQL48XSbc5YN2r9MYXQN2R3wq5_y6YlrRjhUZxP_aem_q7KyWaHSuIc2ypiixw4R-Q"
  }
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Contato", href: "/contato" }
];

export const stats = [
  { value: "2011", label: "Fundação e início das operações" },
  { value: "B2B", label: "Atendimento industrial e técnico para empresas" },
  { value: "2", label: "Frentes industriais: fundição e ferramentas" },
  { value: "Online", label: "Venda por loja própria e marketplaces oficiais" }
];

export const services = [
  {
    icon: Factory,
    category: "Atividade principal",
    title: "Fundição de alumínio coquilhado",
    description:
      "Produção de peças em alumínio coquilhado para demandas industriais e produtos próprios, com controle técnico, repetibilidade e qualidade uniforme.",
    bullets: ["Alumínio coquilhado", "Produção técnica", "Qualidade uniforme"],
    details:
      "A fundição de alumínio coquilhado é a base produtiva da Tecnofusi. Ela atende demandas de terceiros e produtos fabricados pela empresa, com aplicação em diferentes peças fundidas e foco em qualidade repetível.",
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
    bullets: ["Empresa parceira", "Mesmo grupo empresarial", "Etapa complementar"],
    details:
      "A usinagem CNC entra como etapa complementar quando o projeto exige acabamento, ajuste dimensional ou integração entre peça fundida e aplicação final. Esse apoio é realizado por empresa parceira do mesmo grupo empresarial e integrado ao atendimento quando fizer sentido técnico.",
    highlights: [
      "Acabamento de peças quando necessário",
      "Ajustes dimensionais complementares",
      "Integração com projetos fundidos",
      "Encaminhamento pelo mesmo grupo empresarial"
    ]
  },
  {
    icon: Wrench,
    category: "Revenda",
    title: "Produtos para motocicletas",
    description:
      "Revenda de produtos para motocicletas por canais oficiais da Tecnofusi, com atendimento comercial e disponibilidade conforme estoque.",
    bullets: ["Produtos de revenda", "Canais oficiais", "Venda online"],
    details:
      "A categoria de motocicletas reúne itens de revenda comercializados pela Tecnofusi. O Instagram da loja funciona como canal de divulgação e atendimento para essa frente comercial e outros itens disponíveis.",
    highlights: [
      "Itens de revenda",
      "Atendimento comercial",
      "Compra por canais oficiais",
      "Disponibilidade conforme estoque",
      "Comunicação específica da categoria",
      "Integração com a venda online"
    ]
  },
  {
    icon: Drill,
    category: "Suporte técnico",
    title: "Desenvolvimento técnico",
    description:
      "Apoio técnico para avaliar peças fundidas, ferramentas especiais e melhorias de produto antes da produção, considerando aplicação, material, volume e viabilidade.",
    bullets: ["Análise de viabilidade", "Apoio ao projeto", "Melhoria de processo"],
    details:
      "Atendimento voltado para entender aplicação, material, tolerância, volume e contexto de uso antes da produção. Essa leitura técnica reduz retrabalho e ajuda a escolher o processo mais adequado.",
    highlights: [
      "Análise de aplicação",
      "Apoio na escolha do processo",
      "Adaptação de componentes",
      "Viabilidade produtiva",
      "Orientação por custo-benefício",
      "Desenvolvimento sob demanda"
    ]
  }
];

export const differentiators = [
  {
    icon: ShieldCheck,
    title: "Padrão rígido de qualidade",
    description:
      "Processos pensados para consistência, rastreabilidade e redução de retrabalho em demandas técnicas."
  },
  {
    icon: Timer,
    title: "Compromisso com prazo",
    description:
      "Execução orientada por planejamento produtivo para atender clientes que dependem de previsibilidade."
  },
  {
    icon: Gauge,
    title: "Eficiência operacional",
    description:
      "Estrutura preparada para entregar melhor custo-benefício sem perder o controle técnico do processo."
  },
  {
    icon: Handshake,
    title: "Atendimento consultivo",
    description:
      "Atendimento próximo para entender aplicação, material, tolerância e contexto real de uso."
  }
];

export const timeline = [
  {
    year: "2011",
    title: "Fundação da Tecnofusi",
    description:
      "Início das atividades com foco em capacidade técnica, seriedade comercial e serviços para terceiros."
  },
  {
    year: "2013",
    title: "Ampliação do portfólio técnico e comercial",
    description:
      "Evolução da atuação em ferramentas especiais e canais comerciais, incluindo produtos de revenda para motocicletas."
  },
  {
    year: "2017",
    title: "Reconhecimento por eficiência",
    description:
      "Consolidação da reputação por eficácia, prazo e fidelização de clientes industriais."
  },
  {
    year: "Hoje",
    title: "Fundição, ferramentas e venda online",
    description:
      "Atuação focada em fundição de alumínio coquilhado, fabricação de ferramentas especiais, revenda de produtos para motocicletas e canais oficiais de venda online."
  }
];

export const values = [
  { icon: Microscope, title: "Precisão", description: "Detalhe técnico como critério de decisão." },
  { icon: BadgeCheck, title: "Confiança", description: "Ética, seriedade e compromisso com entrega." },
  { icon: Layers3, title: "Consistência", description: "Processos repetíveis para qualidade estável." },
  { icon: Sparkles, title: "Inovação útil", description: "Tecnologia aplicada onde gera resultado real." }
];

export const contactItems = [
  { icon: Phone, label: "Telefone", value: `${siteConfig.phonePrimary}` },
  { icon: MessageCircle, label: "WhatsApp", value: siteConfig.whatsapp },
  { icon: Mail, label: "E-mail", value: siteConfig.email },
  { icon: MapPin, label: "Endereço", value: siteConfig.address }
];
