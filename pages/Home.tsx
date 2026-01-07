
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Star, Clock, ShieldCheck, User } from 'lucide-react';
import { SERVICES, SITE_CONFIG, getIcon } from '../constants';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      <SEO 
        title="VerifiCar Assessoria | Regularização de CNH com Segurança e Dentro da Lei" 
        description="Assessoria especializada em CNH suspensa, cassada, reabilitação, reciclagem e pontuação. Atendimento humano e suporte completo no Detran-SP."
      />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-10 pb-20 bg-black overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full gold-gradient opacity-5 blur-3xl transform translate-x-1/2 -skew-x-12"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 gold-gradient opacity-10 blur-3xl rounded-full"></div>

        <div className="container mx-auto px-4 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
              <div className="inline-flex items-center space-x-2 bg-gold/10 border border-gold/20 text-gold px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
                <ShieldCheck size={16} />
                <span>Assessoria Administrativa Especializada</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight tracking-tighter">
                Regularize sua <span className="text-gold italic">CNH</span> com segurança e tranquilidade
              </h1>
              <p className="text-xl text-gray-400 max-w-xl leading-relaxed">
                Atendimento rápido, humano e totalmente dentro da lei. Recupere seu direito de dirigir sem complicações burocráticas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-gold text-black px-8 py-5 rounded-xl font-black text-lg shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all hover:-translate-y-1"
                >
                  <span>Falar no WhatsApp</span>
                  <ArrowRight size={20} />
                </a>
                <Link
                  to="/sobre"
                  className="flex items-center justify-center px-8 py-5 rounded-xl font-bold text-white border border-gray-700 hover:bg-gray-900 transition-all"
                >
                  Conhecer a VerifiCar
                </Link>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
                {[
                  { icon: <Clock className="text-gold" />, text: "Atuação Administrativa" },
                  { icon: <CheckCircle2 className="text-gold" />, text: "Conforme Detran-SP" },
                  { icon: <User className="text-gold" />, text: "Atendimento Humano" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-sm text-gray-400 font-medium">
                    {item.icon}
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="hidden lg:block relative animate-in fade-in zoom-in-95 duration-1000">
               <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-gold/30 shadow-2xl">
                 <img 
                    src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800" 
                    alt="Visão do motorista na estrada" 
                    className="w-full grayscale brightness-75 hover:grayscale-0 transition-all duration-700 cursor-pointer object-cover h-[500px]"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                 <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-black/60 backdrop-blur-md p-6 rounded-xl border border-gold/40">
                      <p className="text-white font-bold italic text-xl leading-tight text-center">
                        "Sua CNH é sua liberdade. Especialistas em regularização para você não perder o direito de dirigir."
                      </p>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-gold font-bold uppercase tracking-widest text-sm">Nossos Serviços</h2>
            <h3 className="text-4xl lg:text-5xl font-black text-black tracking-tight">Soluções Completas para sua CNH</h3>
            <p className="text-gray-600 text-lg">
              Identifique o seu problema e deixe a burocracia com quem entende. Atuamos em todas as frentes administrativas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <Link 
                key={service.id}
                to={`/servicos/${service.slug}`}
                className="group p-10 rounded-[40px] bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col items-start relative overflow-hidden"
              >
                {/* Icon in Black Rounded Box as per image */}
                <div className="w-16 h-16 bg-black text-gold rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {getIcon(service.icon)}
                </div>
                
                <h4 className="text-2xl font-black text-black mb-4 group-hover:text-gold transition-colors">{service.title}</h4>
                <p className="text-gray-500 mb-8 leading-relaxed text-sm font-medium">
                  {service.description}
                </p>
                
                <div className="mt-auto flex items-center space-x-2 text-gold font-black uppercase tracking-widest text-xs">
                  <span>Saiba Mais</span>
                  <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Rest of sections remain... */}
      {/* ... (How it Works, Testimonials, CTA) ... */}
      
      {/* How it Works */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-gold font-bold uppercase tracking-widest text-sm">Passo a Passo</h2>
              <h3 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight">
                Simples, Transparente e 100% Digital
              </h3>
              <p className="text-gray-400 text-lg">
                Você não precisa sair de casa. Nossa assessoria é focada em agilidade através do atendimento digital via WhatsApp.
              </p>
              
              <div className="space-y-10 pt-6">
                {[
                  { step: "01", title: "Consulta Online", desc: "Envie sua dúvida ou pontuação e fazemos uma análise preliminar imediata." },
                  { step: "02", title: "Análise Jurídica", desc: "Nossa equipe avalia as melhores estratégias administrativas dentro da lei." },
                  { step: "03", title: "Execução do Processo", desc: "Cuidamos de toda a papelada e prazos junto ao Detran para você." },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="text-4xl font-black text-gold/20 select-none">{item.step}</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <div className="bg-gold p-1 rounded-[40px]">
                <div className="bg-white text-black p-10 lg:p-14 rounded-[40px] space-y-8">
                  <h4 className="text-3xl font-black">Por que a VerifiCar?</h4>
                  <ul className="space-y-6">
                    {[
                      "Sem promessas impossíveis: Honestidade acima de tudo.",
                      "Acompanhamento direto via WhatsApp com especialistas.",
                      "Domínio total das normas do Detran-SP.",
                      "Milhares de reais economizados em multas indevidas."
                    ].map((benefit, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <CheckCircle2 className="text-black shrink-0" />
                        <span className="font-bold text-gray-800">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={SITE_CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-black text-gold py-6 rounded-2xl font-black text-xl hover:bg-gray-900 transition-colors shadow-2xl"
                  >
                    Quero Consultar Agora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-4xl font-black text-black mb-16">O que dizem nossos clientes</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {[
                { name: "Carlos Silva", role: "Motorista App", text: "Minha CNH estava suspensa por pontos. A VerifiCar me orientou perfeitamente sobre a reciclagem e hoje já estou dirigindo novamente." },
                { name: "Amanda Lopes", role: "Vendedora", text: "Profissionalismo exemplar. Tiraram todas as minhas dúvidas sobre a cassação e iniciamos o processo de reabilitação com pé no chão." },
                { name: "Roberto Lima", role: "Empresário", text: "Excelente atendimento. Resolveram minha pontuação acumulada de forma transparente e rápida. Recomendo muito!" },
              ].map((t, i) => (
                <div key={i} className="bg-white p-10 rounded-[32px] shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-xl transition-shadow">
                  <div>
                    <div className="flex text-gold mb-6">
                      {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                    </div>
                    <p className="text-gray-600 italic leading-relaxed mb-6">"{t.text}"</p>
                  </div>
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-400">
                      {t.name[0]}
                    </div>
                    <div>
                      <h5 className="font-black text-black">{t.name}</h5>
                      <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">{t.role}</span>
                    </div>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gold">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl lg:text-7xl font-black text-black tracking-tighter">
            Não perca o seu direito de dirigir
          </h2>
          <p className="text-xl text-black/80 font-bold max-w-2xl mx-auto">
            Fale agora com um especialista em CNH e tenha uma análise detalhada da sua situação. 
          </p>
          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-black text-white px-12 py-7 rounded-3xl font-black text-2xl shadow-2xl hover:scale-105 transition-transform"
          >
            <span>Consultar Agora</span>
            <ArrowRight size={28} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
