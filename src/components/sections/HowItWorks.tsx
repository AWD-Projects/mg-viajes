"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Cuéntanos tu viaje ideal",
    description: "15 min de llamada",
    detail: "Nos platicas a dónde quieres ir, con quién, qué te emociona y qué presupuesto tienes en mente.",
  },
  {
    number: "02",
    title: "Diseñamos tu itinerario",
    description: "Propuesta en 24h",
    detail: "Nuestros asesores diseñan un itinerario a la medida con hoteles, actividades y traslados curados.",
  },
  {
    number: "03",
    title: "Refinamos juntos",
    description: "Ajustes sin costo",
    detail: "Iteramos el itinerario hasta que esté perfecto. Sin cargos por cambios, sin letras pequeñas.",
  },
  {
    number: "04",
    title: "Viaja sin preocupaciones",
    description: "Soporte 24/7",
    detail: "Durante tu viaje, un asesor está disponible para cualquier cambio o emergencia.",
  },
];

export default function HowItWorks() {
  const lineRef = useRef(null);
  const inView = useInView(lineRef, { once: true, margin: "-100px" });

  return (
    <section id="nosotros" className="py-24 md:py-32 bg-[#0A0A08]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-[#C8A96E] mb-4">El proceso</p>
          <h2 className="font-serif font-light text-4xl md:text-5xl text-[#F5F0E8]">
            Cómo funciona
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div ref={lineRef} className="hidden md:block absolute top-8 left-0 right-0 h-px bg-[rgba(200,169,110,0.1)]">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              style={{ transformOrigin: "left" }}
              className="h-full bg-gradient-to-r from-[#C8A96E]/0 via-[#C8A96E]/50 to-[#C8A96E]/0"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative flex flex-col md:items-center md:text-center"
              >
                {/* Vertical line (mobile) */}
                {i < steps.length - 1 && (
                  <div className="md:hidden absolute left-5 top-14 bottom-0 w-px bg-[rgba(200,169,110,0.15)]" />
                )}

                {/* Step number circle */}
                <div className="relative z-10 w-12 h-12 border border-[rgba(200,169,110,0.4)] flex items-center justify-center mb-6 bg-[#0A0A08]">
                  <span className="font-serif font-light text-lg text-[#C8A96E]">{step.number}</span>
                </div>

                <h3 className="font-serif font-light text-xl text-[#F5F0E8] mb-1.5 pl-4 md:pl-0">
                  {step.title}
                </h3>
                <p className="text-xs uppercase tracking-widest text-[#C8A96E] mb-3 pl-4 md:pl-0">
                  {step.description}
                </p>
                <p className="text-sm text-[#6B6455] leading-relaxed pl-4 md:pl-0">
                  {step.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
