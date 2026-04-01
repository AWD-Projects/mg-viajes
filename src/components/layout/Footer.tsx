import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";

const destinos = ["Oaxaca", "San Cristóbal", "Mérida", "Guanajuato", "Los Cabos", "Puerto Escondido"];
const informacion = ["Quiénes somos", "Cómo funciona", "Testimonios", "Términos y condiciones", "Aviso de privacidad"];

export default function Footer() {
  return (
    <footer className="bg-[#060604] border-t-2 border-[#C8A96E]/30">
      {/* Gold decorative line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C8A96E] to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo + tagline */}
          <div className="md:col-span-1">
            <p className="font-serif text-2xl font-light tracking-[0.25em] text-[#F5F0E8] uppercase mb-3">
              VIAJES<span className="text-[#C8A96E] ml-1">MG</span>
            </p>
            <p className="text-[#6B6455] text-sm leading-relaxed mb-6">
              Agencia de viajes boutique en Ciudad de México. Descubre México de manera auténtica.
            </p>
          </div>

          {/* Destinos */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-[#C8A96E] mb-5">Destinos</h3>
            <ul className="space-y-3">
              {destinos.map((d) => (
                <li key={d}>
                  <a href="#destinos" className="text-sm text-[#6B6455] hover:text-[#F5F0E8] transition-colors duration-200">
                    {d}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Información */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-[#C8A96E] mb-5">Información</h3>
            <ul className="space-y-3">
              {informacion.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-[#6B6455] hover:text-[#F5F0E8] transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-[#C8A96E] mb-5">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPinIcon className="w-4 h-4 text-[#C8A96E] mt-0.5 shrink-0" />
                <span className="text-sm text-[#6B6455]">Ciudad de México, México</span>
              </li>
<li className="flex items-center gap-3">
                <EnvelopeIcon className="w-4 h-4 text-[#C8A96E] shrink-0" />
                <a href="mailto:contacto@viajesimg.mx" className="text-sm text-[#6B6455] hover:text-[#F5F0E8] transition-colors duration-200">
                  contacto@viajesimg.mx
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[rgba(200,169,110,0.1)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#6B6455] uppercase tracking-widest">
            © {new Date().getFullYear()} Viajes MG. Todos los derechos reservados.
          </p>
          <p className="text-xs text-[#6B6455]">
            Diseñado con cuidado · Ciudad de México
          </p>
        </div>
      </div>
    </footer>
  );
}
