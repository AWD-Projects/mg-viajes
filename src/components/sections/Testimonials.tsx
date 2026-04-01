"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const testimonials = [
  {
    quote:
      "Viajes MG transformó completamente nuestra idea de lo que puede ser un viaje por México. Cada detalle de nuestro recorrido por Oaxaca estuvo perfectamente curado. Nunca habíamos comido tan bien ni dormido en lugares tan especiales.",
    name: "Sofía R.",
    city: "Ciudad de México",
    destination: "Oaxaca",
    initial: "S",
  },
  {
    quote:
      "Llevamos a toda la familia a Mérida y fue un viaje sin estrés de principio a fin. Los asesores conocen exactamente qué es adecuado para niños y qué actividades realmente valen la pena. Regresamos más unidos que nunca.",
    name: "Carlos M.",
    city: "Monterrey",
    destination: "Mérida y Yucatán",
    initial: "C",
  },
  {
    quote:
      "Organizamos un viaje de empresa a Puerto Escondido para 25 personas. La logística fue impecable: traslados, hospedaje, actividades. Todo funcionó a la perfección. El equipo de Viajes MG es genuinamente profesional.",
    name: "Andrea V.",
    city: "Guadalajara",
    destination: "Puerto Escondido",
    initial: "A",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
  };

  const t = testimonials[current];

  return (
    <section className="py-24 md:py-32 bg-[#0A0A08]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-[#C8A96E] mb-4">Testimonios</p>
          <h2 className="font-serif font-light text-4xl md:text-5xl text-[#F5F0E8]">
            Lo que dicen nuestros viajeros
          </h2>
        </motion.div>

        {/* Testimonial card */}
        <div className="relative overflow-hidden min-h-[280px] flex items-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full text-center px-4 md:px-12"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#C8A96E] text-lg">★</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-serif font-light text-xl md:text-2xl text-[#F5F0E8] italic leading-relaxed mb-8">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#C8A96E] flex items-center justify-center text-[#0A0A08] font-serif font-medium text-lg">
                  {t.initial}
                </div>
                <div className="text-left">
                  <p className="text-[#F5F0E8] text-sm font-medium">{t.name}</p>
                  <p className="text-xs uppercase tracking-widest text-[#6B6455]">
                    {t.city} · {t.destination}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={prev}
            className="w-10 h-10 border border-[rgba(200,169,110,0.3)] flex items-center justify-center text-[#6B6455] hover:text-[#C8A96E] hover:border-[#C8A96E] transition-all duration-300"
            aria-label="Anterior"
          >
            <ChevronLeftIcon className="w-4 h-4" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className={`transition-all duration-300 ${
                  i === current
                    ? "w-6 h-px bg-[#C8A96E]"
                    : "w-2 h-px bg-[rgba(200,169,110,0.3)] hover:bg-[rgba(200,169,110,0.6)]"
                }`}
                aria-label={`Ir al testimonio ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 border border-[rgba(200,169,110,0.3)] flex items-center justify-center text-[#6B6455] hover:text-[#C8A96E] hover:border-[#C8A96E] transition-all duration-300"
            aria-label="Siguiente"
          >
            <ChevronRightIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
