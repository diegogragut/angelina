import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Coffee, MapPin, Phone } from 'lucide-react';
import { CAFE_INFO } from '../data';

interface HeaderProps {
  onNavClick: (sectionId: string) => void;
  activeSection: string;
}

export default function Header({ onNavClick, activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'terraza', label: 'Nuestra Terraza' },
    { id: 'reservas', label: 'Reservaciones' },
    { id: 'ubicacion', label: 'Contacto' },
  ];

  const handleItemClick = (id: string) => {
    onNavClick(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#FAF9F6]/95 backdrop-blur-md py-3 border-b border-black/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleItemClick('inicio')}
            className="flex items-center space-x-3 text-left group"
          >
            <div className="bg-black text-[#FAF9F6] p-2 transition-transform group-hover:rotate-12">
              <Coffee className="h-5 w-5" />
            </div>
            <div>
              <span className="block font-serif text-2xl font-bold tracking-wide text-[#1A1A1A] leading-tight">
                Angelina
              </span>
              <span className="block text-[10px] font-sans font-bold tracking-[0.3em] text-[#1A1A1A] uppercase -mt-0.5 border-b border-black pb-0.5">
                CAFÉ & TERRAZA
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`text-[11px] font-sans font-medium tracking-[0.2em] uppercase transition-colors relative py-1 ${
                  activeSection === item.id
                    ? 'text-black font-bold'
                    : 'text-stone-600 hover:text-black'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-black"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href={`tel:${CAFE_INFO.phone.replace('-', '')}`}
              className="flex items-center text-[11px] font-sans font-bold tracking-widest uppercase text-stone-600 hover:text-black transition-colors"
            >
              <Phone className="h-3.5 w-3.5 mr-1.5" />
              {CAFE_INFO.phone}
            </a>
            <a
              href={CAFE_INFO.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-[#FAF9F6] hover:text-black border border-black text-white text-[11px] font-sans font-bold tracking-[0.15em] uppercase px-5 py-2.5 transition-all inline-flex items-center space-x-1.5 shadow-none"
            >
              <MapPin className="h-3.5 w-3.5" />
              <span>Cómo Llegar</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#1A1A1A] hover:text-black focus:outline-none p-1.5"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#FAF9F6] border-b border-black/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`block w-full text-left px-4 py-3 text-xs font-sans font-bold tracking-[0.2em] uppercase transition-colors ${
                    activeSection === item.id
                      ? 'bg-black text-[#FAF9F6]'
                      : 'text-stone-600 hover:bg-stone-100 hover:text-black'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-black/10 flex flex-col space-y-3 px-3">
                <a
                  href={`tel:${CAFE_INFO.phone.replace('-', '')}`}
                  className="flex items-center text-xs font-sans font-bold tracking-[0.2em] uppercase text-stone-600"
                >
                  <Phone className="h-4 w-4 mr-2 text-stone-900" />
                  {CAFE_INFO.phone}
                </a>
                <a
                  href={CAFE_INFO.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black hover:bg-[#FAF9F6] hover:text-black border border-black text-white text-xs font-sans font-bold tracking-[0.2em] uppercase py-3.5 transition-colors flex items-center justify-center space-x-1.5 shadow-none"
                >
                  <MapPin className="h-4 w-4" />
                  <span>Ver en Google Maps</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
