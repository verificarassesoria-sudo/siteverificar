
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { SITE_CONFIG, SERVICES } from '../constants';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 pt-16 pb-24 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="mb-6 block text-left">
              <Logo className="h-20" variant="white" />
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Assessoria especializada em regularização de CNH. Atuação administrativa conforme as normas do Detran-SP com transparência e responsabilidade profissional.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-gold transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Serviços</h3>
            <ul className="space-y-4 text-sm">
              {SERVICES.map(service => (
                <li key={service.id}>
                  <Link to={`/servicos/${service.slug}`} className="hover:text-gold transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Institutional */}
          <div>
            <h3 className="text-white font-bold mb-6">Institucional</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/sobre" className="hover:text-gold transition-colors">Sobre Nós</Link></li>
              <li><Link to="/blog" className="hover:text-gold transition-colors">Blog Educativo</Link></li>
              <li><Link to="/contato" className="hover:text-gold transition-colors">Fale Conosco</Link></li>
              <li><Link to="/" className="hover:text-gold transition-colors">Política de Privacidade</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6">Contato</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-gold shrink-0" />
                <span>{SITE_CONFIG.whatsapp}</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-gold shrink-0" />
                <span>{SITE_CONFIG.email}</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-gold shrink-0" />
                <span>{SITE_CONFIG.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs space-y-4 md:space-y-0 text-center">
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Todos os direitos reservados.</p>
          <p>Atuação Administrativa - Empresa de Assessoria Profissional Independente.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
