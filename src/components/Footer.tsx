import { Coffee, MapPin, Phone, Instagram, ArrowUp } from 'lucide-react';
import { CAFE_INFO } from '../data';

interface FooterProps {
  onNavClick: (sectionId: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  const handleScrollTop = () => {
    onNavClick('inicio');
  };

  return (
    <footer className="bg-[#1A1A1A] text-stone-400 py-16 border-t border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Logo Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-white/10 text-white p-2.5 rounded-none">
                <Coffee className="h-4.5 w-4.5" />
              </div>
              <div>
                <span className="block font-serif text-lg font-bold tracking-wide text-white leading-tight">
                  Angelina
                </span>
                <span className="block text-[9px] font-sans font-bold tracking-[0.2em] text-stone-400 uppercase -mt-0.5">
                  Café & Terraza
                </span>
              </div>
            </div>
            <p className="text-stone-500 text-xs font-light leading-relaxed">
              Un refugio de frescura, brisa y repostería artesanal en las alturas de Guayabos de Curridabat. Visítanos y descubre por qué nuestra terraza es tan especial.
            </p>
          </div>

          {/* Quick Nav Column */}
          <div>
            <h4 className="text-white text-[10px] font-sans font-bold uppercase tracking-widest mb-5">
              Navegación
            </h4>
            <ul className="space-y-3 text-xs font-light">
              <li>
                <button onClick={() => onNavClick('inicio')} className="hover:text-white transition-colors text-stone-400">
                  Inicio
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('terraza')} className="hover:text-white transition-colors text-stone-400">
                  Nuestra Terraza
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('reservas')} className="hover:text-white transition-colors text-stone-400">
                  Reservar una Mesa
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('ubicacion')} className="hover:text-white transition-colors text-stone-400">
                  Ubicación & Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Contact details */}
          <div>
            <h4 className="text-white text-[10px] font-sans font-bold uppercase tracking-widest mb-5">
              Contacto
            </h4>
            <ul className="space-y-3.5 text-xs font-light">
              <li className="flex items-start space-x-2.5">
                <MapPin className="h-4 w-4 text-stone-400 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {CAFE_INFO.address}
                </span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="h-4 w-4 text-stone-400 flex-shrink-0" />
                <a href={`tel:${CAFE_INFO.phone.replace('-', '')}`} className="hover:text-white transition-colors text-stone-400">
                  {CAFE_INFO.phone}
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Instagram className="h-4 w-4 text-stone-400 flex-shrink-0" />
                <a href="https://instagram.com/angelinacafecr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-stone-400">
                  {CAFE_INFO.instagram}
                </a>
              </li>
            </ul>
          </div>

          {/* Open Hours */}
          <div>
            <h4 className="text-white text-[10px] font-sans font-bold uppercase tracking-widest mb-5">
              Horario Comercial
            </h4>
            <ul className="space-y-2.5 text-xs font-light text-stone-400">
              <li className="flex justify-between">
                <span>Lun - Jue:</span>
                <span className="text-white font-medium">{CAFE_INFO.schedule.monThu}</span>
              </li>
              <li className="flex justify-between">
                <span>Vie - Sáb:</span>
                <span className="text-white font-medium">{CAFE_INFO.schedule.friSat}</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo:</span>
                <span className="text-white font-medium">{CAFE_INFO.schedule.sun}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="border-t border-white/10 pt-8 mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-stone-500">
          <div>
            <span>© {new Date().getFullYear()} Angelina Café, Guayabos. Todos los derechos reservados.</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href={CAFE_INFO.mapsLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-stone-500">
              Google Maps
            </a>
            <button
              onClick={handleScrollTop}
              className="bg-[#2A2A2A] hover:bg-white hover:text-[#1A1A1A] text-stone-400 p-2.5 rounded-none transition-all"
              title="Volver Arriba"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
