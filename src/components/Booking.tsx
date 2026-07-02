import { motion } from 'motion/react';
import { Phone, Clock, CalendarDays, ShieldCheck, MessageSquare } from 'lucide-react';
import { CAFE_INFO } from '../data';

export default function Booking() {
  const cleanPhone = CAFE_INFO.phone.replace('-', '');

  return (
    <section id="reservas" className="py-24 bg-[#FAF9F6] border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto">
          
          {/* Reservation Card */}
          <div className="bg-white p-8 sm:p-12 rounded-none border border-black/5 shadow-xl shadow-black/5 text-center relative">
            
            <div className="mb-10">
              <span className="text-stone-900 border-b border-black pb-0.5 inline-block text-[10px] font-sans font-bold uppercase tracking-[0.3em] mb-3">
                Reservaciones
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-stone-950 tracking-tight">
                Asegura tu Mesa en la Terraza
              </h3>
              <p className="text-stone-500 text-xs font-light mt-3 max-w-md mx-auto leading-relaxed tracking-wide">
                En Angelina Café gestionamos todas nuestras reservaciones de manera personalizada vía telefónica para garantizarte la mejor ubicación y atención.
              </p>
            </div>

            {/* Direct Phone Call Button Area */}
            <div className="my-12 p-8 bg-stone-50 border border-black/5 rounded-none max-w-lg mx-auto">
              <span className="block text-[10px] font-sans font-bold text-stone-500 uppercase tracking-widest mb-2">
                Línea Directa de Reservas
              </span>
              
              <a 
                href={`tel:${cleanPhone}`}
                className="inline-flex items-center justify-center space-x-3 text-2xl sm:text-3xl font-serif font-bold text-stone-950 hover:text-[#4A5D4E] transition-colors my-2 tracking-tight group"
              >
                <Phone className="h-6 w-6 text-stone-800 group-hover:text-[#4A5D4E] group-hover:scale-110 transition-all" />
                <span>{CAFE_INFO.phone}</span>
              </a>

              <p className="text-[11px] text-stone-500 font-light mt-3">
                Toca el número para llamar directamente desde tu celular.
              </p>

              <div className="mt-8">
                <a
                  href={`tel:${cleanPhone}`}
                  className="bg-black hover:bg-stone-900 text-[#FAF9F6] text-[11px] font-sans font-bold px-10 py-4.5 rounded-none uppercase tracking-[0.2em] transition-all inline-block w-full sm:w-auto"
                >
                  Llamar para Reservar
                </a>
              </div>

              {/* WhatsApp Reservation */}
              <div className="mt-8 pt-8 border-t border-stone-200">
                <span className="block text-[10px] font-sans font-bold text-[#3B6643] uppercase tracking-widest mb-2">
                  ¿Prefieres reservar por escrito?
                </span>
                <p className="text-stone-500 text-[11px] font-light mb-4 max-w-xs mx-auto leading-relaxed">
                  Escríbenos directamente para coordinar tu mesa o consultarnos cualquier detalle de tu visita.
                </p>
                <a
                  href={`https://wa.me/506${cleanPhone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20ba5a] text-white text-[11px] font-sans font-bold px-8 py-4 rounded-none uppercase tracking-[0.2em] transition-all inline-flex items-center justify-center space-x-2 w-full sm:w-auto"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Escribir por WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Practical information grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-stone-100 text-left">
              <div className="space-y-1.5">
                <div className="flex items-center space-x-2 text-stone-800">
                  <Clock className="h-4 w-4 text-[#4A5D4E]" />
                  <span className="text-[10px] font-sans font-bold uppercase tracking-wider">Mejor Horario</span>
                </div>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  Te sugerimos llamar durante nuestro horario de atención para confirmación inmediata.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center space-x-2 text-stone-800">
                  <CalendarDays className="h-4 w-4 text-[#4A5D4E]" />
                  <span className="text-[10px] font-sans font-bold uppercase tracking-wider">Anticipación</span>
                </div>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  Recomendamos reservar con 24-48 horas de anticipación, especialmente para fines de semana.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center space-x-2 text-stone-800">
                  <ShieldCheck className="h-4 w-4 text-[#4A5D4E]" />
                  <span className="text-[10px] font-sans font-bold uppercase tracking-wider">Eventos & Grupos</span>
                </div>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  ¿Celebras un cumpleaños o vienes con un grupo grande? Indícanos al llamar para preparar la mesa ideal.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
