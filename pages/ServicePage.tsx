
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ChevronRight, ArrowLeft, MessageSquare, ShieldCheck, HelpCircle } from 'lucide-react';
import { SERVICES, SITE_CONFIG, getIcon } from '../constants';
import SEO from '../components/SEO';

const ServicePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Busca síncrona para evitar o bug de redirecionamento no primeiro render
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <SEO title={service.seo.title} description={service.seo.description} />
      
      {/* Breadcrumb / Header */}
      <div className="bg-black text-white py-12 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full gold-gradient opacity-10 blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/" className="inline-flex items-center text-gold mb-8 hover:text-white transition-colors group">
            <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold">Voltar para o Início</span>
          </Link>
          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="w-20 h-20 bg-gold text-black rounded-3xl flex items-center justify-center shrink-0 shadow-2xl">
              {getIcon(service.icon)}
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-black tracking-tight">{service.h1}</h1>
              <p className="text-xl text-gray-400 max-w-2xl">
                Assessoria especializada e estratégica para {service.title.toLowerCase()}.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-8 relative z-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-3xl font-black text-black mb-8 border-b border-gray-100 pb-4">Entenda o Processo</h2>
              <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                <p className="leading-relaxed">
                  {service.text}
                </p>
                <div className="bg-gold/5 border-l-4 border-gold p-6 rounded-r-2xl">
                  <h4 className="text-black font-bold mb-2 flex items-center gap-2">
                    <ShieldCheck className="text-gold" />
                    Transparência é nossa base
                  </h4>
                  <p className="text-sm italic">
                    Lembramos que toda atuação da VerifiCar é de natureza administrativa, baseada na legislação vigente e normas do Código de Trânsito Brasileiro e resoluções do CONTRAN.
                  </p>
                </div>
                <h3 className="text-2xl font-black text-black pt-6">Por onde começar?</h3>
                <p>
                  O primeiro passo para regularizar sua habilitação é uma análise detalhada do histórico de condutor. Muitos motoristas desconhecem as possibilidades legais de defesa ou os prazos reais para reabilitação. 
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0">
                  {[
                    "Análise técnica de infrações",
                    "Acompanhamento de prazos",
                    "Orientação para defesa prévia",
                    "Suporte em instâncias administrativas"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                      <ChevronRight className="text-gold" size={18} />
                      <span className="font-semibold text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="bg-black text-white p-8 lg:p-12 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
               <div className="space-y-4">
                  <h3 className="text-3xl font-black tracking-tight">Pronto para resolver?</h3>
                  <p className="text-gray-400">Clique no botão e fale direto com um especialista agora mesmo.</p>
               </div>
               <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-black px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-2xl shrink-0"
              >
                {service.cta}
              </a>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-black text-black mb-6">Outros Serviços</h3>
              <div className="space-y-3">
                {SERVICES.filter(s => s.id !== service.id).map(s => (
                  <Link 
                    key={s.id} 
                    to={`/servicos/${s.slug}`}
                    className="flex items-center justify-between p-4 rounded-xl border border-gray-50 hover:border-gold hover:bg-gold/5 transition-all group"
                  >
                    <span className="font-bold text-gray-700">{s.title}</span>
                    <ChevronRight size={18} className="text-gray-300 group-hover:text-gold group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-gold/10 p-8 rounded-3xl border border-gold/20 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-black">
                  <HelpCircle size={28} />
                </div>
                <h3 className="text-xl font-black text-black">Dúvidas?</h3>
              </div>
              <p className="text-gray-700 font-medium">
                Se você não tem certeza de qual é o seu caso, não se preocupe. Nossa consulta inicial via WhatsApp ajuda a identificar exatamente o que você precisa.
              </p>
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-gray-900 transition-colors"
              >
                <MessageSquare size={18} />
                <span>Iniciar Chat</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
