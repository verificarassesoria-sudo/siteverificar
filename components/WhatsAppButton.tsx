
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../constants';

const WhatsAppButton: React.FC = () => {
  return (
    <>
      {/* Mobile Fixed CTA Bottom */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 md:hidden z-50">
        <a
          href={SITE_CONFIG.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2 w-full bg-[#25D366] text-white py-4 rounded-xl font-bold text-lg shadow-lg active:scale-95 transition-transform"
        >
          <MessageCircle size={24} />
          <span>Falar no WhatsApp Agora</span>
        </a>
      </div>

      {/* Desktop Floating Button */}
      <a
        href={SITE_CONFIG.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform items-center justify-center z-50 group"
        title="Falar no WhatsApp"
      >
        <MessageCircle size={32} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 font-bold">
          Dúvidas? Chame aqui!
        </span>
      </a>
    </>
  );
};

export default WhatsAppButton;
