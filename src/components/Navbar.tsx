import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { getWhatsAppLink } from '../utils/constants';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';

const navLinks = [
  { name: 'Início', href: '#inicio' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Experiência', href: '#experiencia' },
  { name: 'Serviços', href: '#servicos' }, // Actually mapped together in section 3 but keeping link
  { name: 'Condomínios', href: '#condominios' },
  { name: 'Diferenciais', href: '#diferenciais' },
  { name: 'Contato', href: '#contato' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const presentationMessage = 'Olá, Raphael. Gostaria de conhecer sua proposta de administração condominial.';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/90 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#inicio" className="group">
            <Logo className="group-hover:opacity-80 transition-opacity" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-slate-700 hover:text-amber-600 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={getWhatsAppLink(presentationMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold py-2.5 px-5 rounded-full transition-all hover:shadow-lg hover:shadow-amber-500/20 text-sm"
            >
              Solicitar apresentação
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-slate-600"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 right-0 bg-white shadow-xl lg:hidden border-b border-slate-100"
          >
            <div className="flex justify-between items-center p-4 border-b border-slate-100">
              <span className="text-xl font-bold text-slate-900">Seven Condomínios</span>
              <button
                className="p-2 text-slate-600"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Fechar menu"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="p-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-slate-700 py-2 border-b border-slate-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href={getWhatsAppLink(presentationMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 text-slate-900 font-semibold py-3 px-5 rounded-lg text-center mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Solicitar apresentação
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
