"use client";

import { motion } from "framer-motion";
import { HeartIcon, UserGroupIcon, BriefcaseIcon } from "@heroicons/react/24/outline";

const experiences = [
  {
    icon: HeartIcon,
    title: "Viajes en pareja",
    description:
      "Itinerarios románticos e íntimos diseñados para dos. Desde escapadas de fin de semana hasta viajes de bodas y aniversarios. Cada detalle, pensado para crear memorias que duran.",
  },
  {
    icon: UserGroupIcon,
    title: "Viajes en familia",
    description:
      "Aventuras seguras y emocionantes para todos los integrantes. Actividades para niños, comodidad para adultos, y esos momentos especiales que unen a las familias.",
  },
  {
    icon: BriefcaseIcon,
    title: "Grupos y empresas",
    description:
      "Experiencias corporativas que trascienden lo convencional, y viajes de amigos que se convierten en leyendas. Logística impecable para grupos desde 8 personas.",
  },
];

export default function Experiences() {
  return (
    <section id="experiencias" className="py-24 md:py-32 bg-[#0F0F0C]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-[#C8A96E] mb-4">Para cada viajero</p>
          <h2 className="font-serif font-light text-4xl md:text-5xl text-[#F5F0E8]">
            Experiencias
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiences.map((exp, i) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, borderColor: "rgba(200,169,110,0.5)" }}
                className="bg-[#141410] border border-[rgba(200,169,110,0.15)] p-8 md:p-10 group transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 border border-[rgba(200,169,110,0.3)] flex items-center justify-center mb-7 group-hover:border-[#C8A96E] transition-colors duration-300">
                  <Icon className="w-5 h-5 text-[#C8A96E]" />
                </div>
                <h3 className="font-serif font-light text-2xl text-[#F5F0E8] mb-4">
                  {exp.title}
                </h3>
                <p className="text-sm text-[#6B6455] leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
