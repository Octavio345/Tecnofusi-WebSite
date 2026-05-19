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

export const siteConfig = {
  name: "Tecnofusi",
  url: "https://tecnofusi.com.br",
  description:
    "Fundição de alumínio, usinagem CNC e desenvolvimento de ferramentas especiais para demandas industriais.",
  phonePrimary: "(19) 3455-5329",
  whatsapp: "(19) 99348-2165",
  whatsappHref:
    "https://wa.me/5519993482165?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Tecnofusi%20e%20gostaria%20de%20solicitar%20um%20atendimento.",
  email: "tecnofusi@tecnofusi.com.br",
  address: "Rua Bárbara Rosa Vital, 129 - Condomínio Cintec - Santa Bárbar d Oeste/SP - 13459-626",
  mapsQuery:
    "Rua%20B%C3%A1rbara%20Rosa%20Vital%2C%20129%20-%20Condom%C3%ADnio%20Cintec%20-%20Santa%20B%C3%A1rbara%20d%27Oeste%2FSP%20-%2013459-626",
  socials: {
    instagramFundidos: "https://www.instagram.com/tecnofusifundidos/",
    instagramMotocicletas: "https://www.instagram.com/tecnofusimotocicletas/",
    facebookFundidos: "https://www.facebook.com/tecnofusifundidos",
    facebookMotocicletas: "https://www.facebook.com/tecnofusimotocicletas",
    youtube: "https://www.youtube.com/@edvaldogallina9902",
    whatsapp:
      "https://wa.me/5519993482165?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Tecnofusi%20e%20gostaria%20de%20solicitar%20um%20atendimento."
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
  { value: "35+", label: "Equipamentos no parque fabril" },
  { value: "3", label: "Frentes técnicas principais" },
  { value: "B2B", label: "Atendimento industrial e terceirizado" }
];

export const services = [
  {
    icon: Factory,
    title: "Fundição de alumínio",
    description:
      "Peças fundidas por gravidade em alumínio com controle técnico, estabilidade dimensional e foco em qualidade uniforme.",
    bullets: ["Ligas de alumínio", "Projetos terceirizados", "Peças sob demanda"]
  },
  {
    icon: Cpu,
    title: "Usinagem industrial CNC",
    description:
      "Usinagem para pequenos e médios lotes, com tornos CNC, centros de usinagem e processos orientados por precisão.",
    bullets: ["Tornos CNC", "Centros verticais e horizontais", "Medição tridimensional"]
  },
  {
    icon: Wrench,
    title: "Ferramentas para motocicletas",
    description:
      "Desenvolvimento de ferramentas e equipamentos especiais para oficinas, manutenção e aplicações técnicas no setor de motocicletas.",
    bullets: ["Equipamentos especiais", "Soluções de melhoria", "Projetos consultivos"]
  },
  {
    icon: Drill,
    title: "Desenvolvimento técnico",
    description:
      "Parceria para aprimorar processos, adaptar componentes e viabilizar novos projetos de fundição, usinagem e ferramental.",
    bullets: ["Análise de viabilidade", "Apoio ao projeto", "Melhoria de processo"]
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
    title: "Parceria consultiva",
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
    title: "Expansão para ferramentas especiais",
    description:
      "Desenvolvimento de ferramentas e equipamentos para motocicletas, ampliando o portfólio técnico."
  },
  {
    year: "2017",
    title: "Reconhecimento por eficiência",
    description:
      "Consolidação da reputação por eficácia, prazo e fidelização de clientes industriais."
  },
  {
    year: "Hoje",
    title: "Indústria orientada por precisão",
    description:
      "Atuação integrada em fundição de alumínio, usinagem CNC e desenvolvimento técnico sob demanda."
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
