"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const destinations = [
  {
    name: "Oaxaca",
    state: "Oaxaca",
    category: "Cultura",
    price: "desde $4,200",
    image: "https://images.unsplash.com/photo-1675522306140-cf9eb025365b?auto=format&fit=crop&w=800&q=80",
    large: true,
  },
  {
    name: "San Cristóbal",
    state: "Chiapas",
    category: "Naturaleza",
    price: "desde $3,800",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80",
    large: false,
  },
  {
    name: "Mérida",
    state: "Yucatán",
    category: "Cultura Maya",
    price: "desde $4,500",
    image: "https://images.unsplash.com/photo-1606971220186-e18b2425247b?auto=format&fit=crop&w=800&q=80",
    large: false,
  },
  {
    name: "Guanajuato",
    state: "Guanajuato",
    category: "Colonial",
    price: "desde $3,500",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    large: false,
  },
  {
    name: "Los Cabos",
    state: "Baja California Sur",
    category: "Playa",
    price: "desde $6,800",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80",
    large: false,
  },
];

function DestinationCard({ dest, index }: { dest: typeof destinations[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`relative overflow-hidden group cursor-pointer ${dest.large ? "row-span-2" : ""}`}
    >
      <div
        className="relative w-full overflow-hidden"
        style={{ height: dest.large ? "496px" : "240px" }}
      >
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image
            src={dest.image}
            alt={dest.name}
            fill
            sizes={dest.large ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 25vw"}
            className="object-cover"
          />
        </motion.div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,8,0.85)] via-[rgba(10,10,8,0.2)] to-transparent" />

        {/* Category tag */}
        <div className="absolute top-4 left-4">
          <span className="text-[10px] uppercase tracking-widest bg-[rgba(10,10,8,0.7)] text-[#C8A96E] px-3 py-1 backdrop-blur-sm border border-[rgba(200,169,110,0.3)]">
            {dest.category}
          </span>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className={`font-serif font-light text-[#F5F0E8] leading-tight mb-1 ${dest.large ? "text-3xl" : "text-xl"}`}>
            {dest.name}
          </h3>
          <p className="text-xs uppercase tracking-widest text-[#C8A96E]">
            {dest.state} · {dest.price}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Destinations() {
  const large = destinations[0];
  const rest = destinations.slice(1);

  return (
    <section id="destinos" className="py-24 md:py-32 bg-[#0A0A08]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-[#C8A96E] mb-4">Explora</p>
          <h2 className="font-serif font-light text-4xl md:text-5xl text-[#F5F0E8]">
            Destinos favoritos
          </h2>
        </motion.div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Large card — spans 2 rows on lg */}
          <div className="lg:row-span-2">
            <DestinationCard dest={large} index={0} />
          </div>
          {/* 4 smaller cards in 2x2 on right */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:col-span-2 gap-4">
            {rest.map((dest, i) => (
              <DestinationCard key={dest.name} dest={dest} index={i + 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
