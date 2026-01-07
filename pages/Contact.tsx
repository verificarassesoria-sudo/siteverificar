
import React from 'react';
import { MessageCircle, Phone, Mail, MapPin, Clock, Calendar, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '../constants';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="Contato | VerifiCar Assessoria - Regularize sua CNH" 
        description="Fale com a VerifiCar Assessoria pelo WhatsApp e tire suas dúvidas sobre CNH suspensa, cassada ou reciclagem. Atendimento rápido e personalizado."
      />

      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-black tracking-tight mb-4 uppercase">Fale Conosco</h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">Atendimento especializado e humano para resolver suas pendências com a CNH de forma 100% online.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info Col */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-black text-black">Canais de Atendimento</h2>
                <p className="text-gray-600">Priorizamos o atendimento via WhatsApp para garantir rapidez no envio de documentos e análise técnica de casos em todo o Brasil.</p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone className="text-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-black mb-1">WhatsApp e Telefone</h4>
                    <p className="text-gray-600 font-medium">{SITE_CONFIG.whatsapp}</p>
                    <p className="text-xs text-gray-400 uppercase font-bold mt-1 tracking-widest">Seg a Sex, das 9h às 18h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Mail className="text-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-black mb-1">E-mail</h4>
                    <p className="text-gray-600 font-medium">{SITE_CONFIG.email}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="text-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-black mb-1">Atendimento</h4>
                    <p className="text-gray-600 font-medium">{SITE_CONFIG.address}</p>
                    <p className="text-xs text-gray-400 mt-1">Atuação Nacional via Detran-SP e outros órgãos</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 space-y-4">
                <h4 className="font-bold flex items-center gap-2">
                  <Clock size={18} className="text-gold" />
                  Horário de Suporte Online
                </h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span>Segunda a Sexta</span>
                    <span className="font-bold">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábados e Domingos</span>
                    <span className="text-gray-400">Plantão Online</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Col */}
            <div className="bg-black text-white p-10 lg:p-16 rounded-[40px] shadow-2xl flex flex-col justify-center text-center space-y-8 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gold"></div>
               <div className="space-y-4 relative z-10">
                  <div className="w-20 h-20 bg-[#25D366] text-white rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                    <MessageCircle size={48} />
                  </div>
                  <h3 className="text-4xl font-black tracking-tight">Análise Técnica Online</h3>
                  <p className="text-gray-400 text-lg">
                    Envie uma mensagem agora e receba orientações personalizadas sobre seu caso em poucos minutos.
                  </p>
               </div>
               
               <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-black py-6 rounded-2xl font-black text-2xl hover:scale-105 transition-transform flex items-center justify-center gap-3 relative z-10 shadow-[0_10px_40px_rgba(212,175,55,0.4)]"
              >
                <span>Falar com Especialista</span>
              </a>
              
              <div className="pt-8 grid grid-cols-2 gap-4 text-xs font-bold uppercase tracking-widest text-gray-500 relative z-10">
                 <div className="flex items-center justify-center gap-2">
                   <Calendar size={14} />
                   <span>Análise em 24h</span>
                 </div>
                 <div className="flex items-center justify-center gap-2">
                   <ShieldCheck size={14} />
                   <span>Dados Protegidos</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
