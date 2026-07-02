import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Star, Sparkles, Wind, ShieldCheck, Quote, ChevronRight, MessageSquare, PawPrint } from 'lucide-react';
import { REVIEWS } from '../data';
import { Review } from '../types';

export default function Vibe() {
  const [reviews, setReviews] = useState<Review[]>(REVIEWS);
  const [author, setAuthor] = useState('');
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Load reviews from localStorage if available
  useEffect(() => {
    const saved = localStorage.getItem('angelina_reviews');
    if (saved) {
      try {
        setReviews(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleSubmitReview = (e: FormEvent) => {
    e.preventDefault();
    if (!author || !reviewText) return;

    const newReview: Review = {
      id: Date.now().toString(),
      author,
      rating,
      text: reviewText,
      source: 'Cliente Feliz',
      date: 'Hoy mismo'
    };

    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem('angelina_reviews', JSON.stringify(updatedReviews));

    // Reset form
    setAuthor('');
    setReviewText('');
    setRating(5);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setShowForm(false);
    }, 2500);
  };

  const features = [
    {
      icon: Wind,
      title: 'Fresca Brisa Serrana',
      description: 'Ubicados en la zona alta de Guayabos, nuestra terraza ofrece un ambiente abierto y ventilado perfecto para escapar del calor.'
    },
    {
      icon: PawPrint,
      title: 'Terraza 100% Pet Friendly',
      description: '¡Tus peluditos son más que bienvenidos! Nuestra terraza abierta cuenta con tazones de agua fresca y un ambiente cómodo para que disfruten contigo.'
    },
    {
      icon: Sparkles,
      title: 'Repostería Fina',
      description: 'Cada postre y plato es preparado bajo estándares de alta calidad, seleccionando ingredientes frescos y de temporada.'
    },
    {
      icon: ShieldCheck,
      title: 'Atención Ágil y Cálida',
      description: 'Nuestra prioridad es tu comodidad. Platos listos en menos de 20 minutos con la hospitalidad y el cariño de un negocio familiar.'
    }
  ];

  return (
    <section id="terraza" className="py-24 bg-white border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Vibe Presentation Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-stone-900 border-b border-black pb-0.5 inline-block text-[10px] font-sans font-bold uppercase tracking-[0.3em]">
              Nuestra Terraza
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
              Un Refugio de Paz y Frescura en Guayabos
            </h2>
            <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed">
              Angelina Café nace con el deseo de ofrecer un espacio de encuentro y relajación. Nuestra terraza abierta, adornada con plantas y diseñada con tonos cálidos y de madera, es el escenario idóneo para una tarde de lectura, una reunión de negocios relajada, un brunch familiar o una velada especial de fin de semana. Además, somos un espacio **100% Pet Friendly**, por lo que tus compañeros de cuatro patas siempre recibirán agua fresca y una cálida bienvenida.
            </p>
            <p className="text-stone-600 text-sm font-light leading-relaxed">
              Aquí, el tiempo transcurre más despacio mientras disfrutas de una taza de café negro profundo, servido exactamente como debe ser, acompañado por los deliciosos aromas de nuestra repostería fina recién salida del horno.
            </p>
 
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              <div className="border-l border-black pl-4">
                <span className="block font-serif text-3xl font-bold text-stone-900">5 ★</span>
                <span className="block text-[10px] text-stone-500 font-sans font-bold uppercase tracking-wider mt-1">Calificación</span>
              </div>
              <div className="border-l border-black pl-4">
                <span className="block font-serif text-3xl font-bold text-stone-900">&lt;20 min</span>
                <span className="block text-[10px] text-stone-500 font-sans font-bold uppercase tracking-wider mt-1">Tiempo de Espera</span>
              </div>
              <div className="border-l border-black pl-4">
                <span className="block font-serif text-3xl font-bold text-stone-900">100%</span>
                <span className="block text-[10px] text-stone-500 font-sans font-bold uppercase tracking-wider mt-1">Artesanal</span>
              </div>
            </div>
          </div>

          {/* Features Column */}
          <div className="lg:col-span-5">
            <div className="bg-[#FAF9F6] p-8 sm:p-10 rounded-none border border-black/5 space-y-8">
              {features.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="bg-stone-900 text-[#FAF9F6] p-2.5 rounded-none flex-shrink-0">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-bold text-stone-900 mb-1">
                        {feat.title}
                      </h4>
                      <p className="text-stone-600 text-xs font-light leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="border-t border-black/10 pt-20">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-stone-900 border-b border-black pb-0.5 inline-block text-[10px] font-sans font-bold uppercase tracking-[0.3em] mb-3">
                Opiniones Reales
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-950 tracking-tight">
                Lo que dicen de Angelina Café
              </h3>
            </div>
            
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-black hover:bg-stone-800 text-[#FAF9F6] text-[10px] font-sans font-bold px-6 py-3.5 rounded-none transition-all duration-300 inline-flex items-center space-x-2 uppercase tracking-widest"
            >
              <MessageSquare className="h-4 w-4" />
              <span>{showForm ? 'Ver Opiniones' : 'Escribir Reseña'}</span>
            </button>
          </div>

          <AnimatePresence mode="wait">
            {showForm ? (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-[#FAF9F6] border border-black/5 p-8 sm:p-10 rounded-none max-w-xl mx-auto mb-16"
              >
                <h4 className="font-serif text-xl font-bold text-stone-900 mb-6 text-center">
                  Cuéntanos tu experiencia
                </h4>

                {isSubmitted ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="bg-stone-100 text-stone-900 h-12 w-12 rounded-none flex items-center justify-center mx-auto text-xl font-bold border border-black/10">
                      ✓
                    </div>
                    <h5 className="text-stone-900 font-bold text-base font-serif">¡Muchísimas gracias!</h5>
                    <p className="text-stone-600 text-xs font-light">
                      Tu opinión es muy valiosa para nosotros y ayuda a otros clientes a descubrir Angelina Café.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitReview} className="space-y-4">
                    <div>
                      <label className="block text-[10px] font-sans font-bold text-stone-700 uppercase tracking-widest mb-1.5">
                        Tu Nombre
                      </label>
                      <input
                        type="text"
                        required
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        placeholder="Carolina Brenes"
                        className="w-full bg-white border border-stone-300 rounded-none px-4 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-black"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-sans font-bold text-stone-700 uppercase tracking-widest mb-1.5">
                        Calificación (Estrellas)
                      </label>
                      <div className="flex space-x-1.5 mt-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setRating(star)}
                            className="p-1 hover:scale-110 transition-transform"
                          >
                            <Star
                              className={`h-5 w-5 ${
                                star <= rating
                                  ? 'text-stone-900 fill-stone-900'
                                  : 'text-stone-300'
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-sans font-bold text-stone-700 uppercase tracking-widest mb-1.5">
                        Tu Reseña
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        placeholder="¿Qué tal estuvo la terraza, la atención y la comida? Cuéntanos..."
                        className="w-full bg-white border border-stone-300 rounded-none p-4 text-xs text-stone-900 focus:outline-none focus:border-black transition-all resize-none font-light leading-relaxed"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-black hover:bg-stone-800 text-[#FAF9F6] font-sans font-bold py-3.5 rounded-none text-[10px] uppercase tracking-widest transition-colors mt-2"
                    >
                      Enviar Reseña
                    </button>
                  </form>
                )}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {reviews.map((rev) => (
                  <div
                    key={rev.id}
                    className="bg-white border border-black/5 p-5 rounded-none flex flex-col justify-between shadow-sm relative group hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="absolute top-4 right-6 text-stone-900/5 pointer-events-none">
                      <Quote className="h-8 w-8" />
                    </div>

                    <div>
                      {/* Review Photo */}
                      {rev.image && (
                        <div className="relative aspect-video w-full overflow-hidden mb-4 bg-stone-100 border border-black/5">
                          <img
                            src={rev.image}
                            alt={`Reseña de ${rev.author}`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      )}

                      {/* Rating Stars */}
                      <div className="flex text-stone-900 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${
                              i < rev.rating ? 'fill-stone-900 text-stone-900' : 'text-stone-200'
                            }`}
                          />
                        ))}
                      </div>

                      <p className="text-stone-700 text-xs font-light leading-relaxed mb-6 font-serif italic">
                        "{rev.text}"
                      </p>
                    </div>

                    <div className="border-t border-black/5 pt-4 flex items-center justify-between mt-auto">
                      <div>
                        <h5 className="font-serif font-bold text-xs text-stone-950">{rev.author}</h5>
                        <span className="text-[9px] text-stone-500 uppercase tracking-wider font-sans font-semibold">
                          {rev.source}
                        </span>
                      </div>
                      <span className="text-[9px] text-stone-400 font-mono">{rev.date}</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
