import { motion } from 'motion/react';
import { ArrowRight, MapPin, Sparkles, Star } from 'lucide-react';
import { CAFE_INFO } from '../data';

interface HeroProps {
  onActionClick: (sectionId: string) => void;
}

export default function Hero({ onActionClick }: HeroProps) {
  // We use the direct high-res Google Maps photo requested by the user
  const heroImage = 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEoTV-4_hh_1JzLNHda4dclE2Qlk7M-vpAWX_eFx5i5cC60qj_1TC4OF4T3T5eVm5zSqawRvgovhpQnjq7zKuvAeHvPLSzxoEi-zvBiovEutYV6yptDXFTTH_6YCxAxfHeTQkqqWQ=s1600';

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stone-900 pt-20">
      {/* Background Image with elegant zoom effect */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1.0, opacity: 0.45 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          src={heroImage}
          alt="Angelina Café Terraza"
          className="w-full h-full object-cover object-center filter brightness-90"
          referrerPolicy="no-referrer"
        />
        {/* Subtle, beautiful gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-transparent to-stone-950/20" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center md:text-left w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-8 lg:col-span-7">
            {/* Location Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 mb-6"
            >
              <MapPin className="h-3.5 w-3.5 text-stone-300" />
              <span className="text-[10px] font-sans font-bold tracking-[0.25em] uppercase text-white">
                Guayabos de Curridabat
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-6"
            >
              El sabor de encontrarse en las alturas de <span className="font-serif italic text-stone-300 font-normal">Curri</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-stone-300 text-sm sm:text-base font-light tracking-wide leading-relaxed max-w-2xl mb-10"
            >
              Disfruta de una tarde fresca y una brisa espectacular en nuestra hermosa terraza al aire libre. Café de especialidad, brunch artesanal y repostería fina con el cariño y sabor de casa.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
            >
              <button
                onClick={() => onActionClick('terraza')}
                className="w-full sm:w-auto bg-white hover:bg-transparent text-black hover:text-white border border-white font-sans font-bold text-[11px] tracking-[0.25em] uppercase px-8 py-4.5 transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <span>Ver la Terraza</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => onActionClick('reservas')}
                className="w-full sm:w-auto bg-transparent hover:bg-white text-white hover:text-black border border-white/35 font-sans font-bold text-[11px] tracking-[0.25em] uppercase px-8 py-4.5 transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <span>Reservar Mesa</span>
              </button>
            </motion.div>

            {/* Quick Badges / Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-12 flex flex-wrap items-center justify-center md:justify-start gap-6 border-t border-white/10 pt-8"
            >
              <div className="flex items-center space-x-2">
                <span className="text-stone-300 text-[10px] font-sans font-bold tracking-[0.2em] uppercase">
                  TERRAZA ABIERTA
                </span>
              </div>
              <div className="h-[1px] w-6 bg-stone-700 hidden sm:block" />
              <div className="flex items-center space-x-2 text-stone-300 text-[10px] font-sans font-bold tracking-[0.2em] uppercase">
                <Sparkles className="h-3.5 w-3.5 text-stone-300" />
                <span>ESPECIALIDAD & ALMUERZOS</span>
              </div>
            </motion.div>
          </div>

          {/* Quick Review Showcase Card */}
          <div className="md:col-span-4 lg:col-span-5 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="bg-black/40 backdrop-blur-md border border-white/10 p-8 rounded-none relative shadow-2xl"
            >
              <div className="absolute -top-4 -left-4 bg-[#4A5D4E] text-[#FAF9F6] text-[10px] font-sans font-bold px-4 py-2 uppercase tracking-widest flex items-center space-x-1.5 shadow">
                <Star className="h-3 w-3 fill-current" />
                <span>RECOMENDADO</span>
              </div>
              
              <div className="text-stone-400 text-[10px] font-sans font-bold tracking-[0.2em] uppercase mb-4 pt-2 flex items-center justify-between">
                <span>Crítica Gastronómica</span>
                <span className="text-stone-300 underline">El Sartén Caliente</span>
              </div>
              
              <p className="text-[#FAF9F6] font-serif italic text-base leading-relaxed mb-6">
                "Lo que llama mucho la atención apenas se llega es su terraza, que nos permite disfrutar de una vista hermosa desde esa parte alta de Curri... el pollo caribeño sumamente jugoso, y un queque de amapola excelente con café."
              </p>
              
              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-white/10 text-white h-8 w-8 flex items-center justify-center font-sans font-semibold text-xs">
                    ESC
                  </div>
                  <div>
                    <h4 className="text-white text-[11px] font-sans font-bold tracking-[0.1em] uppercase leading-none">Crítico Local</h4>
                    <span className="text-stone-400 text-[9px] font-sans uppercase tracking-wider">El Sartén Caliente</span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-stone-400 bg-white/5 px-2 py-1">2026</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center">
        <span className="text-stone-400 text-[9px] font-sans font-bold tracking-[0.3em] uppercase mb-2">
          DESCUBRE MÁS
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="h-8 w-4 rounded-none border border-stone-500 flex items-start justify-center p-1"
        >
          <div className="h-2 w-[1.5px] bg-white" />
        </motion.div>
      </div>
    </section>
  );
}
