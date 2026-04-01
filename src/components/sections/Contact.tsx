"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { submitContactForm } from "@/app/actions/contact";

const schema = z.object({
  nombre: z.string().min(2, "Ingresa tu nombre completo"),
  email: z.string().email("Correo electrónico inválido"),
  telefono: z.string().optional(),
  destino: z.string().min(1, "Selecciona un destino"),
  viajeros: z.string().min(1, "Selecciona número de viajeros"),
  mensaje: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type FormData = z.infer<typeof schema>;

const destinos = [
  "Oaxaca",
  "San Cristóbal de las Casas",
  "Mérida",
  "Guanajuato",
  "Los Cabos",
  "Puerto Escondido",
  "Otro destino",
];

const viajerosOptions = [
  { value: "1", label: "1 viajero" },
  { value: "2", label: "2 viajeros" },
  { value: "3-5", label: "3 a 5 viajeros" },
  { value: "6+", label: "6 o más viajeros" },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const result = await submitContactForm(data);
      if (result.success) {
        setStatus("success");
        reset();
      } else {
        setErrorMessage(result.error || "Algo salió mal. Intenta de nuevo.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("No se pudo enviar el mensaje. Intenta de nuevo.");
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="py-24 md:py-32 bg-[#0D0D0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs uppercase tracking-[0.4em] text-[#C8A96E] mb-4">Hablemos</p>
            <h2 className="font-serif font-light text-4xl md:text-5xl text-[#F5F0E8] mb-6 leading-tight">
              Planea tu próximo viaje con nosotros
            </h2>
            <p className="text-[#6B6455] leading-relaxed mb-10">
              Cuéntanos a dónde quieres ir y con quién. Un asesor te responderá en menos de 24 horas con una propuesta personalizada, sin compromiso.
            </p>

            <div className="space-y-6">
              {[
                { label: "Propuesta en 24 horas", detail: "Sin esperas, sin formularios interminables" },
                { label: "Sin costo de consulta", detail: "El asesoramiento es completamente gratuito" },
                { label: "Soporte durante el viaje", detail: "Un asesor disponible 24/7 mientras viajas" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 mt-2 bg-[#C8A96E] shrink-0" />
                  <div>
                    <p className="text-[#F5F0E8] text-sm font-medium">{item.label}</p>
                    <p className="text-[#6B6455] text-sm">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#141410] border border-[rgba(200,169,110,0.2)] p-8 md:p-10"
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 border-2 border-[#C8A96E] flex items-center justify-center mx-auto mb-6">
                    <svg className="w-7 h-7 text-[#C8A96E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-serif font-light text-2xl text-[#F5F0E8] mb-3">
                    Mensaje enviado
                  </h3>
                  <p className="text-[#6B6455] text-sm leading-relaxed">
                    Hemos recibido tu consulta. Un asesor te escribirá en las próximas 24 horas con una propuesta personalizada.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-xs uppercase tracking-widest text-[#C8A96E] hover:text-[#D4B87A] transition-colors duration-200 cursor-pointer"
                  >
                    Enviar otra consulta
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-5"
                >
                  {/* Nombre */}
                  <div className="space-y-1.5">
                    <Label className="text-xs uppercase tracking-widest text-[#6B6455]">
                      Nombre completo
                    </Label>
                    <Input
                      {...register("nombre")}
                      placeholder="Tu nombre"
                      className="bg-[#0A0A08] border-[rgba(200,169,110,0.2)] text-[#F5F0E8] placeholder:text-[#6B6455]/50 focus-visible:border-[#C8A96E] focus-visible:ring-[#C8A96E]/20 h-10 rounded-none"
                    />
                    {errors.nombre && (
                      <p className="text-xs text-red-400">{errors.nombre.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <Label className="text-xs uppercase tracking-widest text-[#6B6455]">
                      Correo electrónico
                    </Label>
                    <Input
                      {...register("email")}
                      type="email"
                      placeholder="tu@correo.com"
                      className="bg-[#0A0A08] border-[rgba(200,169,110,0.2)] text-[#F5F0E8] placeholder:text-[#6B6455]/50 focus-visible:border-[#C8A96E] focus-visible:ring-[#C8A96E]/20 h-10 rounded-none"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Teléfono */}
                  <div className="space-y-1.5">
                    <Label className="text-xs uppercase tracking-widest text-[#6B6455]">
                      Teléfono{" "}
                      <span className="text-[#6B6455]/50 normal-case tracking-normal">(opcional)</span>
                    </Label>
                    <Input
                      {...register("telefono")}
                      type="tel"
                      placeholder="+52 55 0000 0000"
                      className="bg-[#0A0A08] border-[rgba(200,169,110,0.2)] text-[#F5F0E8] placeholder:text-[#6B6455]/50 focus-visible:border-[#C8A96E] focus-visible:ring-[#C8A96E]/20 h-10 rounded-none"
                    />
                  </div>

                  {/* Destino + Viajeros */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <Label className="text-xs uppercase tracking-widest text-[#6B6455]">
                        Destino de interés
                      </Label>
                      <select
                        {...register("destino")}
                        className="w-full h-10 bg-[#0A0A08] border border-[rgba(200,169,110,0.2)] text-[#F5F0E8] text-sm px-3 outline-none focus:border-[#C8A96E] transition-colors duration-200 cursor-pointer appearance-none"
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B6455'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 10px center", backgroundSize: "16px" }}
                      >
                        <option value="" style={{ backgroundColor: "#141410" }}>Seleccionar...</option>
                        {destinos.map((d) => (
                          <option key={d} value={d} style={{ backgroundColor: "#141410" }}>{d}</option>
                        ))}
                      </select>
                      {errors.destino && (
                        <p className="text-xs text-red-400">{errors.destino.message}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <Label className="text-xs uppercase tracking-widest text-[#6B6455]">
                        Número de viajeros
                      </Label>
                      <select
                        {...register("viajeros")}
                        className="w-full h-10 bg-[#0A0A08] border border-[rgba(200,169,110,0.2)] text-[#F5F0E8] text-sm px-3 outline-none focus:border-[#C8A96E] transition-colors duration-200 cursor-pointer appearance-none"
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B6455'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 10px center", backgroundSize: "16px" }}
                      >
                        <option value="" style={{ backgroundColor: "#141410" }}>Seleccionar...</option>
                        {viajerosOptions.map((o) => (
                          <option key={o.value} value={o.value} style={{ backgroundColor: "#141410" }}>{o.label}</option>
                        ))}
                      </select>
                      {errors.viajeros && (
                        <p className="text-xs text-red-400">{errors.viajeros.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Mensaje */}
                  <div className="space-y-1.5">
                    <Label className="text-xs uppercase tracking-widest text-[#6B6455]">
                      Mensaje
                    </Label>
                    <Textarea
                      {...register("mensaje")}
                      rows={4}
                      placeholder="Cuéntanos sobre tu viaje ideal..."
                      className="bg-[#0A0A08] border-[rgba(200,169,110,0.2)] text-[#F5F0E8] placeholder:text-[#6B6455]/50 focus-visible:border-[#C8A96E] focus-visible:ring-[#C8A96E]/20 rounded-none resize-none"
                    />
                    {errors.mensaje && (
                      <p className="text-xs text-red-400">{errors.mensaje.message}</p>
                    )}
                  </div>

                  {/* Error */}
                  {status === "error" && (
                    <p className="text-xs text-red-400 bg-red-400/10 border border-red-400/20 px-4 py-3">
                      {errorMessage}
                    </p>
                  )}

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={status === "loading"}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full h-12 bg-[#C8A96E] text-[#0A0A08] text-xs uppercase tracking-widest font-medium hover:bg-[#D4B87A] disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-300 flex items-center justify-center gap-3 cursor-pointer"
                  >
                    {status === "loading" ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      "Enviar consulta"
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
