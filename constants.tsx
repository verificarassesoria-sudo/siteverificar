
import React from 'react';
import { Shield, FileWarning, RefreshCcw, UserCheck, AlertTriangle } from 'lucide-react';
import { ServiceContent, SiteConfig, BlogPostData } from './types';

export const SITE_CONFIG: SiteConfig = {
  name: "VerifiCar Assessoria",
  whatsapp: "(13) 99718-0273",
  whatsappUrl: "https://wa.me/5513997180273",
  address: "Somente atendimento on-line",
  email: "verificarassesoria@gmail.com"
};

export const BLOG_POSTS: BlogPostData[] = [
  {
    title: "Exame Toxicológico 2025: Multas e Suspensão Automática",
    slug: "exame-toxicologico-2025-multas",
    excerpt: "O Detran-SP iniciou a fiscalização automática para motoristas das categorias C, D e E que não realizaram o exame periódico. Saiba como regularizar.",
    date: "15 de Março, 2025",
    category: "Notícias 2025",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <div className="space-y-6 text-gray-700">
        <p>Em 2025, o sistema do RENACH está integrado diretamente com os laboratórios credenciados. A ausência do exame toxicológico periódico gera uma multa de balcão de natureza gravíssima (multiplicada por 5), totalizando R$ 1.467,35, além da suspensão do direito de dirigir por 3 meses.</p>
        <h3 className="text-2xl font-bold text-black">Como evitar a suspensão?</h3>
        <p>A VerifiCar Assessoria orienta que o motorista verifique a validade do seu exame diretamente no app CDT. Caso o prazo tenha vencido, o recurso administrativo é a única forma de tentar anular a penalidade automática caso haja falhas na notificação.</p>
      </div>
    )
  },
  {
    title: "CNH Suspensa ou Cassada? Entenda as principais diferenças",
    slug: "cnh-suspensa-ou-cassada-diferencas",
    excerpt: "Muitos condutores confundem os dois termos, mas as consequências e prazos são bem diferentes. Saiba qual o seu caso.",
    date: "12 de Março, 2025",
    category: "Educação",
    image: "https://images.unsplash.com/photo-1578041262130-633307b3bfd6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <div className="space-y-6 text-gray-700">
        <p>A <strong>suspensão</strong> é temporária (de 6 a 12 meses) e ocorre por excesso de pontos ou multas auto-suspensivas. Já a <strong>cassação</strong> é a penalidade mais grave, onde o condutor perde o direito de dirigir por 2 anos e precisa refazer todo o processo de habilitação.</p>
        <p>Identificar corretamente em qual fase seu processo se encontra é crucial para a estratégia de defesa. Na VerifiCar, analisamos seu prontuário gratuitamente para indicar o caminho correto.</p>
      </div>
    )
  },
  {
    title: "Limite de Pontos na CNH 2025: A regra dos 40 pontos",
    slug: "limite-pontos-cnh-2025-40-pontos",
    excerpt: "Entenda como funciona a gradação de pontos (20, 30 or 40) e evite ter o seu direito de dirigir suspenso este ano.",
    date: "05 de Março, 2025",
    category: "Legislação",
    image: "https://images.unsplash.com/photo-1593035013811-2db9b3c36980?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <div className="space-y-6 text-gray-700">
        <p>A lei atual prevê que o limite de pontos varia conforme a quantidade de infrações gravíssimas cometidas nos últimos 12 meses:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>40 pontos:</strong> Se não houver nenhuma infração gravíssima.</li>
          <li><strong>30 pontos:</strong> Se houver uma infração gravíssima.</li>
          <li><strong>20 pontos:</strong> Se houver duas ou mais infrações gravíssimas.</li>
        </ul>
        <p>Motoristas profissionais (EAR) têm a vantagem de manter o limite de 40 pontos independente das infrações, mas devem ficar atentos aos cursos preventivos de reciclagem.</p>
      </div>
    )
  },
  {
    title: "Reabilitação de CNH: O Guia para voltar a dirigir legalmente",
    slug: "guia-reabilitacao-cnh-cassada",
    excerpt: "Teve a CNH cassada? Saiba como funciona o processo de reabilitação e quais são os prazos obrigatórios.",
    date: "28 de Fevereiro, 2025",
    category: "Serviços",
    image: "https://images.unsplash.com/photo-1516862523118-a3724eb136d7?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <div className="space-y-6 text-gray-700">
        <p>A reabilitação é o processo necessário para quem teve a CNH cassada. Após cumprir os 24 meses de punição, o condutor deve realizar exames médico, psicotécnico, prova teórica e prática.</p>
        <p>Nossa assessoria ajuda no agendamento, conferência de documentação e orientação sobre os prazos para que você não perca nenhum dia a mais longe do volante.</p>
      </div>
    )
  },
  {
    title: "Nova Lei do Insulfilm 2025: O que mudou na fiscalização",
    slug: "nova-lei-insulfilm-2025",
    excerpt: "As novas regras de transmitância luminosa estão mais rígidas. Vidros laterais e para-brisa estão na mira dos novos medidores eletrônicos.",
    date: "10 de Fevereiro, 2025",
    category: "Legislação",
    image: "https://images.unsplash.com/photo-1729687082180-fe026bf34df4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <div className="space-y-6 text-gray-700">
        <p>A partir de 2025, a tolerância para bolhas no para-brisa e a transmitância luminosa mínima foi atualizada pelo CONTRAN. Agora, a fiscalização utiliza medidores de alta precisão que não permitem margens de erro.</p>
        <p>Dirigir com o vidro fora das normas gera multa grave, 5 pontos na CNH e retenção do veículo para regularização. Se você foi autuado indevidamente ou o agente não utilizou o aparelho homologado, nossa assessoria pode analisar o auto de infração para cancelamento.</p>
      </div>
    )
  },
  {
    title: "Digitalização de Recursos de Trânsito no Brasil",
    slug: "digitalizacao-recursos-transito",
    excerpt: "A defesa contra multas e suspensões agora é 100% digital. Entenda como o processo administrativo se tornou mais ágil em 2025.",
    date: "02 de Fevereiro, 2025",
    category: "Assessoria Digital",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <div className="space-y-6 text-gray-700">
        <p>O Brasil consolidou em 2025 a digitalização total do sistema de trânsito. Isso significa que as defesas administrativas ganharam agilidade, mas também exigem maior precisão técnica nos argumentos jurídicos.</p>
        <p>A VerifiCar Assessoria utiliza sistemas integrados para acompanhar cada movimentação do seu processo, garantindo que nenhum prazo seja perdido e que a legislação mais atualizada seja aplicada ao seu caso.</p>
      </div>
    )
  }
];

export const SERVICES: ServiceContent[] = [
  {
    id: 'suspension',
    slug: 'cnh-suspensa',
    title: "CNH Suspensa",
    h1: "CNH Suspensa: como resolver de forma legal",
    description: "Assessoria completa para quem atingiu o limite de pontos ou infrações mandatórias.",
    text: "A suspensão da CNH ocorre quando o condutor atinge o limite de pontos ou comete infrações específicas. A VerifiCar oferece suporte completo para análise do caso, orientação correta e acompanhamento do processo administrativo junto ao Detran-SP.",
    cta: "Consultar meu caso no WhatsApp",
    icon: "Shield",
    seo: {
      title: "CNH Suspensa: Entenda o Processo e Como Regularizar | VerifiCar",
      description: "Saiba o que fazer quando sua CNH está suspensa. Assessoria completa para acompanhamento do processo administrativo dentro da lei."
    }
  },
  {
    id: 'cassation',
    slug: 'cnh-cassada',
    title: "CNH Cassada",
    h1: "CNH Cassada: o que fazer agora?",
    description: "Orientações fundamentais para quem teve o direito de dirigir cassado.",
    text: "A cassação impede o condutor de dirigir por um período determinado. Após isso, é possível iniciar a reabilitação. Nossa equipe orienta cada etapa de forma clara e legal, garantindo que você siga os trâmites corretos do órgão de trânsito.",
    cta: "Falar com um especialista",
    icon: "FileWarning",
    seo: {
      title: "CNH Cassada: Assessoria para Reabilitação Legal | VerifiCar",
      description: "Entenda o que é cassação da CNH e como iniciar o processo correto de reabilitação conforme as regras do Detran."
    }
  },
  {
    id: 'rehabilitation',
    slug: 'reabilitacao-cnh',
    title: "Reabilitação",
    h1: "Reabilitação de CNH",
    description: "Processo para condutores cassados que desejam retornar à direção.",
    text: "A reabilitação é o caminho para quem teve a CNH cassada. Atuamos com transparência, explicando prazos, etapas e documentos necessários para que você recupere seu direito de dirigir de forma segura e oficial.",
    cta: "Iniciar reabilitação",
    icon: "UserCheck",
    seo: {
      title: "Reabilitação de CNH: Volte a Dirigir Dentro da Lei | VerifiCar",
      description: "Assessoria completa para reabilitação da CNH com acompanhamento administrativo e orientação segura."
    }
  },
  {
    id: 'recycling',
    slug: 'reciclagem-cnh',
    title: "Reciclagem",
    h1: "Reciclagem de CNH",
    description: "Orientação para o curso de reciclagem obrigatório em suspensões.",
    text: "O curso de reciclagem é uma exigência legal em casos de suspensão do direito de dirigir. A VerifiCar orienta todo o processo para evitar erros burocráticos e atrasos desnecessários na sua regularização.",
    cta: "Resolver agora",
    icon: "RefreshCcw",
    seo: {
      title: "Curso de Reciclagem de CNH: Orientação Completa | VerifiCar",
      description: "Saiba quando o curso de reciclagem é obrigatório e como regularizar sua situação sem complicações."
    }
  },
  {
    id: 'points',
    slug: 'pontuacao-cnh',
    title: "Pontuação",
    h1: "Pontuação da CNH",
    description: "Gestão e análise de pontos para evitar penalidades severas.",
    text: "Acompanhar a pontuação é essencial para evitar a suspensão. Nossa equipe avalia o histórico de infrações e orienta os próximos passos para manter sua habilitação regularizada e segura.",
    cta: "Consultar pontuação",
    icon: "AlertTriangle",
    seo: {
      title: "Pontuação na CNH: Como Evitar Suspensão | VerifiCar",
      description: "Veja como funciona o sistema de pontos da CNH e quando buscar assessoria especializada."
    }
  }
];

export const getIcon = (name: string) => {
  switch (name) {
    case 'Shield': return <Shield className="w-8 h-8" />;
    case 'FileWarning': return <FileWarning className="w-8 h-8" />;
    case 'UserCheck': return <UserCheck className="w-8 h-8" />;
    case 'RefreshCcw': return <RefreshCcw className="w-8 h-8" />;
    case 'AlertTriangle': return <AlertTriangle className="w-8 h-8" />;
    default: return <Shield className="w-8 h-8" />;
  }
};
