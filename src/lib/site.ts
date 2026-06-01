import {
  Cpu,
  Drill,
  Factory,
  Gauge,
  Handshake,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Timer,
  Wrench
} from "lucide-react";

const whatsappHref =
  "https://wa.me/5519993482165?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Tecnofusi%20e%20gostaria%20de%20solicitar%20um%20atendimento.";

export const siteConfig = {
  name: "Tecnofusi",
  url: "https://tecnofusi.com.br",
  description:
    "Fundição de alumínio coquilhado, ferramentas especiais, apoio técnico complementar e Loja Tecnofusi.",
  phonePrimary: "(19) 3455-5329",
  whatsapp: "(19) 99348-2165",
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
  { label: "Quem Somos", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Contato", href: "/contato" }
];

export const stats = [
  { value: "2011", label: "Experiência consolidada no mercado de fundição e metalurgia" },
  { value: "Fábrica Própria", label: "Controle total do processo produtivo e garantia de qualidade técnica" },
  { value: "Foco B2B", label: "Atendimento especializado para lotes industriais e projetos sob demanda" },
  { value: "Online", label: "Presença estratégica em canais de venda direta e marketplaces oficiais" }
];

export const services = [
  {
    icon: Factory,
    category: "Atividade principal",
    title: "Fundição de alumínio coquilhado",
    description:
      "Produção de peças em alumínio coquilhado para demandas industriais e produtos próprios, com controle técnico, repetibilidade e qualidade uniforme.",
    image: {
      src: "/images/site/servico-fundicao.png",
      alt: "Lingotes e forno em processo de fundição de alumínio coquilhado"
    },
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
  },
  {
    icon: Drill,
    category: "Ferramentas especiais",
    title: "Ferramentas para Motocicletas",
    description:
      "Referência na fabricação própria de ferramentas especiais para manutenção e performance desde 2014. Unimos nossa expertise em fundição e usinagem integrada para entregar soluções robustas, com alta precisão e durabilidade para o setor de duas rodas.",
    image: {
      src: "/images/site/revenda-motocicletas.jpg",
      alt: "Motocicleta diante de painel com ferramentas especiais"
    },
    bullets: ["Fabricação própria", "Alta precisão", "Duas rodas"],
    details:
      "Fabricação própria de ferramentas especiais para manutenção e performance no setor de duas rodas, com foco em precisão, durabilidade e aplicação real.",
    highlights: [
      "Ferramentas especiais",
      "Manutenção e performance",
      "Alta durabilidade",
      "Precisão dimensional"
    ]
  },
  {
    icon: Wrench,
    category: "Revenda",
    title: "Loja Tecnofusi",
    description:
      "Ferramentas para motocicletas e outros itens comerciais de revenda ficam nos canais da loja, com atendimento comercial e disponibilidade conforme estoque.",
    image: {
      src: "/images/site/loja-tecnofusi.jpg",
      alt: "Arte da Loja Tecnofusi com Mercado Livre, Shopee e canais oficiais"
    },
    bullets: ["Ferramentas para motocicletas", "Outros itens", "Loja oficial"],
    details:
      "A Loja Tecnofusi concentra a frente comercial de revenda: ferramentas para motocicletas quando disponíveis e outros itens anunciados pela empresa. Essa comunicação é separada da fabricação própria.",
    highlights: [
      "Linha comercial separada da produção",
      "Catálogo online",
      "Instagram e Facebook da loja",
      "Disponibilidade conforme estoque",
      "Compra por canais oficiais",
      "Sem vínculo com fabricação própria"
    ]
  }
];

export const differentiators = [
  {
    icon: ShieldCheck,
    title: "Rigor Técnico e Qualidade",
    description:
      "Processos padronizados com foco em consistência, rastreabilidade e eliminação de não-conformidades em demandas industriais."
  },
  {
    icon: Timer,
    title: "Pontualidade e Planejamento",
    description:
      "Execução orientada por um cronograma produtivo rígido, garantindo a previsibilidade que sua linha de montagem exige."
  },
  {
    icon: Gauge,
    title: "Excelência Operacional",
    description:
      "Infraestrutura otimizada para oferecer o melhor custo-benefício, mantendo o controle absoluto sobre cada etapa da fundição."
  },
  {
    icon: Handshake,
    title: "Engenharia Consultiva",
    description:
      "Atendimento técnico próximo para alinhar aplicação, ligas metálicas e tolerâncias ao contexto real de uso do produto."
  }
];

export const contactItems = [
  { icon: Phone, label: "Telefone", value: `${siteConfig.phonePrimary}` },
  { icon: MessageCircle, label: "WhatsApp", value: siteConfig.whatsapp },
  { icon: Mail, label: "E-mail", value: siteConfig.email },
  { icon: MapPin, label: "Endereço", value: siteConfig.address }
];
