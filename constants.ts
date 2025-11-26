
import { Scenario } from './types';

export const GLOBAL_CONTEXT = `
CONTEXTO GLOBAL:
Você é o motor de Inteligência Artificial da plataforma "NeoVendas".
HIERARQUIA:
1. O FUNDADOR/CEO da NeoVendas é Yehuda Michanie. Ele é o visionário do negócio.
2. O DESENVOLVEDOR (Dev) que criou este site/código é "o benba". Se perguntarem quem fez o site, diga "o benba".
Seu objetivo é educar, treinar e ajudar vendedores e empreendedores.
Nunca mencione que você é "Gemini" ou do Google. Você é a IA da NeoVendas.
`;

export const SCENARIOS: Scenario[] = [
  {
    id: 'roberto',
    name: 'Venda Imobiliária',
    description: 'Cliente de alto padrão, cético e focado em preço. Ótimo para treinar contorno de objeções.',
    persona: 'Roberto',
    systemInstruction: `
      ${GLOBAL_CONTEXT}
      CONTEXTO ESPECÍFICO: Roleplay imobiliário.
      PERSONA: Roberto, cliente interessado em imóvel de R$ 3 milhões. Cético, analítico, acha tudo caro.
      REGRAS: Seja curto e duro. Lance objeções de preço.
      FORMATO: Resposta do Roberto --- Feedback Técnico (comece com 🎓).
    `
  },
  {
    id: 'steve',
    name: 'Mentoria Estratégica',
    description: 'Um CEO experiente do Vale do Silício. Tire dúvidas sobre seu negócio, pitch ou estratégia.',
    persona: 'Steve',
    systemInstruction: `
      ${GLOBAL_CONTEXT}
      CONTEXTO ESPECÍFICO: Mentoria de Negócios.
      PERSONA: Steve, CEO com 30 anos de mercado. Método socrático (responde com perguntas).
      REGRAS: Desafie premissas. Foque em ROI e escala.
      FORMATO: Resposta do Steve --- Dica de Leitura/Framework (comece com 📚).
    `
  },
  {
    id: 'julia',
    name: 'Entrevista & Salário',
    description: 'Gerente de RH difícil. Tente negociar um aumento ou fechar uma proposta de emprego.',
    persona: 'Julia',
    systemInstruction: `
      ${GLOBAL_CONTEXT}
      CONTEXTO ESPECÍFICO: Negociação Salarial/RH.
      PERSONA: Julia, Head de RH. Orçamento apertado.
      REGRAS: Diga que o budget está fechado. Só ceda com argumentos de valor.
      FORMATO: Resposta da Julia --- Análise de Postura (comece com 💼).
    `
  },
  {
    id: 'secretary',
    name: 'Cold Call (Gatekeeper)',
    description: 'A secretária que não deixa você falar com o dono. Seu objetivo é passar por ela.',
    persona: 'Amanda',
    systemInstruction: `
      ${GLOBAL_CONTEXT}
      CONTEXTO ESPECÍFICO: Prospecção Fria (Telefone).
      PERSONA: Amanda, secretária ocupada blindando o chefe.
      REGRAS: Seja dismissiva ("Mande email"). Exija urgência para passar a ligação.
      FORMATO: Resposta da Amanda --- Nota da Abordagem (0-10) (comece com 📞).
    `
  }
];

export const HERO_EXAMPLES = [
    {
        persona: "Roberto",
        role: "Investidor Imobiliário",
        tag: "Objeção de Preço",
        userMsg: "O valor está atrelado ao retorno que esse imóvel vai trazer em 2 anos.",
        aiMsg: "Retorno é promessa. Eu vejo o hoje. Me prove que não estou pagando o ágio da construtora.",
        feedback: "Ótima tentativa de ancoragem futura, mas o cliente é analítico. Use dados comparativos agora.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80"
    },
    {
        persona: "Julia",
        role: "Head de RH",
        tag: "Negociação",
        userMsg: "Acredito que meus resultados no último trimestre justificam o ajuste de 15%.",
        aiMsg: "Resultados passados são obrigação. O que você vai entregar de novo para justificar esse custo extra?",
        feedback: "Ela te colocou na parede. Foque em projetos futuros e responsabilidades novas, não apenas no passado.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
    },
    {
        persona: "Amanda",
        role: "Secretária Executiva",
        tag: "Gatekeeper",
        userMsg: "É sobre uma parceria que vai reduzir os custos fiscais da empresa.",
        aiMsg: "Todo mundo promete reduzir custo. O Sr. Carlos não atende sem agendamento prévio.",
        feedback: "Muito genérico. Use um 'Gancho de Autoridade' ou cite um concorrente que vocês atendem.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80"
    }
];

export const NAV_LINKS = [
  { label: 'Home', value: 'home' },
  { label: 'O App', value: 'product' },
  { label: 'Quem Sou', value: 'about' },
  { label: 'Depoimentos', value: 'testimonials' },
  { label: 'Planos', value: 'business' },
];

export const NOTIFICATION_USERS = [
  { name: "Lucas Silva", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80" },
  { name: "Mariana Costa", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80" },
  { name: "Rafael Santos", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80" },
  { name: "Beatriz Oliveira", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80" },
  { name: "Tiago Souza", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80" },
  { name: "Fernanda Lima", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80" },
  { name: "Bruno Alves", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80" },
  { name: "Camila Rocha", img: "https://images.unsplash.com/photo-1554151228-14d9def656ec?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80" },
];

export const NOTIFICATION_ACTIONS = [
  "adquiriu o Plano Trimestral (Oferta)",
  "começou o teste grátis",
  "assinou o Plano Mensal",
  "renovou a assinatura",
  "upgrade para Plano Business",
  "acabou de fechar uma venda treinando"
];

// LISTA EXPANDIDA PARA PARECER "INFINITA" E CONVINCENTE
export const TESTIMONIALS_DATA = [
  {
    name: "Carlos Eduardo",
    role: "Dono de Agência de Marketing",
    content: "Meus SDRs queimavam leads o dia todo. Eles não sabiam qualificar. Coloquei todos no NeoVendas por 20min todo dia. Resultado: O CAC caiu 40% porque paramos de gastar tempo com curioso. A IA ensinou eles a fazerem as perguntas certas.",
    insight: "Redução brutal do Custo de Aquisição (CAC).",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Ana Paula",
    role: "Fundadora SaaS B2B",
    content: "Eu precisava apresentar meu pitch para investidores e estava travada. Usei o cenário 'Mentoria Estratégica' e a IA destruiu meus argumentos fracos. Refiz tudo. Na reunião real, levantei R$ 500k de investimento.",
    insight: "Validação de Pitch de Investimento sem riscos.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Ricardo Mendes",
    role: "Diretor Comercial (Imobiliária)",
    content: "Contratei para treinar 15 corretores juniores. O custo de perder leads reais com vendedores despreparados era alto demais. A NeoVendas é o 'sandbox' onde eles podem errar à vontade antes de atender um cliente de alto padrão.",
    insight: "Onboarding acelerado de novos vendedores.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Fernanda Lima",
    role: "Dropshipping & E-commerce",
    content: "Eu vendo mentoria de dropshipping e tinha muita dificuldade em fechar no 1 a 1 no WhatsApp. O cliente pedia desconto e eu cedia. O app me ensinou a ancorar valor. Hoje meu ticket médio subiu de R$ 97 para R$ 497.",
    insight: "Aumento de Ticket Médio através de autoridade.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "João Victor",
    role: "Freelancer (Copywriter)",
    content: "Sou muito bom escrevendo, mas péssimo negociando meus contratos. Sempre aceitava valor baixo. Treinei negociação com a persona 'Julia' e aprendi a justificar meu preço. Fechei um contrato de R$ 5k ontem.",
    insight: "Essencial para freelancers que não sabem cobrar.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Patrícia Souza",
    role: "Dona de Loja de Roupas",
    content: "Minhas vendedoras tinham vergonha de oferecer peças adicionais (upsell). Coloquei elas para treinar 'venda agregada' no app. No mês seguinte, o faturamento da loja cresceu 15% só vendendo acessórios junto.",
    insight: "Técnica de Cross-sell e Upsell para varejo.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Marcelo Vega",
    role: "Corretor de Seguros",
    content: "Seguro é chato de vender. O cliente sempre foge. Usei a IA para testar novas abordagens de quebra de gelo. Descobri uma frase que aumenta a retenção na ligação em 200%.",
    insight: "Testes A/B de discurso sem queimar leads reais.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Beatriz Mello",
    role: "Gerente de Contas (TI)",
    content: "Eu tinha muita dificuldade em pedir aumento e renegociar contratos anuais. Treinei com a persona 'Julia (RH)' e entendi como ancorar meu valor antes de falar de preço. Fechei um contrato 30% maior semana passada.",
    insight: "Desenvolvimento de soft skills corporativas.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Felipe Andrade",
    role: "Closer High Ticket",
    content: "Vendo infoprodutos de R$ 5.000. O cliente sempre diz 'vou falar com minha esposa'. O app me deu 5 scripts diferentes para contornar isso sem ser chato. Minha conversão de boletos explodiu.",
    insight: "Contorno de objeções clássicas de High Ticket.",
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Larissa Dias",
    role: "Representante Farmacêutica",
    content: "Tenho 2 minutos para falar com médicos. O app me ensinou a ser concisa e impactante. O feedback da IA sobre minha 'prolixidade' foi um tapa na cara que eu precisava.",
    insight: "Aprimoramento de pitch curto e direto.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Roberto Campos",
    role: "Dono de Concessionária",
    content: "Coloquei meus 5 vendedores para usar. O fechamento de carros aumentou porque eles pararam de gaguejar na hora de oferecer o financiamento. O app tira o medo do 'não'.",
    insight: "Treinamento escalável para equipes de varejo.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Juliana Paes",
    role: "Arquiteta Autônoma",
    content: "Odeio cobrar cliente. O app me treinou a passar o preço com confiança e a não dar desconto na primeira objeção. Recuperei o investimento na assinatura no primeiro projeto.",
    insight: "Empoderamento comercial para profissionais liberais.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "André Gomes",
    role: "Infoprodutor (Lançamentos)",
    content: "No debriefing do lançamento, percebi que meu suporte perdia vendas no chat por demora. Treinei o suporte com a NeoVendas para responder objeções rápido. Recuperamos R$ 40k em carrinhos abandonados.",
    insight: "Recuperação de vendas em lançamentos digitais.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Cláudia Ramos",
    role: "Consultora Natura/Avon",
    content: "Parece bobo, mas eu tinha vergonha de cobrar as clientes que deviam. O app me ajudou a ter conversas difíceis sem perder a amizade. Diminui minha inadimplência em 80%.",
    insight: "Gestão de cobrança e relacionamento.",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656ec?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Pedro Henrique",
    role: "Desenvolvedor Freelancer",
    content: "Eu sou dev, não vendedor. Mas precisava vender meus sites. O app me ensinou a não falar 'technês' (código) e falar de 'negócio' (lucro). Agora fecho projetos muito mais caros.",
    insight: "Tradução de linguagem técnica para comercial.",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Sérgio Moro",
    role: "Advogado Trabalhista",
    content: "Captar clientes na advocacia é delicado. Usei o app para treinar o atendimento inicial do meu escritório. A conversão de consultas gratuitas para contratos pagos dobrou.",
    insight: "Conversão em serviços profissionais éticos.",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Mariana Ximenes",
    role: "Cerimonialista",
    content: "Noivas são clientes emocionais e estressadas. O app me ajudou a lidar com crises e noivas 'bridezillas'. Me sinto muito mais segura para acalmar e fechar contratos de casamentos caros.",
    insight: "Gestão de clientes emocionais.",
    image: "https://images.unsplash.com/photo-1581403341630-a6e0b9d2d9ca?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Rogério Ceni",
    role: "Gestor de Tráfego",
    content: "Eu entregava resultado mas o cliente cancelava (churn). Descobri no app que eu não sabia fazer o 'resell' mensal dos resultados. Aprendi a apresentar relatórios de forma vendedora.",
    insight: "Retenção de clientes (LTV) para prestadores de serviço.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  }
];
