import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MapPin, Clock, Instagram, ChevronDown } from 'lucide-react';
import { CAFE_INFO } from '../data';

export default function Contact() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: '¿Tienen opciones sin gluten o vegetarianas?',
      a: '¡Sí! Ofrecemos ensaladas frescas y platos que se pueden adaptar a tus preferencias de dieta. Consulta a nuestro personal para conocer las opciones y variaciones disponibles.'
    },
    {
      q: '¿Es un lugar pet-friendly (amigable con mascotas)?',
      a: '¡Por supuesto! En Angelina Café amamos a las mascotas. Nuestra terraza abierta es 100% pet-friendly, ideal para que vengas acompañado por tus perritos u otros compañeros de cuatro patas. ¡Siempre les ofrecemos agua fresca!'
    },
    {
      q: '¿Se necesita hacer reservación obligatoria?',
      a: 'No es obligatoria, pero sí muy recomendada para los fines de semana en las tardes (brunch y café de 3:00 PM a 6:00 PM) debido a la alta afluencia para disfrutar del atardecer en la terraza.'
    },
    {
      q: '¿Tienen parqueo disponible?',
      a: 'Sí, contamos con espacios de parqueo para clientes y también hay espacio seguro disponible frente al local y en la zona comercial aledaña.'
    }
  ];

  return (
    <section id="ubicacion" className="py-24 bg-white border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Info & Maps Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
          
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-stone-900 border-b border-black pb-0.5 inline-block text-[10px] font-sans font-bold uppercase tracking-[0.3em] mb-4">
                Ubicación & Horarios
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight leading-tight mb-6">
                Te Esperamos con la Brisa de Guayabos
              </h2>
              <p className="text-stone-600 text-sm font-light leading-relaxed mb-8">
                Estamos ubicados en una de las partes más frescas de Curridabat, Costa Rica. Pasa por aquí a pasar la tarde o disfrutar de un exquisito almuerzo en nuestra terraza.
              </p>
            </div>

            {/* Quick Details List */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-[#FAF9F6] text-stone-900 p-2.5 border border-black/5 flex-shrink-0 mt-0.5">
                  <MapPin className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-sans font-bold uppercase tracking-widest text-stone-400 mb-1">Dirección Exacta</h4>
                  <p className="text-stone-800 text-xs sm:text-sm font-light leading-relaxed">
                    {CAFE_INFO.address}
                  </p>
                  <a
                    href={CAFE_INFO.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-900 hover:text-stone-600 text-[10px] font-sans font-bold uppercase tracking-wider inline-flex items-center space-x-1 mt-2 underline"
                  >
                    <span>Abrir en Google Maps</span>
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#FAF9F6] text-stone-900 p-2.5 border border-black/5 flex-shrink-0 mt-0.5">
                  <Clock className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-sans font-bold uppercase tracking-widest text-stone-400 mb-1.5">Horarios de Apertura</h4>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 text-xs text-stone-800">
                    <span className="font-medium text-stone-500">Lunes a Jueves:</span>
                    <span>{CAFE_INFO.schedule.monThu}</span>
                    <span className="font-medium text-stone-500">Viernes y Sábado:</span>
                    <span>{CAFE_INFO.schedule.friSat}</span>
                    <span className="font-medium text-stone-500">Domingo:</span>
                    <span>{CAFE_INFO.schedule.sun}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#FAF9F6] text-stone-900 p-2.5 border border-black/5 flex-shrink-0 mt-0.5">
                  <Phone className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-sans font-bold uppercase tracking-widest text-stone-400 mb-1">Contacto Directo</h4>
                  <p className="text-stone-800 text-xs sm:text-sm">
                    Teléfono: <a href={`tel:${CAFE_INFO.phone.replace('-', '')}`} className="hover:text-stone-600 underline font-medium">{CAFE_INFO.phone}</a>
                  </p>
                  <p className="text-stone-800 text-xs sm:text-sm mt-1.5 flex items-center">
                    <Instagram className="h-4 w-4 mr-1 text-stone-600" />
                    <span>Instagram: </span>
                    <a href={`https://instagram.com/angelinacafecr`} target="_blank" rel="noopener noreferrer" className="hover:text-stone-600 ml-1 underline font-medium">{CAFE_INFO.instagram}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Google Map Iframe */}
          <div className="lg:col-span-7 h-[400px] lg:h-[480px] bg-stone-100 rounded-none overflow-hidden border border-black/10 shadow-sm relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.2238421870634!2d-84.01889348520306!3d9.9266544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e1343a80bcf3%3A0x2541a54fa6aa9654!2sAngelina%20Caf%C3%A9!5e0!3m2!1ses!2scr!4v1719782800000!5m2!1ses!2scr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Angelina Café Google Maps Location"
              className="absolute inset-0"
            />
          </div>

        </div>

        {/* FAQs & Contact Message Section */}
        <div className="max-w-3xl mx-auto border-t border-black/10 pt-20">
          
          {/* FAQ Accordion */}
          <div className="text-center mb-10">
            <span className="text-stone-900 border-b border-black pb-0.5 inline-block text-[10px] font-sans font-bold uppercase tracking-[0.3em] mb-3">
              Dudas Comunes
            </span>
            <h3 className="font-serif text-3xl font-bold text-stone-950 tracking-tight">
              Preguntas Frecuentes
            </h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#FAF9F6] border border-black/5 rounded-none overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-stone-100/50 transition-colors focus:outline-none"
                  >
                    <span className="font-serif text-base font-bold text-stone-900 pr-4">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`h-4.5 w-4.5 text-stone-500 transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? 'rotate-180 text-stone-900' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-6 pb-6 pt-1 text-xs font-light text-stone-600 leading-relaxed border-t border-black/5">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
