"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function Hero() {
  return (
    <section className="relative h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=1600&q=80"
          alt="Guanajuato, México"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[rgba(10,10,8,0.65)]" />
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0A0A08] to-transparent" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={itemVariants}
          className="text-xs uppercase tracking-[0.4em] text-[#C8A96E] mb-6"
        >
          Agencia Boutique · Ciudad de México
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="font-serif font-light text-[clamp(2.8rem,8vw,6rem)] leading-[1.05] text-[#F5F0E8] mb-6"
        >
          Descubre México.{" "}
          <em className="not-italic text-[#C8A96E]">El de verdad.</em>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-[#F5F0E8]/70 font-light max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Agencia de viajes boutique en Ciudad de México. Más de 15 años cubriendo la República.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#destinos"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#destinos")?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center px-8 py-3.5 bg-[#C8A96E] text-[#0A0A08] text-xs uppercase tracking-widest font-medium hover:bg-[#D4B87A] transition-colors duration-300 cursor-pointer"
          >
            Ver destinos
          </motion.a>
          <motion.a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center px-8 py-3.5 border border-[#F5F0E8]/50 text-[#F5F0E8] text-xs uppercase tracking-widest font-medium hover:border-[#F5F0E8] hover:bg-[#F5F0E8]/5 transition-all duration-300 cursor-pointer"
          >
            Hablar con un asesor
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="absolute bottom-8 left-6 z-10 flex items-center gap-2 bg-[rgba(10,10,8,0.75)] backdrop-blur-sm border border-[rgba(200,169,110,0.25)] px-4 py-2"
      >
        <span className="text-xs">📍</span>
        <span className="text-xs uppercase tracking-widest text-[#C8A96E]">CDMX · Viajes nacionales</span>
      </motion.div>
    </section>
  );
}
