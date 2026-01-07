
import React from 'react';
import { ShieldCheck, Target, Users, BookOpen, Award, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      <SEO 
        title="Sobre a VerifiCar Assessoria | Especialistas em CNH" 
        description="Conheça a VerifiCar Assessoria, especializada em processos administrativos de CNH, com foco em legalidade, transparência e atendimento humano."
      />

      {/* Hero */}
      <section className="bg-black text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full gold-gradient opacity-10 blur-3xl"></div>
        <div className="container mx-auto px-4 text-center space-y-6 relative z-10">
          <h1 className="text-5xl lg:text-7xl font-black tracking-tighter">
            Especialistas em <span className="text-gold italic">Leis de Trânsito</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A VerifiCar Assessoria nasceu para trazer transparência e agilidade na resolução de problemas burocráticos com a CNH, sempre pautada pela ética e legalidade.
          </p>
        </div>
      </section>

      {/* Story & Values */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-gold font-bold uppercase tracking-widest text-sm">Nossa História</h2>
              <h3 className="text-4xl lg:text-5xl font-black text-black tracking-tight">Comprometidos com seu direito de dirigir</h3>
              <div className="prose prose-lg text-gray-600">
                <p>
                  Somos uma assessoria especializada em regularização de CNH, atuando com responsabilidade, transparência e profundo respeito às normas do Detran-SP e legislações federais de trânsito.
                </p>
                <p>
                  Nossa equipe é formada por especialistas em processos administrativos que entendem a importância da CNH na vida profissional e pessoal dos cidadãos. Por isso, oferecemos um atendimento humano e individualizado.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                {[
                  { icon: <Target className="text-gold" />, title: "Missão", text: "Prover assessoria jurídica-administrativa ágil e confiável." },
                  { icon: <ShieldCheck className="text-gold" />, title: "Valores", text: "Transparência total, ética e foco no resultado legal." },
                ].map((item, i) => (
                  <div key={i} className="space-y-3">
                    <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
               <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-gold/20 bg-gray-100 relative group">
                 <img 
                    src="https://images.unsplash.com/photo-1615563164538-89e1da13fcc4?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Motorista brasileiro ao volante com CNH regularizada" 
                    className="w-full h-[600px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1615563164538-89e1da13fcc4?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
                    }}
                 />
                 <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                 {/* Decorative Badge Overlay */}
                 <div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full border border-gold flex items-center gap-2 shadow-lg">
                    <CheckCircle className="text-gold" size={16} />
                    <span className="text-[10px] font-black uppercase text-black tracking-widest">CNH REGULARIZADA</span>
                 </div>
               </div>
               <div className="absolute -bottom-8 -left-8 bg-gold text-black p-8 rounded-3xl shadow-2xl hidden md:block border-4 border-black">
                  <div className="flex items-center gap-4">
                     <Award size={48} />
                     <div>
                        <span className="block text-3xl font-black leading-none">100%</span>
                        <span className="text-sm font-bold uppercase tracking-widest">Atuação Legal</span>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CNH Detail Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
               <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src="https://images.unsplash.com/photo-1600320254374-ce2d293c324e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Mão segurando CNH brasileira regularizada" 
                    className="w-full h-[400px] object-cover"
                  />
               </div>
               <div className="absolute -top-6 -right-6 bg-black text-gold p-4 rounded-2xl shadow-xl">
                  <ShieldCheck size={32} />
               </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h3 className="text-4xl font-black text-black leading-tight">Sua habilitação em mãos, sem medos</h3>
              <p className="text-lg text-gray-600">
                Nosso trabalho é garantir que você tenha a tranquilidade de portar seu documento regularizado. Atuamos em cada detalhe do processo administrativo para que a sua única preocupação seja o seu destino.
              </p>
              <ul className="space-y-4">
                 {[
                   "Análise técnica de prontuário",
                   "Defesas fundamentadas na lei",
                   "Acompanhamento em tempo real",
                   "Foco total na manutenção do direito de dirigir"
                 ].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 font-bold text-gray-800">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                      {item}
                   </li>
                 ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-black">Por que confiar na VerifiCar?</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Diferenciais que nos tornam referência em assessoria de trânsito.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Users />, title: "Suporte Personalizado", desc: "Cada caso é único. Estudamos sua pontuação e histórico para encontrar a melhor via administrativa." },
              { icon: <BookOpen />, title: "Especialistas em Leis", desc: "Atualização constante sobre resoluções do CONTRAN e Detran-SP para garantir defesas fundamentadas." },
              { icon: <CheckCircle />, title: "Resultado Garantido", desc: "Não prometemos milagres, prometemos transparência e o máximo esforço legal em cada processo." },
            ].map((feature, i) => (
              <div key={i} className="text-center space-y-6 group">
                <div className="w-20 h-20 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto group-hover:bg-gold group-hover:text-black transition-all duration-300">
                  {React.cloneElement(feature.icon as React.ReactElement, { size: 36 })}
                </div>
                <h4 className="text-2xl font-bold">{feature.title}</h4>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call */}
      <section className="py-24 bg-gray-50 text-center">
        <div className="container mx-auto px-4 space-y-8">
          <h2 className="text-4xl font-black text-black">Conheça nosso método de trabalho</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A transparência começa no primeiro contato. Clique abaixo e tire suas dúvidas sobre como podemos ajudar você a regularizar sua CNH.
          </p>
          <div className="flex justify-center">
             <a
              href={`https://wa.me/5513997180273`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-gold px-12 py-6 rounded-2xl font-black text-2xl hover:scale-105 transition-transform shadow-xl"
            >
              Falar com a Equipe
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
