
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { SITE_CONFIG } from '../constants';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contato', path: '/contato' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo SVG */}
          <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
            <Logo className="h-16" variant="white" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-gold ${
                  isActive(link.path) ? 'text-gold' : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-yellow-600 text-black px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105"
            >
              Falar com Especialista
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
              aria-label="Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 text-base font-semibold border-b border-gray-900 ${
                  isActive(link.path) ? 'text-gold' : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 bg-gold text-black px-6 py-4 rounded-xl text-lg font-bold"
              >
                <span>Falar no WhatsApp</span>
                <ChevronRight size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
