
import React from "react";
import Container from "./layout/Container";
import { Phone, PawPrint } from "lucide-react";

const HERO_IMG = "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=900&q=80";

const Hero = () => (
  <section className="bg-gradient-to-b from-[#D9F8F2] to-[#f6fafb] pb-12 pt-10 md:pt-20 w-full">
    <Container className="flex flex-col md:flex-row items-center gap-5 md:gap-12">
      <div className="w-full md:w-1/2 space-y-7 md:space-y-10 text-center md:text-left animate-fade-in-up">
        <h1 className="text-[2.2rem] md:text-5xl font-heading font-bold leading-tight text-gray-800 mb-2">
          ¡Una digna despedida para tu compañero de vida!
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 font-medium mb-4">
          Servicios funerarios y de cremación para mascotas.
        </p>
        <a
          href="tel:5571076771"
          className="inline-flex items-center gap-3 mx-auto md:mx-0 px-8 py-3 rounded-full font-bold text-lg transition-all shadow border-2 border-[#30C7B5] bg-white/90 text-[#30C7B5] hover:bg-[#30C7B5] hover:text-white focus:ring-2 focus:ring-[#30C7B5] focus:ring-offset-2"
        >
          <PawPrint size={25} className="text-[#30C7B5]" />
          CONTRATA
          <span className="hidden md:inline-block ml-3">
            <Phone size={21} className="inline -mt-1" /> 55 7107 6771
          </span>
        </a>
        <div className="md:hidden flex justify-center text-sm mt-2 font-medium text-gray-500">
          <Phone className="mr-1" size={18}/> 55 7107 6771
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center relative mt-7 md:mt-0">
        <div className="overflow-hidden rounded-3xl border-4 border-[#B1E5F4] shadow-lg bg-white/60">
          <img
            src={HERO_IMG}
            alt="Mascota en ambiente natural"
            className="w-full max-w-sm h-72 object-cover"
            loading="eager"
          />
        </div>
        {/* Efecto decorativo suave */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 blur-3xl w-44 h-16 bg-[#30C7B5]/20 opacity-40 rounded-full pointer-events-none z-0" />
      </div>
    </Container>
  </section>
);

export default Hero;
